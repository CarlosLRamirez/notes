---
aliases: []
tags:
  - DevOps
  - docker
created: 2026-03-20 05:34
modified: 2026-03-20 05:34
title: Comandos Docker
publish: true
folder: DevOps
---
## Comandos útiles de Docker


- Iniciar docker desktop desde la linea de comandos, igual va iniciar la UI de Docker Desktop

  `open -a Docker`

- Listar mis imagenes docker

  `docker images`

  ```bash
  IMAGE                         ID             DISK USAGE   CONTENT SIZE   EXTRA
  alpine/openclaw:latest        103365a35670       1.89GB             0B    U   
  finance-app-backend:latest    a3cbff1f37e1        170MB             0B    U   
  finance-app-frontend:latest   125761292a35       62.2MB             0B    U   
  openeuler/opencode:latest     b099eb5486fc       1.05GB             0B    U   
  ```


- Listar los contenedores activos

  `docker ps`

- Iniciar un contenedor a partir de una imagen

  `docker run [IMAGE]`

  ejemplo:

  `docker run finance-app-backend:latest`

  Eso dejará la terminal bloqueada, mostrando los logs del contenedor.

  Para detenerlo con *`Control+C`*.

- Correr un contenedor en modo *Dettached* (corre en segundo plano y no bloquea la terminal).




- Iniciar colima - colima es una herramienta para poder correr contenedores sin abrir Docker desktop (gasta menos RAM)

  `colima start`

- 














---
## Related Concepts:

---
## Links:
*References*
