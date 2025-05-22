---
title: "Linux Upskill Challenge: Day 1"
modified: 2025-05-16T21:52:15-06:00
created: 2025-04-29T18:54:36-06:00
aliases:
  - "My Linux Upskill Challenge: Day 1"
publish: true
tags:
  - linux
URL: https://carloslramirez.com/my-digital-jungle/Linux/My-Linux-Upskill-Challenge---Day-0--and--1
---
## Introduction
I’ve started following the [Linux Upskill Challenge](https://linuxupskillchallenge.org/) to sharpen my Linux knowledge and hands-on skills. It’s a series of 21 lessons designed to be completed daily, but I’ll be going through them at my own pace. I’ll share my journey and notes here as I move forward.

---
## Day 1 - Get to know your server
- **URL**: <https://linuxupskillchallenge.org/01/>
- **Previous Lesson:** [[20250429T1854-linux-upskill-day-0|My Linux Upskill Challenge: Day 0]]

---

### General Information

I connected to my Linux server in the cloud and ran the following commands:

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
- [[20250429T1854-linux-upskill-day-0|My Linux Upskill Challenge: Day 0]]
- [[20250501T2009-linux-upskill-day-2|My Linux Upskill Challenge: Day 2]]



