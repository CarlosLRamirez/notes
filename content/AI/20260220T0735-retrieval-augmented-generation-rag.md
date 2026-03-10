---
aliases:
  - Retrieval-Augmented Generation (RAG)
tags:
  - AI
created: 2026-02-20 07:35
modified: 2026-03-10 05:30
title: Retrieval-Augmented Generation (RAG)
folder: AI
publish: true
---

## Main Concept

RAG (Retrieval-Augmented Generation) it's a technique that  allows a Foundation Model to access data sources outside of its own training data, that means you can connect the model with an external Knowledge Base, so it's a way to customize models withouth fine-tuning.

## Why it's important?
- RAG solves the problem of cutoff data, meaning the models doesn't have the most current data.
- RAG adds domain-specific knowledge
- Allows the model to give more accurate and grounded responses
- It's a more cost-effective way to customize a model.

## Key Aspects
- External data could be documents, databases, wikis, etc.
- The external data is pre-indexed and controlled (you decide what information the model can access)
- You external data is converted to vectors (embeddings), and stored in databases.
- The model retrieves relevant information, then generate responses.

## Example

- Customer service chat for a company
	- Knowledge base: Company's products manuals, FAQ documents, policy guides stored in Amazon S3.
	- Process: Customers asks, the system searches on the company documents and generates answers.

---
## Related Notes
- [[20260220T0733-rag-and-knowledge-bases-with-amazon-bedrock|RAG and Knowledge Bases with Amazon Bedrock]]

## Links:
- 
