---
id: 20250615T0644-my-linux-upskill-challenge-day-11
aliases:
  - "My Linux Upskill Challenge: Day 11"
tags:
  - linux
comments: true
created: 2025-06-15T06:44:15
modified: 2025-06-19T08:00:19-06:00
publish: true
title: "My Linux Upskill Challenge: Day 11 - Finding Things"
---

These is my notes following the Lesson No. 11 from the [Linux Upskill Challenge](https://linuxupskillchallenge.org/11/)
---

## Table of Contents

---

## Introduction
- How to find files and text inside these files

- Finding a file or a setting that you know exists, but you can open it or track it's a common problem forsystem administrators:

- Tools to cover:
	- `locate`
	- `find`
	- `grep`
	- `which`

---

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
    ```
---

### Examples

-  For instance, if you would like to find all the paths where a file called `access.log` is located, you could use:

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

## Tool: `find`

- With find you specify the directory where you want to search down, (that means it will begin search in the directory and all of its sub-directories)
- You also specify *"what"* to search for using various criterias, such as:
    - file name
    - file size
    - last modification time (mtime)
    - file type (e.g. regular file, directory)
    - permissions
    - and more..

---

### Examples

- To search recursively inside`/var`for any file with name `access.log` I used:

	```bash
	find /var -name access.log
	```

- However I received a lot of `Permissions denied` warnings in the output, which means that my user does not have permissions to enter and inspect those directories, so I rerun `find` as `root`:

	```bash
	❯ sudo find /var -name access.log
	/var/log/apache2/access.log
	```

- I received the only actual match found: the standard Apache log file that tracks web access requests.

- To search for any file under `/home` that was modified in the last 3 days, I used

    ```bash
    find /home -mtime 3
    ```

> [!NOTE]
> This searchs will take longer than `locate` did, because they scan thorugh the filsystem directly rather than using an index.

- You can also filter the results from `find`using `grep` like this:

    ```bash
    find /var -name access.log 2>&1 | grep -vi "Permission denied"
    ```
---

## Tool: `grep -R`

- We can also sue **grep** to search recursively throught a whole directory structure for a text within any text file.

- For instance, you know that "PermitRootLogin" is a ssh parameter that should be shomewhere ona config file under /etc, but you can´t recall exactly on which path and wich file. You can use `grep`to search inside the `/etc/` folder, like this:

```bash
grep -R -i "PermitRootLogin" /etc/*
```
- The `-R`option tells **grep** to search throught the directory recursively.

- The `-i`option makes the sarch **case-insensitive**

- This tool is specially usefull for the `/etc`and `/var/log` folders because it only works on plain text files.

## Tool: which

- Sometimes we are not sure where a command is running from, for instance when you run `nano`, how do we know where `nano`binary is actually located? 

- To see where `nano` comes from, use:

```bash
which nano
```
- By default, the system searches for binaries in the directories listed in your `PATH` environment variable. You can see those directories with:

```bash
echo $PATH
```

## Additional Tools: `zless`and `zgrep`

- `less`and `grep` works only for plain text files, however sometimes we might need to search under compressed files, in these cases we can use `zless`or `zgrep` commands.

### Examples

- The `apache2` access logs files are stored under `/etc/log/apache2/`, in Linux, regularly,  these files are compressed on daily basis to a `.gz` format, as we can see on this search:

```bash
❯ find /var/log/apache2 -name "access*"
/var/log/apache2/access.log.4.gz
/var/log/apache2/access.log.3.gz
/var/log/apache2/access.log
/var/log/apache2/access.log.1
/var/log/apache2/access.log.2.gz

```

- Let said we would like to look inside one of the compressed files, we can use `zless`

```bash
zless /var/log/apache2/access.log2.gz
```

- We also can search for an specific text inside a compressed file using `zgrep`

```bash
 zgrep "Chrome" /var/log/apache2/access.log.2.gz
```

## `-exec`option in `find`

- With `-exec` we can execute a command for **each file** in the `find` results 

### Basic Syntax

```bash
find [path] [conditions] -exec [command] {} \;
```

- `{}` is replaced by each file name in the output of `find`
- `\;` tell `find`where the command ends.

### Examples

- Delete all .tmp files in `/tmp`

```bash
find /tmp -type f -name "*.tmp" -exec rm {} \;
```

> This deletes each .tmp file individually.

- List files over 10MB

```bash
find . -type f -size +10M -exec ls -lh {} \ss;
```

> This lists the size and details of each file found.

- Change permissions of .sh files

```bash
find . -type f -name "*.sh" -exec chmod +x {} \;
```

> Makes all .sh files in current directory executable.


- Copy files to another directory

```bash
find . -type f -name "*.log" -exec cp {} /backup/logs/ \;
```

- Bonus: `+` instead of `\;`

- You can use `+` instead of `\;` to run the command on multiple files at once, improving the performance:

```bash
find . -type f -name "*.log" -exec rm {} +
```
> This deletes in batches instead of one by one.


## Finding who is using a file

### Tool: `lsof`

- `lsof`stands ofr **List Open Files**

- With this command we can display all open files and the process that opened them

- This is a powerful diagnostic tool, given that in Linux, **everythin is a file** - this includes regular files, directories, sockets, pipes, and even network connections. 

- `lsof` helps to inspect which processes are using those resources.





### Tool: `fuser`

---

## 

---
