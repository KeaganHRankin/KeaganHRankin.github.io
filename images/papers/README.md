# Paper thumbnails

The `.svg` files here are **placeholders** — neutral abstract sketches, not real
figures. They exist so `/papers/` never shows a broken image.

## Replacing one with a real figure

Two ways, either is fine:

1. **Keep the filename.** Drop a `climate-limits.png` next to
   `climate-limits.svg` and change that paper's `thumb:` in
   `_data/papers.yml` to the `.png`.
2. **Use any filename.** Add the file here and point `thumb:` at it.

Omitting `thumb:` entirely falls back to `placeholder.svg`.

## What works well

- **4:3 aspect ratio.** The theme crops to 4:3 on desktop and 16:9 on narrow
  screens with `object-fit: cover`, so keep the interesting part near the
  centre.
- **~800 × 600 px** is plenty — it renders at 150 px wide.
- **Under ~150 KB.** These load on a page with six of them.
- A cropped detail of one panel usually reads better at 150 px than a whole
  multi-panel figure, which turns to mush.
- PNG for charts and line art, JPG for photographs.

## Current mapping

| Paper | Thumbnail | Status |
| --- | --- | --- |
| Nature Cities 2026 — climate limits | `climate-limits.svg` | placeholder |
| EST 2024 — FIG model | `/images/starts_forecast.png` | **existing image, confirm it's the right one** |
| JIE 2024 — missing middle | `missing-middle.svg` | placeholder |
| ERIS 2024 — construction sector | `construction-sector.svg` | placeholder |
| ISIE 2023 — Ontario to 2030 | `ontario-2030.svg` | placeholder |
| CSCE 2022 — modular supply chain | `modular-supply.svg` | placeholder |
