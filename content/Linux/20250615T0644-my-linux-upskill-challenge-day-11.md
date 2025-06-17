---
id: 20250615T0644-my-linux-upskill-challenge-day-11
aliases:
  - "My Linux Upskill Challenge: Day 11"
tags:
  - linux
comments: true
created: 2025-06-15T06:44:15
modified: 2025-06-15T07:17:55-06:00
publish: true
title: "My Linux Upskill Challenge: Day 11 - Finding Things"
---

These is my notes following the Lesson No. 11 from the [Linux Upskill Challenge](https://linuxupskillchallenge.org/11/)

## Table of Contents

## Introduction
- How to find filed and text inside these files
- Finding a file or a setting that you know exists, but you can open it or track it's a common problem on a system administrator:
- Tools to cover:
	- `locate`
	- `find`
	- `grep`
	- `which`

## Tool: `locate`

- `locate` is a tool used to quickly find the paths where a file or a directory is located on Linux.
- My Ubuntu Linux VM didn't have '`locate` installed, so I had to install it with:

    ```bash
    sudo apt install locate
    ```
- `locate` use a prebuilt index or database to quickly find the paths.
- If you like me, had to install `locate` before use it, it's probably that the database was not build already, you need to use this command:

    ```bash
    sudo updatedb
    ````

### Examples

- For instance, if you would like to find all the paths where a file called `access.log` is located, you could use:

    ```bash
    ❯ locate access.log
    /var/log/apache2/access.log
    /var/log/apache2/access.log.1
    /var/log/apache2/access.log.2.gz
    /var/log/apache2/access.log.3.gz
    /var/log/apache2/access.log.4.gz
    /var/log/apache2/other_vhosts_access.log
    /var/log/apache2/sample_access.log
    /var/log/apache2/sample_access.log.1
    ```

- Let said you want to find where are located all the files `*.conf`

    ```bash
    locate .conf

    ```







---

