---
id: 20250606T181100-linux-upskill-day-9
aliases:
  - My Linux Upskill Challenge Day 9
tags:
  - linux
comments: true
created: 2025-06-06 18:11
folder: Linux
modified: 2025-12-11 06:07
publish: true
title: My Linux Upskill Challenge - Day 9
---

# My Linux Upskill Challenge - Day 9

_Following the [Linux Upskill Challenge: Day 9](https://linuxupskillchallenge.org/09/)_

This are my notes for the Day 8 Lesson - Diving into networking

This lesson was about an introduction to networking controls, including securing ports and basic firewall configuration.

## Checking Open Ports

To check which ports are open on the server, we can use the following tools:

- `ss` — stands for **socket status**, a modern replacement for the old `netstat`.
- `nmap` — a powerful **port scanner**, not usually installed by default.

- To show which ports are open and on which interfaces:

  ```bash
  ss -ltp
  ```

- Current output on my Ubuntu server, I only have ports 22(`ssh`) and 80 (`http`) open.

  ```bash
  ❯ ss -ltp
  State                Recv-Q               Send-Q                             Local Address:Port                               Peer Address:Port              Process
  LISTEN               0                    4096                               127.0.0.53%lo:domain                                  0.0.0.0:*
  LISTEN               0                    4096                                  127.0.0.54:domain                                  0.0.0.0:*
  LISTEN               0                    4096                                           *:ssh                                           *:*
  LISTEN               0                    511                                            *:http                                          *:*
  ```

- Another tool that we can use to check open ports is `nmap`, this tool is more intended to scan port on a remote machine, but we can use it to scan our own server (`localhost`).
- `nmap` can scan more than 1,000 ports to see if they’re open. But heads up — firewalls might see this as suspicious behavior and block your IP. So use it carefully, especially in your own network.
- `nmap`was not present by default on my ubuntu machine, so I installed using `sudo apt install nmap`, then I run:

  ```bash
  ❯ nmap localhost
  Starting Nmap 7.94SVN ( https://nmap.org ) at 2025-06-08 06:09 CST
  Nmap scan report for localhost (127.0.0.1)
  Host is up (0.000049s latency).
  Not shown: 998 closed tcp ports (conn-refused)
  PORT   STATE SERVICE
  22/tcp open  ssh
  80/tcp open  http
  ```

- The results showed with the `localhost` (`127.0.0.1`) IP could be incomplete, because this shows you only the service that are bounded to you local interface.
- If you want to be sure of what is really exposed, you should use the actual IP interface on the network card and use `nmap`with that.
- To find you the IP address of your network card use:

  ```bash
  ip a
  ```

- And scan again with your actual IP address, In my case the result turned out to be the same, but on real world scenario could differ

  ```bash
  ❯ nmap 192.168.1.29
  Starting Nmap 7.94SVN ( https://nmap.org ) at 2025-06-08 06:13 CST
  Nmap scan report for ubuntu (192.168.1.29)
  Host is up (0.000048s latency).
  Not shown: 998 closed tcp ports (conn-refused)
  PORT   STATE SERVICE
  22/tcp open  ssh
  80/tcp open  http

  Nmap done: 1 IP address (1 host up) scanned in 0.06 seconds
  ```

## Linux firewall

Linux has a built-in firewall directly on its kernel called **Netfilter**, don't think it as a tool or a command, instead is something included on its core, as a backend system.

There are different ways to "interact" or configure **Netfilter**, one of older and most-used is **iptables**, is still used but now it's considered legacy.

A more modern alternative is **nftables**, that was introduced in Linux 3.13+

> **iptables** and **nftables** can't be used at the same time unless you very sure what you're doing because they may conflict.

- To view the **iptables** current rules use this command:

  ```bash
  ❯ sudo iptables -L
  Chain INPUT (policy ACCEPT)
  target     prot opt source               destination

  Chain FORWARD (policy ACCEPT)
  target     prot opt source               destination

  Chain OUTPUT (policy ACCEPT)
  target     prot opt source               destination
  ```

---

### 🔎 iptables output explained

Let's break this output down. When you run `sudo iptables -L`, you're asking **iptables** to **list the current rules** in the **filter table**, which is the default table used for firewall rules.

```bash
Chain INPUT (policy ACCEPT)
target     prot opt source               destination
```

#### 🔹 Chain: `INPUT`

- Handles **incoming traffic to your system**.
- Example: SSH requests, web traffic to a server on port 80/443, etc.
- **Policy: ACCEPT** → If no rules match, allow the packet by default.

---

```bash
Chain FORWARD (policy ACCEPT)
target     prot opt source               destination
```

#### 🔹 Chain: `FORWARD`

- Handles **traffic that's passing through your system**, not destined for it.
- Example: If your Linux box is acting as a **router** or **gateway**.
- **Policy: ACCEPT** → Forward everything by default.

---

```bash
Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination
```

#### 🔹 Chain: `OUTPUT`

- Handles **outgoing traffic** generated by your system.
- Example: You using `curl` or `apt` to reach external servers.
- **Policy: ACCEPT** → Allow all outgoing traffic by default.

---

#### Output Summary

- Currently I have **no firewall rules** set in `iptables`.
- The **default policy is "ACCEPT"**, so **everything is allowed**:
  - Any service can receive inbound traffic (`INPUT`)
  - Forwarding traffic is allowed (`FORWARD`)
  - Your system can initiate outbound connections (`OUTPUT`)

> In addition to the default filter table (used for basic firewall rules), **iptables** supports several other **tables** — each with a specific purpose, some examples are: **nat**, **mangle**, **raw**, **security**.

---

### Uncomplicated Firewall (UFW)

UFW it's a **frontend** that helps us to configure the firewall rules on a more easy way, it's present mostly on Ubuntu/Debian systems.

Under the hood, it manages the **iptables** configuration (or **nftables** in newer systems.)

- `ufw`is available by default in all Ubuntu installations after 8.04 LST, but if you need to install it, use:

  ```bash
  sudo apt install ufw
  ```

- To check the current status of **UFW** run
  ```bash
  sudo ufw status verbose
  ```

In my case it was disabled by default

```bash
❯ sudo ufw status verbose
Status: inactive
```

- To allow SSH but deny HTTP we would type

  ```bash
  sudo ufw allow ssh
  sudo ufw deny http
  ```

  - example:

    ```bash
    ❯ sudo ufw allow ssh
    Rules updated
    Rules updated (v6)
    ❯ sudo ufw deny http
    Rules updated
    Rules updated (v6)
    ```

- Then enable **UFW** with this:

  ```bash
  sudo ufw enable
  ```

  - Like here

  ```bash
  ❯ sudo ufw enable
  Command may disrupt existing ssh connections. Proceed with operation (y|n)? y
  Firewall is active and enabled on system startup
  ```

> [!TIP]
> Be sure to ALLOW ssh, of you will loose contact with your remote server

- After enabling UFW, if you run `iptables -L` again, you’ll see UFW-created rules like:

```bash
Chain ufw-user-input (1 references)
target     prot opt source               destination
ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:ssh
DROP       tcp  --  anywhere             anywhere             tcp dpt:http
```

- To re-allow HTTP traffic:

```bash
sudo ufw allow http
sudo ufw enable
```

## Changing default ssh port

ometimes it's a good idea to change the default SSH port (22) to something else like `2222`. This can be done by editing:

```
/etc/ssh/sshd_config
```

This is called "security through obscurity." It's not a strong defense by itself, but can help avoid automated scans.

## Conclusions

This lesson covered the basics of checking open ports and using firewalls to secure Linux servers. It focused on practical tools (`ss`, `nmap`, `iptables`, `ufw`) and basic firewall configurations.

This is not an in-depth guide — for more advanced usage, consult the official documentation or community tutorials.

## External Resources

- [How to Log Linux IPTables Firewall Dropped Packets to a Log File](http://www.thegeekstuff.com/2012/08/iptables-log-packets/)
- [Iptables How To](https://help.ubuntu.com/community/IptablesHowTo)
- [12 ss Command Examples to Monitor Network Connections](https://www.tecmint.com/ss-command-examples-in-linux/)
- [UFW - Uncomplicated Firewall](https://help.ubuntu.com/community/UFW)
- [Collection of basic Linux Firewall iptables rules](http://linuxconfig.org/collection-of-basic-linux-firewall-iptables-rules)
- [10 Netstat Command Example](http://www.thegeekstuff.com/2010/03/netstat-command-examples/)
- [UFW Uncomplicated Firewall](http://www.youtube.com/watch?v=nc3A5Dy4xE0&feature=relmfu) (video)
- [How to install nftables in Ubuntu](https://www.liquidweb.com/kb/how-to-install-nftables-in-ubuntu/)
- [No, moving your ssh port isn’t security by obscurity](https://danielmiessler.com/blog/no-moving-your-ssh-port-isnt-security-by-obscurity/)
- [Port knocking](https://wiki.archlinux.org/title/Port_knocking)

---

## Related Notes

- Previous Lesson: [My Linux Upskill Challenge: Day 8](20250528T1022-my-linux-upskill-challenge-day-8.md)
- Next Lesson: [20250611T0831-my-linux-upskill-challenge-day-10](20250611T0831-my-linux-upskill-challenge-day-10.md)

---

**Created:** [[2025-06-06]]
