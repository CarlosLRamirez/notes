---
modified: 2025-05-21T15:47:31-06:00
created: 2025-05-16T17:08:17-06:00
publish: true
title: What a Shell is?
aliases:
  - What a Shell is?
tags:
  - linux
  - fundamentals
---
## So what actually the Shell is?

The Shell is the "program" that **runs on the server side** that provides the command-line interface between the user and the operating system.

It's the program that reads, interprets and run the commands that you type when you connect to a server.

The shell interprets the commands you enter and some of them are "executed" by the shell itself, and others are passed to the operating system to be executed by a program.

Different shells exist — some are mostly historical, while others are still widely used today. The most common ones are **bash** and **zsh**. **zsh** is especially popular among power users and developers 😉

On Linux, every user can choose which shell they want to use as their default login shell. 

We can check our current shell with:
```zsh
echo $SHELL
```

You can also see the default login shell of your user by checking the content of the file `/etc/passwd`

```zsh
grep "^$USER" /etc/passwd
```

To change your default shell (only for your user):
```zsh
chsh -s /path/to/shell
```

For example (*`-s` = set shell and the change applies on next login)*)
```zsh
chsh -s /bin/zsh
```

This file lists all valid login shells on the system
```zsh
cat /etc/shells
```

If you're root 🔐, you can change the shell for another user with:
```zsh
sudo chsh -s /bin/bash carlos
```

or edit directly the `/etc/passwd` (not recommended unless you're sure what your doing!)

---
### 🧠 Why are there different shells?

> Because over time, developers built **new shells with more features**, better scripting, customization, performance, or user experience — just like how web browsers or text editors evolved.

Each shell aims to:
- Improve on limitations of older shells
- Add scripting capabilities
- Provide better interactivity (autocomplete, colors, plugins, etc.)
- Cater to specific use cases (like scripting vs. interactive use)

---
## Related notes
- [[list-of-shells|List of the most commonly used shells]]
- [[history-of-shells|History of Shells]]
- [[what-happens-when-you-connect-to-a-server-via-ssh-and-run-a-command|What Happens When You Connect to a Server via SSH and Run a Command?]]
