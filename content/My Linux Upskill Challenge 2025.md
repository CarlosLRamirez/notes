---
modified: 2025-04-25T07:57:47-06:00
created: 2025-04-24T17:16:15-06:00
publish: true
title: My Linux Upskill Challenge 2025
tags:
  - linux
---
https://linuxupskillchallenge.org/

## My Linux Upskill Challenge Journal
### Day 0 (24-Abr)

- I created an EC2 instance in an [[Mis cuentas AWS|AWS account]]  I already have.
	- Instance type: t2.micro
	- OS: Ubuntu 24.04.2 LTS
	- Region: us-east-1
	- SSH key: linux.pem (AWS instance doesn't use password to authenticate)

**Issue:** when I create the Key pair, I set `linux` as a name, but when it downloads to my computer the file is called `"EC2 Instance Key.pem"`

**Solution:** I had to rename the key file from `"EC2 Instance Key.pem"` to `linux.pem` using  `mv "EC2 Key Pair.pem" linux.pem` and everything works, actually to the server  doesn´t cares the name of the file, but the content instead.

- I connected to the EC2 instances with the `ubuntu` user and the public DNS, but first I needed to set the right permissions to the key file:

```sh
chmod 400 linux.pem
```

- And then I use the following command to use the SSH key and the Public DNS of the instance.

```sh
ssh -i linux.pem ubuntu@<PUBLIC DNS>
```

- Then I run both `sudo apt update` and `sudo apt upgrade` to upgrade all the pre-installed packages.

> [!NOTE]
> The public IP and DNS of the server changes every time you Stop and Restart the instance


> [!NOTE]
> I need to always remember to turn OFF the server when I'm not using it to not to be charged!
> I used `sudo shutdown now`, this will stop AWS charging  me from compute time, but still charges for EBS Volume and Public IP!

#### Side Readings

This reading looks interesting (https://linuxjourney.com/lesson/linux-history) #toread 

----
### Day 1 (25 Apr)

I connected to my Linux Server in the Cloud and run the following commands:

#### General information

- `lsb_release -a`: To know which Linux distribution and version are we using.
- `cat /etc/os-release`: Another way to know which Linux distro do we have is to look of the content of this file.
- `uname -a`: To print the system information,  it can show things like kernel version, hardware platform, etc.
- `uptime`: To know how long the server has been running (the time since last restart o shutdown)
- `cat /proc/uptime:` Another way to see the uptime is looking into this file
- `whoami`: It shows the username you logged on with.
- `who`: It shows who is logged in
- `w`: it shows what everyone logged in is doing
#### Hardware Information

- `lshw`: It shows detailed information about the hardware of the server
- 
- 

**Issue**: I cannot run `net stat`commands
**Solution**: `sudo apt install net-tools -y`


**Issue:** I cannot run `ifstat`
**Solution:** Use 


