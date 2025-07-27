---
created: 2025-01-15T04:46:40
modified: 2025-05-26T09:31:45-06:00
aliases:
  - Servicios de Control de Versiones
title: Servicios de Control de Versiones
publish: true
---
# Servicios de Control de Versiones
## Qué son los Servicios de Control de Versiones (VC<u>S</u>)
Son plataformas gestionadas en la nube que proveen alojamiento (*hosting*) de repositorios versionados. Es decir son servicios que te permiten tener un repositorio remoto en la nube utilizando un [Sistema de Control de Versiones](20241216T1919-sistema-de-control-de-versiones.md), el cual **generalmente** es [[Git]].

Estos servicios no solo proveen *hosting*, sino que ofrecen otras funcionalidades como seguimiento (*tracking*), automatizaciones y *pipelines* de CI/CD

Aunque **Git** no está diseñado intrínsecamente con una arquitectura cliente-servidor (ya que es un sistema de control de versiones distribuido), al usar un servicio de repositorios remotos, como GitHub, GitLab o Bitbucket, se adopta una estructura similar a cliente-servidor. En este caso, el servicio remoto actúa como un **servidor Git** que centraliza los cambios y facilita la colaboración, mientras que las computadoras de los desarrolladores funcionan como **clientes Git**, interactuando con el repositorio remoto para realizar operaciones como _push_, _pull_ y _fetch_.


> [!IMPORTANT]
> Los **Sistemas**  de Control de Versiones (como Git) manejan el versionamiento localmente,  mientras los **Servicios** de Control de Versiones proveen hosting remoto y funcionalidades extra

## Contexto
[20250115T0609-github](20250115T0609-github.md) es el Servicio de Control de Versiones más utilizado y esta basado en [Git](20241218T0949-git.md) 

## Ejemplos
Los Servicios de Control de Versiones mas populares hoy en día son:
### Github
- Github es la plataforma **más popular** para alojar repositorios, es bien conocida por tener una interfaz bastante amigable para el desarrollador. 
- Esta muy enfocada en los proyectos open-source y es aquí donde se alojan la mayoría.
- En 2018 fue adquirida por Microsoft
### Gitlab
- Es el principal competidor de Github, se ha destacado por su fuerte enfoque en pipelines CI/CD y a funcionalidades avanzadas de seguridad (aunque Github tambien ofrece  CI/CD pipelines en la actualidad).
- Gitlab aún se mantiene como una alternativa solida gracias a su enfoque integral en el ciclo de vida del desarrollo de software.
- Gitlab permite instalar su plataforma en servidores locales (self-hosted), lo que lo hace una opción atractiva para las organización que requieren tener control de sus datos o por alguna regulación necesitan trabajar en entornos privados.
### Bitbucket
- Hace parte del ecosistema de Atlassian (junto con Jira, Confluence, etc..)
- Es popular en ambientes empresariales, sobre todo en aquellos donde se utiliza JIRA para la gestión de proyectos.
- Inicialmente soportaba Mercurial, pero luego hizo la transición a Git completamente.
### SourceForge
- Fue uno de los primeros servicios, incluso antes que Github.
- Se utilizaba principalmente para proyectos open-source, sin embargo fue perdiendo popularidad debido a sus anuncios y malas prácticas.
- Todavía se utiliza para proyectos de nicho, pero por lo general replicados a otras plataformas como Github

## Conclusiones
- Github es la plataforma más utilizada hoy en día, sin embargo Gitlab y Bitbucket ofrecen alternativas viables especialmente en ambientes empresariales (empresas grandes como bancos, por ejemplo)
- Los Servicios de Control de Versiones permiten a los desarrolladores colaborar, dar seguimiento a cambios y automatizar flujos de trabajo, en un ambiente amigable con una interfaz gráfica fácil de usar.





--- 
## Enlaces: 


## Referencias:

---
**Nota diaria:** [2025-01-15](2025-01-15.md)
