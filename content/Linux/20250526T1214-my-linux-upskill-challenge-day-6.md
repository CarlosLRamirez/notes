---
created: 2025-05-26T12:14:57
modified: 2025-05-28T22:42:16-06:00
publish: true
tags:
  - linux
title: "My Linux Upskill Challenge: Day 6"
aliases:
  - "My Linux Upskill Challenge: Day 6"
zettel-type:
  - permanent
status:
  - finished
comments: 
---
## Introduction

This is my journal note following the [Linux Upskill Challenge: Day 6](https://linuxupskillchallenge.org/06/).

## Editing Text Files with `Vi`

- Part of being a Linux system administrator is being **skilled at editing text files**.
- `nano` and `pico` are for beginners! (noobs 🙂)...
- Grown-ups usually use `vi`❗ — a text editor developed in the 70s by Bill Joy.
- `Vim` is the modern version (it’s been around for 20+ years), and it’s the **de facto** text editor on servers. Knowing how to use it — or at least how to exit it — is a must for any sysadmin.
- Vim stands for [Vi](https://vimhelp.org/intro.txt.html#Vi) IMproved.
- In 2014, **NeoVim** appeared — a fork of Vim that is more customizable and backed by a large community of users (also, kind of a hype!).
- Having said that, the words `Vi` and `Vim` are used interchangeably in this document, but the difference between each has already been clarified.

---
## Vim 101

### Check the version of `vi`installed

You normally run `vi`command, however probably what you have installed is `vim`, to check the version run:

```bash
vi --version
```

You should obtain something like this:

```bash
carlos@ubuntu:~$ vi --version
VIM - Vi IMproved 9.1 (2024 Jan 02, compiled Apr 01 2025 20:12:31)
Included patches: 1-16, 647, 678, 697
Modified by team+vim@tracker.debian.org
Compiled by team+vim@tracker.debian.org
...
```

Normally `vim`is installed by default on every modern Linux distribution, in case you need to installed it you can use in Ubuntu using

```bash
sudo apt install vim
```

For non-Debian based Linux distribution you will need to use another packet manager.

---
### Vi modes

- There are two "modes" when working with Vim:
    - "normal mode"
    - "insert mode"
- Sometimes, it's very hard to know which mode you're currently in, because there's very little — or no — information on screen that could give you a clue.
- When in doubt, just remember this:

> [!TIP]
> *"Press ESC twice or more to return to normal mode"*

- The "normal mode", also called "command mode", is used to enter commands.
- The "insert mode" is used for writing text.

---
### Open and exit without saving

- Make a copy of an existing text file to your `home`, so you can edit it. Open it with Vim:

```bash
cd
pwd
cp -v /etc/services testfile
vim testfile
```

- You will see the content of the file open in the editor. However, there is no "on-screen menu" like what you're used to with `nano`.
![](https://i.imgur.com/lBMfP9Q.png)
- By default, Vim opens the file in "normal mode", so if you enter a key, it will be interpreted as a **command**, not as a character you want to insert.
- The next key you press in "normal mode" will determine the behavior of Vim.
- To be 100% sure you're in normal mode, press `ESC` twice.
- To exit the file without saving any changes, while in "normal mode", type `:q!` and press Enter.

![](https://i.imgur.com/uelrJGn.png)

> Believe me! This will be a vital skill when you're taking your first steps.

![Vim Joke|450](https://cdn.thenewstack.io/media/2022/08/0ae25624-exit-vim-the-arrival-way-6n632sipjag61-1024x692.jpg)

---
### Navigating in the file

- You can navigate in the file using the keys: `h`, `j`, `k`, and `l`. This is the traditional method since `vi`.
- The arrow keys may work as well; however, it's important to get familiar with the traditional keys, because you may encounter systems where the arrow keys don’t work.
    - `h` → moves cursor **left**
    - `j` → moves cursor **down**
    - `k` → moves cursor **up**
    - `l` → moves cursor **right**
- Other useful commands in "normal mode" to navigate through the file:
    - `G` — moves to the bottom of the file
    - `gg` — moves to the top of the file

---
### Delete a single character or word
- Navigate througt the file and press `x`  to delete the character under the cursos.
- Press `X` to delete the character before cursor
- To delete the whole word use `dw`

---
### Delete a line
- To delete a single line, put the cursor in the line you want to delete an press `dd` in normal mode.

```vim
dd
```

---
### Delete multiple lines in one stroke

- I moved down a few lines in the file and pressed `3`, then `3` again, then `d`, and `d` again — and 33 lines were deleted all at once 🙀
- To delete multiple lines at once in "normal mode", use:

```vim
<num-of-lines>dd
```

- Where `<num-of-lines>` is the number of lines you want to delete.

---
### Undo the last change (undo)

- Fortunately, I was able to undo the deletion by entering the following command in "normal mode". This command will undo the last change:

```vim
u
```

---
### Finding things

- To search for the word "sun", type `/sun` in "normal mode" and Vim will find the first instance in the file.
- Hit `Enter`, then press `n` repeatedly to go through all the occurrences.

---
###  Cut and Paste

- To **cut** a line, place the cursor anywhere on the line and press `dd` (in *normal mode*). This deletes the entire line and stores it in Vim's clipboard (called the "*unnamed register*").
- To **paste**, press `P` (uppercase). The cut line will be inserted **above** the current line — everything below will move down.
- To cut multiple lines at once, enter `<number-of-lines>dd` in *normal mode*. For example, `5dd` will delete 5 lines starting from the current one, and store them in Vim's clipboard.
- To **paste** all those lines, do the same as before: press `P` (uppercase), and all the lines will be inserted **above** the current line — everything else will shift downward.
- **Pasting** with `p` (undercasse) also works, the difference is the text will be pasted **below** the current line, meaning that everything else will shift upwards.

---
### Inserting Text

- You can place the cursor anywhere in the file and press `i` in Normal mode. This will allow you to insert any text you want.

> Finally, it's behaving like a normal text editor!!

- This puts you in "Insert Mode", and you'll notice an `-- INSERT --` message in the status bar of `Vim`.

![](https://i.imgur.com/oj3R3sE.png)

- To return to Normal mode, just press `ESC` twice.

---
### Copy (Yank) and Paste

- There is a third mode in Vim, called "Visual Mode", which lets you move the cursor while selecting text.
- To enter Visual Mode, press `v`, then move the cursor to select the desired text. Press `y` to copy the selection to the clipboard.
- Use `P` to paste **before** the cursor or `p` to paste **after** the cursor.
- To yank (copy) the current line, use `yy`.
- To yank 3 lines, use `3yy`.
- To yank the word under the cursor, use `yaw`.

> "Yank" is the term in Vim for "Copy"

---
### Saving Changes

- Once you're done and want to save your changes without exiting, you "write" the file using this command in Normal mode:

    ```vim
    :w
    ```

- If you want to save **and** exit Vim:

    ```vim
    :wq
    ```

---
### Next Steps

- There's a built-in interactive tutorial to help you learn Vim basics, called `vimtutor`. To try it, just run:

    ```bash
    vimtutor
    ```

- It typically takes about 30 minutes to complete.
- It's recommended to do it regularly over a couple of weeks to build solid Vim skills.
- Also, it's a good idea to start using `vim` (or `vi`) every time you need to edit a file from now on.
- Everything described here also works with NeoVim, so I’ll start using it and exploring it. There's also a built-in tutorial in NeoVim called `:Tutor` — I’ll try it when I get the chance.
- I currently use Obsidian to edit my notes, but I might explore NeoVim as an alternative note editor. Although... I've seen that many who go down that path never come back the same. Hopefully, I won’t regret it 🙂

---
## Related Notes
- Previous Lesson: [[20250521T1822-linux-upskill-day-5|Linux Upskill Challenge: Day 5]]
- Next Lesson: [[20250527T0715-my-linux-upskill-challenge-day-7|My Linux Upskill Challenge: Day 7]]

---
## External Resources
- [Getting more out of Vim](https://www.linux.com/news/sysadmin-sysadmin-getting-more-out-vim)
- [Here is why `vim` uses the _hjkl_ keys as arrow keys](http://www.catonmat.net/blog/why-vim-uses-hjkl-as-arrow-keys/)
- [Graphical vi-vim Cheat Sheet and Tutorial](http://www.viemu.com/a_vi_vim_graphical_cheat_sheet_tutorial.html)
- [Vi - Vim Tutorial](http://www.youtube.com/watch?v=71YTkxUNwmg) (video)
- [How to Copy, Cut and Paste in Vim / Vi](https://linuxize.com/post/how-to-copy-cut-paste-in-vim/)