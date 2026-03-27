---
created: 2026-03-26 07:34
modified: 2026-03-27 04:44
tags:
  - ai-practitioner
  - aws
  - amazon-q
  - gen-ai
title: 20260326T0734-amazon-q-business
aliases:
  - Amazon Q Business
publish: true
folder: AI
---

## Main Concept **
Amazon Q Business** is a fully managed generative AI assistant designed specifically for work or business. Unlike general-purpose models, this assistant bases its responses entirely on your company’s internal knowledge and private data.

## Key Features -
- **Built on Bedrock**: It uses multiple foundation models (FMs) via Amazon Bedrock at the backend. However, as a high-level service, the user/administrator **does not** choose the specific underlying model.
- **Capabilities**: It can answer questions, summarize documents, generate content (e.g., job postings or social media posts), and perform routine tasks (e.g., scheduling meetings).
- **Source Attribution**: When responding based on a company document (e.g., an HR PDF), it includes direct links to the source so the user can verify the information.

## Context/Why Does It Matter? 
It is AWS’s solution for businesses that want to leverage GenAI without having to build a complex architecture from scratch. It solves the problem of exposing corporate data to public models by ensuring privacy.

## Examples

- Things we could ask or request from Amazon Q Business
  - Write a job posting for a Senior Product Marketing Manager role
  - Create a social media post of up to 50 words to announce the new role
  - What was discussed during the team meeting the week of December 4?

- Real Use case: 
  - Upload company documents in PDF format to Amazon S3, then use them as a knowledge base (RAG process) and ask questions about the documents via Amazon Q Business Chat.

  ![Pasted image 20260327044135.png](Pasted%20image%2020260327044135.png)

## Exam Domain

- Domain 2 (Task 2.1 y 2.3: Use cases for GenAI models such as summarization and search

---

## Notas Relacionadas
- [[20260327T0529-amazon-q-business-data-connectors|Amazon Q Business Data Connectors]]
- [[20260327T0712-amazon-q-business-plugins|Amazon Q Business Plugins]]
- [[20260327T0715-amazon-q-business-authentication|Amazon Q Business Authentication]]
- [[20260327T0726-amazon-q-business-anonymous-vs-authenticated-access|Amazon Q Business: Anonymous vs. Authenticated Access]]
- [[20260327T0719-amazon-q-business-admin-controls|Amazon Q Business Admin Controls]]


## Enlaces externos
- [Improve productivity when processing scanned PDFs using Amazon Q Business](https://aws.amazon.com/blogs/machine-learning/improve-productivity-when-processing-scanned-pdfs-using-amazon-q-business/)




---

## Related Notes
- [[20260327T0529-amazon-q-business-data-connectors|Amazon Q Business Data Connectors]]


