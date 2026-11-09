from pathlib import Path
import shutil, json
from PIL import Image
out=Path('public/sequence');out.mkdir(parents=True,exist_ok=True)
n=180
for i in range(n):
 p=i/(n-1)
 t=0 if p<=.18 else ((p-.18)/.40 if p<.58 else (1 if p<=.64 else max(0,1-(p-.64)/.31)))
 src=Path('.renders')/(str(round(t*100)).zfill(3)+'.png')
 im=Image.open(src).crop((220,150,850,850)).resize((720,800),Image.Resampling.LANCZOS)
 im.save(out/f'frame_{i:03d}_delay-0.04s.webp',quality=78,method=6)
files=sorted(x.name for x in out.glob('*.webp'))
(out/'manifest.json').write_text(json.dumps({'count':len(files),'files':files,'background':'#07090c'}))
print('Actual frame count:',len(files),'sampled RGB:',Image.open('assets/image-1.png').getpixel((0,0)))
shutil.copytree('assets/fonts','public/assets/fonts',dirs_exist_ok=True)
for name in ['image-1.png','image-2.png']:shutil.copy2('assets/'+name,'public/assets/'+name)
