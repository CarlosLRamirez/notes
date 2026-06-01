---
title: BERT (Bidirectional Encoder Representations from Transformers)
aliases:
  - BERT
  - Bidirectional Encoder Representations from Transformers
tags:
  - AI
  - NLP
  - transformer
  - AIF-C01
created: 2026-04-21 00:01
modified: 2026-04-21 00:01
publish: true
folder: AI
---

## Main Concept

BERT is a **Transformer-based model** that reads text in both directions (left-to-right and right-to-left) simultaneously. Unlike GPT which generates text, BERT is designed for understanding and analyzing text.

## Key Differences from GPT

| | BERT | GPT |
|---|---|---|
| **Direction** | Bidirectional | Unidirectional (left-to-right) |
| **Purpose** | Understanding text | Generating text |
| **Use case** | Classification, NER, similarity | Translation, summarization, code generation |

## How It Works

BERT reads an entire sentence at once and considers context from both directions. This makes it better at understanding relationships between words, regardless of position.

Example: In the sentence "The bank provides loans," BERT understands that "bank" means a financial institution because it sees the full context on both sides.

## Common Uses

- Text classification (spam detection, sentiment analysis)
- Named Entity Recognition (NER)
- Question answering
- Similarity matching

## AIF-C01 Context

Know that BERT and GPT are both Transformer-based, but serve different purposes: **BERT understands, GPT generates**. The exam may ask which one to use for a given task.

---

## Related Notes

- [[20251016T040137-transformer-architecture|Transformer Architecture]]
- [[20250907T114034-natural-language-processing|Natural Language Processing]]
- [[20251029T060940-foundation-model|Foundation Model]]
