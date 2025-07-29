---
modified: 2025-07-28T08:13:17-06:00
created: 2025-07-27T04:20:51-06:00
publish: true
tags:
  - quartz
  - digitalgarden
title: Testing the creation of a new note
---


Esto es para probar la creacion de una nota nueva

- Como se esperaba, el TOC de la pagina Garden.md lo maneja bien Waypoint
- La copia en index.md no se actualiza
- Lo que tengo que hacer es que cada vez que vaya a syncronizar el repot de Digital Garden, se debe copiar el Garden.md hacia index.md, estando parados en la misma clase.

```bash
cp Garden.md index.md
```

- tambien puedo hacer un script cada vez se haca una actulizacion.