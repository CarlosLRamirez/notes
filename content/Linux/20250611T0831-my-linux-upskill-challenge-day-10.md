---
id: 20250611T0831-my-linux-upskill-challenge-day-10
aliases:
  - "My Linux Upskill Challenge: Day 10"
tags:
  - linux
comments: true
created: 2025-06-11T08:31:18
modified: 2025-06-20T04:49:35-06:00
publish: true
title: "My Linux Upskill Challenge: Day 10 - Scheduling Task in Linux"
---

These are my notes following the Lesson No. 10 from the [Linux Upskill Challenge: Day 10](https://linuxupskillchallenge.org/10)

## Table of Contents

- [[#Introduction|Introduction]]
- [[#Schedule one-time tasks|Schedule one-time tasks]]
- [[#Schedule time-based jobs with cron|Schedule time-based jobs with cron]]
- [[#Automating a backup creation|Automating a backup creation]]
- [[#System crontab|System crontab]]
- [[#Scheduling task with systemd timers|Scheduling task with systemd timers]]
- [[#External Resources|External Resources]]
- [[#Related Notes|Related Notes]]

## Introduction

Automating the execution of repetitive tasks is one of the main skills that every good system administrator should have—first, because he/she, instead of doing repetitive and operational tasks, can focus on other more "analytical" labors. Also, through automation, he/she can prevent human error or the forgetfulness of executing them.

In this lesson, we cover the main mechanism that Linux provides to schedule tasks at different frequencies depending on the situation and the nature of the task.

## Schedule one-time tasks

- We'll use **at** to schedule one-time task to be run _at_ a certain time in the future

- You can install `at`with:

```bash
sudo apt update
sudo apt install at
```

- `at` understands natural expressions like
	- `now + 2 minutes`
	- `midnight`
	- `teatime`
	- `noon`
	- `next Tuesday`
### Syntax

```bash
at [TIME]
```

Then you enter the commands you want to run at that time, followed by `Ctrl+D` to save and finish

### Basic Examples

- Example 1: Run a command at a specific time today
```bash
at 14:30
```
Then type:
```bash
echo "Backup started" >> /tmp/backup.log
```
*Press Ctrl+D to save and exit*

- Example 2: Run a script in the future
```bash
at now + 1 hour
```
Then type:
```bash
bash /home/carlos/backup.sh
```

- Example 3: Run tomorrow at 9:00 AM
```bash
at 9:00 AM tomorrow
```
Then type:
```bash
tar -czf ~/backup.tgz ~/projects
```

### Syntax with pipe `|`

You can pipe a command into **at** to schedule for the future like here:

```bash
echo "command to run" | at [time]
```

#### Examples with pipe

-  Example 1: Shutdown the system in 10 minutes
```bash
echo "shutdown now" | at now + 10 minutes
```

- Example 2: Append a log line in 1 minute
```bash
echo "echo 'Backup started at $(date)' >> /var/log/backup.log" | at now + 1 minute
```
### Usefull `at` commands

- To view the scheduled tasks
```bash
atq
```

- To remove a scheduled job
```bash
atrm <job_id>
```

- See the instructions of a scheduled job
```bash
at -c <job_id>
```

## Schedule time-based jobs with cron

- **cron** is a Linux daemon — a background service — that automatically executes scheduled tasks.
    
- These tasks are called **cron jobs**, and they can run at regular intervals (daily, hourly, every Monday, etc...).
    
- `crontab` stands for **cron table**, and it's a file where you define the schedule and commands that you want **cron** to run.
    
- When you schedule a job with **cron**, the command runs with the **permissions of the user who created it**. Every user — including root — can have their own **crontab** file and schedule jobs.

### Checking your current crontab

```bash
❯ crontab -l
no crontab for carlos
```

At least you've created a cron job, your **crontab** will be empty.

### Create your first cron job in crontab

You edit the **crontab** using the command `crontab -e`. The **cron table** is essentially a plain text file. The first time you run this command, it may prompt you to select your **preferred text editor** (like nano or vim). (of course I chose `vim`)

```bash
❯ crontab -e
no crontab for carlos - using an empty one

Select an editor.  To change later, run 'select-editor'.
  1. /bin/nano        <---- easiest
  2. /usr/bin/vim.basic
  3. /usr/bin/mcedit
  4. /usr/bin/vim.tiny
  5. /bin/ed

```

This will open a text file where you can add your cron job at the end of the commented lines

```
# Edit this file to introduce tasks to be run by cron.
#
# Each task to run has to be defined through a single line
# indicating with different fields when the task will be run
# and what command to run for the task
#
# To define the time you can provide concrete values for
# minute (m), hour (h), day of month (dom), month (mon),
# and day of week (dow) or use '*' in these fields (for 'any').
#
# Notice that tasks will be started based on the cron's system
# daemon's notion of time and timezones.
#
# Output of the crontab jobs (including errors) is sent through
# email to the user the crontab file belongs to (unless redirected).
#
# For example, you can run a backup of all your user accounts
# at 5 a.m every week with:
# 0 5 * * 1 tar -zcf /var/backups/home.tgz /home/
#
# For more information see the manual pages of crontab(5) and cron(8)
#
# m h  dom mon dow   command
```

I added the following line at the end of the file, to print "Hello World" on the terminal (`/dev/pts/0)` every **minute**.

```bash
* * * * * echo "Hello world!" > /dev/pts/0
```

> You can check your current terminal device (TTY) with the command `tty`. It prints the file name of the terminal connected to your standard input (usually something like `/dev/pts/0` for virtual terminals).

You can see the results here:
```bash
❯ tty
/dev/pts/0
 ~  Hello world!                                                                                                                              ✔ │ with carlos@ubuntu │ at 06:20:59 PM
Hello world!
Hello world!
Hello world!
```

You can remove a specific **cron job** editing again the file with `crontab -e` and remove or comment the desired line.

Or you can remove all the **cron** jobs in the **cron table** with:

```bash
crontab -r
```

### Crontab syntax

Basic crontab syntax

```bash
* * * * * command to be executed
- - - - -
| | | | |
| | | | ----- Day of week (0 - 7) (Sunday=0 or 7)
| | | ------- Month (1 - 12)
| | --------- Day of month (1 - 31)
| ----------- Hour (0 - 23)
------------- Minute (0 - 59)
```

- Minute values can be from 0 to 59.

- Hour values can be from 0 to 23.

- Day of month values can be from 1 to 31.

- Month values can be from 1 to 12.

- Day of week values can be from 0 to 6, with 0 denoting Sunday.

We can use operators or wildcards like:

- `*`  -->  Wildcard, indicates every possible time interval

- `,`  -->  to list different values separated by a comma

- `-`  -->  to specify a range between two numbers 

- `/`  -->  specify a periodicity or frequency

For instance, if you want to program a command to run every 2 hours, from 8am to 18pm, during the weekdays:

```bash
0 8-16/2 * * 1-5 /path/to/your/command
```

Explanation

- `0`→ Minute 0 of the hour

- `8-18/2` → From 8 AM to 6 PM, every 2 hours (runs at 8, 10, 12, 14, 16)

- `*` → Every day of the month

- `*` → Every month

- `1-5` → Weekdays (Monday=1 to Friday=5)

- `/path/to/your/command`→ Replace with the full path to your script or comma

There are also sites that help us to build crontab expressions, like this one: [crontab.guru](https://crontab.guru/)

## Automating a backup creation

### Doing a manual backup first

- When you schedule a task, it is a good idea to test first the command or script manually, before adding as a cronjob.
- I manually created a compressed archive for all my user's `home` directory using `tar` and save it on `/var/backups/home.tar.gz`

```bash
sudo tar -czvf /var/backups/home.tar.gz /home/
tar: Removing leading `/' from member names
/home/
/home/carlos/
/home/carlos/.selected_editor
/home/carlos/.zcompdump
/home/carlos/.ssh/
/home/carlos/.ssh/authorized_keys
...
```

> **Tar** is short for *"tape archive"*, and it comes from the early days of Unix, when you actually saved your data on physical tapes.

 >[!NOTE]
 > - The `-v`options for `tar`means "verbose", so we can see what it's doing
 > - `czf`means "create", "gzip compress" and "file" respectivelly

### Checking the current date

- To check the system date and hour we can use

```bash
date
Thu Jun 12 05:16:43 AM CST 2025
```

- To get the date only

```bash
date -I
2025-06-12
```

### Adding the date to the backup filename

- We can add the date to the filename of the backup like this:

```bash
sudo tar -czvf /var/backups/home.$(date -I).tar.gz /home/
```

- We can see that different [tarballs](https://wiki.debian.org/TarBall) (tar files) have  been created

```bash
❯ ls /var/backups/home* -l
-rw-r--r-- 1 root root 2354579 Jun 12 05:19 /var/backups/home.2025-06-12.tar.gz
-rw-r--r-- 1 root root 2354593 Jun 12 05:12 /var/backups/home.tar.gz
```

### Scheduling the backup

- So after check everything will work fine, I created a **crontab** to do the backup every day at 05:00. For this I use the command `crontab -e` and add the following line

```bash
0 5 * * * tar -zcf /var/backups/home.$(date -I).tar.gz /home/
```

- We can check everything is in place with `crontab -l`

- Now we have to wait a couple of day to check if the backup files are being created under `/var/backup`

### Cleaning-up Old Backups

- If we’re going to run the cron job indefinitely, a new backup file will be created every day. Over time, this could cause the disk to run out of space.
- To avoid this, it’s a good idea to also automate the clean-up — meaning, delete backup files that are older than a certain number of days.

- For this, I used the `find` command to search for all the backup files and delete any that are older than 7 days. Here’s the command:

```bash
find /var/backups -name "home.*.tar.gz" -mtime +7 -delete
```

> [!NOTE]
> - The `-mtime +7` option indicates `find`to look for files with modified time more than 7 days 
> - The `-delete`flag... I think you can guess 🙂

- To automate this to run every day at 5:30AM I added this command as a cron job, as follows

``` bash
30 5 * * * find /var/backups -name "home.*.tar.gz" -mtime +7 -delete
```

- By now this is how it looks my **crontab**

```bash
# Daily Backup of user`s home directory
0 5 * * * tar -zcf /var/backups/home.$(date -I).tar.gz /home/

# Clean 7 days old backup files
30 5 * * * find /var/backups -name "home.*.tar.gz" -mtime +7 -delete
```

- This approach of using `find` with `-delete` is very common among system administrators for scheduling the removal of old files. However, it’s also common to see more sophisticated _cron scripts_ that combine tools like `tar`, `find`, and `rsync` to handle complex backup and retention strategies used in real-world environments.

## System crontab

- Besides the user crontab, there's a global crontab file, which is used for system-wide tasks, it is located in  `/etc/crontab` 

- The main difference is that each line must **specify the user** who should run the command.

- It can be used by system administrators to define jobs for any user.

This is my global crontab file:

```bash
❯ cat /etc/crontab
# /etc/crontab: system-wide crontab
# Unlike any other crontab you don't have to run the `crontab'
# command to install the new version when you edit this file
# and files in /etc/cron.d. These files also have username fields,
# that none of the other crontabs do.

SHELL=/bin/sh
# You can also override PATH, but by default, newer versions inherit it from the environment
#PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin

# Example of job definition:
# .---------------- minute (0 - 59)
# |  .------------- hour (0 - 23)
# |  |  .---------- day of month (1 - 31)
# |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...
# |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat
# |  |  |  |  |
# *  *  *  *  * user-name command to be executed
17 *    * * *   root    cd / && run-parts --report /etc/cron.hourly
25 6    * * *   root    test -x /usr/sbin/anacron || { cd / && run-parts --report /etc/cron.daily; }
47 6    * * 7   root    test -x /usr/sbin/anacron || { cd / && run-parts --report /etc/cron.weekly; }
52 6    1 * *   root    test -x /usr/sbin/anacron || { cd / && run-parts --report /etc/cron.monthly; }
#
 ~   
```

- Notice the extra field `user-name` to specify the user that runs the task. 

> Today not ussual to use the system crontab, and what is recomended is that each user has it's own crontab (including root)

### Daily, Hourly, Monthly and Yearly cron files

System *Cron* also manage other **cronjobs** that run daily, weekly and monthly. Those are scripts that you can put on pre-defined directories:

- `/etc/cron.daily`
- `/etc/cron.hourly`
- `/etc/cron.monthly`
- `/etc/cron.weekly`

Within these directories, we can place scripts that **cron** will execute at the frequency indicated by the directory. In other words, the scripts in `/etc/cron.daily`will be triggered every day usually around 6:25 AM, those in `/etc/cron.weekly/` runs one a week usually on Sunday at ~6:47 AM, those in `/etc/cron.montlhy` runs once a month, the 1st day at ~6:52 AM.

```bash
❯ ls /etc/cron.daily -l
total 32
-rwxr-xr-x 1 root root  539 Mar 18  2024 apache2
-rwxr-xr-x 1 root root  376 Oct 26  2024 apport
-rwxr-xr-x 1 root root 1478 Mar 22  2024 apt-compat
-rwxr-xr-x 1 root root  314 Aug  6  2022 aptitude
-rwxr-xr-x 1 root root  123 Feb  4  2024 dpkg
-rwxr-xr-x 1 root root  377 Feb 16 15:09 logrotate
-rwxr-xr-x 1 root root 1395 Feb 16 15:09 man-db
-rwxr-xr-x 1 root root  518 Feb 16 15:09 sysstat*
```

Those scripts will be run in alphabetical oder, by a tool called `run-parts`which is an utility that **execute all executable scripts in a directory.**

Actually you can confirm this in the `/etc/crontab/`lines:

```bash
17 *    * * *   root    cd / && run-parts --report /etc/cron.hourly
25 6    * * *   root    test -x /usr/sbin/anacron || { cd / && run-parts --report /etc/cron.daily; }
47 6    * * 7   root    test -x /usr/sbin/anacron || { cd / && run-parts --report /etc/cron.weekly; }
52 6    1 * *   root    test -x /usr/sbin/anacron || { cd / && run-parts --report /etc/cron.monthly; }
```
## Scheduling task with systemd timers

Today's Linux distributions generally include `systemd`. Besides starting and stopping services, we can also use it to run task at specific times via the *"timers"* feature.

We can see the current *"timers"* configuration with:

```bash
❯ systemctl list-timers
NEXT                            LEFT LAST                              PASSED UNIT                           ACTIVATES
Sun 2025-06-15 06:40:00 CST 1min 20s Sun 2025-06-15 06:36:46 CST 1min 52s ago sysstat-collect.timer          sysstat-collect.service
Sun 2025-06-15 07:15:44 CST    37min Sun 2025-06-15 06:36:46 CST 1min 52s ago fwupd-refresh.timer            fwupd-refresh.service
Sun 2025-06-15 07:54:59 CST 1h 16min Thu 2025-06-12 02:30:57 CST            - man-db.timer                   man-db.service
Sun 2025-06-15 08:46:53 CST  2h 8min Fri 2025-06-13 04:50:20 CST 1h 17min ago motd-news.timer                motd-news.service
Sun 2025-06-15 09:13:49 CST 2h 35min Fri 2025-06-13 05:19:40 CST 1h 15min ago apt-daily.timer                apt-daily.service
Mon 2025-06-16 00:00:00 CST      17h Sun 2025-06-15 06:36:46 CST 1min 52s ago dpkg-db-backup.timer           dpkg-db-backup.service
Mon 2025-06-16 00:00:00 CST      17h Sun 2025-06-15 06:36:46 CST 1min 52s ago logrotate.timer                logrotate.service
Mon 2025-06-16 00:07:00 CST      17h Sun 2025-06-15 06:36:46 CST 1min 52s ago sysstat-summary.timer          sysstat-summary.service
Mon 2025-06-16 00:54:20 CST      18h Mon 2025-06-09 00:37:01 CST            - fstrim.timer                   fstrim.service
Mon 2025-06-16 04:45:14 CST      22h Thu 2025-06-12 17:02:20 CST 1h 53min ago update-notifier-download.timer update-notifier-download.service
Mon 2025-06-16 04:54:45 CST      22h Thu 2025-06-12 17:11:51 CST 1h 43min ago systemd-tmpfiles-clean.timer   systemd-tmpfiles-clean.service
Mon 2025-06-16 06:14:26 CST      23h Sun 2025-06-15 06:36:46 CST 1min 52s ago apt-daily-upgrade.timer        apt-daily-upgrade.service
Fri 2025-06-20 04:01:37 CST   4 days Mon 2025-06-09 07:35:57 CST            - update-notifier-motd.timer     update-notifier-motd.service
Sun 2025-06-22 03:10:52 CST   6 days Sun 2025-06-15 06:36:46 CST 1min 52s ago e2scrub_all.timer              e2scrub_all.service

14 timers listed.
Pass --all to see loaded but inactive timers, too.
```
More information in the **External Resources**.

## External Resources

- [freeCodeCamp: Job Scheduling in RHEL – cron and at Explained with Examples](https://www.freecodecamp.org/news/job-scheduling-in-rhel/#:~:text=on%20your%20own.-,Job%20Scheduling%20using%20at,remember%20to%20do%20them%20later.)
- [nixCraft: How To Add Jobs To cron Under Linux or UNIX](https://www.cyberciti.biz/faq/how-do-i-add-jobs-to-cron-under-linux-or-unix-oses/)
- [Arabesque: Cron best practices](https://blog.sanctum.geek.nz/cron-best-practices/)
- [Linode: Using Cron to Schedule Tasks for Certain Times or Intervals](https://www.linode.com/docs/guides/schedule-tasks-with-cron/)
- [Arch Wiki: A good overview of systemd/Timers](https://wiki.archlinux.org/index.php/Systemd/Timers)
- [How to Use Systemd Timers as a Cron Replacement](https://www.maketecheasier.com/use-systemd-timers-as-cron-replacement/)

---
## Related Notes
- Previous Lesson: [My Linux Upskill Challenge: Day 9](20250606T1811-my-linux-upskill-challenge-day-9.md)
- Next Lesson: [My Linux Upskill Challenge: Day 11](20250615T0644-my-linux-upskill-challenge-day-11.md)
