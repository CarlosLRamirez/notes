---
created: 2025-05-08T13:14:29
modified: 2025-05-16T19:04:59-06:00
title: My Linux Upskill Challenge - Day 4
aliases:
  - My Linux Upskill Challenge - Day 4
publish: true
tags:
  - linux
---
> 📅 Created on: {{ created }}  
> 🛠️ Last updated: {{ modified }}

## Introduction

I’ve started following the [Linux Upskill Challenge](https://linuxupskillchallenge.org/) to sharpen my Linux knowledge and hands-on skills. It’s a series of 21 lessons designed to be completed daily, but I’ll be going through them at my own pace. I’ll share my journey and notes here as I move forward.

---
## Day 4 - Installing software, exploring the file structure
- **URL:** https://linuxupskillchallenge.org/04/
- **Previous Lesson:**  [[linux-upskill-day-3|My Linux Upskill Challenge: Day 3]]

--- 

## Linux File System

- The Linux operating system has a standard file system structure. At first, it might seem a bit intimidating—especially if you're only familiar with Windows, where you have the C: drive, D: drive, and various folders within each. **With Linux, it's a totally different beast.**
- If you want to read the official manual of the file system hierarchy type `man hier`
### `/etc`
- Key configuration files are stored here, and on subdirectories inside
- Must of the files here are simple text files
- Some interesting files under `/etc`
	- `/etc/passwd`: contains basic  information of the account for each  user in the system (like username, UID, shell, etc..) , the passwords are stored in another file
	- `/etc/ssh/sshd_config`: this is the configuration file for the SSH deamon (`sshd`) (aka program), which acts as the *server* for the SSH connection. (the *client* is on your computer! 💻).
	- `/var/log/auth.log`: It's a log file that captures all the authentication events in the system

#### Questions
- What it means with the "shell" or the "default shell" for a user? What is actually a "shell"?
	- [[what-is-a-shell|What a Shell is?]]
	- [[what-happens-when-you-connect-to-a-server-via-ssh-and-run-a-command|What Happens When You Connect to a Server via SSH and Run a Command?]]
	
### `var/log`
- Must of the files here are simple text files
- Some interesting files under `/var/log`
	- `/var/log/auth.log`
	- 


## Related Notes
- [[linux-upskill-day-3|My Linux Upskill Challenge: Day 3]]
- [[linux-upskill-day-5|My Linux Upskill Challenge: Day 5]]

