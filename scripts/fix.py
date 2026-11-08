from pathlib import Path
p=Path('assets/frames')
if not (p/'000.webp').exists():
 for f in sorted(p.glob('*.webp')): f.rename(p/(str(int(f.stem)-1).zfill(3)+'.webp'))
p=Path('style.css');s=p.read_text();s=s.replace('font-size:10px','font-size:11px').replace('font-size:9px','font-size:11px').replace('font-size:8px','font-size:11px')
s+='\n@media(max-width:800px){.visual{width:145vw;height:145vw;right:-22.5vw;top:56%}.image-note{display:none}.layer-rail{column-gap:20px}.layer-rail button{min-height:36px}}\n.link-arrow{width:12px;height:12px;fill:none;stroke:currentColor;stroke-width:1.2}\n'
p.write_text(s)
p=Path('index.html');s=p.read_text(encoding='utf-8');s=s.replace('<span aria-hidden="true">↗</span>','<svg class="link-arrow" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M3 3h10v10"/></svg>').replace('Back to the surface ↑','Back to the surface');p.write_text(s,encoding='utf-8')
