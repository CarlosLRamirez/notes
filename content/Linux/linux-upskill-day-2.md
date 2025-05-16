---
title: "My Linux Upskill Challenge: Day 2"
date: 2025-05-01
aliases:
  - "My Linux Upskill Challenge: Day 2"
publish: true
modified: 2025-05-15T23:07:48-06:00
created: 2025-05-01T20:09:07-06:00
tags:
  - linux
---
## Introduction
I’ve started following the [Linux Upskill Challenge](https://linuxupskillchallenge.org/) to sharpen my Linux knowledge and hands-on skills. It’s a series of 21 lessons designed to be completed daily, but I’ll be going through them at my own pace. I’ll share my journey and notes here as I move forward.

---
## Day 2 - Basic navigation
- **URL:** [https://linuxupskillchallenge.org/02/](https://linuxupskillchallenge.org/02/)
- **Previous Lesson:**  [[linux-upskill-day-1|My Linux Upskill Challenge: Day 1]]

---
## **RTFM**

- In this lesson, I learned a new acronym: **RTFM** – “Read the F***ing Manual.” 😆  
- When you're learning and using Linux (or anything else) and have questions, of course, you're always free to Google it or ask ChatGPT.  
- However, the best system administrators are those who first **RTFM**.

> **This is something we’re starting to forget nowadays!**

- Linux systems offer several ways to access documentation. But if—after searching—you still need help, you can always [ask a well-written question](https://opensource.com/life/16/10/how-ask-technical-questions) in forums, Reddit, Discord, or other communities.

> **I think this is even more relevant today, especially when writing good prompts in the “GPT era.”**

---
### **Looking for Documentation**

- The `man` command is a great place to start—most installed applications have their own manual.  
- For instance, you can find the manual for these commands:
  - `man cp`
  - `man mv`
  - `man grep`
  - `man ls`
  - even `man man` 🙂

- That said, `man` output can be overwhelming for some commands or too minimal for others. That’s where `tldr` comes in—it provides simplified, community-written man pages for common Linux (and other OS) commands.

---

- `tldr` is another tool for viewing documentation. I installed it using `sudo apt install tldr`, but it didn’t work right away on my EC2 instance.  
- I got the following error:

```sh
tldr: /home/ubuntu/.local/share/tldr: createDirectory: does not exist (No such file or directory)
```

- I fixed it with these two commands:

```sh
mkdir -p ~/.local/share/tldr
tldr --update
```

- The second command pulls the latest pages from the official GitHub repo (make sure your server has internet access!).  
- I tried `tldr` with the same commands as before, and yes—it showed me much more simplified info.

---

- I also learned about the `apropos` command, which is equivalent to `man -k`.  
- Both are useful when you kind of know what a command does and want to search for keywords in the manual.  
- For example, if you search for the phrase *"remove file"* using `apropos "remove file"`, you’ll get results like this:

```sh
ubuntu@ip-172-31-92-220:~$ apropos "remove file"
git-rm (1)           - Remove files from the working tree and from the index
rm (1)               - remove files or directories
ubuntu@ip-172-31-92-220:~$ man -k "remove file"
git-rm (1)           - Remove files from the working tree and from the index
rm (1)               - remove files or directories
```

---

- Some commands—especially shell built-ins—don’t have `man` pages.  
- For those, you can use the `help` command instead.  
- Example: use `help export` instead of `man export`.  
- I found exceptions like `echo`, which works with both `man echo` and `help echo`.

- The best way to check if a command is a shell *built-in* is to use the `type` command.

---

- Lastly, there's the `info` command. It gives **more** detailed documentation, sometimes written in a tutorial style and with hypertext navigation.

---

## **Navigate the File Structure**

- I discovered a command that gives you documentation about the Linux file system: `man hier`.
- `/` is the top-level directory (called **root**) for all other folders.
- 🧭 To find out where you are in the file system, use `pwd`—this is like your GPS in Linux. 🛰
- By default, you'll start in the `/home/<user>` directory, unless you're logged in as `root`, in which case you'll be in `/root`.

- You can move between directories using `cd`:
	- `cd ..` takes you "up" one level.
	  - `cd .` keeps you in the same folder. 🤔

- You can use either **relative** or **absolute** paths to move around:
	- For example, if you first do `cd /var`, then both `cd log` and `cd /var/log` will get you to the same place.

- Just running `cd` returns you to your home directory, as does `cd ~`.

- You can also use `~` as a shortcut to move into folders inside your home directory from anywhere.  
	- For instance, if you’re in `/var/log` and want to go to `/home/ubuntu/data/example`, just use `cd ~/data/example`.

```sh
ubuntu@ip-172-31-92-220:/var/log$ cd ~/data/example/
ubuntu@ip-172-31-92-220:~/data/example$
```

---

### **Listing Files in a Folder**

- I used `ls` with different options ("*switches*") to list files.  
  For example: `ls`, `ls -l -L`, and `ls -l -t -r -a` (or just `ls -ltra`).

- Files or folders that start with a `.` are hidden. Use `ls -a` to see them.

- You can combine switches and provide a folder path:  
  e.g., `ls -ltra /var/log`

- Entries that start with `d` are directories.  
- Some terminals show these in a different color—if not, try `--color=auto`.

```sh
ubuntu@ip-172-31-92-220:~/data/example$ ls -ltra /var/log
...
```

---

## **Basic Directory Manipulation**

- I created a new folder with `mkdir test`, then moved into it with `cd test`.  
- You can repeat this to build nested folder structures.

```sh
mkdir test
cd test
```

- To move a folder into another directory, I used `mv`:
- Created a folder `test2`, then moved `example` from `test` to `test2`.

```sh
mv test/example test2
```
- To remove an **empty** directory, use `rmdir`.  
- To remove a **non-empty** one, use `rm -r`.

---

## **Basic File Manipulation**

- To create a new (empty) file: `touch newfile.txt`
- To move it: `mv newfile.txt test2`
- To delete it: `rm`

```sh
touch newfile.txt
mv newfile.txt test2
rm test2/newfile.txt
```

---

## **A Bit More Advanced Directory Navigation (Stack-Based)**

- I learned about `pushd` and `popd`, which let you move between folders using a **stack** (LIFO order).
- It's different from `cd ..`—with `pushd` you can hop to `/etc`, then `/var/log`, and then jump back in reverse order using `popd`.
- Use `dirs` to see the current directory stack.

```sh
pushd /etc
pushd /var/log
dirs
popd
popd
```

- If you run `pushd` without arguments, it swaps your current and previous directories—similar to `cd -`, but it remembers your path history.

> So these are my notes for the [**Day 2 – Basic Navigation**](https://linuxupskillchallenge.org/02/#wrap) of the Linux Upskill Challenge.

---
## Additional Resources

- [Difference between help, info and man command](https://unix.stackexchange.com/questions/19451/difference-between-help-info-and-man-command)  
- [GNU Texinfo](https://www.gnu.org/software/texinfo/)  
- [Explore the Linux File System](https://www.digitalocean.com/community/tutorials/how-to-use-cd-pwd-and-ls-to-explore-the-file-system-on-a-linux-server)  
- [Linux File System – YouTube](https://www.youtube.com/watch?v=2qQTXp4rBEE)  
- [Simple Terminal Commands on Ubuntu – YouTube](http://www.youtube.com/watch?v=CGBsurVdLGY)  
- [Solaris Unix Commands](http://www.gsp.com/support/virtual/admin/unix/solaris/commands.html)

---
## Related notes
- [[linux-upskill-day-1|My Linux Upskill Challenge: Day 1]]
- [[linux-upskill-day-3|My Linux Upskill Challenge: Day 3]]

