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
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(60px,6.6vw,96px)"
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
spacing:
  small: "12px"
  medium: "24px"
  large: "36px"
components:
  motion-button:
    backgroundColor: "transparent"
    textColor: "#d0d9e3"
    padding: "7px 12px"
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
A full-height sticky object stage uses a wide left copy area and right-hand object on desktop. At 800px the copy moves above the object, navigation simplifies, and the layer rail wraps. Closing and making sections reflow from two columns to one.
## Elevation & Depth
No interface shadows. Depth comes from the original Three.js render, its controlled rim lighting and separated components.
## Shapes
Square, transparent controls; fine dividers; no cards. SVG line icons maintain a consistent light stroke.
## Components
Layer rail buttons have an active blue top border and aria-pressed state. Motion toggle pauses scroll updates. Reduced motion defaults to static imagery and allows explicit frame selection. Links and buttons use visible 2px focus rings and 6px offset.
## Do's and Don'ts
- Do keep the object visible before any animation begins.
- Do keep imagery synthetic and clearly disclosed.
- Do use a single scroll-linked motion grammar.
- Don't add commercial performance claims to this fictional watch.
- Don't hide content behind entrance animations.
