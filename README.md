# keaganhrankin.github.io

Jekyll site, built automatically by GitHub Pages on every push to `main`.
No build step to run yourself.

## Write a post

Create `_posts/YYYY-MM-DD-some-slug.md` — the date prefix is required.

```markdown
---
title: "Ontario's 1.5 million homes? Seems unrealistic."
subtitle: "Optional line shown under the title and in the post list."
---

Markdown. Footnotes, tables, code blocks and images all work.
```

Push, and it appears at `/writing/some-slug/`, on the writing index, on the home
page, and in `/feed.xml`. Nothing else to edit.

`_drafts/example-post.md` shows every element the theme styles. Drafts never
publish — move one into `_posts/` with a date prefix to go live.

## Add a paper

Append to `_data/papers.yml`; drop a thumbnail in `images/papers/`. The
`/papers/` page sorts and groups by year on its own.

```yaml
- year: 2026
  type: journal          # journal | conference
  title: "Paper title"
  authors: "K H Rankin, S Saxe"   # "K H Rankin" is bolded automatically
  venue: "Nature Cities"
  doi: "https://doi.org/..."
  thumb: /images/papers/whatever.png
  links:
    - {label: "Forbes", url: "https://..."}
```

Talks and press: `_data/talks.yml`, `_data/press.yml`.

## Update the CV

Put the new PDF in `files/`, change the `cv_url:` line in `_config.yml`. Every
link on the site follows it.

## Change colors or type

All of it lives in the token block at the top of `assets/css/main.css`, defined
once for light and twice for dark (OS preference, then manual toggle).

## Four things that will silently break the site

- **Never create `.nojekyll`** — it switches the whole build off.
- **Never give `assets/css/main.css` front matter.** It's plain CSS so Jekyll
  copies it verbatim instead of running its Sass pipeline.
- **Never rename it back to `style.css`.** `jekyll-theme-primer`, a
  `github-pages` gem dependency, ships `assets/css/style.scss` — it compiles to
  that exact output path and can silently overwrite your stylesheet with
  Primer's.
- **Never add a site-wide default layout** in `_config.yml`. A
  `scope: {path: ""}` default also catches the XML from `jekyll-feed` and
  `jekyll-sitemap` and wraps it in HTML.
- **Paths are case-sensitive.** `images/icons/C_line_512.png` and
  `images/informal_headshot.JPG` both have capitals that matter.

## Optional local preview

```
winget install RubyInstallerTeam.RubyWithDevKit.3.3
gem install bundler
bundle install && bundle exec jekyll serve --livereload
```

Pause OneDrive sync while serving — it can lock files mid-build.
