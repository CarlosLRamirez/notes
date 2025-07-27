---
id: "20250619T2008-my-linux-upskill-challege-day-12 aliases: \"My Linux Upskill Challenge: Day 12\""
aliases: []
tags:
  - linux
  - blog
comments: true
created: 2025-06-19T20:08:46
modified: 2025-07-25T07:54:59-06:00
publish: true
title: "My Linux Upskill Challenge: Day 12"
---

This is my technical journal note following the Lesson 12 of the Linux Upskill Challenge by Steve Brorens / Livia Lima

**Disclaimer:** This is premium content written with care by an actual human 👨! Struggling in the middle of the curve of getting used to writing on Neovim, which English is not his first language 🫶.

---

## Introduction

**This lesson is about Transferring Files in Linux**.

There exists a wide range of ways a Linux server can share files, including:

- SMB: the Microsoft's file sharing system
- AFP: Apple's file sharing, never heard before
- WebDav: Sharing over web (http) protocol
- FTP: The old, legacy and insecure File Transfer Protocol
- scp: Simple support for copying files
- rsync: Fast, very efficient file copying
- SFTP: **SSH File Transfer Protocol**, it allows to access and copying files over SSH protocol (Despite the name, at technical level it's completely different to the traditional FTP)

## SFTP

The SSH File Transfer Protocol (as defined in the [IETF draft](https://datatracker.ietf.org/doc/html/draft-ietf-secsh-filexfer-02)) it's the first options for managing files on a remote Linux server. Here are some of its main advantages:

- No extra setup is required on your server
- Provides strong built-in encryption
- Allows browsing through the directory structure
- You can create and delete folders

If you are able to logging to a server via *ssh*, you'll also be able to use SFTP, because both use the same underlying protocol.

On the other hand, setting up your server for any other file transfer protocols usually involves some extra configuration. More importantly, enabling additional protocols and services, often means opening extra ports, which increases you server  "attack surface".

Traditional FTP is still used in some places, but it’s important to remember that FTP transmits both login credentials and data in plain text. This means anyone who intercepts the traffic could easily read everything — including your username and password.

## SFTP on Linux

- SFTP requires both a server and a client to function.
- Most Linux distributions include the necessary software to act as both an SFTP server and client.

### SFTP Server on Linux

- Most modern Linux distributions use OpenSSH as their SSH server.
- Since SFTP is a built-in subsystem of OpenSSH, there’s no need to install a separate FTP server.
- You can confirm this in the SSH server configuration file (`/etc/ssh/sshd_config`) by looking for the following line:

```bash
Subsystem       sftp    /usr/lib/openssh/sftp-server
```

### SFTP Client on Linux

- The OpenSSH client includes the `sftp` command
- If you're using a Linux with desktop, you already have a FTP Client on the file manager.
- This note is about Linux, but in case you need to connect via SFTP to a Linux Server from a Windows or Mac computer, you have several options to install as a SFTP clients, such as:
  - WinSCP or FileZilla - for Windows
  - CyberDuck or FileZilla - for MacOs

---

## SFTP Operations

### Start a SFTP connection to a server

- Because SFTP and SSH use the same protocol at the background, you can authenticate using the **same SSH key**. Basically you only need to change the command from `ssh` to `sftp` as follows:

```bash
❯ sftp -i ~/keys/linux.pem carlos@192.168.1.29
Connected to 192.168.1.29.
sftp>
```

- The prompt is different than a SSH session: `sftp>` .
- You can close the SFTP session with `quit`

### Local vs Remote

- You’ll often need to check or manipulate files and directories both on your local machine and on the remote server — for example, running commands like `pwd`, `ls`, `mkdir`, etc.
- Instead of constantly switching back and forth between windows or panes, fortunately, there’s a way to differentiate commands that apply to your local machine by simply prefixing them with the letter `l`.
- For instance with `pwd` we can check the current directory on the remote server

```bash
sftp> pwd
Remote working directory: /home/carlos
```

- And `lpwd` shows you where are you located on your machine.

```bash

sftp> lpwd
Local working directory: /Users/carlos.ramirez/tutorial
```

- This also works for `ls` and... yes, your right: `lls`, as we can see here:

  - Remote

  ```bash
  sftp> ls
  code         listing.txt  summary.md   testfile
  ```
  
  - Local
  
  ```bash
  sftp> lls
  another-file.txt        local-file.md
  ```

### Upload a local file to server

- Use the command `put` to upload a local file to a remote server via FTP

```bash
sftp> put local-file.md
Uploading local-file.md to /home/carlos/local-file.md
local-file.md                                                                                                                100%   12     5.9KB/s   00:00
```

### Download a remote file from the server

- Use the command `get` to download a remote file from a remote server to your computer

```bash
sftp> get testfile
Fetching /home/carlos/testfile to testfile
testfile                                                                                                                                  100%   13KB   2.9MB/s   00:00
sftp> lls
another-file.txt        listing.txt             local-file.md           testfile
sftp>
```

### Upload multiple files to the server

- Use `mput`, (`m` is for multiple) to upload several file with a single command to the server

```bash
sftp> mput *.txt
Uploading another-file.txt to /home/carlos/another-file.txt
another-file.txt                                                                                                                          100%   17     8.7KB/s   00:00
Uploading listing.txt to /home/carlos/listing.txt
listing.txt                                                                                                                               100%  378   299.6KB/s   00:00
sftp> ls
another-file.txt   code               listing.txt        local-file.md      summary.md         testfile
sftp>
```

### Download multiple files from the server

- The same way you use `mget` to download several files from the server.


```bash
sftp> mget *.md
Fetching /home/carlos/local-file.md to local-file.md
local-file.md                                                                                                                             100%   12     9.5KB/s   00:00
Fetching /home/carlos/summary.md to summary.md
summary.md                                                                                                                                100%  334   142.1KB/s   00:00
sftp> ls
                                                                                                                                            100%  334     0.0KB/s   19:05    another-file.txt   code               listing.txt        local-file.md      summary.md         testfile
sftp>
```




---



---
