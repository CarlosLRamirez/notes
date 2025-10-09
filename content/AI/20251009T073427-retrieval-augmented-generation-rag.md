---
id: 20251009T073427-retrieval-augmented-generation-rag
aliases:
  - Retrieval Augmented Generation (RAG)
tags:
  - AI
created: 2025-10-09 07:34
modified: 2025-10-09 07:45
folder: AI
publish: true
title: Retrieval-Augmented Generation (RAG)
---

## Main Concept

- You connect the model to your external knowledge base (you own data)
- External data could be documents, databases, wikis, etc.
- The external data is pre-indexed and controlled (you decide what information the model can access)
- You external data is converted to vectors (embeddings), and stored in databases like Amazon OpeSearch
- The model retrieves relevant information, then generate responses.
- Example: Customer service chat for a company
  - Knowledge base: Company's products manuals, FAQ documents, policy guides stored in Amazon S3.
  - Process: Customers asks, the system searches on the company documents and generates answers.

