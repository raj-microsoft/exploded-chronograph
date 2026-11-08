---
name: Meridian Noir
description: A cinematic mechanical chronograph study
colors:
  studio: "#07090c"
  raised-surface: "#10151c"
  porcelain: "#edeff2"
  muted: "#aab4c3"
  rim-blue: "#a2c9f3"
  divider: "#303741"
  scrollbar: "#506478"
  header-divider: "#282d35"
  text-glow: "#9dc9fa20"
  story-copy: "#bac6d6"
  cta-border: "#839db8"
  cta-hover: "#15202e"
  caption: "#9aa8ba"
  button-text: "#d0d9e3"
  button-border: "#445362"
  selected-label: "#d6e8fc"
  progress-track: "#1a222d"
  closing-copy: "#b4bfce"
  text-link-rule: "#6f8092"
  making-link: "#d5e5f7"
  footnote: "#97a4b7"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(54px,6.6vw,96px)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "43px"
    fontWeight: 400
    lineHeight: 1.13
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    lineHeight: 1.6
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "11px"
  implemented-size-1:
    fontFamily: "Manrope, sans-serif"
    fontSize: "12px"
  implemented-size-2:
    fontFamily: "Manrope, sans-serif"
    fontSize: "15px"
  implemented-size-3:
    fontFamily: "Manrope, sans-serif"
    fontSize: "54px"
  implemented-size-4:
    fontFamily: "Manrope, sans-serif"
    fontSize: "56px"
  implemented-size-5:
    fontFamily: "Manrope, sans-serif"
    fontSize: "13px"
  implemented-size-6:
    fontFamily: "Manrope, sans-serif"
    fontSize: "40px"
  implemented-size-7:
    fontFamily: "Manrope, sans-serif"
    fontSize: "28px"
  implemented-size-8:
    fontFamily: "Manrope, sans-serif"
    fontSize: "14px"
  implemented-size-9:
    fontFamily: "Manrope, sans-serif"
    fontSize: "42px"
  implemented-size-10:
    fontFamily: "Manrope, sans-serif"
    fontSize: "36px"
  implemented-size-11:
    fontFamily: "Manrope, sans-serif"
    fontSize: "44px"
spacing:
  small: "12px"
  medium: "24px"
  large: "36px"
components:
  motion-button:
    backgroundColor: "transparent"
    textColor: "#d0d9e3"
    padding: "9px 14px"
---
# Design System: Meridian Noir
## Overview
**Creative North Star: "Cinematic disassembly study"**
An object in a black studio, revealed with precision. The interface stays quiet so the moving mechanical architecture owns the experience. Descriptive language is inferred from the explicit art-direction brief, not an additional user interview.
## Colors
Studio black and porcelain carry the page. Rim blue marks focus, selected layers, and metal illumination. A raised dark surface separates the closing passage.
## Typography
Self-hosted Manrope gives the display a light, wide, precise voice. Large text is regular weight; body text uses the same family. Functional text never falls below 11px.
## Layout
A full-height sticky object stage uses a centred title at 0%, left copy at 30%, right copy at 60%, and centred CTA at 90%. The canvas contains the full image and is always behind text. At 800px the text stays above the object and rail labels can wrap. Closing and making sections reflow from two columns to one.
## Elevation & Depth
No interface shadows. Depth comes from the original Three.js render, its controlled rim lighting and separated components.
## Shapes
Square, transparent controls; fine dividers; no cards. SVG line icons maintain a consistent light stroke.
## Components
Four chapter rail buttons have an active blue top border and aria-pressed state. Framer Motion useScroll maps progress to 180 out-and-back frames drawn on canvas. All frames load before the scene appears; a spinner and recovery state cover loading/errors. Eased opacity fades and subtle offset text glow follow the guide. Motion toggle pauses scroll updates. Reduced motion defaults to static imagery and allows explicit frame selection. Links and buttons use visible 2px focus rings and 6px offset.
## Do's and Don'ts
- Do keep the object visible before any animation begins.
- Do keep imagery synthetic and clearly disclosed.
- Do use a single scroll-linked motion grammar.
- Don't add commercial performance claims to this fictional watch.
- Don't hide content behind entrance animations.
