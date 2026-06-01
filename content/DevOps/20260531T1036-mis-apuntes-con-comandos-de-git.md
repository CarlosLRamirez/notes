---
created: 2026-05-31 10:36
modified: 2026-05-31 21:19
tags:
  - DevOps
  - git
title: Mis Apuntes con Comandos de Git
aliases: Mis Apuntes con Comandos de Git
publish: true
folder: DevOps
---

Aqui hay un video que guarde pero nunca vi [[20241216T1906-video-con-comandos-y-flujos-basics-de-git|Video con Comandos y Flujos Basics de Git]]

## Branches

Para ver la lista de branches que tiene el repositorio local
```bash
git branch
```

Para ver cuántas (contarlas) _branches_ tienes puedes usar:

```bash
git branch | wc -l
```

Para **cambiarme de branch**:

```bash
git switch nombre-de-la-rama
```

o, con el comando “clásico”:

```bash
git checkout nombre-de-la-rama
```

Borrar una rama ya mergeada (modo seguro):
    
```bash
 git branch -d nombre-de-la-rama
```

Forzar el borrado aunque no esté mergeada:
    
```bash
git branch -D nombre-de-la-rama
```    

  Para renombrar una rama que todavia no esta mergeada
  
  Si estás **parado en esa rama**:

```bash
git branch -m nombre-nuevo
```

Si **no** estás en esa rama:

```bash
git branch -m nombre-viejo nombre-nuevo
```

