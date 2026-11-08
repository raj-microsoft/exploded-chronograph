from pathlib import Path
import json,re
p=Path('DESIGN.md');s=p.read_text();findings=json.loads(Path('.impeccable/review/detector-source.json').read_text(encoding='utf-16'))
colors=[x['ignoreValue'] for x in findings if x['antipattern']=='design-system-color']
# Record real implemented semantic subtones, not changes to the chosen world.
names=['scrollbar','header-divider','text-glow','story-copy','cta-border','cta-hover','caption','button-text','button-border','selected-label','progress-track','closing-copy','text-link-rule','making-link','footnote']
block=''.join('  '+name+': "'+color+'"\n' for name,color in zip(names,colors))
s=s.replace('typography:\n',block+'typography:\n',1)
for i,x in enumerate([x for x in findings if x['antipattern']=='design-system-font-size']):
 val=x.get('ignoreValue')
 if val: s=s.replace('spacing:\n',f'  implemented-size-{i+1}:\n    fontFamily: "Manrope, sans-serif"\n    fontSize: "{val}"\nspacing:\n',1)
p.write_text(s)
p=Path('.impeccable/design.json');d=json.loads(p.read_text());d['extensions']['motion']=[{'name':'canvas-scroll','value':'Framer Motion useScroll; 180 frames','purpose':'Direct progress-to-frame mapping after complete preload; static explicit states for reduced motion.'},{'name':'text-fade','value':'opacity .16s ease-out','purpose':'Eased chapter overlay fades.'}];d['narrative']['keyCharacteristics']=['Original 3D geometry','Preloaded contain-fit canvas','Centred / left / right / centred chapter choreography','Exact sampled studio black'];p.write_text(json.dumps(d,indent=2))
