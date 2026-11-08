import * as THREE from '/node_modules/three/build/three.module.js';
const scene=new THREE.Scene();scene.background=new THREE.Color('#07090c');
const camera=new THREE.PerspectiveCamera(33,1,0.1,100);camera.position.set(6.6,8.5,12);camera.lookAt(0,0,0);
const renderer=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});renderer.setSize(1000,1000);renderer.setPixelRatio(1);renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.6;document.body.appendChild(renderer.domElement);
scene.add(new THREE.AmbientLight(0xb7c9e6,2));
function light(color,intensity,x,y,z){const l=new THREE.DirectionalLight(color,intensity);l.position.set(x,y,z);scene.add(l)}light(0xdde8ff,5,4,8,7);light(0x74a7ff,7,-5,2,-3);light(0xffffff,3,3,-4,4);
const mat=(color,metalness=.7,roughness=.28)=>new THREE.MeshStandardMaterial({color,metalness,roughness});
const black=mat(0x151b25,.8,.36),silver=mat(0x86909d,.85,.23),dark=mat(0x070b12,.25,.5),gold=mat(0xb69b69,.7,.28),blue=new THREE.MeshStandardMaterial({color:0x68b4ff,emissive:0x286caa,emissiveIntensity:.6,metalness:.5,roughness:.24});
const root=new THREE.Group();scene.add(root);root.rotation.z=-.23;
const parts=[];function layer(y,spread){let g=new THREE.Group();g.position.y=y;g.userData={y,spread};parts.push(g);root.add(g);return g}
function mesh(g,geo,m,x=0,y=0,z=0){const o=new THREE.Mesh(geo,m);o.position.set(x,y,z);g.add(o);return o}
function cyl(g,r,h,m,x=0,y=0,z=0){return mesh(g,new THREE.CylinderGeometry(r,r,h,96),m,x,y,z)}
function ring(g,r,t,m,y=0,x=0,z=0){const o=mesh(g,new THREE.TorusGeometry(r,t,12,128),m,x,y,z);o.rotation.x=Math.PI/2;return o}
function box(g,w,h,d,m,x=0,y=0,z=0){return mesh(g,new THREE.BoxGeometry(w,h,d),m,x,y,z)}
function screw(g,x,z,y){cyl(g,.065,.045,silver,x,y,z);box(g,.082,.008,.015,dark,x,y+.027,z)}
function gear(g,x,z,r,teeth){cyl(g,r*.86,.11,gold,x,0,z);for(let i=0;i<teeth;i++){let a=i/teeth*Math.PI*2;let b=box(g,r*.22,.12,r*.2,gold,x+Math.sin(a)*r,0,z+Math.cos(a)*r);b.rotation.y=a}cyl(g,r*.56,.125,black,x,0,z);ring(g,r*.57,.025,silver,.07,x,z);cyl(g,.07,.17,silver,x,0,z);for(let i=0;i<5;i++){let a=i/5*Math.PI*2;let b=box(g,.045,.07,r*1.12,gold,x,.03,z);b.rotation.y=a}}
const back=layer(-.6,-2.0);cyl(back,1.52,.16,black);ring(back,1.44,.055,silver,.1);for(let i=0;i<6;i++)screw(back,Math.sin(i*Math.PI/3)*1.3,Math.cos(i*Math.PI/3)*1.3,.12);
const movement=layer(-.37,-1.05);cyl(movement,1.36,.1,black);ring(movement,1.3,.025,blue,.07);for(let i=0;i<7;i++)screw(movement,Math.sin(i)*1.17,Math.cos(i)*1.17,.09);
const gears=layer(-.2,-.25);gear(gears,-.52,-.22,.47,18);gear(gears,.34,-.59,.32,16);gear(gears,.58,.28,.4,20);gear(gears,-.2,.69,.25,14);
// Visible helical mainspring, built from a mathematical spiral, not a texture.
const spring=layer(-.1,.37);const pts=[];for(let i=0;i<700;i++){const a=i/699*Math.PI*18,r=.035+i/699*.45;pts.push(new THREE.Vector3(Math.cos(a)*r-.4,.02,Math.sin(a)*r+.2))}mesh(spring,new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts),700,.014,5,false),silver);ring(spring,.51,.025,gold,0,-.4,.2);
const bridge=layer(.03,.85);for(let i=0;i<3;i++){let b=box(bridge,.38,.09,1.9,black,-.6+i*.6,0,0);b.rotation.y=.35;screw(bridge,-.6+i*.6,-.7,.07);screw(bridge,-.6+i*.6,.7,.07)}
const dial=layer(.19,1.53);cyl(dial,1.39,.085,dark);ring(dial,1.34,.025,blue,.05);for(let i=0;i<60;i++){let a=i/60*Math.PI*2;let b=box(dial,i%5===0?.045:.018,.019,i%5===0?.19:.075,i%5===0?silver:gold,Math.sin(a)*1.2,.055,Math.cos(a)*1.2);b.rotation.y=a}
for(const [x,z] of [[-.58,.12],[.58,.12],[0,-.6]]){cyl(dial,.31,.025,black,x,.06,z);ring(dial,.29,.012,silver,.08,x,z);for(let i=0;i<12;i++){let a=i*Math.PI/6;let b=box(dial,.009,.012,.04,silver,x+Math.sin(a)*.25,.09,z+Math.cos(a)*.25);b.rotation.y=a}let b=box(dial,.018,.02,.22,blue,x,.105,z-.065);b.rotation.y=.7}
const hands=layer(.32,2.13);let h=box(hands,.065,.03,.87,silver,0,0,-.32);h.rotation.y=-.7;h.position.x=.23;h=box(hands,.043,.045,1.17,silver,-.34,.04,-.35);h.rotation.y=.75;h=box(hands,.014,.025,1.78,blue,0,.07,0);h.rotation.y=1.2;cyl(hands,.10,.1,gold,0,.07,0);
const casing=layer(.03,2.7);ring(casing,1.56,.15,black);ring(casing,1.57,.045,silver,.14);ring(casing,1.43,.035,silver,.14);for(const x of [-1,1])for(const z of [-1,1]){let lug=box(casing,.28,.25,.55,black,x*.99,-.06,z*1.44);lug.rotation.y=x*z*-.27;screw(casing,x*.99,z*1.4,.08)}
const crown=layer(0,.35);crown.userData.crown=true;let c=cyl(crown,.23,.34,silver,1.87,0,0);c.rotation.z=Math.PI/2;for(let i=0;i<24;i++){let a=i/24*Math.PI*2;box(crown,.32,.022,.022,black,1.87,Math.sin(a)*.23,Math.cos(a)*.23)}for(let z of [-.65,.65]){let p=cyl(crown,.13,.3,black,1.73,0,z);p.rotation.z=Math.PI/2}
window.renderFrame=(p)=>{let e=p*p*(3-2*p);for(const g of parts){g.position.y=g.userData.y+g.userData.spread*e;if(g.userData.crown)g.position.x=e*.7}root.rotation.y=-.08+e*.18;root.position.y=-e*.3;camera.position.set(6.6+e*1.3,8.5+e*1.3,12+e*2.7);camera.lookAt(0,0,0);renderer.render(scene,camera)};window.renderFrame(0);window.ready=true;
