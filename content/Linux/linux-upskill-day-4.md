---
created: 2025-05-08T13:14:29
modified: 2025-05-18T11:18:47-06:00
title: "Linux Upskill Challenge: Day 4"
aliases:
  - "My Linux Upskill Challenge: Day 4"
publish: true
tags:
  - linux
---
> [!STATUS]
> This is still a work in progress

## Introduction

I’ve started following the [Linux Upskill Challenge](https://linuxupskillchallenge.org/) to sharpen my Linux knowledge and hands-on skills. It’s a series of 21 lessons designed to be completed daily, but I’ll be going through them at my own pace. I’ll share my journey and notes here as I move forward.

---
## Day 4 - Installing software, exploring the file structure
- **URL:** https://linuxupskillchallenge.org/04/
- **Previous Lesson:**  [[linux-upskill-day-3|My Linux Upskill Challenge: Day 3]]

--- 
## Installing packages in Ubuntu Linux

- Think packages like programs or applications (apps) that you install on you phone.
- Like the "App Store" or the "Market" on your phone, in Linux we call them **Package Managers**.
- One of the most popular (if not the most used) package managers in Ubuntu (and other Linux distributions based on Debian) is **apt**. 
- APT stand for "Advanced Package Tool" and is used to install, update, and manage software packages.  
- For example, to install a package, you can use the command:  
	```bash
	sudo apt install <package-name>
	```
- To update the list of available packages and their versions, run:  
	```bash
	sudo apt update
	```
- And to upgrade all installed packages to their latest versions:  
	```bash
	sudo apt upgrade
	```

---
- If you have a description of what the package does, you can search for it using the `apt search` command. For example: 
- This will display a list of packages matching the search term along with a brief description of each.
```
mc/noble-updates,now 3:4.8.30-1ubuntu0.1 arm64 [installed]
  Midnight Commander - a powerful file manager
```
- Here we can see `mc` is the **package name** for the [Midnight Commander](https://midnight-commander.org/) package (application)
- To install the package with **apt** you need to use sudo, unless you're already logged with `root`.
```
 sudo apt install mc
```
---
- Package managers like **apt** make it easy to handle dependencies and ensure your system stays up-to-date.
- There are other package managers available for Debian-based Linux distributions.
- For Red Hat-based Linux distributions, the equivalent of `apt` is `yum`. (but that's a completely different story! 🙂)

---
Now we have installed Midnight Commander we can use  his retro interface and esally navigate on Linux File System (and look cool in the process 😎) 

![[Pasted image 20250517114702.png]]

---
## Linux File System
- The Linux operating system has a standard file system structure. At first, it might seem a bit intimidating—especially if you're only familiar with Windows, where you have the C: drive, D: drive, and various folders within each. **With Linux, it's a totally different beast.**
- The Filesystem Hierarchy Standard (FHS) defines the structure of file systems on Linux and other UNIX-like operating systems. However, Linux file systems also contain some directories that aren't yet defined by the standard.
- If you want to read the official manual of the file system hierarchy type `man hier`

### The `/` - Root Directory
- Everything on your Linux system is located under the `/` directory, also called *root* directory. (don't confuse with the `/root` directory)
- In Linux you don't have Drive Letters, like C: or D:, **everything** is under `/`, even if you have diferent physical  drives and partitions, all of them will be under `/`.

---
### The `/bin` directory
- The `/bin` directory contains all the essential **system binaries** that Linux needs to function — even when it boots into a special recovery state called **single-user mode** (you can think of it like Safe Mode in Windows).
	- [[20250518T1034-what-is-a-binary-in-linux|What is a Binary in Linux?]]
- It contains important core command-line tools that must be available even if no other filesystems are mounted yet — such as `ls`, `cp`, `mv`, and the `bash` shell.
- It traditionally has two sibling directories: `/sbin` (for essential system binaries for administrators) and `/usr/bin` (for general user binaries that are not critical for boot).

---
### The `/sbin` directory
- The `/sbin` directory contains **essential system administration binaries** used for system booting, repairing, or managing services — like `fsck`, `reboot`, and `ifconfig`.
- These tools are generally intended for **the root user or administrators**, and may not be in a regular user’s `$PATH`.

---
### The `/usr/bin` directory

- 📦 The `/usr/bin` directory contains **most user-level commands and applications** that are not essential for booting or single-user mode.
- It’s often much larger than `/bin` and includes tools like `git`, `nano`, `python`, `gcc`, etc.


> [!WARNING]
> ⚠️ Modern Linux systems often **merge `/bin` and `/usr/bin`** using symbolic links.
> So the physical separation may no longer exist — but conceptually, this is still true.

---

### The `/etc` folder
- Key configuration files are stored here, and on subdirectories inside
- Must of the files here are simple text files
- Some interesting files under `/etc`
	- `/etc/passwd`: contains basic  information of the account for each  user in the system (like username, UID, shell, etc..) , the passwords are stored in another file
	- `/etc/ssh/sshd_config`: this is the configuration file for the SSH deamon (`sshd`) (aka program), which acts as the *server* for the SSH connection. (the *client* is on your computer! 💻).

### The `var/log` folder
- Must of the files here are simple text files
- Some interesting files under `/var/log`
	- `/var/log/auth.log`: It's a log file that captures all the authentication events in the system


##  Questions 🤔
- What actually means the "default shell" for a user in `/etc/passwd` ? 
- What is actually a "shell"?
	- [[what-is-a-shell|What a Shell is?]]
	- [[what-happens-when-you-connect-to-a-server-via-ssh-and-run-a-command|What Happens When You Connect to a Server via SSH and Run a Command?]]
	
## Related Notes
- [[linux-upskill-day-3|My Linux Upskill Challenge: Day 3]]
- [[linux-upskill-day-5|My Linux Upskill Challenge: Day 5]]

