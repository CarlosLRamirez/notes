---
created: 2025-06-05T11:30:36-06:00
modified: 2025-06-06T18:13:46-06:00
aliases:
  - "My Linux Upskill Challenge: Day 8"
title: "My Linux Upskill Challenge: Day 8"
publish: true
tags:
  - linux
---

_Following the [Linux Upskill Challenge: Day 8](https://linuxupskillchallenge.org/08/)_

This is my notes for the Day 8 Lesson - Text Analysis Tools

---

## Introduction

This lesson covers the most important Linux commands for viewing, exploring, and manipulating text files. These small but powerful tools are incredibly useful when you need to explore and analyze large text files created by applications, user logs, and other system files.

## Sample Log File Setup

For this practice session, I asked ChatGPT to generate an Apache access log sample file with different sources and scenarios to test various combinations and common sysadmin use cases. In real-world scenarios, you'd work with actual access log files.

**File location:** `/var/log/apache2/sample_access.log`

```bash
192.168.1.10 - - [05/Jun/2025:18:01:01 -0600] "GET / HTTP/1.1" 200 720 "-" "curl/8.4.0"
10.0.0.2 - - [05/Jun/2025:18:01:03 -0600] "GET /index.html HTTP/1.1" 200 1024 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0"
172.16.5.5 - - [05/Jun/2025:18:01:04 -0600] "POST /login HTTP/1.1" 302 512 "http://myserver.com" "Mozilla/5.0 (Linux; Android 11; SM-G973U) Chrome/122.0.0.0 Mobile"
192.168.1.15 - - [05/Jun/2025:18:01:07 -0600] "GET /api/data HTTP/1.1" 200 2048 "-" "PostmanRuntime/7.30.0"
203.0.113.12 - - [05/Jun/2025:18:01:10 -0600] "GET /docs/index.html HTTP/1.1" 200 1560 "-" "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:120.0) Gecko/20100101 Firefox/120.0"
192.168.1.10 - - [05/Jun/2025:18:01:14 -0600] "GET / HTTP/1.1" 200 720 "-" "curl/8.4.0"
192.168.1.15 - - [05/Jun/2025:18:01:16 -0600] "GET /favicon.ico HTTP/1.1" 404 230 "-" "PostmanRuntime/7.30.0"
10.0.0.2 - - [05/Jun/2025:18:01:20 -0600] "GET /dashboard HTTP/1.1" 200 1800 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Edge/115.0.0.0"
198.51.100.99 - - [05/Jun/2025:18:01:25 -0600] "GET /admin HTTP/1.1" 403 890 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 12_6_1) Safari/537.36"
10.10.10.1 - - [05/Jun/2025:18:01:28 -0600] "POST /upload HTTP/1.1" 500 10240 "-" "curl/8.3.0"
172.16.5.5 - - [05/Jun/2025:18:01:31 -0600] "GET /api/stats HTTP/1.1" 200 4096 "-" "Mozilla/5.0 (Linux; Android 11) Chrome/123.0.0.0 Mobile"
203.0.113.12 - - [05/Jun/2025:18:01:33 -0600] "GET /dashboard HTTP/1.1" 200 1800 "-" "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) Firefox/121.0"
192.168.1.10 - - [05/Jun/2025:18:01:36 -0600] "GET /secret HTTP/1.1" 401 720 "-" "curl/8.4.0"
198.51.100.99 - - [05/Jun/2025:18:01:40 -0600] "GET /admin HTTP/1.1" 403 890 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 12_6_1) Safari/537.36"
10.10.10.1 - - [05/Jun/2025:18:01:45 -0600] "GET /static/image.png HTTP/1.1" 200 2048 "-" "Wget/1.21"
10.10.10.2 - - [05/Jun/2025:18:01:48 -0600] "GET /static/image.png HTTP/1.1" 200 2048 "-" "Wget/1.21"
192.168.1.15 - - [05/Jun/2025:18:01:50 -0600] "GET /login HTTP/1.1" 200 1024 "-" "Mozilla/5.0 (Windows NT 11.0; Win64; x64) Chrome/130.0.0.0"
```

---

## Core Text Analysis Tools

### `cat` - Display File Contents

Dumps the complete content of a file to the terminal:

```bash
cat /var/log/apache2/sample_access.log
```

**Best for:** Small files or when you need to see the entire content at once.

### `less` - Interactive File Viewer

Opens a text file for interactive navigation with keyboard controls:

```bash
less /var/log/apache2/sample_access.log
```

**Navigation shortcuts:**

- Arrow keys or `j`/`k`: Move up/down line by line
- `gg`: Jump to the beginning of the file
- `G`: Jump to the end of the file
- `/pattern`: Search for text patterns
- `n`/`N`: Jump to next/previous search result
- `q`: Quit

**Best for:** Large files where you need to browse through content interactively.

### `tail` - View File Endings

Displays the last part of a file (default: last 10 lines):

```bash
# Basic usage - last 10 lines
tail /var/log/apache2/sample_access.log

# Specify number of lines
tail -n 5 /var/log/apache2/sample_access.log

# Follow file in real-time (great for monitoring logs)
tail -f /var/log/apache2/sample_access.log
```

> **Tip:** Use `Ctrl+C` to exit the `-f` (follow) mode.

**Best for:** Monitoring active log files or checking the most recent entries.

### `head` - View File Beginnings

Similar to `tail`, but shows the first lines of a file:

```bash
# First 10 lines (default)
head /var/log/apache2/sample_access.log

# First 5 lines
head -n 5 /var/log/apache2/sample_access.log
```

---

## Pattern Matching and Filtering

### `grep` - Search Text Patterns

Filters lines containing specific text patterns (supports regular expressions):

```bash
# Basic search
grep "Mozilla" /var/log/apache2/sample_access.log

# Case-insensitive search
grep -i "curl" /var/log/apache2/sample_access.log

# Search for specific requests
grep "favicon.ico" /var/log/apache2/sample_access.log

# Exclude lines matching a pattern
grep -v "Chrome" /var/log/apache2/sample_access.log

# Show line numbers
grep -n "404" /var/log/apache2/sample_access.log
```

---

## The Power of Pipes (`|`)

The pipe symbol `|` is fundamental to Unix philosophy - it lets you chain commands by passing the output of one command as input to another.

### Basic Pipe Examples

```bash
# View IP addresses and scroll through them
cut -d" " -f1 /var/log/apache2/sample_access.log | less

# Filter for Chrome browsers, then show only macOS users
grep "Mozilla" /var/log/apache2/sample_access.log | grep "Macintosh"

# Exclude Chrome traffic from Mozilla browsers
grep "Mozilla" /var/log/apache2/sample_access.log | grep -v "Chrome"

# Find Apache processes (system administration example)
ps aux | grep apache2
```

---

## Data Extraction and Manipulation

### `cut` - Extract Columns/Fields

Extracts specific sections from delimited text:

```bash
# Extract first field (space-delimited)
cut -d" " -f1 /var/log/apache2/sample_access.log

# Extract multiple fields
cut -d: -f1,3,5 /etc/passwd

# Extract field ranges
cut -d: -f1-3 /etc/passwd      # Fields 1 through 3
cut -d: -f4- /etc/passwd       # Field 4 to end

# Extract by character position
cut -c1-10 myfile.txt          # First 10 characters
```

**Example with `/etc/passwd`:**

```bash
# Show usernames only
tail /etc/passwd | cut -d: -f1

# Show username, UID, and home directory
cut -d: -f1,3,6 /etc/passwd
```

### `sort` - Arrange Lines

Orders lines alphabetically or numerically:

```bash
# Basic alphabetical sort
sort names.txt

# Numeric sort in reverse order
sort -nr numbers.txt

# Sort by specific column (space-delimited)
sort -k2 file.txt

# Sort CSV by third column numerically
sort -t ',' -k3 -n data.csv
```

### `uniq` - Remove Duplicates

Removes consecutive duplicate lines (usually used with `sort`):

```bash
# Remove duplicates
sort file.txt | uniq

# Count occurrences of each line
sort file.txt | uniq -c

# Show only duplicated lines
sort file.txt | uniq -d
```

---

## Advanced Text Processing

### `awk` - Pattern Scanning and Data Extraction

Powerful tool for processing structured text data:

```bash
# Print specific columns (fields)
awk '{print $1}' /var/log/apache2/sample_access.log          # IP addresses
awk '{print $4, $5}' /var/log/apache2/sample_access.log     # Date and time

# Filter by conditions
awk '$9 == 404' /var/log/apache2/sample_access.log          # 404 errors only
awk '$NF > 1000' /var/log/apache2/sample_access.log         # Large responses

# Custom formatting
awk '{print "IP: " $1 ", Status: " $9}' /var/log/apache2/sample_access.log
```

### `sed` - Stream Editor

Search, replace, and edit text on-the-fly:

```bash
# Replace text (first occurrence per line)
sed 's/curl/CURL/' /var/log/apache2/sample_access.log

# Replace all occurrences
sed 's/curl/CURL/g' /var/log/apache2/sample_access.log

# Delete lines containing specific text
sed '/curl/d' /var/log/apache2/sample_access.log

# Show only matching lines
sed -n '/Mozilla/p' /var/log/apache2/sample_access.log
```

> **Warning:** Use `sed -i` (in-place editing) carefully - it modifies the original file!

---

## Output Redirection

### Save Output to Files (`>`)

Redirect command output to files instead of the terminal:

```bash
# Create/overwrite file
ls -ltr > listing.txt

# Append to file
echo "New entry" >> listing.txt

# Redirect errors to file
command 2> errors.log

# Redirect both output and errors
command > output.log 2>&1
```

---

## Practical Log Analysis One-Liners

### 🔍 Top Visitor IPs

```bash
cut -d' ' -f1 /var/log/apache2/sample_access.log | sort | uniq -c | sort -nr
```

### 📂 Request Methods Analysis

```bash
cut -d'"' -f2 /var/log/apache2/sample_access.log | cut -d' ' -f1 | sort | uniq -c
```

### 🧑‍💻 User-Agent Analysis

```bash
cut -d'"' -f6 /var/log/apache2/sample_access.log | sort | uniq
```

### 📊 HTTP Status Code Breakdown

```bash
cut -d'"' -f3 /var/log/apache2/sample_access.log | cut -d' ' -f2 | sort | uniq -c
```

### 🔐 Find Failed Access Attempts

```bash
grep -E ' (401|403) ' /var/log/apache2/sample_access.log
```

### 🌐 Filter by Browser Type

```bash
grep -i "chrome" /var/log/apache2/sample_access.log
```

### 📄 Most Requested Paths

```bash
cut -d'"' -f2 /var/log/apache2/sample_access.log | cut -d' ' -f2 | sort | uniq -c | sort -nr
```

### 🔍 Find 404 Error Paths

```bash
grep ' 404 ' /var/log/apache2/sample_access.log | cut -d'"' -f2 | cut -d' ' -f2
```

### ⏰ Traffic by Hour

```bash
cut -d'[' -f2 /var/log/apache2/sample_access.log | cut -d':' -f2 | sort | uniq -c
```

---

## Advanced Analysis Examples

### Most Active IPs with Request Count

```bash
cut -d' ' -f1 /var/log/apache2/sample_access.log | sort | uniq -c | sort -nr | head -10
```

### Browsers Causing Most Server Errors

```bash
grep " 5[0-9][0-9] " /var/log/apache2/sample_access.log | cut -d'"' -f6 | sort | uniq -c | sort -nr
```

### Traffic Analysis by Time Period

```bash
cut -d'[' -f2 /var/log/apache2/sample_access.log | cut -d']' -f1 | cut -d':' -f1-2 | sort | uniq -c
```

### Large Response Analysis

```bash
awk '$NF > 2000 {print $1, $NF, $7}' /var/log/apache2/sample_access.log | sort -k2 -nr
```

---

## Key Takeaways

These text processing tools become incredibly powerful when combined. The Unix philosophy of "do one thing well" means you can chain simple commands to perform complex analysis tasks. Practice chaining these commands with pipes to build your own custom analysis workflows.

Remember: always test your commands on sample data before running them on important production logs!

## External Resources

- [Text processing commands](https://www.youtube.com/watch?v=nLa6jAbULe8&t=97s)
- [OSTechNix grep tutorial](https://www.ostechnix.com/the-grep-command-tutorial-with-examples-for-beginners/)
- [Where GREP came from](https://www.youtube.com/watch?v=NTfOnGZUZDk)
- [SED onliners](https://edoras.sdsu.edu/doc/sed-oneliners.html)
- [RegExr - a tool to learn, build and test Regular Expressions](https://regexr.com/)
- [explainshell.com - write down a command-line to see the help text that matches each argument](https://explainshell.com/)

## Related Notes

- Previous Lesson: [My Linux Upskill Challenge: Day 7](20250527T0715-my-linux-upskill-challenge-day-7.md)
- Next Lesson: [My Linux Upskill Challenge: Day 9](20250606T1811-my-linux-upskill-challenge-day-9.md)

---

**Nota diaria:** [2025-06-05](2025-06-05.md)
