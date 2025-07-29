---
id: 20250729T1549-my-quartz-customization
aliases:
  - My Quartz Customization
tags:
  - digital-garden
  - quartz
  - seed
comments: true
created: 2025-07-29T15:49:37
modified: 2025-07-29T15:52:45-06:00
publish: true
title: My Quartz Customization
---

These are the customization I have made on my quartz implementation for my digital garden

## Customized CSS style for the home page

This code in the `/quartz/styles/custom.scss` centers the body text and the headers only for the page(s) which has the `cssclasses: home` in the frontmatter.

```css
/* Centrar solo el contenido principal del home */
body:has(#quartz-body > div.center > article.home)
  #quartz-body
  > div.center
  > article.home {
  text-align: center;
  margin: 0 auto;
  max-width: 700px;

  /* Centrar títulos dentro del artículo */
  h1,
  h2,
  h3 {
    text-align: center;
  }
}

/* Centrar popover-hint solo en páginas con cssclasses: home */
body:has(#quartz-body > div.center > article.home) .popover-hint {
  text-align: center;
}

/* Centrar título dentro del popover */
body:has(#quartz-body > div.center > article.home)
  .popover-hint
  .article-title {
  text-align: center;
}
```

## Comments on pages

[[20250527T1800-how-to-integrate-giscus-comments-in-quartz-v4|How to Integrate Giscus Comments in Quartz v4]]

---
