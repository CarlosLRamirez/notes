---
created: 2026-06-19 18:29
modified: 2026-06-19 18:31
tags:
  - AWS
  - AIF-C01
  - AI
title: Amazon Kendra
aliases: Amazon Kendra
publish: true
folder: AI
---

## Main Concept

Amazon Kendra is a fully managed document search service powered by ML. It indexes documents from multiple sources and allows users to ask natural language questions — returning direct, precise answers extracted from within the documents rather than a list of links to search through.

> [!TIP] Key Idea
> 
> - **Input** → a natural language question from a user.
>     
> - **Output** → a direct, precise answer extracted from indexed internal documents.
>     
> - **Exam trigger** → any scenario mentioning "document search" or "intelligent search" → Amazon Kendra.
>     

## Supported Document Types

Kendra indexes and searches across a wide range of document formats:

```
Text, PDF, HTML, PowerPoint, Microsoft Word, FAQs, and more.
```

## How It Differs from Traditional Search

```
Traditional search  → user searches a keyword → returns a list of documents
                      user must open and read each document to find the answer

Amazon Kendra       → user asks "Where is the IT support desk?"
                      Kendra returns "1st floor"
                      direct answer extracted from the indexed documents
```

> [!example] Example from Maarek's lesson
> 
> User asks: "Where is the IT support desk?" Kendra searches across all indexed internal documents. Kendra responds: "1st floor."
> 
> Kendra found the answer buried in an internal document and surfaced it directly — without the user needing to know which document contained it or even that the document existed.

## Key Features

### Natural Language Search

Users ask questions in plain natural language — no need to know keywords, document names, or where information is stored. Kendra understands the question and finds the answer.

### Incremental Learning

Kendra learns from user interactions and feedback over time — promoting search results that users found helpful and demoting ones they ignored. Search quality improves continuously without manual retraining.

> [!TIP] Key Idea
> 
> - **Incremental learning** → Kendra gets smarter the more it is used, based on real user behavior and feedback.

### Fine-Tuned Search Results

Search results can be customized based on:

```
Data importance   → prioritize certain document types or sources
Freshness         → surface more recent documents first
Custom filters    → apply business-specific rules to result ranking
```

## Common Exam Scenarios

> [!TIP] Key Idea: When the answer is Amazon Kendra
> 
> - "Employees need to search across thousands of internal documents to find policy information" → Amazon Kendra.
>     
> - "Build an intelligent FAQ system that answers questions from internal documentation" → Amazon Kendra.
>     
> - "A company wants natural language search across their knowledge base instead of keyword search" → Amazon Kendra.
>     
> - "Surface direct answers from documents instead of returning a list of links" → Amazon Kendra.
>     
> - Any scenario involving **intelligent document search or enterprise knowledge search** → Amazon Kendra.
>     

## Critical Distinctions

```
Amazon Kendra      → SEARCHES documents to find direct answers
                     understands natural language questions
                     returns precise answers from indexed repositories

Amazon Comprehend  → UNDERSTANDS text meaning
                     sentiment, entities, topics
                     does not search across documents

Amazon Lex         → BUILDS conversational chatbots
                     manages dialogue and intent
                     can integrate WITH Kendra to answer questions
```

> [!example] Kendra + Lex together
> 
> A company builds an internal HR chatbot using Amazon Lex. When an employee asks "How many vacation days do I have left?" Lex handles the conversation and invokes Kendra to search the HR policy documents for the answer — then returns it to the user through the chatbot interface.

## Exam Scope

You will not be asked how to implement Kendra. You need to:

- Know what Kendra does (intelligent document search — natural language questions, direct answers).
- Know the key differentiator from traditional search (direct answers vs list of documents).
- Know the supported document types (text, PDF, HTML, PowerPoint, Word, FAQs).
- Know incremental learning as a feature (improves from user feedback automatically).
- Distinguish Kendra (search documents) from Comprehend (understand text) and Lex (build chatbots).
- Maarek's own exam tip: "whenever you see a document search service, think Amazon Kendra."

## Exam Domain

- Domain 1, Task Statement 1.2: "Explain the capabilities of AWS managed AI/ML services (for example, **Amazon Kendra**)."
- Domain 1, Task Statement 1.2: "Identify examples of real-world AI applications (for example, **search**)."

## Related Notes

- [[AWS AI/ML Managed Services — Index]]
- [[Amazon Lex]]
- [[Amazon Comprehend]]
- [[Amazon Q]]
- [[RAG - Retrieval Augmented Generation]]
- [[Enterprise Search]]