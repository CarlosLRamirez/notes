---
modified: 2025-05-27T12:18:42-06:00
created: 2025-05-27T12:17:14-06:00
title: 🧰 Neovim + Tmux Markdown Power Setup
aliases:
  - 🧰 Neovim + Tmux Markdown Power Setup
publish: true
---
# 🧰Neovim + Tmux Markdown Power Setup

## 🛠️ Neovim Configuration

### 📁 Config Path
`~/.config/nvim/init.lua`

### 📦 Plugin Manager
Using **Lazy.nvim** with this bootstrap code:

```lua
local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
...
require("lazy").setup({ ... })
```

### 🧭 Leader Key
```lua
vim.g.mapleader = " "
vim.g.maplocalleader = " "
```

### 🔌 Installed Plugins

| Plugin                            | Purpose                                |
| --------------------------------- | -------------------------------------- |
| `ellisonleao/glow.nvim`           | Markdown preview in terminal           |
| `nvim-treesitter/nvim-treesitter` | Syntax highlighting                    |
| `nvim-telescope/telescope.nvim`   | Fuzzy file finder                      |
| `nvim-tree/nvim-tree.lua`         | File explorer                          |
| `nvim-lualine/lualine.nvim`       | Statusline                             |
| `folke/which-key.nvim`            | Keybinding helper                      |
| `catppuccin/nvim`                 | Aesthetic colorscheme                  |
| `christoomey/vim-tmux-navigator`  | Seamless tmux <-> Neovim pane movement |

---

## 🎹 Keybindings

| Key              | Action                                 |
| ---------------- | -------------------------------------- |
| `<Space>e`       | Toggle file explorer                   |
| `<Space>f`       | Find files                             |
| `<Space>p`       | Markdown preview                       |
| `<Space>w`       | Save file                              |
| `<Space>q`       | Quit file                              |
| `Ctrl + h/j/k/l` | Navigate between tmux and Neovim panes |

---

## 🧱 Tmux Configuration

Saved at: `~/.tmux.conf`

```tmux
bind -n C-h select-pane -L
bind -n C-j select-pane -D
bind -n C-k select-pane -U
bind -n C-l select-pane -R

bind r source-file ~/.tmux.conf \; display "Reloaded!"
set -g mouse off
```

---

## 🖥️ Terminal Tips

- Using **iTerm2** for better macOS compatibility
- Terminal type: `xterm-256color` or `tmux-256color`
- Removed any conflicting `⌃h`, `⌃l` bindings in iTerm2

---

## ✅ Current Workflow

- Edit markdown in Neovim
- Use `:Glow` or `<Space>p` to preview inside terminal
- Navigate panes with `Ctrl + h/j/k/l`
- Toggle file tree with `<Space>e`
