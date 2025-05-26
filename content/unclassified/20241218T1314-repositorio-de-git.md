---
created: 2024-12-18T13:14:06
modified: 2025-05-26T00:25:36-06:00
aliases:
  - Repositorio de Git
tags:
  - git
title: Repositorio de Git
publish: true
---
#topublish
# Repositorio de Git

## Concepto
El repositorio o repo es el directorio llamado `.git` que se encuentra en el nivel superior del proyecto, es decir en el directorio raíz del [[20241218T1313-git-working-tree|Working Tree]]. Dentro de este directorio se almacena la información esencial sobre el proyecto como la configuración de las ramas, los autores de las confirmaciones (*commits*) y las etiquetas (*tags*), así como todo el historial de cambios y el estado de cada archivo en cada punto del historial. Si borramos este directorio, borramos todo el historial del proyecto y el directorio se vuelve un folder común y corriente del sistema operativo.

## Puntos Clave
- El directorio `.git`es lo que hace que un carpeta en nuestra computadora se convierta en un proyecto de **Git**. 
- El directorio `.git`esta oculto en el sistema y lo podemos visualizar con el comando `ls -a`
- Para ser precisos, lo correcto es decir que el repositorio **Git** es el directorio `.git`, no toda la carpeta del proyecto.
- Existe un tipo de repositorio **Git** especial llamado [[20241218T1701-bare-repository|Bare Repository]] el cual es principalmente utilizado para compartir un proyecto existente con otro usuario.

## Ejemplo
- Este es un ejemplo de cómo se ve una estructura de archivos de un proyecto de Git

```
mi_proyecto/
├── .git/
│   ├── objects/
│   ├── refs/
│   ├── HEAD
│   └── config
├── README.md
└── mi_archivo.txt
```

En este ejemplo, "mi_proyecto" es la carpeta principal del proyecto. Dentro de ella, el directorio `.git` contiene la información del repositorio. Los archivos `README.md` y `mi_archivo.txt` son ejemplos de archivos que estarían bajo el control de versiones de Git.


## Quiz
- 🍒 ¿Qué sucede si eliminas el directorio `.git` de tu proyecto?
	- Borramos todo el historial del proyecto y el directorio donde esta el proyecto pasa a ser un folder normal del sistema.


## Referencias adicionales
- https://www.youtube.com/watch?v=A-4WltCTVms


--- 
## Enlaces:
- [[20241218T1701-bare-repository]]
- [[20241218T1313-git-working-tree]]
