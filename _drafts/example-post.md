---
title: "How posts on this site are styled"
subtitle: "A reference for every element the theme knows how to render."
# math: true      # uncomment to load MathJax on this post only
---

This file lives in `_drafts/`, so it never appears on the live site. It exists
as a reference: every element below is styled by the theme, so you can see what
you have to work with.

**To publish a post**, put a Markdown file in `_posts/` named
`YYYY-MM-DD-some-slug.md` — the date prefix is required — with front matter
like this:

```yaml
---
title: "Ontario's 1.5 million homes? Seems unrealistic."
subtitle: "One line that shows up under the title and in the post list."
---
```

That's it. No layout line needed (posts get one automatically), no HTML, and no
touching the index — the post appears at `/writing/some-slug/`, on the writing
index, in the "Recent writing" block on the home page, and in `/feed.xml`.

## Headings

A second-level heading looks like the one above. Third-level headings are
smaller and sit closer to the text that follows.

### A third-level heading

Body text is set in a serif at a capped measure, because a line of prose stops
being readable somewhere around 75 characters no matter how wide your monitor
is.

## Emphasis, links and code

Regular text, *italic*, **bold**, `inline code`, and a
[link to something](https://doi.org/10.1038/s44284-025-00379-8). Long bare URLs
wrap rather than pushing the layout sideways on a phone.

Footnotes work with no setup.[^1] They collect at the bottom of the post with a
link back to where you were.

[^1]: Like this. Useful for the caveat that would otherwise eat a paragraph.

## Lists

- A bulleted item
- Another one, with a nested list:
  - Nested item
  - Another nested item
- A third item

1. Numbered lists work too
2. Second item
3. Third item

## Quotes

> A blockquote gets a hairline rule on the left and slightly softer text. Good
> for a passage you're responding to.
>
> Multiple paragraphs are fine.

## Code blocks

Code blocks scroll horizontally inside themselves, so a long line never makes
the whole page scroll sideways:

```python
import numpy as np

def embodied_intensity(mass_by_material, factors):
    """kg CO2e per m2 of floor area."""
    return sum(mass_by_material[m] * factors[m] for m in mass_by_material)
```

## Tables

Tables also scroll on their own when they're too wide for the column.

| Building form | Embodied GHG (kg CO₂e/m²) | Notes                  |
| ------------- | ------------------------- | ---------------------- |
| Single family | 340                       | Highest per resident   |
| Missing middle| 280                       | Best trade-off         |
| Mid-rise      | 310                       | Concrete-dominated     |

## Images

Wrap an image in a figure to get a caption:

<figure>
  <img src="/images/starts_forecast.png" alt="Projected housing starts in Ontario to 2030">
  <figcaption>Captions are small, centred and grey. Images never overflow their column.</figcaption>
</figure>

A plain Markdown image works too: `![alt text](/images/whatever.png)`.

## Math

Add `math: true` to the front matter and MathJax loads — only on posts that ask
for it, so everything else stays dependency-free.

Use `$$` for **both** inline and display math. Kramdown recognises either and
rewrites them to the delimiters MathJax is configured for, which also keeps the
markdown parser from eating underscores inside your equations.

Display math — `$$` on its own lines:

$$
\text{GHG}_{\text{total}} = \sum_{m} M_m \cdot \varepsilon_m
$$

Inline math — `$$` on the same line: the intensity $$\varepsilon_m$$ is per
kilogram.

Two things that do **not** work, so don't reach for them:

- Single dollar signs (`$x$`). Deliberately not a delimiter here, so that a
  sentence about $25,000 in funding doesn't get mangled into math.
- Literal `\(` and `\)` in your Markdown. Kramdown reads the backslash as an
  escape and strips it before MathJax ever sees the delimiter.
