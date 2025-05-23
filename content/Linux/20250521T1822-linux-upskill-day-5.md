---
title: "Linux Upskill Challenge: Day 5 - More or less…"
aliases:
  - "Linux Upskill Challenge: Day 5"
publish: true
tags:
  - linux
modified: 2025-05-23T06:49:50-06:00
created: 2025-05-21T18:22:52-06:00
---
## Introduction

This is my journal note following the [Linux Upskill Challenge: Day 5](https://linuxupskillchallenge.org/05/).

---
- The `more` and `less` command
- How Tabs completion works in Linux, what happe when there is ambiguity?
- `history` command
- repeat a command with `!<line number>` and how the command get at the begining of the queue, but the previous number get lost.
- repeat a command -  use of `ctrl+r` to search for any part of a previous command
- hidde files are also called dot files because they start with a dot(.), you list them with `ls -la` or `ls -ltra` 
- The most common use of a "dot file" is to keep personal settings in the home directory
- the use of `less` to look the contents of `.bashrc`, `.bash_history`
- the use of `nano` to create a file with the summary of the last 4 lessons
- Changing the `bash` terminal to `zsh`, `fish` and `oh-my-zsh`
- Terminal multiplexers: **screen** and **tmux**
- some simple examples of how to customize your tmux

## 📄 `more` and `less` commands

- `more` is a command that lets you view text files **one page at a time**. You press space to go to the next page. When you get to the end of the file, you cannot go back.    
- `less` is similar but **more powerful** — you can scroll **up and down** with the arrow keys and search inside the file with `/`. 
	- You can go to the beginning of the file with `g` , and to the end of the file with `G`. 
	- You can search for help with `h`
	- You exit the file with `q`.
	- `less` doesn’t load the entire file into memory, so it’s great for **viewing large files**

- Example of use:

```bash
  more / etc/services
  less /etc/services
```

> I experimented with these two commands that allow you to view the content of text files. Certainly, they work in different ways. I think the winner is less, which is more flexible, but I think there should be situations where more does the work.

---

## 🧠 Tab Completion in Linux
- Tab completion lets you press `Tab` to **auto-complete commands, file names, or paths**.
- This is a feature provided by the shell: **bash**, **zsh**, and **fish** all supports Tab completion.
- If there’s ambiguity (multiple matches), pressing `Tab` twice shows a list of possibilities.
- Works with commands, paths, directories, users, etc.
- Saves time and avoids typing errors.

> I’m not good at memorizing commands, so this is definitely very useful when you’re working in the command line.

---
## ⏳ The `history` Command
- The `history` command shows a **list of previously run commands** with line numbers.
```bash
history
```

> `history` is a built-in shell command.

- If you just want, for instance to show the last 10 commands, you can type:
	```bash
	history 10
	```

> this only works well in bash shell

- Here’s a clever trick to navigate the history output:
```bash
history | less
```
- This uses a **pipe** (|) to pass the output of `history` as input to the `less` command.

 > It’s a great example of the [UNIX philosophy](https://en.wikipedia.org/wiki/Unix_philosophy): *"using small tools that work together by chaining them"*.

---

## 🔁 Repeating Commands
- You can repeat a command from history using `!<line-number>`, for example:
```bash
!102
```

> When you re-run a command with `!number`, it moves to the **end of the history queue** with a new number, and the **original number is overwritten**.

- You can also rerun the last command with:
```bash
!!
```

- Let said you submit a command that requieres to `sudo` but you forgot, instead of submit the command again preceding `sudo` you can use `sudo !!`, like this example:

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
- Common dot files include `.bashrc`, `.bash_profile`,  `.bash_history`,`.ssh/`, etc.
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

- `nano` is one of the most widely used text editors in Linux because of its ease of use
- I used `nano` to create a new file with a summary of the first 4 lessons.
- Example:
```bash
nano lessons_summary.txt
```


![nano|450](https://i.imgur.com/iVTMQ3W.png)


> I was already familiar with the basic functions of nano, but I will have to delve into more advanced functions later.

---

## 🐚 Switching Shells: `bash`, `zsh`, `fish`

- Linux supports multiple shell programs beyond just `bash`.
- I tried out:
  - `zsh`: very popular with advanced users.
  - `fish`: user-friendly, autocomplete and syntax highlighting out-of-the-box.
  - `oh-my-zsh`: A popular **framework for managing Zsh configuration**, adds plugins and themes easily.

- I wrote this as a separate note to describe the process to install and change the shell
	- [[20250521T2100-how-to-change-your-shell-in-linux|How to change your shell in Linux]]

---

## 🧩 Terminal Multiplexers: `screen` and `tmux`

A **terminal multiplexer** is a command-line tool that lets you run and manage **multiple terminal sessions** within a single terminal window or SSH connection, and keep them running even if you disconnect.
### `screen`
- `screen` is a tool that let you have multiple shell sessions on a server, and let them "in the background", while you work in another thing. 
- You can even logout for your server, and get back when you left on a session.

> I confess it was hard to get it the first time, but after watching a YouTube video and asking ChatGPT, I kind of got it. I’ll put the references at the end of the note.

### `tmux`

[[20250523T0650-tmux-basic-guide]]
