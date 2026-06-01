---
aliases:
  - "Amazon Q Business: Anonymous vs. Authenticated Access"
tags:
  - aws
  - ai-practitioner
  - amazon-q
  - iam
  - AIF-C01
created: 2026-03-27 07:26
modified: 2026-03-27 07:27
title: "Amazon Q Business: Anonymous vs. Authenticated Access"
publish: true
folder: AI
---

## Concepto Principal
Amazon Q Business permite exponer su interfaz de chat de dos maneras: Authenticated Access (donde el sistema sabe exactamente quién eres) y Anonymous Access (donde el chat está abierto y no requiere inicio de sesión). La elección entre ambos cambia drásticamente el modelo de seguridad, los permisos de los documentos y cómo AWS te cobra por el servicio.

## Aspectos Clave

### Authenticated Access (Acceso Autenticado):

**Identidad:** Obliga al usuario a iniciar sesión a través de AWS IAM Identity Center.

**Seguridad:** Habilita la sincronización de ACLs (Listas de Control de Acceso). El asistente filtra los resultados basándose en lo que ese usuario específico tiene permitido ver.

**Precios:** AWS suele cobrar una licencia por usuario al mes (ej. modelo de suscripción).

### Anonymous Access (Acceso Anónimo):

**Identidad:** No requiere inicio de sesión; cualquier persona con el enlace puede usar el asistente.

**Seguridad:** NO puede aplicar ACLs a nivel de usuario. El asistente solo puede responder basándose en documentos que hayan sido clasificados como "públicos" o compartidos globalmente dentro del índice.

**Precios** (⚠️ La trampa de los $200): Como AWS no puede cobrar por usuario (porque no sabe cuántos hay), te cobra una tarifa fija alta por la capacidad aprovisionada o el mantenimiento del endpoint abierto de la aplicación web, independientemente de si lo usas una vez o mil veces.

## Contexto (Exam Insights)
Seguridad de Datos Sensibles: En el examen, si el caso de uso menciona que hay documentos de Recursos Humanos, Finanzas o datos sensibles mezclados con datos generales, obligatoriamente debes elegir una arquitectura con Authenticated Access e IAM Identity Center para garantizar el principio de privilegios mínimos.

Casos de Uso Públicos: Si la pregunta menciona crear un chatbot de soporte de TI o un quiosco de información general donde todos los empleados (o usuarios externos) ven exactamente la misma información pública, el Anonymous Access es la respuesta correcta (arquitectónicamente hablando).

## Ejemplo
Authenticated: El portal interno de la empresa. El CEO pregunta "¿Cuáles son las proyecciones financieras?" y recibe el reporte privado. Un pasante hace la misma pregunta y el bot le dice que no tiene acceso.

Anonymous: Un chatbot incrustado en la página de soporte técnico pública de la empresa alimentado con manuales de usuario. Un cliente cualquiera entra, no inicia sesión, y pregunta "¿Cómo reinicio mi router?". El bot responde usando el manual público.

## Conceptos Relacionados
- [[Identity and Access Management (IAM) Basics]]
- [[20260327T0715-amazon-q-business-authentication|Amazon Q Business Authentication]]
- Data Governance & ACLs (Access Control Lists): Las reglas que dictan quién puede leer un documento.
- Provisioned Capacity vs. Per-User Pricing: Modelos de facturación en la nube.

## Dominios del Examen
Dominio 5: Security, Compliance, and Governance (Task 5.1: Control de acceso y autenticación).

Dominio 2: Fundamentals of GenAI (Task 2.1: Determinar la solución adecuada según el caso de uso del negocio).

---


## Links:

_References_
