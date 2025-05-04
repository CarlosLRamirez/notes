---
created: 2025-05-04T04:16:27
modified: 2025-05-04T06:56:54-06:00
aliases:
  - My Linux Upskill Challenge - Day 3
title: "My Linux Upskill Challenge Journal: Day 3 - Power Trip!"
publish: true
---
**Date:** May 4th (May the Force be with you!)
**URL:** https://linuxupskillchallenge.org/03/

## Day 3 - Notes

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
- `sudo -i` allows a  a user to become fully `root` (kind of danger I think.)


---





--- 
## Enlaces: 


## Referencias:


