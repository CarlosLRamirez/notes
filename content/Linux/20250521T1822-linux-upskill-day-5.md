---
title: "Linux Upskill Challenge: Day 5 - More or less…"
aliases:
  - "Linux Upskill Challenge: Day 5"
publish: true
tags:
  - linux
modified: 2025-05-26T12:17:16-06:00
created: 2025-05-21T18:22:52-06:00
---

## Introduction

This is my journal note following the [Linux Upskill Challenge: Day 5](https://linuxupskillchallenge.org/05/).

---
## 📄 `more` and `less` Commands

- `more` is a command that lets you view text files **one page at a time**. You press `space` to go to the next page. When you get to the end of the file, you cannot go back.
- `less` is similar but **more powerful** — you can scroll **up and down** with the arrow keys and search inside the file with `/`.
  - You can go to the beginning of the file with `g`, and to the end of the file with `G`.
  - You can access help with `h`.
  - You exit the file with `q`.
  - `less` doesn’t load the entire file into memory, so it’s great for **viewing large files**.

- Example of use:

```bash
more /etc/services
less /etc/services
```

> I experimented with these two commands that allow you to view the contents of text files. Certainly, they work in different ways. I think the winner is `less`, which is more flexible, but I imagine there are still situations where `more` does the job.

---

## 🧠 Tab Completion in Linux

- Tab completion lets you press `Tab` to **auto-complete commands, file names, or paths**.
- This is a feature provided by the shell: **bash**, **zsh**, and **fish** all support tab completion.
- If there’s ambiguity (multiple matches), pressing `Tab` twice shows a list of possibilities.
- Works with commands, paths, directories, users, etc.
- Saves time and avoids typing errors.

> I’m not good at memorizing commands, so this is definitely very useful when working in the command line.

---

## ⏳ The `history` Command

- The `history` command shows a **list of previously run commands** with line numbers.

```bash
history
```

> `history` is a built-in shell command.

- If you want to see, for instance, just the last 10 commands, you can type:

```bash
history 10
```

> This works well in the `bash` shell.

- Here’s a clever trick to navigate the history output:

```bash
history | less
```

- This uses a **pipe** (`|`) to pass the output of `history` as input to the `less` command.

> It’s a great example of the [UNIX philosophy](https://en.wikipedia.org/wiki/Unix_philosophy): *"using small tools that work together by chaining them."*

---

## 🔁 Repeating Commands

- You can repeat a command from history using `!<line-number>`, for example:

```bash
!102
```

> When you re-run a command with `!number`, it moves to the **end of the history queue** with a new number, and the **original number is overwritten**.

- You can also re-run the last command with:

```bash
!!
```

- Let’s say you submit a command that requires `sudo` but you forgot. Instead of retyping the entire command with `sudo`, you can just do:

```bash
less /etc/shadow
/etc/shadow: Permission denied
sudo !!
sudo less /etc/shadow
```

---

## 🔍 Search Command History with `Ctrl + r`

- Press `Ctrl + r` to start a **reverse search** through your history.
- Start typing part of a command, and it will autocomplete the most recent match.
- Press `Ctrl + r` again to go further back, or `Enter` to run it.

---

## 🕵️ Hidden Files (Dot Files)

- Hidden files in Linux start with a dot (`.`), so they’re often called **dot files**.
- You list them with:

```bash
ls -la
```

- Or:

```bash
ls -ltra
```

- Common dot files include `.bashrc`, `.bash_profile`, `.bash_history`, `.ssh/`, etc.
- These files store **personal configurations** in your home directory.

---

## 📂 Exploring Dot Files

- I used `less` to read the contents of dot files:

```bash
less ~/.bashrc
less ~/.bash_history
```

---

### ✏️ Editing with `nano`

- `nano` is one of the most widely used text editors in Linux because of its ease of use.
- I used `nano` to create a new file with a summary of the first 4 lessons.

Example:

```bash
nano lessons_summary.txt
```

![nano|450](https://i.imgur.com/iVTMQ3W.png)

> I was already familiar with the basic functions of `nano`, but I’ll need to explore more advanced features later.

---

## 🐚 Switching Shells: `bash`, `zsh`, `fish`

- Linux supports multiple shell programs beyond just `bash`.
- I tried out:
  - `zsh`: very popular with advanced users.
  - `fish`: user-friendly, with autocomplete and syntax highlighting out of the box.
  - `oh-my-zsh`: A popular **framework for managing Zsh configuration**, which adds plugins and themes easily.

- I wrote a separate note to describe the process of installing and switching shells:

- [[20250521T2100-how-to-change-your-shell-in-linux|How to change your shell in Linux]]

---

## 🧩 Terminal Multiplexers: `screen` and `tmux`

A **terminal multiplexer** is a command-line tool that lets you run and manage **multiple terminal sessions** within a single terminal window or SSH connection — and keep them running even if you disconnect.

### `screen`

- `screen` is a tool that lets you have multiple shell sessions on a server and leave them "in the background" while you work on something else.
- You can even log out of your server and get back to where you left off in a session.

> I confess it was hard to get it the first time, but after watching a YouTube video and asking ChatGPT, I kind of got it. I’ll put the references at the end of the note.

### `tmux`

`tmux` is a modern and more versatile alternative to `screen`. It allows you to organize your terminal into **sessions**, **windows**, and **panes**, making it super handy for multitasking, remote work, and persistent workflows. Once you get used to it, it's hard to go back.

I wrote a separate note with a quick introduction to tmux basics:

- [[20250523T0650-tmux-101-sessions-windows-panes|tmux 101: Sessions, Windows & Panes]]


## Related Notes
- Previous Lesson: [[20250508T1314-linux-upskill-day-4|My Linux Upskill Challenge: Day 4]]
- Next Lesson: [[20250526T1214-my-linux-upskill-challenge-day-6|My Linux Upskill Challenge: Day 6]]


---
## External Resources
- [Unix Less Command: 10 Tips for Effective Navigation](http://www.thegeekstuff.com/2010/02/unix-less-command-10-tips-for-effective-navigation/)
- [How To Use Bash History Commands and Expansions…](https://www.digitalocean.com/community/tutorials/how-to-use-bash-history-commands-and-expansions-on-a-linux-vps)
- [BASH Shell commands less](http://www.youtube.com/watch?v=ZQTt0LEoj3k)
- [Tab completion](https://www.youtube.com/watch?v=7V-fovVlCvA)
- [What are dotfiles?](http://thegeekyway.com/what-are-dotfiles/)
- [Nano editor tutorials](http://www.debianadmin.com/nano-editor-tutorials.html)
- [Bash Shell: Take Control of PS1, PS2, PS3, PS4 and PROMPT_COMMAND](http://www.thegeekstuff.com/2008/09/bash-shell-take-control-of-ps1-ps2-ps3-ps4-and-prompt_command/)
- [Bash Shell PS1: 10 Examples to Make Your Linux Prompt like Angelina Jolie](http://www.thegeekstuff.com/2008/09/bash-shell-ps1-10-examples-to-make-your-linux-prompt-like-angelina-jolie/)
- [Video: How to Use the Linux Screen Tool](https://www.youtube.com/@cbtnuggets)
