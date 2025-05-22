---
modified: 2025-05-21T15:45:45-06:00
created: 2025-05-16T18:34:42-06:00
title: What Happens When You Connect to a Server via SSH and Run a Command?
aliases:
  - What Happens When You Connect to a Server via SSH and Run a Command?
publish: true
tags:
  - linux
  - operating-systems
---
![](https://i.imgur.com/eVusbDi.png)
Let’s say you’re using a Mac. You open the **Terminal app** — that’s your **terminal emulator**. It’s the program that gives you a window to type commands and see output.

Now, you type something like:

```bash
ssh ubuntu@1.2.3.4
```

This runs the **SSH client**, a program on your computer that creates a secure connection to a remote machine (in this case, your server at `1.2.3.4`).

Once you authenticate, your SSH client connects to the **SSH server** (also called the **SSH daemon** or `sshd`) running on the remote machine. Now you have a live **SSH session** — a secure tunnel between your local terminal and the server’s shell.

---

## 🧠 Flow of a Command — Visual Diagram

```
[ Your Terminal App ]
         |
         v
[ SSH Client (your machine) ]
         |
      === SSH CONNECTION ===
         |
         v
[ SSH Daemon (on server) ]
         |
         v
[ Shell (e.g. bash) on server ]
         |
         v
[ OS executes command like ls ]
         |
         v
[ Output travels back through SSH ]
         |
         v
[ Your Terminal displays it ]
```

---

## 🔍 What Happens When You Type a Command?

- If you type a **built-in** command like `cd` or `pwd`, the **shell handles it directly** — no external program needed.
- If you type a **program** like `ls` or `grep`, the shell tells the OS to find and run the actual binary (e.g. `/bin/ls`).

---

## 🧪 Try These Commands to Explore

### See what kind of command `cd` is:
```bash
type cd
# cd is a shell builtin
```

### See where the `ls` command lives:
```bash
which ls
# /bin/ls
```

### See which shell you're using:
```bash
echo $SHELL
# /bin/bash (or /bin/zsh, etc.)
```

---

## 🔁 TL;DR

> Your terminal is the **window**,  
> SSH is the **secure tunnel**,  
> The shell on the server is the **interpreter**,  
> And the OS is what actually **executes the command**.

---
## Related Notes
- [[20250516T1708-what-is-a-shell|What a Shell is?]]
- [[20250516T1849-list-of-shells|List of the most commonly used shells]]