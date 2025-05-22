---
title: "Linux Upskill Challenge: Day 5 - More or less…"
aliases:
  - "Linux Upskill Challenge: Day 5"
publish: false
tags:
  - linux
modified: 2025-05-21T20:19:50-06:00
created: 2025-05-21T18:22:52-06:00
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

---
Great! Below is a clean, beginner-friendly **bullet-style notes** format based on the topics you mentioned from Lesson 5 — written like you were jotting things down while exploring each concept.

---

## 📝 **Linux Upskill Challenge: Day 5 Notes**

---

### 📄 `more` and `less` commands
- `more` is a command that lets you **view text files one page at a time**. You press `space` to go to the next page. When you gets to the end of the file, you cannot go back.
- `less` is similar but **more powerful** — you can scroll **up and down** with arrow keys, and search inside the file with `/`.
- `less` doesn't load the entire file into memory, so it's great for **viewing large files**.
- Example:  

```bash
  less /etc/services
```

---

### 🧠 Tab Completion in Linux
- Tab completion lets you press `Tab` to **auto-complete commands, file names, or paths**.
- This is a feature provided by the shell: **bash**, **zsh**, and **fish** all supports tab completion.
- If there’s ambiguity (multiple matches), pressing `Tab` twice shows a list of possibilities.
- Works with commands, paths, directories, users, etc.
- Saves time and avoids typing errors.

---

### ⏳ `history` Command
- The `history` command shows a **list of previously run commands** with line numbers.
- Here’s a clever trick to navigate the history output:
```bash
history | less
```
- This uses a **pipe** (|) to pass the output of `history` as input to the `less` command.
- It’s a great example of the [UNIX philosophy](https://en.wikipedia.org/wiki/Unix_philosophy): *"using small tools that work together by chaining them"*.

---

### 🔁 Repeating Commands
- You can repeat a command from history using `!<line-number>`, for example:
```bash
!102
```
- When you re-run a command with `!number`, it moves to the **end of the history queue** with a new number, and the **original number is overwritten**.
- You can also rerun the last command with:
```bash
!!
```

---

### 🔍 Search Command History with `Ctrl + r`
- Press `Ctrl + r` to start a **reverse search** through your history.
- Start typing part of a command, and it will autocomplete the most recent match.
- Press `Ctrl + r` again to go further back, or `Enter` to run it.

---
### 🕵️ Hidden Files (Dot Files)
- Hidden files in Linux start with a dot (`.`), so they’re often called **dot files**.
- You list them with:
```bash
ls -la
```
- Or:
```bash
ls -ltra
```
- Common dot files include `.bashrc`, `.bash_profile`, `.ssh/`, etc.
- These files store **personal configurations** in your home directory.

---

### 📂 Exploring Dot Files
- Use `less` to read the contents of dot files:
```bash
less ~/.bashrc
less ~/.bash_history
 ```

---

### ✏️ Editing with `nano`
- Used `nano` to create a new file with a summary of the first 4 lessons.
- Example:
```bash
nano lessons_summary.txt
```

---

### 🐚 Switching Shells: `bash`, `zsh`, `fish`
- Linux supports multiple shell programs beyond just `bash`.

[[20250516T1708-what-is-a-shell#How to change the shell?|How to change the shell?]]



- Tried out:
  - `zsh`: very popular with advanced users.
  - `fish`: user-friendly, autocomplete and syntax highlighting out-of-the-box.
- `oh-my-zsh`: A popular **framework for managing Zsh configuration**, adds plugins and themes easily.

---

### 🧩 Terminal Multiplexers: `screen` and `tmux`
- Multiplexers allow you to **run multiple terminal sessions in one window**, and keep them running even if you disconnect.
- `screen` is basic but widely available.
- `tmux` is more modern and customizable.

---

### 🎨 Simple `tmux` Customization
- Learned some basics like:
  - Splitting panes: `Ctrl + b`, then `%` (vertical) or `"` (horizontal)
  - Switching between panes: `Ctrl + b`, then arrow keys
  - Detach session: `Ctrl + b`, then `d`
  - Reattach with: `tmux attach`

---

Let me know if you want to convert this into a Markdown note with frontmatter or link it to your previous notes in a digital garden or Dev.to draft!