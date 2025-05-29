---
created: 2025-05-04T04:16:27
modified: 2025-05-28T22:41:21-06:00
title: "Linux Upskill Challenge: Day 3"
aliases:
  - "My Linux Upskill Challenge: Day 3"
tags:
  - linux
socialImage: ./_attachments/1.png
description: In this lesson, I learned about the types of users that exist in a Linux system, along with their scope and limitations. I also explored the proper way to handle administrative tasks that require elevated privileges—how to temporarily become root in order to perform sensitive actions while minimizing the risk of making a mistake that could break your server.
publish: true
comments: true
---
## Introduction

I’ve started following the [Linux Upskill Challenge](https://linuxupskillchallenge.org/) to sharpen my Linux knowledge and hands-on skills. This is the **third** in a series of 21 lessons designed to be completed on a daily basis.

In this lesson, I learned about the types of users that exist in a Linux system, along with their scope and limitations. I also explored the proper way to handle administrative tasks that require elevated privileges—how to temporarily become root in order to perform sensitive actions while minimizing the risk of making a mistake that could break your server.

---
## Day 3 - Power trip!
- **URL:** https://linuxupskillchallenge.org/03/
- **Previous Lesson:** [[20250501T2009-linux-upskill-day-2|My Linux Upskill Challenge: Day 2]]

---
### 🚪 Introduction

- `root` is the power user on a Linux System, it's the "super user" account that is all powerful. That also means that a typo in a command being root could mess up your server!
- As a Best Practice you shouldn't use `root` user, instead in a production server, instead use a specific user and run root-only commands via the `sudo` command.
- `sudo` is a command that allows a user to execute commands with elevated privileges — typically as `root`. What a user is allowed to run with `sudo` is defined in the *sudoers* configuration.

### Lesson's tasks
- Change the password or your `sudo` user
- Change the hostname
- Change the timezone

### 👨‍👦‍👦 Linux type of users

- In a Linux system you can do two kind of changes
	- Global changes: affects all users, programs/environments shared with any user.
	- Local changes: affects only one user, programs/environments for a particular user.
---
- In Linux there are three type of user:
	- `root` - the all-mighty powerful superuser that can execute any command and can do global changes and local changes for any user as well.
	- `sudoers` - those are regular users (or groups) that are allowed to use `sudo` to run commands with elevated privileges. It's common (and best practice) to grant at least one `sudoer` with the same power as root, while others with may be restricted on only certain commands, you specify this in the `sudoers` configuration file. 
	- `regular user` - only can do local changes, and not allowed to use `sudo`
---

### 🚀 Sudo Access and User Creation on EC2

- On an AWS EC2 instance, the `root` user is disabled by default. The default user is `ubuntu`, who already has `sudo` privileges — it’s already a _sudoer_.
- I confirmed this with the following commands:

```sh
whoami
# ubuntu
groups ubuntu
# ubuntu : ubuntu adm cdrom sudo dip lxd
sudo whoami
# root
```

- You **can** enable SSH login as the root user by following this [guide](https://tecadmin.net/how-to-enable-ssh-as-root-on-aws-ubuntu-instance/), but I didn’t try it — it seemed risky and unnecessary for my purposes.
- Instead, for practice, I created a new user named `carlos` and gave him the same privileges as `ubuntu` using the following commands:

```sh
sudo adduser carlos
sudo usermod -aG sudo carlos
```

- There’s another way to grant elevated privileges to a user: by modifying the `/etc/sudoers` file. To safely edit this special file, you should always use the `visudo` command. For now, I chose the simpler group-based method instead.
- You can change the password for any given user with `passwd` command

```shell
passwd carlos
Changing password for carlos.
Current password: 
New password: 
Retype new password: 
passwd: password updated successfully
```

---
### 🔐 SSH Access with Shared Key

- When I added the new user, it asked me to set a password. However, I wanted `carlos` to log in using the same SSH key as the ubuntu user, and also make sure password-based authentication remained disabled.
- I used the following steps:

```sh
# Create .ssh directory for carlos
sudo mkdir -p /home/carlos/.ssh

# Copy authorized_keys from ubuntu
sudo cp /home/ubuntu/.ssh/authorized_keys /home/carlos/.ssh/

# Set correct ownership and permissions
sudo chown -R carlos:carlos /home/carlos/.ssh
sudo chmod 700 /home/carlos/.ssh
sudo chmod 600 /home/carlos/.ssh/authorized_keys
```

- I then started a new SSH session as  `carlos` , using the same `linux.pem` key file.
- I also tested login using a password instead of the SSH key, and it was rejected. As it turns out, password-based SSH authentication is disabled by default on this EC2 AMI, so no extra configuration was needed. 

---

### 🧪 Password Prompt on `sudo`

- One difference I noticed: when running sudo as `carlos`, it prompted for the user password, unlike `ubuntu`, which doesn’t require it. Here’s the behavior:

```shell
carlos@ip-172-31-92-220:~$ whoami
carlos
carlos@ip-172-31-92-220:~$ sudo whoami
[sudo] password for carlos: 
root
```

- This is because the default `sudo` configuration in EC2 lets `ubuntu` run `sudo` without a password, but any new user added to the `sudo` group will be required to authenticate with their password (unless you explicitly configure otherwise in `/etc/sudoers`).
- To  make `carlos` run `sudo` without a password you need to create the file `/etc/sudoers.d/carlos` using `visudo`:

```sh
sudo visudo -f /etc/sudoers.d/carlos
```

- and add the following line:

```ini
carlos ALL=(ALL) NOPASSWD:ALL
```

- Actually AWS pre-configure this for the `ubuntu` user in the file `/etc/sudoers.d/90-cloud-init-users`, as I checked here:

```sh
sudo cat /etc/sudoers.d/90-cloud-init-users
# Created by cloud-init v. 24.4.1-0ubuntu0~24.04.1 on Fri, 25 Apr 2025 00:08:00 +0000

# User rules for ubuntu
ubuntu ALL=(ALL) NOPASSWD:ALL
```
### Testing the power of `sudo`
- If you try to use `cat /etc/shadow` to view the contents of the file, access will be denied, but if you use `sudo cat /etc/shadow` it will work. 🤓 This file contains the **hashed password** for all system users, so it's a intentionally restricted or non-authorized users.
- Also If I tried the `reboot` command will be rejected, but with `sudo reboot` it works and the server will fully restarted. In confirmed with `uptime` when the server was online again.
- With the `last` command you can see the login history, you can filter by username (e.g. `last ubuntu`, `last carlos` or `last root)
	- As expected, on my EC2 instance there wasn't entries for `root`

```shell
last root
wtmp begins Fri Apr 25 00:07:50 2025
```

---

- I checked the failed login attempts with the command `sudo lastb`, and I found that an IP from China had tried to log in to my server using the a `user` user several times on May 2nd. 😱
- Apparently, this is kind of normal for internet-facing servers, and there’s nothing to worry about _at this time_. However, implementing `fail2ban` could be a good idea.

---
- You can use the command `sudo -i` to fully become the `root` user. That means from now on, you won’t need to prefix commands with `sudo` for any high-privilege tasks. This is handy when you have a series of commands to run as “*root*.” You’ll also notice that the prompt changes. **I recommend doing this with caution.**
- To get back to your normal "*sudoer*" account you need to type `exit` or `logout`

```sh
carlos@ip-172-31-92-220:~$ whoami
carlos
carlos@ip-172-31-92-220:~$ sudo -i
root@ip-172-31-92-220:~# whoami
root
root@ip-172-31-92-220:~# logout
carlos@ip-172-31-92-220:~$ whoami
carlos
carlos@ip-172-31-92-220:~$ 
```

- With  `sudo journalctl -e /usr/bin/sudo` you can see the last times when `sudo` was used including the user which used and with which command.


## 👷 Administrative Tasks

This are some examples of simple administrative tasks that a sysadmin regualar do using `sudo`:

### Change the hostname

One of the must basic task for you'll need `sudo` priviledges is to rename your server, that means change the `hostname`.

Probably the  current `hostname` of the server is what you see in the prompt after "*username@*", however if you want to double check, there are several ways to do it on linux: you can issue any of this commands: `hostname` , `uname-h`, or check the content of this file: `cat /etc/hostname`.

Also, if you need to change it, you can use any of this options:

1. Edit these two files: `/etc/hostname` and `/etc/hosts` , and then reboot the server
2. (Recommended) Use the command `hostnamectl` withouth rebooting the server, like this: 

```sh
sudo hostnamectl set-hostname myec2ubuntu
```

To  observe the change in the prompt you should open a new session using the command `bash` or just logout and login again.

```sh
carlos@ip-172-31-92-220:~$ sudo hostnamectl set-hostname myec2ubuntu
carlos@ip-172-31-92-220:~$ bash
carlos@myec2ubuntu:~$ 
```

> I stopped and re-started the EC2 instance just to be sure the new hostname preservers after the server restart.

---

> [!NOTE]
>  I decided to deploy a local VM on my computer to not depend on starting an EC2 instance in AWS every time I want to lab, this saves me time (and money!)
>
> So I installed UTM  on my Mac computer and used [Ubuntu Server for ARM (24.04.2 LTS)](https://ubuntu.com/download/server/arm) ISO image to launch my Linux VM, and I destroyed (Terminate) the EC2 in AWS.
>
> I may do a [[Installation Guide]] someday 
> 
	
----
### Change the Timezone

Another regular task when you are in charge or server administration is to setup the correct timezone (this could be the timezone of the region the server is actually located, or a timezone the company agreed). The default for any Linux server is UTM. (that is same as GMT).

To check the current settings you use:
```shell
timedatectl
```

You can check the available timezones with:
```shell
timedatectl list-timezones
```

After decide which one to use, I change it using this command
```shell
sudo timedatectl set-timezone Americas/Guatemala
```

Then I confirmed the change, again with:
```shell
timedatectl
```

```sh
               Local time: Thu 2025-05-08 12:51:30 CST
           Universal time: Thu 2025-05-08 18:51:30 UTC
                 RTC time: Thu 2025-05-08 18:51:30
                Time zone: America/Guatemala (CST, -0600)
System clock synchronized: no
              NTP service: active
          RTC in local TZ: no
```

Selecting the correct timezone for all your servers take importance when you need configure scheduled tasks that you need to run at certain time, it also allows you to have consistency in the timestamps of your log files (those under `/var/log`).


## Final Question?
### What’s the difference between `sudo -i` and `sudo -s`?

- `sudo -i` and `sudo -s` are two commands that allow you to "become root" and run elevated-privilege commands without needing to prefix each one with `sudo`.   However, they have some key differences:
- `sudo -i` launches a root shell—it's like starting a new shell session as if you had logged in directly as the root user. It also loads the root user's environment and places you in the `/root` directory (`cd /root`). If you type `echo $HOME`, it will point to `/root`. The `-i` stands for "*simulate initial login*".
- `sudo -s` also launches a root shell, but it doesn’t load the root environment and keeps you in your current working directory. The `-s` stands for "*shell*", and it's less powerful than `-i`.

## Conclusion
- Always double check before pressing `Enter` when you're acting as `root` on a server.
- Always try to use for daily operations a  "normal" account and add to `sudoers` group so need to use  `sudo` for elevated priviledge commands.
- For critical changes on production systems, take extra precaution actions like using a test environment, check for syntax errors and typos, and monitor the log files.

## Additional Resources
- [How To Edit the Sudoers File](https://www.digitalocean.com/community/tutorials/how-to-edit-the-sudoers-file)
- [Hardening SSH](https://medium.com/@jasonrigden/hardening-ssh-1bcb99cd4cef)
- [SSH Tunneling](https://linuxize.com/post/how-to-setup-ssh-tunneling/)
- [How To Set Up Multi-Factor Authentication for SSH on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-set-up-multi-factor-authentication-for-ssh-on-ubuntu-20-04)


---




--- 
## Related Notes:
- [[20250501T2009-linux-upskill-day-2|My Linux Upskill Challenge: Day 2]]
- [[20250508T1314-linux-upskill-day-4|My Linux Upskill Challenge - Day 4]]

