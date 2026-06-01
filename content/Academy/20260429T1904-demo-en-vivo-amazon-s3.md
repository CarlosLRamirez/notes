---
created: 2026-04-29 19:04
modified: 2026-04-29 19:05
tags:
  - teaching
  - AWS
  - S3
title: "Demo en vivo: Amazon S3"
aliases: "Demo en vivo: Amazon S3"
publish: true
folder: Academy
---

# Demo en vivo: Amazon S3 — Flujo completo

## Qué van a ver los estudiantes

El ciclo completo de S3: crear bucket → subir objetos → controlar acceso → organizar con carpetas → configurar versionamiento → lifecycle policy → eliminar.

---

## PASO 1 — Crear el bucket

1. Consola AWS → **S3** → **Create bucket**
2. Bucket name: `demo-s3-[tus-iniciales]-2026` (debe ser globalmente único)
3. Region: la tuya habitual
4. **Block all public access**: déjalo **activado** por ahora
5. Versioning: **Disable** por ahora (lo activamos después)
6. **Create bucket**

> 💬 _"El nombre del bucket es globalmente único en todo AWS — no solo en tu cuenta. Es como registrar un dominio. Si alguien ya tomó ese nombre, no puedes usarlo."_

---

## PASO 2 — Subir objetos

Prepara de antemano en tu computadora:

- Un archivo de texto: `bienvenida.txt` con cualquier contenido
- Una imagen pequeña (cualquier .jpg o .png)

En la consola:

1. Entra al bucket → **Upload**
2. **Add files** → selecciona ambos archivos
3. **Upload**

> 💬 _"En S3 no hay carpetas reales — todo son objetos con una llave (key). Lo que parece una carpeta es solo un prefijo en el nombre del objeto."_

---

## PASO 3 — Explorar el objeto

1. Click en `bienvenida.txt`
2. Muestra las propiedades: **Storage class** (Standard por defecto), **Object URL**, tamaño, fecha
3. Click en **Object URL** — obtendrás un **403 Access Denied**

> 💬 _"El objeto existe pero está bloqueado. S3 es privado por defecto. Para acceder necesitamos o hacer el objeto público, o usar una URL firmada (pre-signed URL), o autenticarnos."_

---

## PASO 4 — Hacer un objeto público (y entender las consecuencias)

Primero hay que permitir acceso público al bucket:

1. **Bucket → Permissions → Block public access → Edit**
2. Desactiva **Block all public access** → **Save**
3. Confirma escribiendo `confirm`

Luego en el objeto:

1. Selecciona `bienvenida.txt` → **Actions → Make public using ACL**
2. **Make public**
3. Copia la **Object URL** y pégala en el navegador

Ahora carga correctamente.

> 💬 _"¿Ven la diferencia? El mismo objeto, mismo URL, pero ahora accesible. En producción, los buckets con datos sensibles NUNCA deben tener acceso público. AWS incluso te avisa con un banner naranja cuando un bucket es público."_

---

## PASO 5 — Crear una "carpeta" y entender prefijos

1. En el bucket → **Create folder**
2. Nombre: `imagenes`
3. Sube la imagen dentro de esa carpeta

Muestra la URL del objeto dentro de la carpeta:

```
https://[bucket].s3.[region].amazonaws.com/imagenes/foto.jpg
```

> 💬 _"La 'carpeta' imagenes/ es solo un prefijo en el nombre del objeto. S3 no tiene jerarquía real de directorios — es un espacio de nombres plano. Pero la consola lo presenta como carpetas para que sea intuitivo."_

---

## PASO 6 — Activar versionamiento

1. **Bucket → Properties → Bucket Versioning → Edit**
2. **Enable → Save**

Ahora modifica `bienvenida.txt` en tu computadora (agrega una línea) y súbelo de nuevo con el mismo nombre.

1. Click en `bienvenida.txt`
2. Activa el toggle **Show versions**
3. Muestra las dos versiones con sus Version IDs distintos
4. Descarga la versión anterior — tiene el contenido original

> 💬 _"Con versionamiento activado, S3 nunca sobreescribe un objeto — guarda todas las versiones. Esto protege contra borrado accidental. La desventaja: pagas por cada versión almacenada."_

---

## PASO 7 — Borrar un objeto y recuperarlo

1. Selecciona `bienvenida.txt` → **Delete**
2. Confirma
3. El objeto desaparece de la vista normal

Activa **Show versions**:

- Aparece un **Delete marker** encima de las versiones anteriores
- Las versiones originales siguen ahí

Selecciona el Delete marker → **Delete** → el objeto "vuelve a existir"

> 💬 _"El borrado en S3 con versionamiento es reversible. No borra el objeto — pone una marca encima. Para borrar permanentemente hay que eliminar todas las versiones individualmente."_

---

## PASO 8 — Mostrar Storage Classes

1. Selecciona un objeto → **Actions → Edit storage class**
2. Muestra las opciones disponibles: Standard, Intelligent-Tiering, Standard-IA, One Zone-IA, Glacier, Glacier Deep Archive
3. No cambies nada — solo que los vean

> 💬 _"Cada clase tiene diferente costo y latencia de acceso. No tienes que elegir al subir el objeto — puedes cambiarlo después, o dejar que una Lifecycle Policy lo haga automáticamente."_

---

## PASO 9 — Crear una Lifecycle Policy

1. **Bucket → Management → Lifecycle rules → Create lifecycle rule**
2. Rule name: `mover-a-glacier`
3. Scope: **Apply to all objects**
4. Acepta el warning
5. Lifecycle rule actions: activa **Move current versions of objects between storage classes**
6. Transition: **S3 Glacier Flexible Retrieval** after **30 days**
7. **Create rule**

> 💬 _"Esta regla automáticamente mueve cualquier objeto a Glacier después de 30 días sin que nadie tenga que hacerlo manualmente. Así es como las empresas gestionan el costo de almacenamiento a escala."_

---

## PASO 10 — Limpieza

Para borrar el bucket, S3 exige que esté vacío:

1. **Bucket → Empty** → escribe `permanently delete` → **Empty**
2. **Bucket → Delete** → escribe el nombre del bucket → **Delete**

> 💬 _"S3 no te cobra por el bucket vacío, solo por los objetos almacenados. Pero si tienes versionamiento activado, recuerden que hay que eliminar también todas las versiones anteriores — el Empty bucket lo hace por ustedes."_

---

## Tiempo estimado

|Segmento|Tiempo|
|---|---|
|Pasos 1–3 (crear, subir, explorar)|~8 min|
|Pasos 4–5 (acceso público, prefijos)|~6 min|
|Pasos 6–7 (versionamiento)|~8 min|
|Pasos 8–9 (storage classes, lifecycle)|~6 min|
|Limpieza + discusión|~4 min|
|**Total**|**~32 min**|

---

# Segmento adicional: Hosting de sitio web estático en S3

Insértalo entre el **Paso 5** (carpetas/prefijos) y el **Paso 6** (versionamiento) de la guía anterior.

---

## Preparación previa — Crea estos dos archivos en tu computadora

**index.html**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Demo S3 - Cloud Foundations</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; margin-top: 80px; background: #f0f4f8; }
        h1 { color: #232f3e; }
        p { color: #555; font-size: 1.2em; }
        .badge { background: #ff9900; color: white; padding: 8px 20px; border-radius: 4px; font-weight: bold; }
    </style>
</head>
<body>
    <h1>🚀 Sitio web servido desde Amazon S3</h1>
    <p>Este archivo vive en un bucket de S3, no en un servidor web.</p>
    <p><span class="badge">AWS Academy Cloud Foundations</span></p>
</body>
</html>
```

**error.html**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Página no encontrada</title>
</head>
<body>
    <h1>404 - Página no encontrada</h1>
    <p>Esta es la página de error personalizada servida por S3.</p>
</body>
</html>
```

---

## PASO 5A — Subir los archivos HTML

1. En el bucket → **Upload**
2. Sube `index.html` y `error.html`
3. **Upload**

---

## PASO 5B — Habilitar Static Website Hosting

1. **Bucket → Properties** → scroll hasta el fondo
2. **Static website hosting → Edit**
3. Selecciona **Enable**
4. Hosting type: **Host a static website**
5. Index document: `index.html`
6. Error document: `error.html`
7. **Save changes**

Aparece el **Bucket website endpoint** al fondo de la sección. Cópialo — se ve así:

```
http://demo-s3-abc-2026.s3-website-us-east-1.amazonaws.com
```

> 💬 _"S3 nos acaba de dar una URL de sitio web. Pero si la abren ahora van a ver un 403. ¿Por qué? Porque los objetos siguen siendo privados. El hosting está activo, pero el contenido está bloqueado."_

---

## PASO 5C — Hacer el bucket públicamente legible con una Bucket Policy

1. **Bucket → Permissions → Block public access → Edit**
2. Desactiva **Block all public access** → **Save → Confirm**
3. **Bucket → Permissions → Bucket Policy → Edit**
4. Pega esta policy:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::NOMBRE-DE-TU-BUCKET/*"
        }
    ]
}
```

Reemplaza `NOMBRE-DE-TU-BUCKET` con el nombre real de tu bucket.

5. **Save changes**

---

## PASO 5D — Verificar en el navegador

1. Abre el **Bucket website endpoint** en el navegador
2. Carga `index.html` automáticamente
3. Agrega `/pagina-inexistente.html` al final de la URL → carga `error.html`

> 💬 _"Tenemos un sitio web funcional sin ningún servidor. Sin EC2, sin Apache, sin Nginx — solo objetos en S3. ¿Para qué sirve esto en producción? Sitios estáticos, landing pages, frontends de Single Page Applications, documentación técnica. Netflix, Airbnb y muchas empresas sirven sus frontends desde S3 + CloudFront."_

---

## PASO 5E — Mostrar la diferencia entre Object URL y Website Endpoint

Abre los dos en el navegador lado a lado:

|URL|Resultado|
|---|---|
|`https://s3.amazonaws.com/bucket/index.html`|Descarga o muestra el archivo crudo|
|`http://bucket.s3-website-region.amazonaws.com`|Renderiza como sitio web, maneja index y errores|

> 💬 _"Son dos formas distintas de acceder al mismo objeto. La URL de objeto es acceso directo al archivo. El website endpoint es un mini servidor web que S3 emula — maneja rutas, documentos de índice y páginas de error."_

---

## Puntos clave para el examen que refuerza este segmento

- S3 puede hospedar sitios web **estáticos** — sin server-side processing (no PHP, no Python, no bases de datos)
- Requiere que el bucket sea **público** — es uno de los pocos casos legítimos para desactivar Block Public Access
- El endpoint es **HTTP**, no HTTPS — para HTTPS se necesita CloudFront adelante (fuera del scope del módulo 7)
- Es significativamente más barato que EC2 para contenido estático

---

## Tiempo adicional estimado

|Segmento|Tiempo|
|---|---|
|Preparar archivos + subir|~3 min|
|Configurar static hosting + policy|~5 min|
|Demo en navegador + discusión|~4 min|
|**Total adicional**|**~12 min**|

La demo completa con este segmento queda en aproximadamente **44 minutos**.