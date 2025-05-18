---
created: 2025-05-18T10:34:57
modified: 2025-05-18T11:19:16-06:00
publish: true
tags:
  - linux
title: What is a Binary in Linux?
aliases:
  - What is a Binary in Linux?
zettel-type:
  - permanent
---
In Linux (and UNIX-like systems), a **binary** is a **compiled executable file**—meaning it’s machine code that the system can run directly. It’s the output of compiling source code (like C or C++) into an executable format.

### **✅ Are binaries the same as programs?**

- **Yes, usually.** When you run a program like `ls`, `nano`, or `python`, you’re typically running a **binary file** somewhere in the filesystem (e.g., `/bin/ls`).
- However, **“program”** is a broader term. A program could be:
    - A compiled **binary** (e.g., `/usr/bin/firefox`)
    - A **script** (e.g., `/usr/bin/pip`, which is a Python script)
    - A **shell function** or **alias** (like ll being an alias for `ls -l`)
    
So:
🟢 **All binaries are programs,** but
🔴 **Not all programs are binaries.** Some are scripts.