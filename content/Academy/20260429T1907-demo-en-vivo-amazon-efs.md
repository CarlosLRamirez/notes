---
created: 2026-04-29 19:07
modified: 2026-04-29 19:08
tags:
  - teaching
  - AWS
  - EFS
title: "Demo en vivo: Amazon EFS"
aliases: "Demo en vivo: Amazon EFS"
publish: true
folder: Academy
---

# Demo en vivo: Amazon EFS — Sistema de archivos compartido

## Qué van a ver los estudiantes

Crear un sistema de archivos EFS, montarlo en dos instancias EC2 simultáneamente y demostrar que los datos son compartidos en tiempo real entre ambas.

> 💬 _"Esta demo es visualmente la más impactante del módulo — van a ver cómo un archivo creado en una instancia aparece instantáneamente en otra instancia completamente separada."_

---

## Preparación previa

Necesitas tener listo antes de la clase:

- Dos ventanas de terminal SSH abiertas lado a lado
- Ambas instancias ya lanzadas (para no perder tiempo)

---

## PASO 1 — Crear el sistema de archivos EFS

1. Consola AWS → **EFS** → **Create file system**
2. Nombre: `demo-efs`
3. VPC: la default
4. **Customize** → revisa las opciones pero deja defaults
5. **Create**

> 💬 _"A diferencia de EBS donde especificamos tamaño, EFS no pide capacidad. Crece y se contrae automáticamente. Pagas solo por lo que usas."_

---

## PASO 2 — Verificar los Mount Targets

1. Click en `demo-efs` → pestaña **Network**
2. Muestra los **Mount targets** — hay uno por cada AZ en la región
3. Espera a que todos estén en estado `Available`

> 💬 _"EFS crea automáticamente un punto de montaje en cada AZ de la región. Por eso múltiples instancias en distintas AZs pueden acceder al mismo sistema de archivos."_

---

## PASO 3 — Lanzar dos instancias EC2

Lanza **dos instancias** con estas características:

- AMI: **Amazon Linux 2023**
- Instance type: `t2.micro`
- Misma VPC que el EFS
- Security group: permite **SSH (22)** y **NFS (2049)** — este último es crítico

Nómbralas `instancia-A` e `instancia-B`.

> 💬 _"El puerto 2049 es el protocolo NFS — sin ese puerto abierto, las instancias no pueden comunicarse con EFS."_

---

## PASO 4 — Instalar el cliente EFS en ambas instancias

Conéctate a **instancia-A** y ejecuta:

```bash
sudo yum install -y amazon-efs-utils
```

Repite en **instancia-B** en la segunda terminal.

---

## PASO 5 — Montar EFS en ambas instancias

Obtén el **File system ID** desde la consola (formato: `fs-XXXXXXXX`).

En **instancia-A**:

```bash
sudo mkdir /mnt/efs
sudo mount -t efs fs-XXXXXXXX:/ /mnt/efs
df -h /mnt/efs
```

En **instancia-B**:

```bash
sudo mkdir /mnt/efs
sudo mount -t efs fs-XXXXXXXX:/ /mnt/efs
df -h /mnt/efs
```

> 💬 _"Las dos instancias están montando el mismo sistema de archivos. Noten que es el mismo File system ID en ambas."_

---

## PASO 6 — El momento clave: escritura compartida en tiempo real

En **instancia-A** crea un archivo:

```bash
sudo bash -c 'echo "Escrito desde instancia-A" > /mnt/efs/compartido.txt'
ls /mnt/efs
```

Inmediatamente en **instancia-B** sin hacer nada más:

```bash
ls /mnt/efs
cat /mnt/efs/compartido.txt
```

El archivo aparece en instancia-B instantáneamente.

> 💬 _"No hubo transferencia, no hubo sincronización, no hubo copia. Es el mismo sistema de archivos. Esto es lo que lo diferencia fundamentalmente de EBS."_

Ahora desde **instancia-B** agrega contenido:

```bash
sudo bash -c 'echo "Modificado desde instancia-B" >> /mnt/efs/compartido.txt'
cat /mnt/efs/compartido.txt
```

Verifica en **instancia-A**:

```bash
cat /mnt/efs/compartido.txt
```

Ambas líneas visibles desde las dos instancias.

---

## PASO 7 — Contrastar con EBS

> 💬 _"¿Podrían hacer esto con EBS? No. Un volumen EBS estándar solo puede estar adjunto a una instancia a la vez, y vive en una sola AZ. EFS no tiene esas limitaciones."_

||EBS|EFS|
|---|---|---|
|Instancias simultáneas|1 (estándar)|Miles|
|AZ|Una sola|Toda la región|
|Capacidad|Fija, la defines tú|Elástica, automática|
|SO requerido|Linux o Windows|Solo Linux|
|Protocolo|Block|NFS|

---

## PASO 8 — Limpieza

En ambas instancias:

```bash
sudo umount /mnt/efs
```

En la consola:

1. **Terminate** ambas instancias EC2
2. **EFS → demo-efs → Delete**

> 💬 _"EFS cobra por GB almacenado por mes. Un sistema de archivos vacío no genera cargos significativos, pero es buena práctica eliminarlo si no lo necesitan."_

---

## Tiempo estimado

|Segmento|Tiempo|
|---|---|
|Crear EFS + verificar mount targets|~5 min|
|Lanzar instancias + instalar cliente|~8 min|
|Montar en ambas instancias|~4 min|
|Demo de escritura compartida|~5 min|
|Contraste EBS vs EFS + limpieza|~5 min|
|**Total**|**~27 min**|

---

**Consejo práctico:** La parte más lenta es esperar que los mount targets queden `Available` y que las instancias terminen de iniciar. Lanza todo en el PASO 2 y 3 al mismo tiempo y deja que inicien mientras explicas el concepto en las slides.:
