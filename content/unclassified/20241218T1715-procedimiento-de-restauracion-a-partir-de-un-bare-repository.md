---
created: 2024-12-18T17:15:49
modified: 2025-05-26T09:10:13-06:00
aliases:
  - Procedimiento de restauración a partir de un bare repository
title: Procedimiento de restauración a partir de un bare repository
publish: true
---
# Procedimiento de restauración a partir de un bare repository

#git 

Imagina que tienes un directorio `.git` llamado "mi_proyecto_backup" en tu carpeta "Documentos". Para [[20250111T1235-git-clone|clonar]] este repositorio en una nueva carpeta llamada "mi_proyecto" en tu escritorio, seguirías estos pasos:

1. Abrir la terminal.
2. Escribir `cd Escritorio` para navegar al escritorio.
3. Escribir `mkdir mi_proyecto` para crear la carpeta "mi_proyecto".
4. Escribir `cd mi_proyecto` para navegar a la nueva carpeta.
5. Escribir `git clone /Documentos/mi_proyecto_backup` para clonar el repositorio.

**Recuerda:**

- La ruta al directorio `.git` debe ser la correcta.
- Si el directorio `.git` está en un servidor remoto, deberás usar la URL del repositorio en lugar de la ruta local.

--- 
 **Notas relacionadas:**

---
**Nota diaria:** [[2024-12-18]]
