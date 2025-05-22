---
created: 2025-05-21T23:55:44
modified: 2025-05-22T12:40:25-06:00
publish: false
tags: 
title: "Customizing Your Linux Shell: Oh My Zsh, Oh My Bash, and Prompt Styling"
aliases:
  - "Customizing Your Linux Shell: Oh My Zsh, Oh My Bash, and Prompt Styling"
---
A beginner-friendly guide to enhancing your shell experience with themes, plugins, and smarter prompts.

---

## 🧭 Introduction

Now that you’ve learned how to change your default shell (see [Part 1](#)), let’s take it a step further.

In this post, we’ll explore:

- How to make your terminal **look and feel better**
- Popular shell customization frameworks: **Oh My Zsh** and **Oh My Bash**
- A peek into prompt differences between `bash`, `zsh`, and `fish`
- Optional theme and plugin tips to boost productivity

---

## 🌀 What is Oh My Zsh?

> A community-driven framework for managing your Zsh configuration.

- Makes your terminal look great
- Adds helpful features and time-saving plugins
- Easy to install and customize

### 🚀 How to Install

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

> 📝 This will back up your `.zshrc` and create a new one with the defaults.

---

### 🎨 Exploring Themes

Oh My Zsh comes with dozens of built-in themes. Some popular ones:

- `robbyrussell` (default)
- `agnoster`
- `bureau`
- `powerlevel10k` (external, very advanced)

Preview themes here:  
🔗 [https://github.com/ohmyzsh/ohmyzsh/wiki/Themes](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes)

To change the theme:

```bash
nano ~/.zshrc
```

Look for the line:
```bash
ZSH_THEME="robbyrussell"
```

Change it to something like:
```bash
ZSH_THEME="agnoster"
```

Then apply it:

```bash
source ~/.zshrc
```

---

## 🎉 Bonus: Powerlevel10k Theme (Optional)

If you want a **super polished** prompt with Git status, icons, and speed:

```bash
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git $ZSH_CUSTOM/themes/powerlevel10k
```

Then update your `~/.zshrc`:

```bash
ZSH_THEME="powerlevel10k/powerlevel10k"
```

> 💡 First time you launch a new terminal, it will guide you through a one-time visual setup wizard.

---

## 🧢 What is Oh My Bash?

If you're using Bash instead of Zsh, Oh My Bash provides similar benefits:

- Enhanced prompt
- Preloaded aliases
- Optional plugins

### ✅ Install It

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/ohmybash/oh-my-bash/master/tools/install.sh)"
```

It sets up a customized `.bashrc` and gives you optional themes to try.

To switch themes:

```bash
nano ~/.bashrc
```

Change this line:

```bash
OSH_THEME="font"
```

To another theme, like `"powerline"` or `"agnoster"`

Then reload:

```bash
source ~/.bashrc
```

---

## 🧭 Prompt Differences: Bash vs Zsh vs Fish

| Feature        | Bash            | Zsh (with Oh My Zsh) | Fish |
|----------------|-----------------|-----------------------|------|
| Default prompt | `user@host:~$`  | `➜ ~` (themed)        | `~❯` |
| Git-aware?     | ❌ (manually)    | ✅ (with theme/plugin) | ✅ |
| Syntax highlighting | ❌          | Optional via plugin   | ✅ |
| Autosuggestions | ❌             | Optional via plugin   | ✅ |
| Config file    | `~/.bashrc`     | `~/.zshrc`            | `~/.config/fish/config.fish` |

---

## 🧪 Optional: Add Plugins to Oh My Zsh

You can enable plugins by editing this line in your `~/.zshrc`:

```bash
plugins=(git docker sudo)
```

Then:

```bash
source ~/.zshrc
```

Full plugin list:  
🔗 [https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins](https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins)

---

## 🎯 Conclusion

Your terminal is more than just a command runner — it's your **workspace**. A better prompt and experience can make your daily tasks easier, more fun, and more productive.

Whether you use Bash, Zsh, or Fish — customizing your shell brings out the power of Linux in a more approachable way.

---

Let me know if you want this as a Markdown export or need a visual (image) to include in the post for comparison of prompts!