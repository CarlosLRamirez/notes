---
created: 2025-05-25T09:39:52
modified: 2025-05-25T09:51:13-06:00
publish: false
tags:
  - zettelkasten
  - pkm
title: Notas de Literatura (Literature Notes)
aliases:
  - Notas de Literatura (Literature Notes)
zettel-type:
  - permanent
---

## Concepto General
  Notas tomadas directamente de libros, papers, videos, etc. Con contexto bibliográfico.

**Propósito**: Para **capturar ideas de una fuente** (libro, artículo, video, etc.) **que has leído**.    

**Contenido**:
    - Contiene **material resumido o citado** de la fuente.
    - A menudo incluye **tus reacciones iniciales o destacados**.
    - Normalmente lo escribes **mientras lees**, y refleja **lo que dice el autor**.
        

## Contexto
**Uso de Zettelkasten**: Es un **paso temporal** — materia prima que podría convertirse en Notas Permanentes.


## Ejemplo


```markdown
---
title: "Constraints Drive Innovation"
type: [literature-note]
source: "The Unicorn Project by Gene Kim"
created: 2025-05-25T19:40:00
tags: [devops, innovation, constraints]
---

## Idea principal

Las restricciones son una fuente clave de innovación. Cuando los equipos enfrentan límites reales (tiempo, recursos, herramientas), se ven obligados a encontrar soluciones creativas que normalmente no considerarían.

> “Constraints aren’t the enemy. They’re the springboard to creativity.” – *Gene Kim, The Unicorn Project*

## Contexto

Esta idea aparece en el capítulo donde se describe cómo el equipo de desarrollo resuelve problemas usando recursos limitados sin esperar una solución ideal desde arriba.

---

```

## Plantilla propuesta

```markdown
---
title: "<% tp.system.prompt('Título de la idea o cita') %>"
created: <% tp.date.now("YYYY-MM-DDTHH:mm:ss") %>
modified: <% tp.date.now("YYYY-MM-DDTHH:mm:ss") %>
type: [literature-note]
source:
  title: "<% tp.system.prompt('Título de la fuente (libro, artículo)') %>"
  author: "<% tp.system.prompt('Autor o autores') %>"
  year: "<% tp.system.prompt('Año de publicación') %>"
  page: "<% tp.system.prompt('Número de página (opcional)') %>"
zettel-type:
  - literature
tags: []
aliases: []
---

## 💡 Idea principal

<!-- Resume aquí la idea tomada de la fuente -->

## 📌 Cita (opcional)

> “<% tp.system.prompt('Cita textual (si aplica)') %>”

## 📚 Contexto

<!-- Dónde aparece esta idea, en qué capítulo, sección o situación -->

## 🔗 Referencia

<!-- Puedes enlazar a la nota bibliográfica o referencial correspondiente, si ya la tienes -->
```