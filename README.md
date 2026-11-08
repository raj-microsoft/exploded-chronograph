# Meridian Noir — Exploded Chronograph

Original fictional mechanical watch, built as a scroll-linked disassembly study.

## Guide and substitution
Following **AI Chip Scroll-Animation Landing Page**, shared by Lindsay Gonzales, guide 07 in [AI Web Design Library](https://raj-microsoft.github.io/ai-web-design-library/). [Workflow link](https://shorturl.at/HJtYN). Guide 13 duplicates the same method (shared by Rourke Sefton-Minns).

Google Whisk/Flow require sign-in, so this project replaces them with original procedural Three.js geometry and headless Edge rendering. Assembled frame + exploded frame → 101-frame transition → scroll-linked playback. ffmpeg also generates a transition MP4. No sign-in, paid generation or keys used.

## Reproduce
```
npm ci
node scripts/render.cjs
ffmpeg -y -framerate 25 -i .renders/%03d.png -c:v libwebp -quality 83 -start_number 0 assets/frames/%03d.webp
ffmpeg -y -framerate 25 -i .renders/%03d.png -c:v libx264 -pix_fmt yuv420p -crf 20 -movflags +faststart assets/transition.mp4
node scripts/build.cjs
node scripts/verify.cjs
```
Copy `.renders/000.png` and `.renders/100.png` to `assets/image-1.png` and `assets/image-2.png`. Rendering uses the standard Windows Edge installation path; adapt it for other hosts. GitHub Pages serves `/docs` on `main`.

## Controls and accessibility
Scroll in either direction, choose one of seven layer stops, or pause the animation. Reduced motion starts paused and condenses the scroll section. All controls are native keyboard-accessible elements with visible focus. Self-hosted Manrope includes its SIL OFL license. All watch artwork is synthetic; this is not a real product or watchmaking blueprint.

Asset provenance: `assets/provenance.json`. Design notes: `DESIGN.md`. Verification evidence: `.impeccable/review/verification.json`.
