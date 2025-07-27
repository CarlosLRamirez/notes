---
id: 20250727T0328-como-agregue-un-indice-general-toc-a-la-pagina-de-inicio
aliases:
  - Como agregue un indice general TOC a la Pagina de Inicio
tags:
  - digitalgarden
  - short
comments: true
created: 2025-07-27T03:28:27
modified: 2025-07-27T03:59:59-06:00
publish: true
title: Como agregue un indice general TOC a la Pagina de Inicio
---

Agregué un indice de todo el contenido de mi Jardin Digital en la pagina principal ([[Garden|index.md]]), ordenado por carpetas y notas,

Lo hice desde Obsidian y lo bueno es que es dinámico, es decir que si hago algun cambio como agregar una nota, o cambiar nombre de un directorio se actualiza automaticamente.

1. Primero instale el plugin [Waypoint](https://github.com/IdreesInc/Waypoint) de Obsidian, y le deje la configuración por defecto

- Previamente ya tenia instalado el plugin de [Folder Notes](https://github.com/LostPaul/obsidian-folder-notes) de Obsidian
- Me acabo de dar cuenta que hay dos plugins de Folder Notes de Obsidian, yo tengo el de LostPaul y me funcionó.
- La configuración de **Folder Notes** la tengo por defecto, es decir que nombre de la nota es igual al nombre del folder: `{{folder_name}}` (es la unica forma en que funciona Waypoint).

2. Luego en la nota del folder principal donde tengo todo el contenido de mi Digital Garden, le agregué esto:

```markdown

## Indice principal
%% Error: Cannot create a waypoint in a note that's not the folder note. For more information, check the instructions [here](https://github.com/IdreesInc/Waypoint) %%

```

y automaticamente el plugin de Waypoint genera la tabla de contenido con todos los subfolders y notas que se encuentran dentro de la carpeta correspondiente a ese folder note.


3. El problema: la carpeta del folder note se llama `Garden.md`, sin embargo Quartz espera que la pagina principal sea `index.md` y yo queria que estuviera en la pagina principal (el home de mi Digital Garden)

- Como lo solucione: 
	- creé un symlink del archivo real en mi vault (`~/vault/Garden/Garden.md`) hacia el folder `content` de donde Quartz toma el contenido para general el sitio web.


 ```bash
 ln -s ~/projects/CerebroDigital2025/Garden/Garden.md ~/projects/my-digital-jungle-public/content/index.md
```


> [!NOTE]
> EL folder `content` a la vez es un symlink del folder dentro de mi vualt llamado `Garden`, por eso pensé que no me iba funcionar, porque hay una a cuestion cruzada alli.

Al final me quedó de esta manera el folder `content` del repositorio de Quartz, donde esta mi Jardin Digital, el cual apunta a un folder especifico de mi Vault de Obsidian.

```bash
❯ pwd
/Users/carlos.ramirez/projects/my-digital-jungle-public
❯ ls -l content
lrwxr-xr-x@ 1 carlos.ramirez  staff  56 Jul 27 03:10 content -> /Users/carlos.ramirez/projects/CerebroDigital2025/Garden
```

y si se ve dentro de content hay otra symlink hacia un archivo dentro de si mismo.

```bash
❯ ls -l content/
total 32
drwxr-xr-x@   2 carlos.ramirez  staff     64 May 15 15:23 AWS
drwxr-xr-x@   2 carlos.ramirez  staff     64 May 15 15:24 Automation
-rw-r--r--@   1 carlos.ramirez  staff  15356 Jul 27 03:28 Garden.md
drwxr-xr-x@  27 carlos.ramirez  staff    864 Jul 25 10:12 Linux
drwxr-xr-x@   3 carlos.ramirez  staff     96 Jul 27 02:16 Neovim
drwxr-xr-x@   2 carlos.ramirez  staff     64 May 15 15:24 Networking
drwxr-xr-x@   5 carlos.ramirez  staff    160 Jul 27 03:53 PKM
drwxr-xr-x@ 120 carlos.ramirez  staff   3840 Jul 27 03:00 Por Clasificar
drwxr-xr-x@   3 carlos.ramirez  staff     96 May 16 07:14 assets
lrwxr-xr-x@   1 carlos.ramirez  staff     66 Jul 27 03:18 index.md -> /Users/carlos.ramirez/projects/CerebroDigital2025/Garden/Garden.md
```


  ---
