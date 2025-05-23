---
modified: 2025-05-22T17:02:54-06:00
created: 2025-05-20T21:00:06
publish: true
tags:
  - linux
title: How to change your shell in Linux
aliases:
  - How to change your shell in Linux
zettel-type: 
---
Sometimes you want to change your default shell on your Linux system to a different one. This is a step-by-step guide.

## ✅ Check Your Current Shell

You can check what shell you're currently using with:

```bash
echo $SHELL
```

You can also view the default login shell for your user by checking `/etc/passwd`:

```bash
grep "^$USER" /etc/passwd
```

## 🔄 Change Your Default Shell (per user)

To change your default shell, use the `chsh` (change shell) command:

```bash
chsh -s /path/to/shell
```

- The `-s` option means "set shell".
- The change applies **at next login**.
- You’ll likely be prompted for your **user password**.

### ⚠️ Common Issue

If you see this error:

```bash
chsh: /bin/fish is an invalid shell
```

…it means the shell binary is **not listed in** `/etc/shells` (the list of allowed login shells).

You can inspect it with:

```bash
cat /etc/shells
```

---

## 📦 Installing Zsh and Fish on Ubuntu

First, update your package list:

```bash
sudo apt update
```

Then install either shell:

### 🌀 Install Zsh:

```bash
sudo apt install zsh
```

### 🐟 Install Fish:

```bash
sudo apt install fish
```

Check again:

```bash
cat /etc/shells
```

Example output:

```
/bin/zsh
/usr/bin/zsh
/usr/bin/fish
```

> [!NOTE]
> - `fish` is not considered essential for boot/recovery, so it's installed in `/usr/bin`.
> - This follows Linux conventions: **essential tools → `/bin`**, **user-space tools → `/usr/bin`**.

Now set your default shell:

```bash
chsh -s /bin/zsh     # For Zsh
chsh -s /usr/bin/fish  # For Fish
```

Logout and log back in to see the change.

---

## 👥 Changing Shell for Another User (as root)

If you're root, you can change another user's shell like this:

```bash
sudo chsh -s /bin/bash carlos
```

Or, more dangerously, by editing `/etc/passwd` manually (not recommended).

```
# Be cautious with:
sudo nano /etc/passwd
```

## 👀 Prompt Differences Between Bash, Zsh, and Fish (Quick Peek)

One of the most obvious differences between the different shells is the prompt

### Bash prompt
- Classical
- It is customizable via `.bashrc`.

	![Bash promtp|300](https://i.imgur.com/MYPOJ0t.png)

### Fish prompt
- Colorful
- Auto-suggestions by default

![Fish prompt|300](https://i.imgur.com/zfEDcNb.png)

### Zsh prompt
- Support themes like `agnoster`, `robbyrussell`

![Zsh promtp|300](https://i.imgur.com/amTDido.png)

---
## Related Note
[[20250521T2355-customizing-your-linux-shell-oh-my-zsh-oh-my-bash-and-prompt-styling|Customizing Your Linux Shell: Oh My Zsh, Oh My Bash, and Prompt Styling]]
