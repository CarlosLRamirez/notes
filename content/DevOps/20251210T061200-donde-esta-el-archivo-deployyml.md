---
id: 20251210T061200-donde-esta-el-archivo-deployyml
aliases:
  - Donde esta el archivo deploy.yml
tags:
  - DevOps
  - cloud
  - github-actions
created: 2025-12-10 06:12
modified: 2026-01-09 11:21
title: Donde esta el archivo deploy.yml
publish: true
folder: DevOps
---

## Que es el deploy.yml

`deploy.yml` es un archivo de configuración que define un workflow (flujo de trabajo) automático en GitHub Actions.

## ¿Qué es exactamente?

Un archivo YAML (.yml o .yaml) que le dice a GitHub qué hacer automáticamente cuando ocurren ciertos eventos en tu repositorio.

Ubicación típica:

```txt
tu-repo/
└── .github/
    └── workflows/
        └── deploy.yml
```

## Configurar el tema de Quartz en el archivo deploy.yml

Esta configuración se utiliza para especificar el tema de Quartz que queremos usar

```yaml
env:
  THEME_NAME: catppuccin
```

- Lista completa de [temas](https://github.com/saberzero1/quartz-themes)

- Favoritos:
  - fastppuccin
  - hackthebox
