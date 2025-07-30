---
id: Configuracion de mi Digital Garden con Quartz
aliases: []
tags:
  - digital-garden
  - quartz
created: 2025-05-15T00:00:00
modified: 2025-07-29T21:21:30-06:00
publish: true
---

## Folder dentro de mi Vault de Obsidian

Dentro de mi vault de Obsidian he creado un folder llamado `DigitalGarden`, este folder contiene la estructura de folders y notas a las que accede [Quartz](https://quartz.jzhao.xyz) y utiliza para generar el sitio estático que compone mi Jardin Digital.

> Por costumbre le sigo llamando "Vault de Obsidian", sin embargo últimamente trato de escribir únicamente en Neovim.

![[Pasted image 20250729204917.png|400]]

## Proceso de instalación de Quartz

Extraído de la documentación oficial de [Quartz](https://quartz.jzhao.xyz/)

### 🪴 Get Started

Quartz requires **at least [Node](https://nodejs.org/) v22** and `npm` v10.9.2 to function correctly. Ensure you have this installed on your machine before continuing.

Then, in your terminal of choice, enter the following commands line by line:

```
git clone https://github.com/jackyzha0/quartz.git
cd quartz
npm i
npx quartz create
```

## 🔁 Sincronización entre el Vault y Quartz

Mi repositorio de Quartz está ubicado en: `~/projects/my-digital-jungle-public`, y la carpeta que utiliza Quartz como fuente de todo el contenido del sitio es `/content` dentro de dicha ruta.

Para que Quartz pueda "ver" una parte de mi Vault, la carpeta `/content` es un `symlink` a la carpeta `DigitalGarden` dentro de mi Vault, así es como se configura:

```bash
ln -s ~/projects/my-digital-jungle-public/content/ ~/projects/CerebroDigital2025/DigitalGarden
```

Luego de ejecutar el comando anterior, así se ve en el sistema de archivos:

```bash
lrwxr-xr-x@   1 carlos.ramirez  staff      63 Jul 29 17:13 content -> /Users/carlos.ramirez/projects/CerebroDigital2025/DigitalGarden
```

- Esto resuelve la necesidad de tener que publicar TODA la carpeta del Vault y tener control de únicamente que archivos quiero que se sincronizen con el repositorio remoto donde esta el sitio público
- Ademas con esto no es necesario tener dos Vaults diferentes, sino uno solo tanto para las notas privadas como las notas públicas, y asi puedo seguir usando Obsidian como mi editor de archivos markdown.

## Control de qué notas publicadas

Para controlar que notas dentro de la carpeta `DigitalGarden` son generadas por Quartz y publicadas en el Digital Garden utilizó el campo `publish:true` en el _frontmatter_ de cada nota.

Ejemplo:

```markdown
---
id: Configuracion de mi Digital Garden con Quartz
aliases: []
tags:
  - digital-garden
  - quartz
created: 2025-05-15T00:00:00
modified: 2025-07-29T21:04:08-06:00
publish: true
---
```

> [!WARNING]
> Todos los archivos `.md` que se encuentren dentro de la carpeta `DigitalGarden` son copiados al repositorio público de Github, así no tengan el valor de `publish` en **true**, y no sean renderizados por Quartz en el sitio web; igual son publicas. Esto es porque para poder utilizar Github Pages, el repositorio que contiene el sitio **tiene que ser público**.

## 🧩 Estructura

Las notas dentro de este folder están organizadas por tópico cuando es necesario (por ejemplo: Linux, AWS, Lecturas, Reflexiones) o simplemente se listan cronológicamente si no se justifica una subcarpeta.

## Comandos útiles de Quartz

### Correr Quartz en local

```bash
npx quartz build --serve
```

### Sincronizar el sitio remoto

```bash
npx quartz sync
```

### Digital Garden Landing Page

<https://carloslramirez.com/notes/>

### Repositorio Pùblico

<https://github.com/CarlosLRamirez/notes>
