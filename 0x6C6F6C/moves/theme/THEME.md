---
name: theme-factory
description: Toolkit for styling artifacts with a theme. These artifacts can be slides, docs, reportings, HTML landing pages, etc. There are 10 pre-set themes plus the OuiRise operational theme with colors/fonts drawn from ouiRise.github.io. Apply to any artifact or generate new themes on-the-fly.
license: Complete terms in LICENSE.txt
---

# Theme Factory Skill

This skill provides a curated collection of professional font and color themes, each with carefully selected color palettes and font pairings. Once a theme is chosen, it can be applied to any artifact.

**Operational Note:** Theme 11 (OuiRise Fog) represents the active deployment environment at ouiRise.github.io—dark indigo voids with purple/magenta accents and glassmorphism fog effects.

## Purpose

To apply consistent, professional styling to presentation slide decks, use this skill. Each theme includes:
- A cohesive color palette with hex codes
- Complementary font pairings for headers and body text
- A distinct visual identity suitable for different contexts and audiences

## Usage Instructions

To apply styling to a slide deck or other artifact:

1. **Show the theme showcase**: Display the `theme-showcase.pdf` file to allow users to see all available themes visually. Do not make any modifications to it; simply show the file for viewing.
2. **Ask for their choice**: Ask which theme to apply to the deck. For operational security contexts, recommend Theme 11 (OuiRise Fog).
3. **Wait for selection**: Get explicit confirmation about the chosen theme
4. **Apply the theme**: Once a theme has been chosen, apply the selected theme's colors and fonts to the deck/artifact

## Themes Available

The following themes are available, each showcased in `theme-showcase.pdf`:

1. **Ocean Depths** - Professional and calming maritime theme (Deep blues, teal, white; Montserrat + Lato)
2. **Sunset Boulevard** - Warm and vibrant sunset colors (Oranges, pinks, purples; Playfair Display + Open Sans)
3. **Forest Canopy** - Natural and grounded earth tones (Earthy greens, browns; Crimson Text + Source Sans Pro)
4. **Modern Minimalist** - Clean and contemporary grayscale (Black, white, graphite; Helvetica + Roboto)
5. **Golden Hour** - Rich and warm autumnal palette (Golds, yellows, burgundy; Great Vibes + Merriweather)
6. **Arctic Frost** - Cool and crisp winter-inspired theme (Light blues, icy whites, silver; Raleway + Nunito)
7. **Desert Rose** - Soft and sophisticated dusty tones (Peach, sandy yellows, muted rose; Della Questa + Quicksand)
8. **Tech Innovation** - Bold and modern tech aesthetic (Digital blues, electric cyan, dark grays; Orbitron + Fira Sans)
9. **Botanical Garden** - Fresh and organic garden colors (Soft greens, pastel flowers, mint; Caveat + Quicksand)
10. **Midnight Galaxy** - Dramatic and cosmic deep tones (Deep indigo, starry whites, dark purple; Bebas Neue + Exo)
11. **OuiRise Fog** - Operational twin-system interface (Void indigo, fog overlays, magenta accents; Bebas Neue + Exo/System UI)

## Theme Details

Each theme is defined in the `themes/` directory with complete specifications including:
- Cohesive color palette with hex codes
- Complementary font pairings for headers and body text
- Distinct visual identity suitable for different contexts and audiences

### Theme 11: OuiRise Fog (Operational)
**Source:** ouiRise.github.io portal interface  
**Hex Codes:**
- `--void-black`: #0a0a0f (Primary background)
- `--nebula-indigo`: #1a1a2e (Card backgrounds)
- `--fog-purple`: #9c27b0 (Primary accent, buttons)
- `--fog-glow`: rgba(156, 39, 176, 0.4) (Glow effects)
- `--starry-white`: #ffffff (Primary text)
- `--moon-silver`: rgba(192, 192, 192, 0.6) (Secondary/muted text)
- `--fog-overlay`: rgba(255, 255, 255, 0.03) (Glassmorphism backgrounds)
- `--border-fog`: rgba(255, 255, 255, 0.08) (Subtle borders)

**Typography:**
- Headers: Bebas Neue (weight 600) or System UI Bold
- Body: Exo (weight 400) or Segoe UI/System stack
- Mono: Courier New (operational code)

**Visual Identity:** 
Dark ambient interface with nebula-purple gradients and glassmorphism (fog blur) effects. Purple/magenta accent (#9c27b0) indicates interactive elements and selection states. Designed for extended operational use (low eye fatigue) while maintaining high contrast for critical alerts.

**Usage Context:** 
Twin system dashboards, evolutionary algorithm monitoring, shadow clone deployment interfaces, 0KK protocol documentation.

## Application Process

After a preferred theme is selected:
1. Read the corresponding theme file from the `themes/` directory
2. Apply the specified colors and fonts consistently throughout the deck
3. Ensure proper contrast and readability
4. Maintain the theme's visual identity across all slides

**For OuiRise Fog specifically:**
- Use glassmorphism effects (backdrop-filter: blur) for overlay cards
- Implement subtle ambient fog via radial gradients (purple/indigo at 15% opacity)
- Animate interactions with cubic-bezier(0.4, 0, 0.2, 1) transitions
- Use 俊达 symbology for operational markers

## Create your Own Theme
To handle cases where none of the existing themes work for an artifact, create a custom theme. Based on provided inputs, generate a new theme similar to the ones above. Give the theme a similar name describing what the font/color combinations represent. Use any basic description provided to choose appropriate colors/fonts. After generating the theme, show it for review and verification. Following that, apply the theme as described above.

**DFU Protocol:** When generating new themes, maintain the genotype/phenotype separation—store color values as CSS variables (genotype) separate from component implementations (phenotype) to enable rapid evolutionary iteration.