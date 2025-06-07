---
modified: 2025-05-28T22:41:36-06:00
created: 2025-05-16T18:34:36-06:00
title: Shells timeline
aliases:
  - Shells timeline
publish: true
tags:
  - linux
comments: true
---

##🧭 The Lineage — Which shell came first?

### 🕰️ 1. Thompson Shell (`sh`) — 1971
- The original shell for **Version 1 UNIX**.
- Very limited scripting.

### 🕰️ 2. **Bourne Shell (`sh`)** — 1979
- Developed by **Stephen Bourne** at Bell Labs for UNIX Version 7.
- Became the **standard UNIX shell**.
- Introduced proper scripting capabilities (if, for, case, etc.)
- This is what most POSIX-compatible shells are based on.

### 🧱 From Bourne Shell came...

| Shell | Year | Why it exists |
|-------|------|---------------|
| **Bash** (Bourne Again Shell) | 1989 | GNU's free/open alternative to Bourne shell; adds features like history, job control |
| **KornShell (ksh)** | 1980s | Combines `sh` and `csh` features, used in commercial UNIX |
| **Zsh** | Early 1990s | Powerful scripting + interactive features; loved by power users |
| **Dash** | Modern | Lightweight, fast — often used for scripts on Ubuntu for speed (replaces `/bin/sh`) |
| **Fish** | 2005 | "Friendly Interactive SHell" — focused on user-friendliness, not POSIX scripting |

---

## 🔁 Why do multiple shells still exist?

Because each has tradeoffs:

| Shell | Best for |
|-------|----------|
| `bash` | Default for most Linux distros; good balance |
| `zsh` | Interactive users who want themes, plugins (with Oh My Zsh) |
| `sh`/`dash` | Running simple, portable scripts |
| `fish` | Beginners who want autocompletion & modern UX |
| `ksh` | Legacy commercial UNIX systems (e.g., AIX, Solaris) |

---
## Related notes
- [[20250516T1708-what-is-a-shell|What a Shell is?]]

---
**Nota diaria:** [[2025-05-16]]
