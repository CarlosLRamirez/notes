---
tags:
  - AI
  - neural-networks
  - deep-learning
  - AIF-C01
created: 2025-10-16 04:01
modified: 2026-04-20 22:46
folder: AI
publish: true
title: Transformer Architecture
aliases:
  - Transformer Architecture
  - Transformer Model
---

## Main Concept

The **Transformer** is a neural network architecture built around **attention mechanisms**. Instead of processing text word by word (like older approaches), it processes an entire sequence in parallel and learns relationships between words regardless of how far apart they are in the text.

It was introduced in 2017 in the paper *"Attention Is All You Need"* by Vaswani et al. at Google. Before Transformers, the standard approaches were Recurrent Neural Networks (RNNs) and Convolutional Neural Networks (CNNs) — both much slower and worse at capturing long-range context.

## Why It Matters

Transformers are the foundation of virtually every modern Large Language Model — GPT, Claude, BERT, LLaMA, and others. The name GPT even gives it away: **G**enerative **P**re-trained **T**ransformer.

Without the Transformer architecture, the current generation of foundation models and GenAI would not exist.

## Key Characteristics

- **Attention mechanism** — the model learns which words are most relevant to each other in a given context, giving relative importance to specific words in a sentence
- **Parallel processing** — processes all tokens simultaneously instead of sequentially, making training dramatically faster and enabling better use of GPUs
- **Scalability** — more parameters + more data = better performance; this is why modern LLMs can have billions or trillions of parameters
- **Transfer learning** — pre-train once on a massive dataset, then fine-tune for specific tasks; this is the basis of how foundation models work
- **Long-range context** — can relate words or concepts that are far apart in a sequence without "forgetting" earlier context (a key weakness of RNNs)

## Transformer vs. Previous Approaches

| | RNNs / CNNs | Transformers |
|---|---|---|
| Processing | Sequential | Parallel |
| Long-range context | Weak (forgetting problem) | Strong |
| Training speed | Slow | Fast |
| Scalability | Limited | Scales well with size |
| Modern LLMs built on it | No | Yes |

## AIF-C01 Exam Relevance

The exam won't test implementation details. What to know:

- Transformers are the architecture behind **LLMs and Foundation Models**
- The key innovation is the **attention mechanism** — allows the model to focus on relevant parts of the input
- Transformers enabled **transfer learning at scale** — pre-train once, fine-tune many times
- Parallel processing is why **GPUs matter** for training these models

> **Exam tip:** If a question mentions LLMs, foundation models, or how modern GenAI models process language, the underlying architecture is the Transformer. You don't need to know *how* attention works mathematically — just *what* it enables.

---

## Related Notes

- [[20251016T052900-transformer-architecture-components|Transformer Architecture Components]]
- [[20251029T060940-foundation-model|Foundation Model]]
- [[20250907T111932-neural-networks|Neural Networks]]
- [[20260129T1102-deep-learning-dl|Deep Learning (DL)]]
- [[20250930T203103-generative-ai-overview|Generative AI (GenAI)]]

## References

[Attention Is All You Need](https://arxiv.org/pdf/1706.03762) — original 2017 paper
