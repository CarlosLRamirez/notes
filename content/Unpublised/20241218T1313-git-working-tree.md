---
created: 2024-12-18T13:13:57
modified: 2025-05-26T00:27:03-06:00
type:
  - Zettelkasten
aliases:
  - Git Working Tree
tags:
  - git
status:
  - in-progress
publish: true
title: Git Working Tree
---
# Git Working Tree
## Concepto
Es el área en donde están todos los archivos y estructura de carpetas que forman parte del proyecto en Git. Es como esa "area de maniobras" o "*staging area*" en donde hacemos todos los cambios que necesitamos en nuestros archivos (como editar, agregar, borrar, etc..) antes de confirmarlos (hacer *commit*) en el repositorio.

## Puntos Clave
- El Working Tree refleja el estado actual del proyecto (archivos y carpetas).
- Todos los cambios que se realizan en el working tree no son rastreados por Git hasta que no son puestos en escena (*staged*)
- El comando que nos sirve para ver los cambios realizados en el working tree es `git status`
- El comando para hacer *stage* de los cambios en el working tree es `git add`

## Ejemplo del mundo real
- Por ejemplo cuando estamos trabajando en un archivo de Word, los cambios que hagamos en el documento no son permanentes, hasta que no **guardamos** el documento.

## Quiz
- 🍒 Cual comando puede utilizarse para ver los cambios realizados en el Working Tree?
	- `git status`
- 🍒  ¿Qué sucede con los cambios en el Working Tree si no se añaden al Staging Area?".
	- Git no hace *tracking* de los cambios en dichos archivos



--- 
 **Notas relacionadas:**
 [[Staging Area]]
 [[Local Repository]]
 [[20241218T1314-git-commits]]
