---
created: 2026-02-17 06:44
modified: 2026-02-17 07:29
tags:
  - DevOps
  - PKM
title: Medir visitas en mi sitio Quartz
aliases: Medir visitas en mi sitio Quartz
publish: true
folder: DevOps
---

- Abrí una cuenta en Unami
	- https://cloud.umami.is/signup
- Agregué un unico sitio bajo el dominio `carloslramirez.com`
- Me genero un ID
- Para el sitio de `/notes/  agregué esto en el `quartz.config.ts` 
```typescript
analytics: {
  provider: "umami",
  websiteId: "aqui-va-el-id",
  host: "https://cloud.umami.is",
}
```
- Para el sitio de `/blog` creé este archivo `blog/layouts/partials/extend_head.html` y agregué esto:

```html
<!-- Umami Analytics -->
<script 
  defer 
  src="https://cloud.umami.is/script.js" 
  data-website-id="aqui-va-el-id">
</script>
```

- Dashboard para ver las visitas en tiempo real:

https://cloud.umami.is/analytics/us/websites/f4f03d75-f1ec-47f9-ad02-c4fd06d4400b




---
## Links:
*References*a



