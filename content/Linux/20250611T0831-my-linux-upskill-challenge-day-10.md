---
created: 2025-06-11T08:31:18
modified: 2025-06-11T18:45:00-06:00
publish: true
tags:
  - linux
title: "My Linux Upskill Challenge: Day 10"
aliases:
  - "My Linux Upskill Challenge: Day 10"
zettel-type: 
comments: true
---

This are my notes following the Lesson No 10 from the [Linux Upskill Challenge: Day 10](https://linuxupskillchallenge.org/10)

## Scheduling Tasks in Linux

### Schedule one-time tasks with `at`

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
#### Syntax

```bash
at [TIME]
```

Then you enter the commands you want to run at that time, followed by `Ctrl+d` to save and finish

#### Basic Examples

- Example 1: Run a command at a specific time today

```bash
at 14:30
```

Then type:

```bash
echo "Backup started" >> /tmp/backup.log
```
(Press Ctrl+D to save and exit)

- Example 2:  Run a script in the future

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

Then

```bash
tar -czf ~/backup.tgz ~/projects
```


#### Syntax with pipe `|`

You can pipe a command into **at** to schedule for the future

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
#### Usefull `at` commands

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

### Schedule time-based jobs with cron

- **cron** is a Linux daemon — a background service — that automatically executes scheduled tasks.

- This task are called **cron jobs**, and can run on regular intervals (daily, hourly, every Monday, etc...)

- `crontab` stands for **cron table** , and it's a file where you define the schedule and commands that you want **cron** to run.

- When you schedule a job with **cron**, the command runs with the **permissions of the user who created it**. Every user — including root — can have their own **crontab** file and schedule jobs.

#### Check you current crontab

```bash
❯ crontab -l
no crontab for carlos
```

At least you've created a cron job, you **crontab** will be empty.

#### Create your first cron job in crontab

You edit the **crontab** using the command `crontab -e`. The **cron table** is essentially a plain text file. The first time you run this command, it may prompt you to select your **preferred text editor** (like nano or vim).

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

This will open a text file and you can add your cron job at the end of the commented lines

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

> You can check your current terminal device (TTY) with the command tty. It prints the file name of the terminal connected to your standard input (usually something like `/dev/pts/0` for virtual terminals).

You can see the results here:
```bash
❯ tty
/dev/pts/0
 ~  Hello world!                                                                                                                              ✔ │ with carlos@ubuntu │ at 06:20:59 PM
Hello world!
Hello world!
Hello world!
```

You can remove an specific **cron job** editing again the file with `crontab -e` and remove or comment the desired line.

Or you can remove all the cron jobs in the cron table with:

```bash
crontab -r
```

#### Crontab syntax

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

We can use operators or wiildcards like:

- `*`  --> Wildcard, indicates every posible time interval
- `,`  --> to list different values separated by a comma
- `-`  --> to specify a range between two numbers 
- `/`  --> specify a periodicity or frequency

For instance, if you want to programa command to run every 2 hours, from 8am to 18pm, during the weekdays:

```bash
0 8-16/2 * * 1-5 /path/to/your/command
```

- 0 → Minute 0 of the hour

- 8-18/2 → From 8 AM to 6 PM, every 2 hours (runs at 8, 10, 12, 14, 16)

- * → Every day of the month

- * → Every month

- 1-5 → Weekdays (Monday=1 to Friday=5)

- /path/to/your/command → Replace with the full path to your script or comma




---
**Created:** [[2025-. 6-11]]

