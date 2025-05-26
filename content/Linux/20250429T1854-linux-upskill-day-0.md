---
title: "Linux Upskill Challenge: Day 0"
date: 2025-04-29
modified: 2025-05-25T23:19:07-06:00
created: 2025-04-29T18:54:36-06:00
aliases:
  - "Linux Upskill Challenge: Day 0"
publish: true
tags:
  - linux
URL: https://carloslramirez.com/my-digital-jungle/Linux/My-Linux-Upskill-Challenge---Day-0--and--1
socialDescription: In this lesson, I set up my lab environment by deploying a virtual machine in the cloud—specifically, an EC2 instance on AWS. I configured the SSH key and logged into my Linux server for the first time.
---
## Introduction
I’ve started following the [Linux Upskill Challenge](https://linuxupskillchallenge.org/) to sharpen my Linux knowledge and hands-on skills. It’s a series of 21 lessons designed to be completed daily, but I’ll be going through them at my own pace. I’ll share my journey and notes here as I move forward.

---
## Day 0 - Get Your Own Server
- **URL:** <https://linuxupskillchallenge.org/00/>

---

- I created an EC2 instance in an [[Mis cuentas AWS|AWS account]] I already had.
	- Instance type: t2.micro  
	- OS: Ubuntu 24.04.2 LTS  
	- Region: us-east-1  
	- SSH key: `linux.pem` (AWS instances don’t use passwords for authentication)

**Issue:** When I created the key pair, I named it `linux`, but when it was downloaded to my computer, the file was called `"EC2 Instance Key.pem"`.

**Solution:** I had to rename the key file from `"EC2 Instance Key.pem"` to `linux.pem` using:  

```sh
mv "EC2 Instance Key.pem" linux.pem
```  
Everything worked fine. Actually, the server doesn’t care about the file name—it only cares about the contents.

- I connected to the EC2 instance using the `ubuntu` user and the public DNS. But first, I had to set the correct permissions on the key file:  
```sh
chmod 400 linux.pem
```

- Then I used the following command to connect via SSH:
```sh
ssh -i linux.pem ubuntu@<PUBLIC DNS>
```

- After logging in, I ran both `sudo apt update` and `sudo apt upgrade` to upgrade all pre-installed packages.

> [!NOTE]  
> The public IP and DNS of the server change every time you stop and restart the instance.

> [!NOTE]  
> I need to remember to turn off the server when I’m not using it to avoid being charged!  
> I used `sudo shutdown now`. This stops AWS from charging me for compute time, but storage (EBS volume) and the public IP (if static) may still incur charges.

---
### Side Readings  
This reading looks interesting: <https://linuxjourney.com/lesson/linux-history> 

---
## Related Notes
- [[20250429T1854-linux-upskill-day-1|My Linux Upskill Challenge: Day 1]]

