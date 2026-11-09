# Meridian Noir — Exploded Chronograph

Fictional mechanical chronograph, opening and reassembling through a scroll-linked canvas sequence.

## Guide and substitutions
Following **Complete Workflow: AI Chip Scroll-Animation Landing Page** by noocap, credited to Lindsay Gonzales in guide 07 of [AI Web Design Library](https://raj-microsoft.github.io/ai-web-design-library/); guide 13 duplicates the method. [Full original guide](https://noocap.notion.site/Complete-Workflow-AI-Chip-Scroll-Animation-Landing-Page-341508e99dda80618d88e989402ac749).

Google Whisk/Flow require sign-in; original Three.js procedural geometry plus headless Edge replaces those services. React/Vite replaces Next.js for GitHub Pages static output. Pillow encodes quality-78 WebP; Edge samples the decoded first-frame corner before display and applies that RGB to both the page and canvas; ffmpeg encodes the downloadable transition film. No signup, paid generation or keys used.

## Actual workflow
1. Render assembled and exploded keyframes with Three.js (`scripts/scene.js`).
2. Render transition with headless Edge (`scripts/render.cjs`).
3. Generate **180 actual WebP files** in `public/sequence/`, with an actual-file-count manifest (`scripts/sequence.py`). Expansion, exploded hold, reassembly are baked into the sequence.
4. React/Framer Motion `useScroll` maps 0..1 to 0..179 and draws frames to canvas on scroll ticks.
5. All frames preload behind a spinner; any failure shows Retry and keeps the canvas hidden.
6. Story: 0% centred title, 30% left copy, 60% right copy, 90% centred CTA during reassembly.
7. Static Vite build (`base: '/exploded-chronograph/'`) in `/docs` for Pages.

## Reproduce
```
npm ci
node scripts/render.cjs
python scripts/sequence.py
ffmpeg -y -framerate 25 -i public/sequence/frame_%03d_delay-0.04s.webp -c:v libx264 -pix_fmt yuv420p -crf 20 -movflags +faststart public/assets/transition.mp4
npm run build
node scripts/verify.cjs
```
Python requires Pillow. Rendering/verification uses the standard Windows Edge installation path; adapt for another host. `npm run dev` starts Vite.

## Accessibility and evidence
Contains full image on mobile, touch-action: pan-y, text above canvas, visible focus, native chapter buttons, pause toggle, reduced-motion static/manual mode. Captures and automated checks cover 320, 390, 1440px, forward/reverse scroll, 180-frame loading, all story beats, reduced motion and a simulated broken image.

Background source pixel = RGB(7,9,12); compressed decoded corner = RGB(8,9,13). Runtime sampling makes the page and canvas exactly match that decoded colour. All 180 frames share this corner. The sequence is 3,613,196 bytes; the entire initial load is 4,173,344 uncompressed bytes (about 4.17 MB), before HTTP compression. No lower-resolution mobile set or relaxed loading gate is needed. Assets and typography provenance: `public/assets/provenance.json`. Design notes: `DESIGN.md`. Verification: `.impeccable/review/verification.json`.

This is stylized synthetic geometry, not a production calibre or functional engineering blueprint.
