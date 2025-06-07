---
created: 2025-05-19T21:38:52
modified: 2025-05-28T22:41:55-06:00
publish: true
tags:
  - linux
title: What is a Daemon in Linux?
aliases:
  - What is a Daemon in Linux?
zettel-type: 
comments: true
---
## Main Concept

> [!CONCEPT]
> A daemon is a **background process** that runs continuously without a user actively interacting with it. It usually provides **services** to other process or users.

The term comes from the Greek “δαίμων” (daimon), meaning a **guiding spirit**, not something evil — it’s meant to indicate something that works in the background, invisibly.

## Key Aspects
- Runs in the background
- Starts on boot
- Provides services
- Often ends with a 'd'

## Examples
- `sshd`: *Handles SSH connections*
- `systemd`: *Manages services an boot processes*
- `crond`: *Runs scheduled tasks (cron jobs)*
- `rsyslogd`: *Handles system logging*
- `cupsd`: *Printer service daemon*
- `httpd`, `nginxd`: *Web servers*
- `mysqld`,`postgres`: *Database servers*

---
**Nota diaria:** [[2025-05-19]]
