# Weiyang Astro Theme

Weiyang is a quiet personal blog theme built with Astro 7. It is designed for long-term writing, short moments, archives, friends, comments and a restrained personal homepage.

中文名：未央

## Features

- Personal homepage with logo, site title, subtitle, latest moment and latest posts.
- Minimal icon-only navigation with hover titles.
- Font Awesome 6 navigation icons and enlarged footer icons.
- Three color themes with one-click switching: paper, pine and dark.
- Posts, moments, archive, friends, about, category and tag pages.
- Clickable post categories and tags with generated taxonomy pages.
- Archive page grouped by month, with collapsible groups.
- Homepage update timeline with daily update bars and hover popovers.
- Timeline includes posts, moments and latest comments.
- Post page with right-side table of contents.
- Floating post actions for back-to-top and jump-to-comments.
- Comment section layout with required nickname/email and optional website field.
- Friends page with site name, description, URL, feed URL and latest feed items.
- RSS output route.
- LXGW WenKai / Xiawu Feikai style font stack.
- Centralized site data in `src/data/site.ts`.

## Theme Name

The theme is named **Weiyang**.

The name comes from “未央”, meaning unfinished, ongoing and open-ended. It fits a personal site that keeps collecting notes, memories and writing over time.

## Quick Start

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```text
src/
  data/
    site.ts              Site, navigation, posts, moments, comments and projects
    friends.ts           Friend links and feed samples
  layouts/
    BaseLayout.astro     Shared layout, navigation, search, theme switcher and footer
  pages/
    index.astro          Homepage
    about.astro          About page with projects
    archive.astro        Archive and taxonomy overview
    friends.astro        Friend links page
    moments.astro        Moments page
    posts/[slug].astro   Post detail page
    categories/[category].astro
    tags/[tag].astro
    rss.xml.ts
  styles/
    global.css           Theme colors, layout and component styling
  utils/
    taxonomy.ts          Category and tag URL helpers
public/
  assets/logo.png        Site logo
  favicon.ico
```

## Customization

Edit site metadata, navigation, posts, moments and social links in:

```text
src/data/site.ts
```

Edit friend links and feed entries in:

```text
src/data/friends.ts
```

Replace the logo:

```text
public/assets/logo.png
```

Adjust colors and layout:

```text
src/styles/global.css
```

The theme colors are controlled by CSS variables under:

```css
:root[data-theme="paper"]
:root[data-theme="pine"]
:root[data-theme="dark"]
```

## Content Model

The starter currently keeps posts and moments in TypeScript data files so the theme is easy to inspect and customize.

Suggested next step for a production blog:

- Move posts into Astro content collections.
- Generate the post table of contents from Markdown headings.
- Connect the comment form to Waline, Twikoo or a custom API.
- Fetch friend feed updates from real RSS or Atom feeds.

## License

No license has been added yet. Add one before publishing or reusing publicly.
