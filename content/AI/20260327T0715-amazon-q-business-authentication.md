---
aliases:
  - Amazon Q Business Authentication
tags:
  - aws
  - ai-practitioner
  - amazon-q
  - iam
created: 2026-03-27 07:15
modified: 2026-03-27 07:16
title: Amazon Q Business Authentication
publish: true
folder: AI
---

## Concepto Principal
El acceso a Amazon Q Business se gobierna mediante **AWS IAM Identity Center**, lo que permite autenticación centralizada (SSO) y garantiza la seguridad a nivel de documento al respetar las Listas de Control de Acceso (ACLs) de las fuentes de datos originales.

## Contexto (Exam Insights)
- **Prevención de Escalada de Privilegios**: Un tema crítico en el Dominio 5. Si implementas una IA corporativa, esta no debe convertirse en una "puerta trasera" para que empleados de bajo nivel accedan a documentos confidenciales. Amazon Q Business resuelve esto ingiriendo las ACLs junto con los datos durante el proceso de *crawling*.
- **Federación de Identidades**: En escenarios de examen, una empresa casi nunca quiere crear usuarios nuevos en AWS. Querrán usar su Microsoft Active Directory (AD) o Google Workspace existente. IAM Identity Center actúa como el puente (Identity Provider - IdP) para lograr esto sin fricción.



## Aspectos Clave
- **Autenticación (Quién eres)**: Vía IAM Identity Center (integrable con IdP externos).
- **Autorización (Qué puedes ver)**: Basado en los permisos originales del documento (ej. permisos de una carpeta específica en SharePoint).

## Ejemplo
Si un pasante pregunta por los reportes financieros trimestrales, la IA le dirá que no tiene información al respecto, porque IAM Identity Center verifica que el pasante no pertenece al grupo de AD con acceso a la carpeta de finanzas en SharePoint.

## Dominios del Examen
- **Dominio 5**: Security, Compliance, and Governance (Task 5.1: Asegurar sistemas de IA; Task 5.2: Privacidad de datos).

---

## Related Concepts:
- [[Identity and Access Management (IAM) Basics]]
- [[20260326T0734-amazon-q-business|Amazon Q Business Introduction]] 

---


## Links:

_References_
