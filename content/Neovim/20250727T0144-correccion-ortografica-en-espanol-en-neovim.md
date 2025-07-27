---
id: 20250727T0144-correccion-ortografica-en-espanol-en-neovim
aliases:
  - Corrección Ortográfica En Español en Neovim
tags:
  - neovim
  - seed
comments: true
created: 2025-07-27T01:39:42-06:00
modified: 2025-07-27T02:16:57-06:00
publish: true
title: Corrección Ortográfica En Español en Neovim
zettel-type:
  - permanent
---

Como configurar multiples idiomas para la corrección ortográfica (*Spelling*) utilizada por Neovim.

## Cambiar lenguaje de Spelling a Español

Corrí este comando en neovim: `:set spelllang=es`

> Intenté con `es_gt` pero me apareció: *region no soportada*

Al cambiarlo me apareció este mensaje:

> Warning: Cannot find word list “es.utf-8.spl” or “es.ascii.spl”

Lo que significa que Neovim o Vim no puede encontrar el archivo del diccionario de español necesario para funciones como:

- Corrección ortográfica
- Resaltado de palabras mal escritas
- Sugerencias ortográficas

Se supone que el plugin `spellfile.vim` debió descargar los archivos del lenguaje automáticamente, pero quizá yo le di NO la primera vez o algo paso.. Lo corregí así:

**Solucion:**

Use estos comandos en neovim:

```vim
:let g:spellfile_URL = 'https://ftp.nluug.nl/vim/runtime/spell'
:set spell
```

Y luego si me pidió si quería descargar los archivos de diccionario, me preguntó en donde y escogí la primera opción que era la carpeta local donde esta la configuración de neovim: `.config/nvim/spell`

Estos son los archivos que tengo ahora en esta ruta:

```bash
❯ pwd
/Users/carlos.ramirez/.config/nvim/spell
❯ ls
en.utf-8.add     en.utf-8.add.spl es.utf-8.spl     es.utf-8.sug
```

### Volver a cambiar a ingles

Comando `set spelllang=en`


## Configurar dos idiomas y que queden de forma permanente

Agregué las siguientes lineas al archivo  `~/.config/nvim/lua/config/options.lua`:

```bash
vim.opt.spell = true
vim.opt.spelllang = { "en", "es" }`
```

- Para comprobar en neovim cuales idiomas esta utilizando para spelling:

- Usar este comando: `:set spelllang?`

## Usar la corrección ortográfica en Neovim

### Moverse entre palabras con errores ortográficos

Usar estos motions para moverse entre palabras con errores:

- `]s` para ir a la siguiente palabra
- `[s` para ir a la anterior palabra

### Ver las sugerencias de una palabra marcada como falta ortográfica

Colocarse encima de la palabra y usar el keymap: `z=`, luego aparece un listado de opciones, ingresar colocar el numero de la palabra que sea la correcta.

### Agregar una palabra al diccionario

Usar el keymap: `zg`



## TODO

- ¿Alguna forma de crear un toogle para cambiar entre ingles y español?


