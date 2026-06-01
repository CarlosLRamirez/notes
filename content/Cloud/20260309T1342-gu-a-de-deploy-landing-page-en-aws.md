---
modified: 2026-03-09 14:34
created: 2026-03-09 13:42
tags:
  - AWS
  - cloud
  - S3
  - CloudFront
title: Deploy Landing Page en AWS - SyProTec
aliases: Deploy Landing Page en AWS - SyProTec
publish: true
folder: Cloud
---
# Deploy Landing Page — SyProTec en AWS

**Stack:** S3 · CloudFront · ACM · Route 53 **Dominio:** syprotec.com.gt con HTTPS **Status:** ✅ Live — certificado Amazon RSA 2048, emitido 2026-03-08

---

## Arquitectura

```
Navegador → Route 53 (DNS) → CloudFront (HTTPS + CDN) → S3 Bucket (index.html)
```

---

## Paso 1 — Crear el bucket S3

> El nombre del bucket **debe coincidir exactamente** con el dominio.

1. Ve a **S3 → Create bucket**
2. Bucket name: `syprotec.com.gt`
3. Region: **us-east-1** (N. Virginia) — obligatorio para CloudFront + ACM
4. Desmarca **"Block all public access"** → confirma el warning
5. Deja todo lo demás por default → **Create bucket**

### Activar Static Website Hosting

1. Entra al bucket → tab **Properties**
2. Baja hasta **Static website hosting → Edit**
3. Enable → Index document: `index.html` → Save

### Bucket Policy (lectura pública)

Tab **Permissions → Bucket policy**:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::syprotec.com.gt/*"
    }
  ]
}
```

> [!warning] La región **us-east-1 es obligatoria**. ACM para CloudFront solo acepta certificados creados en us-east-1.

---

## Paso 2 — Subir los archivos

El archivo debe llamarse `index.html` en S3.

### Opción A — Consola AWS

1. Bucket → tab **Objects → Upload**
2. Sube `syprotec.html` renombrado como `index.html`

### Opción B — AWS CLI

```bash
# Subir y renombrar como index.html
aws s3 cp syprotec.html s3://syprotec.com.gt/index.html

# Para sincronizar una carpeta completa en el futuro
aws s3 sync ./sitio/ s3://syprotec.com.gt/ --delete
```

---

## Paso 3 — Certificado SSL con ACM

> Certificado gratuito. **Debe crearse en us-east-1.**

1. Ve a **Certificate Manager (ACM)** — confirma región **us-east-1**
2. **Request a certificate → Public certificate**
3. Agrega los dos dominios:
    - `syprotec.com.gt`
    - `www.syprotec.com.gt`
4. Validation method: **DNS validation**
5. Request

### Validar con Route 53

1. En el detalle del certificado → botón **"Create records in Route 53"**
2. ACM agrega los CNAMEs de validación automáticamente
3. Espera 2–5 min → status cambia a **Issued**

> [!tip] Como ya tienes el hosted zone en Route 53, la validación es automática con un clic.

---

## Paso 4 — Crear distribución CloudFront

1. Ve a **CloudFront → Create distribution**
2. **Origin domain:** usa el endpoint de website hosting, NO el endpoint S3 directo

```
# ✅ Correcto — endpoint website
syprotec.com.gt.s3-website-us-east-1.amazonaws.com

# ❌ Incorrecto — endpoint S3 directo
syprotec.com.gt.s3.amazonaws.com
```

> [!warning] Si usas el endpoint S3 directo, la raíz del dominio devuelve un error XML en vez de tu landing.

### Configuración de la distribución

|Campo|Valor|
|---|---|
|Origin domain|`syprotec.com.gt.s3-website-us-east-1.amazonaws.com`|
|Protocol (origin)|**HTTP only**|
|Viewer protocol policy|**Redirect HTTP to HTTPS**|
|Allowed HTTP methods|GET, HEAD|
|Cache policy|CachingOptimized|
|Alternate domain names|`syprotec.com.gt` y `www.syprotec.com.gt`|
|Custom SSL certificate|Selecciona el cert de ACM|
|Default root object|`index.html`|

3. **Create distribution**
4. Espera ~10 min → status: **Enabled**
5. Anota el **Distribution domain name** → `dXXXXXXXXX.cloudfront.net` (lo necesitas en el paso 5)

---

## Paso 5 — Apuntar DNS en Route 53

Crea dos registros tipo **A (Alias)** en tu hosted zone `syprotec.com.gt`:

|Campo|Registro raíz|Registro www|
|---|---|---|
|Record name|_(vacío)_|`www`|
|Record type|A|A|
|Alias|✅|✅|
|Route traffic to|CloudFront distribution|CloudFront distribution|
|Distribution|selecciona la tuya|selecciona la tuya|

### Verificar propagación DNS

```bash
nslookup syprotec.com.gt
dig syprotec.com.gt
```

O en el navegador: https://dnschecker.org

> [!tip] Los registros Alias en Route 53 son gratuitos. No cobran queries como los CNAMEs normales.

---

## Paso 6 — Verificar

- [x] `https://syprotec.com.gt` → carga la landing con candado HTTPS ✅
- [x] Certificado válido emitido por Amazon para `syprotec.com.gt` ✅
- [ ] `http://syprotec.com.gt` → redirige automáticamente a HTTPS
- [ ] `https://www.syprotec.com.gt` → funciona igual
- [ ] Botón WhatsApp abre el chat correcto
- [ ] Verificado en móvil

### Invalidar caché después de actualizaciones

```bash
# Distribution ID de SyProTec
aws cloudfront create-invalidation \
  --distribution-id E30BYQNB532RNN \
  --paths "/*"
```

> [!tip] Las primeras 1,000 invalidaciones al mes son gratuitas.

---

## Troubleshooting — Errores encontrados durante el deploy

### Error 1 — 403 The request could not be satisfied

**Síntoma:** CloudFront responde con 403, la página no carga.

**Causa:** Origin protocol policy estaba en `HTTPS only`. S3 website hosting solo habla HTTP.

**Fix:** CloudFront → distribución → **Origins → Edit** → Origin protocol policy → **HTTP only** → Save.

---

### Error 2 — NET::ERR_CERT_COMMON_NAME_INVALID

**Síntoma:** Chrome bloquea la conexión. El certificado reportado era `*.cloudfront.net` en vez de `syprotec.com.gt`.

**Causa:** Dos campos vacíos en la distribución al momento de crearla:

- Alternate domain names (CNAMEs) — vacío
- Default root object — vacío

**Fix:** CloudFront → distribución → **General → Edit**:

1. Alternate domain names: `syprotec.com.gt` y `www.syprotec.com.gt`
2. Custom SSL certificate: seleccionar cert ACM de `syprotec.com.gt`
3. Default root object: `index.html`
4. Save → esperar ~10 min a que termine Deploying

> [!warning] Si el certificado ACM no aparece en el dropdown, fue creado en una región distinta a us-east-1. Crear uno nuevo en us-east-1.

---

## Costo estimado mensual

|Servicio|Costo|
|---|---|
|S3 Storage (~50KB)|~$0.00|
|S3 Requests|~$0.01|
|CloudFront Transfer (<10GB free)|$0.00|
|CloudFront Requests (<10M free)|$0.00|
|ACM Certificado SSL|$0.00|
|Route 53 Hosted zone|$0.50|
|**Total**|**~$0.51/mes**|

---

## Checklist completo

- [x] Bucket S3 creado: `syprotec.com.gt` en us-east-1
- [x] Static website hosting activado con `index.html`
- [x] Bucket policy de lectura pública aplicada
- [x] Archivo subido como `index.html`
- [x] Certificado ACM emitido en us-east-1 para `syprotec.com.gt` y `www`
- [x] Distribución CloudFront — ID: `E30BYQNB532RNN`
- [x] Origin protocol policy: HTTP only
- [x] Viewer protocol policy: Redirect HTTP to HTTPS
- [x] Default root object: `index.html`
- [x] CNAMEs agregados a CloudFront: `syprotec.com.gt` y `www.syprotec.com.gt`
- [x] Registros A Alias en Route 53 apuntando a CloudFront
- [x] HTTPS verificado en Chrome — certificado válido Amazon RSA 2048
- [ ] Redirect HTTP → HTTPS verificado
- [ ] `www.syprotec.com.gt` verificado
- [ ] Verificado en móvil

---

_SyProTec — Soluciones y Proyectos Tecnológicos S.A._