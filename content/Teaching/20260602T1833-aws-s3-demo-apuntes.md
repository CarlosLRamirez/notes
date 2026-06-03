---
created: 2026-06-02 18:33
modified: 2026-06-02 18:50
tags: []
title: AWS S3 Demo - Apuntes
aliases: AWS S3 Demo - Apuntes
publish: true
folder: Teaching
---

URLs para subir un archivo

```bash
# ── ENDPOINT NORMAL ──────────────────────────────────────────────────────────
aws s3 cp archivo-grande.bin s3://cloud-arquitect-s3-demo-bucket-02062026t1812/

# ── ENDPOINT ACELERADO ───────────────────────────────────────────────────────
aws s3 cp archivo-grande.bin s3://cloud-arquitect-s3-demo-bucket-02062026t1812/ \
  --endpoint-url https://cloud-arquitect-s3-demo-bucket-02062026t1812.s3-accelerate.amazonaws.com
```

Para un archivo grande, agrégale estas opciones a ambos comandos:

```bash
# Con multipart explícito y progreso visible
aws s3 cp archivo-grande.zip s3://cloud-arquitect-s3-demo-bucket-02062026t1812/ \
  --endpoint-url https://cloud-arquitect-s3-demo-bucket-02062026t1812.s3-accelerate.amazonaws.com \
  --expected-size 5368709120 \
  --no-progress

# Configurar el tamaño de cada parte y concurrencia (más control)
aws s3 cp archivo-grande.zip s3://cloud-arquitect-s3-demo-bucket-02062026t1812/ \
  --endpoint-url https://cloud-arquitect-s3-demo-bucket-02062026t1812.s3-accelerate.amazonaws.com \
  --multipart-chunksize 64MB \
  --metadata '{"uploaded-via":"transfer-acceleration"}'
```

Si quieres medir el tiempo de cada uno para comparar:

```bash
# Normal
time aws s3 cp archivo-grande.zip s3://cloud-arquitect-s3-demo-bucket-02062026t1812/test-normal.zip

# Acelerado
time aws s3 cp archivo-grande.zip s3://cloud-arquitect-s3-demo-bucket-02062026t1812/test-acelerado.zip \
  --endpoint-url https://cloud-arquitect-s3-demo-bucket-02062026t1812.s3-accelerate.amazonaws.com
```

El `time` al inicio te imprime cuántos segundos tardó cada uno — así ves la diferencia real desde Guatemala hacia el bucket.


