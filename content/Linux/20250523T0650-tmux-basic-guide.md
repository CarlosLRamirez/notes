---
created: 2025-05-23T06:50:14
modified: 2025-05-23T08:15:29-06:00
publish: true
tags:
  - linux
  - terminal
  - macos
title: tmux Basic Guide
aliases:
  - tmux Basic Guide
zettel-type: 
---


## Getting started

- First, check that `tmux` is installed on your system using:

```
which tmux
tmux -V
```

- If it’s not installed, use one of the following commands depending on your operating system:

| Platform               | Install Command           |
| ---------------------- | ------------------------- |
| Arch Linux             | `sudo pacman -S tmux`     |
| Debian or Ubuntu       | `sudo apt install tmux`   |
| Fedora                 | `sudo dnf install tmux`   |
| RHEL or CentOS         | `sudo yum install tmux`   |
| macOS (using Homebrew) | `brew install tmux`       |
| macOS (using MacPorts) | `sudo port install tmux`  |
| openSUSE               | `sudo zypper install tmu` |
  

- To quickly get started with **tmux**, just run:

```bash
tmux
```

- This will launch a new shell session managed by **tmux**. You can think of it like opening a new terminal window or starting a new SSH session on the server.
- You’ll notice a status line at the bottom of the screen. This line displays useful session and window information. For example, you might see something like:
	- `[0]`: The **tmux session number** — useful when multiple sessions exist.
	- `0`: The **window number** — this is the active tmux window you’re in.
	- `bash`: The **active shell or process** running in the current window (* = active pane).
	- `"ubuntu"`: The **window name or title** — often derived from hostname or manually set.
![](https://i.imgur.com/gaisNLq.png)
- You can type on this session any type of command you will normally do
![](https://i.imgur.com/qUk9NlC.png)
- To exit the session, you just run `exit`and this will close the session and get you back to your base session.
	- You will see the message `[exited]`from **tmux**

![](https://i.imgur.com/ljvkpTL.png)

- I you want to open a new tmux session, but giving a meaninfull name (e.g. `Backups`), you can run any these two commands:

```
tmux new -s Backups
tmxu new-session -s Backup
```
![](https://i.imgur.com/YlH8TEj.png)
- You can create a new *windows* inside the current *session* typing `ctrl-b`and then `c`
![](https://i.imgur.com/tKTGFoN.png)
- To move between windows you can use:
	- `ctrl-b`then `n` --> to move to the next window
	- `ctrl-b`then `p` --> to move to the previous windows

### What is a Window

✅  **Window**  **= a full-screen terminal inside a session**

Think of a window like a **tab** in a terminal emulator. Each window runs its own shell (or program). You can have multiple windows inside one session.




### 🎨 Simple `tmux` Customization
- Learned some basics like:
  - Splitting panes: `Ctrl + b`, then `%` (vertical) or `"` (horizontal)
  - Switching between panes: `Ctrl + b`, then arrow keys
  - Detach session: `Ctrl + b`, then `d`
  - Reattach with: `tmux attach`

---


[Video: How to Use the Linux Screen Tool](https://www.youtube.com/@cbtnuggets)