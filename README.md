# Meridian Noir — Exploded Chronograph

Fictional photorealistic chronograph opening and reassembling through a scroll-linked canvas.

## Guide and AI provenance
Following [Complete Workflow: AI Chip Scroll-Animation Landing Page](https://noocap.notion.site/Complete-Workflow-AI-Chip-Scroll-Animation-Landing-Page-341508e99dda80618d88e989402ac749) by noocap (library guide 07 / 13).

Start and end references were generated with **ChatGPT image generation**. **Gemini Veo** generated a ten-second film (the opening eight seconds are used for the scroll transition) from the start image using the owner's authorized browser session in a new chat. This interface exposed no last-frame control: the generated ending is not an exact match to the supplied end reference. All imagery is AI-generated, not a photograph of a manufactured watch or an engineering blueprint.

## Playback
- 180 WebP files, 880 × 496, quality 78; sequence payload **3,165,016 bytes**.
- Framer Motion `useScroll` maps progress to the canvas frame index after every image has preloaded.
- 0% title, 30% left copy, 60% exploded-view right copy, 90% reassembly CTA. Film reverses during the final section.
- Edge feathering unifies the studio background. Existing browser-decoded first-frame sampler sets page and canvas background before revealing the experience.
- Contain-fit mobile canvas, pause, chapters, reduced motion, retry state and keyboard access retained.

The original procedural rendering scripts remain as historical source, but are **not used by the current assets**. The production media provenance is `public/assets/provenance.json`.

## Build and test
```
npm ci
npm run build
node scripts/verify.cjs
node scripts/verify.cjs https://raj-microsoft.github.io/exploded-chronograph/
```
Vite emits the GitHub Pages site to `docs/`. Verification uses headless Microsoft Edge at 320, 390 and 1440 pixels; screenshots and JSON results are under `.impeccable/review/`. Fonts: Manrope, SIL OFL.
