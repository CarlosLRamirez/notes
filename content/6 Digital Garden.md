---
title: Digital Garden Folder Setup
created: 2025-05-15T00:00:00
zettel-type: folder-note
aliases:
  - Digital Garden
  - Public Notes
tags:
  - digital-garden
  - quartz
  - setup
modified: 2025-05-15T17:22:12-06:00
---


## Ayuda

### Pruebas en localhost

```
npx quartz build --serve
```

### sincronizar con Github:
```
npx quartz sync
```

### Landing Page
https://carloslramirez.com/my-digital-jungle/

### Repositorio Pùblico
https://github.com/CarlosLRamirez/my-digital-jungle


---

## 🌱 Propósito
Este folder contiene las notas seleccionadas que serán publicadas en mi Digital Garden utilizando [Quartz](https://quartz.jzhao.xyz). Aquí almaceno aquellas notas que considero listas para compartir en público, ya sea por su claridad, completitud o simplemente porque quiero mostrar mi proceso de aprendizaje.

## 🧩 Estructura
Las notas dentro de este folder están organizadas por tópico cuando es necesario (por ejemplo: Linux, AWS, Lecturas, Reflexiones) o simplemente se listan cronológicamente si no se justifica una subcarpeta.

## 🔁 Sincronización con Quartz
El repositorio de Quartz está ubicado en: `~/projects/my-digital-garden`

Para que Quartz utilice este folder como fuente de contenido, se creó un symlink desde la carpeta `/content` de Quartz a este folder:

```bash
❯ ln -s $HOME/projects/CerebroDigital2025/6\ Digital\ Garden $HOME/projects/my-digital-jungle-public/content
```

> Esto permite que todo el trabajo y edición ocurra dentro de Obsidian, y Quartz simplemente renderice las notas con `publish: true` en el frontmatter.

## **🧠 Consideraciones**

- Este folder es parte de mi Vault privado, pero las notas aquí son tratadas como “candidatas a publicación”.
- Uso el plugin ExplicitPublish() de Quartz para tener control total sobre lo que se publica.
- No todas las notas de aquí se publican automáticamente. Solo las que tengan:

```
publish: true
```

## **📂 Contenido**


```dataview
TABLE file.link AS "Nota", created AS "Fecha"
FROM "9 Digital Garden"
WHERE publish = true
SORT created desc
```

## **📝 Pendientes**
- Revisión periódica para mover notas publicadas antiguas al archivo si es necesario.
- Refinamiento de etiquetas y categorías.
