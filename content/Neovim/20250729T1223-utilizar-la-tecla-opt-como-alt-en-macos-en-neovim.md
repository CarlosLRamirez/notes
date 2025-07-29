---
id: Utilizar la tecla opt de la Mac en neovim
aliases: []
tags:
  - neovim
  - frame
comments: true
created: 2025-07-29T12:23:45-06:00
modified: 2025-07-29T16:53:28-06:00
publish: true
title: Utilizar la tecla opt  como ALT  en MacOS en neovim
---

## ✨ Qué logré

Logré que los atajos `⌥ + j` y `⌥ + k` (Option + j/k) funcionen **correctamente en Neovim** para mover líneas arriba o abajo, incluso **cuando estoy trabajando dentro de Tmux**, usando **Ghostty como terminal en macOS**.

---

## 🤔 ¿Por qué quise hacer esto?

- Porque en mi flujo de trabajo diario con Neovim (y especialmente LazyVim), mover líneas o bloques de texto con `Alt + j/k` es **una operación fundamental**.
- Pero macOS no trata `Option` como `Alt` por defecto, y eso rompe este tipo de atajos.
- Además, al usar Tmux sobre el terminal, muchas secuencias de teclas `Meta`/`Alt` se pierden si no están bien configuradas.

---

## 🛠️ Cómo lo solucioné

### ✅ Paso 1: Configuré Ghostty para tratar `Option` como `Alt`

Edité el archivo de configuración principal de Ghostty (`~/.config/ghostty/config`) y añadí esta línea:

```toml
macos-option-as-alt = true
```

Esto hace que **ambas teclas Option (⌥)** se comporten como la tecla `Alt` en el terminal, enviando correctamente secuencias `ESC + <key>`.

> También se puede usar `"right"` o `"left"` si se quiere aplicar solo a una de las teclas.

> Aparentemente esta opcion no funciona en build GLFW de Ghostty

---

### ✅ Paso 4: Confirmé que `Alt + j/k` llegaban a Neovim

Usé este comando dentro de Neovim:

```vim
:verbose map <M-j>
```

Luego presioné `⌥ + j` y verifiqué que el mapeo se ejecutaba.

---

### ✅ Paso 5: Verifiqué que también funcionara dentro de Tmux

- Abrí Neovim **dentro de una sesión Tmux**, y repetí la prueba.
- Confirmé que `⌥ + j/k` seguían funcionando, gracias a que:
  - Ghostty enviaba `Alt` correctamente.
  - Tmux **no bloqueaba** las secuencias.

**Nota:** No tuve que modificar `.tmux.conf`, pero si en el futuro deja de funcionar, verificar si falta:

```tmux
set -g xterm-keys on
```

---

## ✅ Resultado

Ahora puedo usar:

- `⌥ + j` → mover línea o bloque hacia abajo
- `⌥ + k` → mover línea o bloque hacia arriba

Tanto en Neovim standalone como dentro de Tmux, con Ghostty como terminal principal en macOS.

---

## 🧩 Reflexión

Me tomó varios intentos llegar aquí. Lo más frustrante fue que:

- macOS no usa `Alt` como `Meta` por defecto.
- Ghostty puede ser configurado con `config`, `config.toml`, o incluso `ghostty.yml`, y eso puede causar confusión.
- Tmux a veces bloquea secuencias de teclado si no está bien configurado.

Pero valió la pena. Ahora tengo un entorno mucho más fluido y eficiente para escribir, editar y trabajar en Neovim.

---

## 🔮 Siguientes pasos posibles

- Mapear `⌥ + h/l` para moverme entre splits.
- Mapear `⌥ + ← / →` para mover palabra.
- Mapear `⌥ + backspace` para borrar palabra completa.
- Documentar estos atajos en este mismo archivo o en un snippet para compartir.
