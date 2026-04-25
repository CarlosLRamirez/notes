---
created: 2026-02-06 10:04
modified: 2026-04-21 00:00
tags:
  - AI
  - amazon-bedrock
  - AIF-C01
title: Supervised Fine-Tuning
aliases:
  - Supervised Fine-Tuning
  - SFT
publish: true
folder: AI
---

## Main Concept 
**Supervised fine-tuning (SFT)** is the process of taking a pre-trained foundation model and further training it on a **smaller, specialized dataset** with **labeled examples** to adapt it to a specific task or domain.

## Key Distinction: Supervised Fine-Tuning vs. Supervised Learning

These are **different concepts at different levels**:

| | Supervised Learning | Supervised Fine-Tuning |
|---|---|---|
| **What it is** | A learning paradigm (the general approach) | A specific technique for adapting models |
| **Starting point** | Train from scratch on labeled data | Start with a pre-trained model, then adapt it |
| **Data requirement** | Full dataset labeled from the beginning | Smaller task-specific labeled dataset |
| **Use case** | Train any model (SVM, neural net, etc.) | Improve a foundation model for a specific task |
| **Example** | Train SVM from scratch on spam/ham emails | Fine-tune GPT-4 on banking customer service queries |

**In short:** Supervised Learning is the *principle* (learn from labeled examples). Supervised Fine-Tuning is the *application* (use that principle to adapt a pre-trained model).

## Context
Supervised fine-tuning allows you to leverage an existing well-trained foundation model and adapt it to a specialized field or behavior. This is very practical for business and industry because it requires less data and compute than training from scratch, while still delivering domain-specific performance.

## Key Aspects

- **Pre-trained starting point** — you're not training from scratch; you're adapting a model that already understands language, reasoning, etc.
- **Task-specific labeled data** — input-output pairs focused on your use case, e.g.:
	- ![[Pasted image 20260206101637.png]]
- **More efficient than training from scratch** — requires less computational power and less data because the foundation model already has broad knowledge
- **Requires domain expertise** — you need to curate high-quality labeled examples and understand your domain well enough to recognize good outputs
- **Full pipeline** — prepare data → fine-tune → evaluate → iterate

## Why Fine-Tuning vs. Training from Scratch?

| Approach | Data needed | Compute | Time | When to use |
|---|---|---|---|---|
| Train from scratch | Massive (millions) | Extreme (GPUs/TPUs for weeks) | Months | Only if you have unlimited resources and unique requirements |
| Fine-tune foundation model | Smaller (hundreds-thousands) | Moderate (hours/days on GPU) | Days/weeks | **Most practical scenarios** |
| Prompt engineering only | None | Low (API calls) | Minutes | When the base model already works well enough |



## Applications
- Customer service
- Health
- Legal services
- Banking
- etc.

## Examples

### Example 1:  Guatemalan Banking Chatbot

**Without Fine-tuning:** 

```md
User: "How much does a SINPE transfer cost?" 
Generic Titan: "I don't have specific information about SINPE transfers. Could you clarify what SINPE is?" 
❌ Doesn't know regional payment systems 
```

**With Fine-tuning:** 

```md
Training data includes 1,000+ examples of Guatemala banking queries

User: "How much does a SINPE transfer cost?" 
Fine-tuned Titan: "SINPE transfers in Guatemala cost Q5.00 for amounts up to Q5,000 and Q15.00 for larger amounts. Processing time is 1-2 hours on business days.
✅ Knows regional systems, pricing, local context
```

## AIF-C01 Exam Relevance

The exam tests understanding of **when to fine-tune vs. other approaches**:
- **Fine-tune** — you have domain-specific labeled data and need task-specific behavior
- **Prompt engineering** — the base model works but needs instruction/format guidance
- **RAG** — you need access to external knowledge without retraining
- **Train from scratch** — extremely rare; only when you have unique data and unlimited resources

> **Exam tip:** A question asking "how do you adapt a foundation model to your business domain?" → answer is **Supervised Fine-Tuning** (if you have labeled examples) or **RAG** (if you need external knowledge without retraining).

---

## Related Concepts
- [[20260129T1102-machine-learning-ml|Machine Learning (ML)]] — the broader paradigm that includes supervised learning
- [[20251009T073200-model-fine-tuning|Model Fine-Tuning]] — broader concept covering supervised + unsupervised fine-tuning
- [[20260206T1026-reinforcement-fine-tuning|Reinforcement Fine-Tuning]] — different fine-tuning approach using rewards
- [[20260220T0735-retrieval-augmented-generation-rag|Retrieval-Augmented Generation (RAG)]] — alternative to fine-tuning when you need external knowledge
- [[20251029T060940-foundation-model|Foundation Model]] — what you're fine-tuning



---
## Links:



