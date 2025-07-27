---
modified: 2025-05-28T22:41:45-06:00
created: 2025-05-16T18:49:21-06:00
title: List of the most commonly used shells
aliases:
  - List of the most commonly used shells
publish: true
tags:
  - linux
comments: true
---
This is a list of the most commonly used and well-known **Unix/Like shells** are still in use today:

## 🐚 Commonly Used Shells in Linux/Unix

| Shell      | Path (usually)  | Description                                                          |
| ---------- | --------------- | -------------------------------------------------------------------- |
| **`bash`** | `/bin/bash`     | **Bourne Again Shell** — default on most Linux distros               |
| **`sh`**   | `/bin/sh`       | The **original Bourne shell** (or a symlink to `dash` or `bash`)     |
| **`dash`** | `/bin/dash`     | Lightweight, fast shell used for scripting (Ubuntu’s `/bin/sh`)      |
| **`zsh`**  | `/bin/zsh`      | Feature-rich shell popular with developers (customizable, Oh My Zsh) |
| **`ksh`**  | `/bin/ksh`      | KornShell — used on many commercial Unix systems                     |
| **`fish`** | `/usr/bin/fish` | **Friendly Interactive SHell** — very user-friendly and modern       |
| **`csh`**  | `/bin/csh`      | C Shell — has C-like syntax, mainly used historically                |
| **`tcsh`** | `/bin/tcsh`     | Improved `csh` with autocompletion, scripting improvements           |
|            |                 |                                                                      |

---

### 📝 Notes:

- Most modern distros use **`bash`** or **`dash`** by default.
- **`zsh`** is growing in popularity (especially on macOS).
- **`fish`** is loved by beginners and productivity fans but not POSIX-compliant.
- **`ksh`**, **`csh`**, and **`tcsh`** are more niche or legacy now, but still available.

---

You can list available shells on your system with:

```bash
cat /etc/shells
```

---
## Related Notes
- [History of Shells](20250516T1834-shells-timeline.md)
- [What Happens When You Connect to a Server via SSH and Run a Command?](20250516T1834-what-happens-when-you-connect-to-a-server-via-ssh-and-run-a-command.md)

---
**Nota diaria:** [[2025-05-16]]
