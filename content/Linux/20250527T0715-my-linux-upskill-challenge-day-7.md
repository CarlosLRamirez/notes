---
created: 2025-05-27T07:15:30
modified: 2025-05-28T10:23:56-06:00
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
---
## Introduction

This is my journal note following the [Linux Upskill Challenge: Day 7](https://linuxupskillchallenge.org/07/).

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

- If you'r using an cloud hosted virtual machine, you will probably need to do extra steps in order to allow incoming request to you server on the port 80, perhaps this guides will help you:
	- [AWS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html)
	- [Azure](https://learn.microsoft.com/en-us/answers/questions/1190066/how-can-i-open-a-port-in-azure-so-that-a-constant)
	- [GCP](https://cloud.google.com/firewall/docs/using-firewalls#listing-rules-vm)
	- [Oracle Cloud Infrastructure](https://docs.oracle.com/en-us/iaas/developer-tutorials/tutorials/apache-on-oracle-linux/01-summary.htm#add-ingress-rules)
##  Understanding Services

### ✅ Key Topics

**What is a service in Linux?**  
	- A service is a background process (also called a *daemon*) that is managed by the system to start, stop, or restart as needed.
	- In our case **apache2** applications is running as a "service" inside Linux.

**How are services managed?**  
- On modern systems like Ubuntu, services are managed using `systemd` via the `systemctl` command.  

### 🛠️ What is  systemd ?

- `systemd` is the **init system** used in most modern Linux distributions (like Ubuntu, Debian, Fedora, RHEL, etc.).
- It is the **first process (PID 1)** that runs after the Linux kernel finishes booting.
- Its job is to **initialize the system**, **start all necessary services**, and **manage them** during runtime.
- You can use this commands to start or stop the Apache2 **service**

```bash 
sudo systemctl start apache2
sudo systemctl stop apache2
```

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

### Configuration Files

- Apache2 config files are located in the usual place: `/etc/`.  
- Specifically, the main config file is here:

    ```bash
    /etc/apache2/apache2.conf
    ```

- I opened it using `less`, but I could also use `vim` to explore or edit it.

    ```bash
    less /etc/apache2/apache2.conf
    ```

- Inside that file, I found this line:

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


### Service logs

As expected, Apache keeps its logs under `/var/log/apache2/`

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

### Useful `systemctl` commands

  - To enable Apache to start automatically on boot:

```bash
sudo systemctl enable apache2
```

	- To disable automatic start:

```bash
sudo systemctl disable apache2
```

## Apache2 very basic setup


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
## Additional Resources
- [Using _systemctl_ to manage services](https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units)
- [HTTPD - Apache2 Web Server](https://ubuntu.com/server/docs/how-to-install-apache2)
- [The Apache HTTP Server](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/deploying_web_servers_and_reverse_proxies/setting-apache-http-server_deploying-web-servers-and-reverse-proxies#doc-wrapper)

---
## Related Notes
- Previous Lesson: [[20250526T1214-my-linux-upskill-challenge-day-6|My Linux Upskill Challenge: Day 6]]
- Next Lesson: [[20250528T1022-my-linux-upskill-challenge-day-8|My Linux Upskill Challenge: Day 8]]
