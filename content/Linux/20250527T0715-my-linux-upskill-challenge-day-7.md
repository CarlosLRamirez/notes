---
created: 2025-05-27T07:15:30
modified: 2025-05-28T22:42:20-06:00
publish: true
tags:
  - linux
title: "My Linux Upskill Challenge: Day 7"
aliases:
  - "My Linux Upskill Challenge: Day 7"
zettel-type:
  - permanent
statuS:
  - finished
comments: true
---

## Introduction

This is my journal note following the [Linux Upskill Challenge: Day 7](https://linuxupskillchallenge.org/07/).

---
## Before we Begin

In this lesson, we explore how **services work in Linux**, how they're configured, and where to find their logs. The example used is installing and experimenting with the **Apache2 web server**.
### Installing Apache2 on Ubuntu

  ```bash
  sudo apt update
  sudo apt install apache2
  ```

### How to verify Apache is running

- Open your browser and go to `http://<server-ip>` or use `curl` in the server terminal:

  ```bash
  curl http://localhost
  ```
  
> [!Note]
> If you'r using an cloud hosted virtual machine, you will probably need to do extra steps in order to allow incoming request to you server on the port 80, perhaps this guides will help you:
> - [AWS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html)
> - [Azure](https://learn.microsoft.com/en-us/answers/questions/1190066/how-can-i-open-a-port-in-azure-so-that-a-constant)
>- [GCP](https://cloud.google.com/firewall/docs/using-firewalls#listing-rules-vm)
> - [Oracle Cloud Infrastructure](https://docs.oracle.com/en-us/iaas/developer-tutorials/tutorials/apache-on-oracle-linux/01-summary.htm#add-ingress-rules)
 
---
##  Understanding Services in Linux

### What is a service in Linux?

- A service is a background process (also called a *daemon*) that is managed by the system to start, stop, or restart as needed.
- In our case **apache2** applications is running as a "service" inside Linux.

### How are services managed?

- On modern systems like Ubuntu, services are managed using `systemd` via the `systemctl` command.  

---
## Process,  Daemons, Services,  and Units
### Process

- A **process** is a running instance of a program.  
- For example, if you have a Bash script in your `home` folder, that's just a file — it does nothing until you execute it.
- When you run the script, a **process is created** (with a Process ID or **PID**) and it starts using system resources. So a process is the live, running version of a program.
- You can even run the same program (or script) multiple times — each execution creates a **new, separate process**.

> Every process has its own Process ID (PID).

### Daemon

- A **daemon** is a process that runs in the background and typically does **not** interact directly with the user.
- Daemons usually **start when the system boots** and continue running “silently” in the background. They often handle essential tasks like **logging**, **printing**, **networking**, or system services like **SSH**.
- There’s a naming convention where many daemons end with the letter **d**, such as `sshd`, `systemd`, or `httpd`. However, this is **not a strict rule** — some daemons like `cron`, `cups`, or `rsyslog` don’t follow this pattern.

### Service

- When a daemon is **managed by the system’s init system** (like `systemd`), it’s typically referred to as a **service**. This means it has an associated **unit file** that defines how to start, stop, and monitor it.
- Examples of daemons that run as managed services include: `httpd` (Apache), `nginx` (Nginx), and `docker` (Docker).
- To understand the difference, think of it this way: **not every daemon is a service** — meaning there can be background daemons that are **not managed by the init system** (like `systemd`). These may be started manually or by other programs.

### Unit

- `systemd` manages **units** — a unit is a representation of a resource that needs to be controlled.
- Simply put, a unit is something that `systemd` organizes and keeps track of.
- There are different types of **units** depending on the resource they describe or represent.
- One of the most common unit types is the **service unit** (`.service`), which defines how to manage a service or application. It includes instructions on how to start or stop the service, when it should be started automatically, and any dependencies or ordering with other software.
- Other unit types include: `.socket`, `.mount`, `.automount`, `.swap`, `.target`, `.path`, `.timer`, `.snapshot`

> For example, a `.service` unit describes how to manage a system service like `apache2`, while a `.mount` unit tells `systemd` how to handle mounting a filesystem.

- Units are defined using configuration files called **unit files**.

---

## What is  systemd ?

- `systemd` it's the core **init system** used in most modern Linux distributions (like Ubuntu, Debian, Fedora, RHEL, etc.).
- It's the background process that manages all the services and other processes that are running on your system.
- It's like the 🧠 brain, or🗼 Control Tower of everything that is running on Linux
- It is the **first process (PID 1)** that runs after the Linux kernel finishes booting.
- Its job is to **initialize the system**, **start all necessary services**, and **manage them** during runtime.

> Other Linux distribution (specialy oldest) could have a different **init systems**, like OpenRC, Upstart, etc..

### The command `systemctl`

- `systemctl`is the command line tool to interact with `systemd`
- You use `systemctl`to start/stop/enable/disable services, among other things.
- So `systemctl`is the user-facing CLI tool to manage **systemd**.

### Start and  Stop services

- You can use this commands to start and stop the Apache2 **service**.

```bash 
sudo systemctl start apache2
sudo systemctl stop apache2
```

### Restart and Reload services 

- To restart a running service, you can use the `restart` command:

```bash
sudo systemctl restart apache2
```

- You can also reload a service with the `reload` command, this means that the application will be able to reload its configuration files (without restarting):

```bash
sudo systemctl reload apache2
```

### Check status

- In case you want to check the status you should use:

```bash
systemctl status apache2
```

- You should observe sometime like this if the service is running OK

```bash
● apache2.service - The Apache HTTP Server
     Loaded: loaded (/usr/lib/systemd/system/apache2.service; enabled; preset: enabled)
     Active: active (running) since Tue 2025-05-27 21:55:51 CST; 12h ago
       Docs: https://httpd.apache.org/docs/2.4/
    Process: 6291 ExecStart=/usr/sbin/apachectl start (code=exited, status=0/SUCCESS)
   Main PID: 6294 (apache2)
      Tasks: 55 (limit: 4549)
     Memory: 5.6M (peak: 6.3M)
        CPU: 2.565s
     CGroup: /system.slice/apache2.service
             ├─6294 /usr/sbin/apache2 -k start
             ├─6296 /usr/sbin/apache2 -k start
             └─6297 /usr/sbin/apache2 -k start

May 27 21:55:51 ubuntu systemd[1]: Starting apache2.service - The Apache HTTP Server...
May 27 21:55:51 ubuntu apachectl[6293]: AH00558: apache2: Could not reliably determine the server's fully qualified domain name, >
```

### Enabling and Disabling Services

  - To enable a service to start automatically on boot, use the `enable` command:

```bash
sudo systemctl enable apache2
```

- To disable a service for automatic start, you can use:

```bash
sudo systemctl disable apache2
```

- To see a list of all of the active units that `systemd` knows about, we can use the `list-units` command:

```bash
systemctl list-units
```

---
## Service configuration Files

- As must of the services  in Linux **Apache2** configurations files are located in the usual place: `/etc/`.  
- Specifically, the main configuration file for **Apache** is here:

    ```bash
    /etc/apache2/apache2.conf
    ```

- You can open it using `less`, but you could also use `vim` to explore or edit it.

    ```bash
    less /etc/apache2/apache2.conf
    ```

- Inside that file, you will found this line:

    ```
    IncludeOptional conf-enabled/*.conf
    ```

- That tells Apache to also load all `.conf` files inside the `conf-enabled/` folder when it starts.  
- So it’s like **modular** config — instead of editing a single big file, you can drop in specific `.conf` files.
- This pattern (many small config files + include directives) seems pretty common in Linux tools.
- Another important configuration files in Apache2 includes

```bash
/etc/apache2/sites-available/
/etc/apache2/sites-enabled/
```

- `/etc/apache2/sites-available/`: this directory contains configuration files for **all available virtual hosts**, that are available but not enables
- `/etc/apache2/sites-enabled/`: - This contains **symbolic links** (symlinks) to the `.conf` files in `sites-available/`. If a site is linked here, **it is active.**

> This lesson isn’t about setting up Apache2 web server or deploying a web page, so I didn’t dive into the details, only a very basic guide  [here](#apache2-very-basic-setup)

---
## Service logs

Services saves their logs in `var/logs`, as expected, **Apache** keeps its logs under `/var/log/apache2/`

```bash
cd /var/log/apache2
ls -l
```

- I checked the `access.log` file — I could actually see the request I made when I visited the test page in the browser.

```bash
less access.log
```

```bash
192.168.64.1 - - [27/May/2025:21:55:55 -0600] "GET / HTTP/1.1" 200 3459 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36"
192.168.64.1 - - [27/May/2025:22:17:44 -0600] "GET /sample HTTP/1.1" 404 491 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36"
192.168.64.1 - - [28/May/2025:08:27:29 -0600] "GET / HTTP/1.1" 200 689 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36"

```

- I also looked at `error.log` — luckily, it was empty (which is a good sign 😅).  

---
## Appendix: Apache2 very basic setup


- In Apache2, the default webpage files are located in `/var/www/html`
- This is defined in the configuration file `/etc/apache2/sites-enabled/000-default.conf`, specifically in the parameter `_DocumentRoot_`.
- To modify the default web page to custom simple page, you need to edit the `var/www/html/index.html`, using `vim`of course!
- Delete everything on the current file and subtitute with this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Welcome to My Apache Server</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f3f3f3;
      text-align: center;
      padding-top: 100px;
    }
    h1 {
      color: #2c3e50;
    }
    p {
      color: #555;
    }
  </style>
</head>
<body>
  <h1>🚀 It works!</h1>
  <p>This is the new default page served by Apache.</p>
  <p>You can edit this page at <code>/var/www/html/index.html</code>.</p>
</body>
</html>
```

- You will see this simple web page on your browser in `http://<server-ip>`

![](https://i.imgur.com/jFWnqtO.png)

---
## Key takeaways

- `systemd` is the program responsible for **managing and coordinating** other programs that run in the background on a Linux system — known as **services** or **daemons**. But it goes beyond just services: it also manages **devices**, **mount points**, **sockets**, **timers**, and other essential components. 
- Think of it as the **modern orchestrator** of the system’s startup process and overall state.
- Every sevice has their own configuration files and service logs that are stores in `/etc` and `/var/logs` respectively

---
## Additional Resources
- [Using _systemctl_ to manage services](https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units)
- [HTTPD - Apache2 Web Server](https://ubuntu.com/server/docs/how-to-install-apache2)
- [The Apache HTTP Server](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/deploying_web_servers_and_reverse_proxies/setting-apache-http-server_deploying-web-servers-and-reverse-proxies#doc-wrapper)

---
## Related Notes
- Previous Lesson: [[20250526T1214-my-linux-upskill-challenge-day-6|My Linux Upskill Challenge: Day 6]]
- Next Lesson: [[20250528T1022-my-linux-upskill-challenge-day-8|My Linux Upskill Challenge: Day 8]]

---
**Nota diaria:** [[2025-05-27]]
