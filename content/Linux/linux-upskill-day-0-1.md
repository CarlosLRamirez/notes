---
title: My Linux Upskill Challenge - Day 0 and 1
modified: 2025-05-15T17:35:51-06:00
created: 2025-04-29T18:54:36-06:00
aliases:
  - "Linux Upskill Challenge Daily: Day 0 & 1"
publish: true
tags:
  - linux
URL: https://carloslramirez.com/my-digital-jungle/Linux/My-Linux-Upskill-Challenge---Day-0--and--1
---

## Day 0 (Apr 24)  
<https://linuxupskillchallenge.org/00/>

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
This reading looks interesting: <https://linuxjourney.com/lesson/linux-history> #toread

---

## Day 1 (Apr 29)  
<https://linuxupskillchallenge.org/01/>

I connected to my Linux server in the cloud and ran the following commands:

### General Information

- `lsb_release -a`: Shows which Linux distribution and version is installed.  
- `cat /etc/os-release`: Another way to check the distro—just look at the contents of this file.  
- `uname -a`: Prints system information like kernel version and hardware platform.  
- `uptime`: Displays how long the server has been running since the last restart or shutdown.  
- `cat /proc/uptime`: Another way to check system uptime.  
- `whoami`: Shows the current user.  
- `who`: Lists all logged-in users.  
- `w`: Shows what logged-in users are doing.

### Hardware Information

- `lshw`: Displays detailed hardware info.  
- `lscpu`: Shows CPU information.  
- `lscpu | grep Hypervisor`: Shows which hypervisor your VM is using—my EC2 instance uses Xen.  
- `lsblk`: Lists storage devices and their partitions. This command led me to start reading about the [[20250429T1748 snap package manager]].  
- `lspci`: Lists all PCI devices. These are emulated by the Xen hypervisor, and some are quite outdated.  
- `lsusb`: Lists USB devices—my EC2 instance shows none, as expected.

### Measuring Memory and CPU Usage

- `free -h`: Displays memory usage in a human-readable format.  
- `vmstat`: Gives a snapshot of system performance (CPU, memory, I/O, etc.). Use `vmstat 1` for continuous output.  
- `top`: Real-time summary of system resource usage.  
- `htop`: A more interactive, colorful version of `top`.

### Measuring Disk Usage

- `df -h`: Shows disk space usage in human-readable format.  
- `du -h`: Shows the size of directories and subdirectories (including hidden ones).  
- `sudo du -h --max-depth=1 /`: Useful for checking the largest folders under `/`.

### Measuring Network Usage

- `ifconfig`: Lists network interfaces and IPs (deprecated, but pre-installed). My EC2 instance shows two: `enX0` and `lo` (loopback).  
- `ip address`: The modern replacement for `ifconfig`.  
- `netstat -i`: Displays interface statistics. It’s deprecated in Ubuntu 24.04.2 LTS and not available by default. I installed it using:  
  ```sh
  sudo apt install net-tools -y
  ```  
- `ifstat`: Live bandwidth usage per interface. Not installed by default—installed with:  
  ```sh
  sudo apt install ifstat
  ```  
- `nload`: A real-time visual network monitor.  
- `sudo iftop -i enX0`: Shows live connections, traffic direction, and throughput (like `top`, but for the network).

---

### Extra: Modern Replacements for `netstat`

| **Old `netstat` Command** | **Modern Alternative** | **Purpose**                    |
|---------------------------|------------------------|-------------------------------|
| `netstat -i`              | `ip -s link`           | Interface stats               |
| `netstat -tuln`           | `ss -tuln`             | Listening ports (TCP/UDP)     |
| `netstat -rn`             | `ip route show`        | Routing table                 |
| `netstat -a`              | `ss -a`                | All sockets                   |
| `netstat -plnt`           | `ss -plnt`             | Listening TCP ports + PID     |

---

## Additional Readings

- [What is swap and swap space?](https://help.ubuntu.com/community/SwapFaq)  
- [How Linux handles out-of-memory situations](https://www.oracle.com/technical-resources/articles/it-infrastructure/dev-oom-killer.html)  
- [How to check CPU usage in Linux](https://www.cyberciti.biz/tips/how-do-i-find-out-linux-cpu-utilization.html)  
- [How to check disk usage and I/O in Linux](https://www.cyberciti.biz/tips/linux-disk-performance-monitoring-howto.html)  
- [20 Best Linux Bandwidth Monitoring Tools](https://www.tecmint.com/linux-network-bandwidth-monitoring-tools/)

---

## Related Notes



