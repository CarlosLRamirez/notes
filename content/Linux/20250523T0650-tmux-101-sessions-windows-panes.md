---
created: 2025-05-23T06:50:14
modified: 2025-05-28T22:42:13-06:00
publish: true
tags:
  - linux
  - terminal
  - macos
title: "tmux 101: Sessions, Windows & Panes"
aliases:
  - "tmux 101: Sessions, Windows & Panes"
comments: true
---
## Introduction

Whether you're managing remote servers, working on long-running tasks, or just want a more efficient terminal workflow, **tmux** can be a game-changer.

This guide is a simple walkthrough of the basics — sessions, windows, panes — and how to navigate them. No fluff, just what you need to get started and feel more at home inside your terminal.

Let’s dive in 🧠💻
## Getting Started

First, check if `tmux` is installed on your system using:

```bash
which tmux
tmux -V
```

If it’s not installed, use one of the following commands depending on your operating system:

| Platform               | Install Command           |
| ---------------------- | ------------------------- |
| Arch Linux             | `sudo pacman -S tmux`     |
| Debian or Ubuntu       | `sudo apt install tmux`   |
| Fedora                 | `sudo dnf install tmux`   |
| RHEL or CentOS         | `sudo yum install tmux`   |
| macOS (using Homebrew) | `brew install tmux`       |
| macOS (using MacPorts) | `sudo port install tmux`  |
| openSUSE               | `sudo zypper install tmux`|

To quickly get started with **tmux**, just run:

```bash
tmux
```

This will launch a new shell session managed by **tmux**. You can think of it like opening a new terminal window or starting a new SSH session on the server.

You’ll notice a status line at the bottom of the screen. This line displays useful session and window information. For example:

- `[0]`: The **tmux session number** — useful when multiple sessions exist.
- `0`: The **window number** — this is the active tmux window you’re in.
- `bash`: The **active shell or process** running in the current window (* = active pane).
- `"ubuntu"`: The **window name or title** — often derived from hostname or manually set.

![](https://i.imgur.com/gaisNLq.png)
You can type in this session any command you normally would.

![](https://i.imgur.com/qUk9NlC.png)

To exit the session, just run `exit`. This will close the tmux session and return you to your base terminal session. You’ll see the message `[exited]` from **tmux**.

![Imagen|400|center](https://i.imgur.com/ljvkpTL.png)

## Open a New Named Session

If you want to open a new tmux session and give it a meaningful name (e.g., `Backups`), you can run either of these two commands:

```bash
tmux new -s Backups
tmux new-session -s Backups
```

![](https://i.imgur.com/YlH8TEj.png)

## tmux Prefix Key

- `ctrl-b` is the default **prefix** in **tmux**.
- The prefix tells **tmux** that the next key is a **tmux** command and should not be delivered to the shell.
- You can change the default prefix by editing the configuration file: `~/.tmux.conf`.

## Create a New Window

- A window in **tmux** is a full-screen terminal inside a session.
- Think of a window like a **tab** in a terminal emulator. Each window runs its own shell (or program). You can have multiple windows inside one session.
- To create a new _window_ inside the current _session_, type `ctrl-b` and then `c`.

![](https://i.imgur.com/tKTGFoN.png)

- Notice the status bar now shows two **windows** (`0:bash` and `1:bash`) belonging to the `Backups` **session**.
- The `M` indicates the main **window** in the session (the first one).
- The `*` indicates the current active **window**.

![](https://i.imgur.com/UpzzD3j.png)

## Set the Window Name

- By default, the name of a window is the same as the shell it launches. However, this name changes dynamically depending on the running program.
- In this example, I had 4 windows running different programs. Notice how the window name reflects the active program. Window `1` shows `bash` as the default.

![](https://i.imgur.com/crjlynO.png)

- To set a custom name for a window, use `ctrl-b` and then `,`.
- The prompt in the status line will show the current window name and allow you to change it.

![](https://i.imgur.com/MLJCBeR.png)
![](https://i.imgur.com/7qxewY3.png)
![](https://i.imgur.com/GF0mDOU.png)

---

## Moving Between Windows in the Same Session

To move between windows, you can use:

- `ctrl-b` then `n` → move to the next window
- `ctrl-b` then `p` → move to the previous window
- `ctrl-b` then a number (e.g. `0`, `1`, `2`) → move to a specific window

<div class="columns">
  <div class="column">
    <img src="https://i.imgur.com/obeWoC9.png" alt="Image 1" width="100%">
  </div>
  <div class="column">
    <img src="https://i.imgur.com/QFIn0tl.png" alt="Image 2" width="100%">
  </div>
</div>

## Detach the Current Session

To detach a session, press `ctrl-b` then `d`. This will return you to your regular terminal session, and you’ll see the message `[detached]`.

Detaching means that the session is still active, and anything running will continue in the background until you re-attach.

## List the Current Sessions

You can list available tmux sessions with:

```bash
tmux list-sessions
# or simply
tmux ls
```

Example output:

```bash
Backups: 2 windows (created Fri May 23 07:47:36 2025)
coding: 1 window (created Fri May 23 19:22:48 2025)
```

## Attach to a Specific Session

To re-attach to a specific session (e.g., `coding`), run:

```bash
tmux a -t coding
```

To re-attach to the most recent session:

```bash
tmux a
```

The full command is `tmux attach-session`, but you can shorten it to `tmux attach` or just `tmux a`.

When you re-attach to a session, you'll return to where you left off.

## Switch Between Sessions

You can switch between sessions without detaching and re-attaching manually. Use `ctrl-b` and then `s`.

- This will display a list of sessions and their windows.
- Navigate with the arrow keys and press `Enter` to select one.

😎 Cool, isn’t it?

![](https://i.imgur.com/u1fYFFo.png)

## Looking for Help

- To list all key bindings, use `ctrl-b` then `?`.
- You can also check the manual with:

```bash
man tmux
```

---
## Splitting the Screen with Panes

Another cool feature of **tmux** is the use of panes. A **pane** is a **subdivision of a window** — like a split view inside your terminal.

Each pane runs its **own shell** and is fully interactive. You can run different commands or programs in each one, all side-by-side within the same window.

Sometimes, instead of creating new windows, you may want to split your current window into multiple **panes**. This is useful when you want to monitor logs in one pane, edit files in another, and maybe run commands in a third — all in the same window.

You can split the screen either **vertically** or **horizontally**:

- To **split vertically** (side by side), press: `ctrl-b` then `%`
- To **split horizontally** (top and bottom), press: `ctrl-b` then `"`

You can also combine these splits to create your own custom setup. 🤓

![](https://i.imgur.com/lgsa212.png)

Each pane behaves like an independent terminal — you can run commands, change directories, and even launch editors or scripts in each one.

## Moving Between Panes

To move between panes, use:

- `ctrl-b` then arrow keys (← ↑ ↓ →)

You can also use:

- `ctrl-b` then `o` → cycle through panes in order
- `ctrl-b` then `;` → switch to the last active pane

> [!TIP]
> If you're working on macOS, make sure that the `ctrl` + arrow key bindings are not already used by the system.  
> In my case (macOS Sequoia 15.5), those keys were being used by Mission Control, so I had to disable them — as shown in the following image:
>
> ![](https://i.imgur.com/0Z7kQfv.png)

## Resize Panes

You can resize the panes to give more space to one or another.

- Press `ctrl-b`, then hold `ctrl` and use the arrow keys to resize.

This allows you to enlarge your main work area and keep side panes for monitoring or logs.

![](https://i.imgur.com/15lNQv4.png)

## Close a Pane

To close a pane, simply type `exit` in that pane — it will disappear, and the remaining panes will adjust automatically.

---
## External Resources
- [Video: Tmux Tutorial  for Begineers](https://youtu.be/U41BTVZLKB0?si=HNvyFL8CLzi1zb94)

---
**Nota diaria:** [[2025-05-23]]
