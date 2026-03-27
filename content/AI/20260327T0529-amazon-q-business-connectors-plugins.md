---
aliases:
  - Amazon Q Business Connectors and Plugins
tags:
  - ai
  - aws
  - ai-practitioner
  - amazon-q
created: 2026-03-27 05:29
modified: 2026-03-27 06:14
title: Amazon Q Business Connectors and Plugins
publish: true
folder: AI
---

## Concepto Principal
Para funcionar sobre datos privados, Amazon Q Business usa **Data Connectors** para recuperar información (leer) y **Plugins** para ejecutar acciones en sistemas externos (escribir/actuar).

## Aspectos Clave
- **Data Connectors (Fully Managed RAG)**: Conectan con más de 40 fuentes (Amazon S3, RDS, Microsoft 365, SharePoint, etc.). Realizan un **crawl** para indexar los datos y permitir búsquedas.
- **Plugins**: Permiten interactuar con aplicaciones de terceros (Jira, ServiceNow, Zendesk, Salesforce) o usar APIs personalizadas.

## El proceso de Crawling (Rastreo)

El **Crawl** es el proceso automático de exploración y sincronización de datos:

- **Descubrimiento**: El conector navega por la fuente de datos para encontrar documentos nuevos o actualizados.
- **Indexación**: Convierte el contenido encontrado en vectores (embeddings) para que el modelo pueda buscarlo semánticamente.
- **Sincronización Programada**: Se puede configurar para que el rastreo ocurra periódicamente (diario, semanal), manteniendo la información siempre fresca.



## Ejemplo
- **Uso de Conector**: El asistente lee un PDF almacenado en **Amazon S3** para responder a un empleado cuál es el deducible de su seguro médico.
- **Uso de Plugin**: El empleado le dice al asistente: *"Crea un ticket en Jira reportando que la impresora del piso 3 no funciona"*, y el asistente ejecuta la acción mediante el plugin de Jira.

## Dominios del Examen
- **Dominio 2: Fundamentals of GenAI** (Task 2.3: Infraestructura de AWS).
- **Dominio 3: Applications of Foundation Models** (Task 3.3: Entender cómo los modelos interactúan con sistemas externos y RAG).

## Concepto Principal

Los **Business Connectors** son componentes integrados de **Amazon Q Business** que permiten la ingesta y sincronización de datos desde diversas fuentes empresariales hacia un índice centralizado. Funcionan como el puente técnico que permite al asistente de IA realizar **RAG (Retrieval-Augmented Generation)** sobre información privada y específica de la organización.

## Contexto

- **Data Freshness**: Resuelve el problema de la fecha de corte (*data cutoff*) de los modelos.

- **Seguridad**: Garantiza que la IA respete la gobernanza de datos y los privilegios de acceso existentes.

- **Eficiencia**: Permite centralizar la búsqueda de información sin que el empleado tenga que saltar entre diferentes aplicaciones.


## El proceso de Crawling (Rastreo)

El **Crawl** es el proceso automático de exploración y sincronización de datos:

- **Descubrimiento**: El conector navega por la fuente de datos para encontrar documentos nuevos o actualizados.
- **Indexación**: Convierte el contenido encontrado en vectores (embeddings) para que el modelo pueda buscarlo semánticamente.
- **Sincronización Programada**: Se puede configurar para que el rastreo ocurra periódicamente (diario, semanal), manteniendo la información siempre fresca.


## Aspectos Clave

- **ACL Synchronization**: Durante el crawling, el conector también sincroniza los permisos de usuario (Access Control Lists). Si un usuario no puede ver un archivo en SharePoint, Amazon Q Business no usará ese archivo para responderle.

- **Fuentes Soportadas**: Incluye servicios de AWS (Amazon S3, Amazon RDS, Aurora, WorkDocs) y aplicaciones de terceros (Salesforce, Slack, Confluence, Microsoft 365).

- **RAG Automático**: Los conectores eliminan la necesidad de programar un flujo de RAG manualmente; el servicio gestiona el ciclo completo.

## Ejemplo

- **Escenario:** Una empresa desea que sus empleados consulten políticas internas almacenadas en una instancia de **SharePoint** y manuales técnicos en **Amazon S3**.

- **Acción:** Se configuran los conectores de Amazon Q Business para ambas fuentes; el sistema indexa el contenido y permite al empleado preguntar en lenguaje natural: _"¿Cómo solicito vacaciones según la política de 2026?"_.

![Pasted image 20260327062144.png](Pasted%20image%2020260327062144.png)



## Dominios del Examen
- **Dominio 2**: Fundamentos de GenAI (Identificación de tecnologías).
- **Dominio 5**: Seguridad, Cumplimiento y Gobernanza (Control de acceso y protección de datos).

---

## Conceptos Relacionados

- [[20260220T0735-retrieval-augmented-generation-rag|Retrieval-Augmented Generation (RAG)]]
- [[20260220T0733-rag-and-knowledge-bases-with-amazon-bedrock|RAG and Knowledge Bases with Amazon Bedrock]]

## Links:

_References_
