---
aliases:
  - Amazon Q Business Data Connectors
tags:
  - ai
  - aws
  - ai-practitioner
  - amazon-q
  - rag
  - AIF-C01
created: 2026-03-27 05:29
modified: 2026-03-27 07:12
title: Amazon Q Business Data Connectors
publish: true
folder: AI
---

## Concepto Principal

Los **Data Connectors** son el mecanismo de "Solo Lectura" para recuperar información. Funcionan como una arquitectura de **RAG (Retrieval-Augmented Generation) totalmente administrada**, ingiriendo y sincronizando datos desde más de 40 fuentes corporativas (S3, SharePoint, Salesforce) hacia el índice de Amazon Q.

## Contexto (Exam Insights)

- **El problema del "Data Cutoff"**: Los modelos de lenguaje tienen una fecha de corte de entrenamiento. En el examen, si te preguntan cómo hacer que un modelo conozca un documento interno creado _ayer_ sin tener que reentrenarlo (Fine-tuning), la respuesta es usar RAG mediante Data Connectors.

- **Sincronización (Crawling)**: No es una subida manual de una sola vez. Los conectores realizan rastreos programados (_crawls_) para mantener el índice semántico alineado con los cambios en la fuente de datos original.

## Aspectos Clave

- **Fuentes Nativas y de Terceros**: Soportan tanto el ecosistema AWS (S3, RDS, WorkDocs) como herramientas externas (Microsoft 365, Slack).

- **Indexación Semántica**: Convierten los documentos en _embeddings_ vectoriales de forma automática para permitir búsquedas por significado, no solo por palabras clave.

## Ejemplo

Un empleado pregunta sobre la política de vacaciones de 2026. El sistema usa el conector de **Google Drive** para buscar el PDF correspondiente, lo lee, redacta la respuesta y provee el enlace al documento original.

## Dominios del Examen

- **Dominio 2**: Fundamentals of GenAI (Task 2.3: Identificar tecnologías RAG administradas).

---

## Notas Relacionadas

- [[20260220T0735-retrieval-augmented-generation-rag|Retrieval-Augmented Generation (RAG)]]
- [[20260220T0733-rag-and-knowledge-bases-with-amazon-bedrock|RAG and Knowledge Bases with Amazon Bedrock]]

## Enlaces Externos
