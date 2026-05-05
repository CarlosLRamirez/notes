---
created: 2026-04-24 19:44
modified: 2026-04-26 06:25
tags:
  - AI
  - machine-learning
  - AIF-C01
title: Self-Supervised Learning
aliases:
  - Self-Supervised Learning
publish: true
folder: AI
---

## Main Concept

Self-Supervised Learning is a training technique where the model generates its own labels automatically from the structure of the data itself — no human annotation required. The labels are not invented by the model; they are extracted directly from the raw data.

> Key distinction from [[20260424T0945-semi-supervised-learning|Semi-Supervised Learning]]: in semi-supervised, a human labels at least some data to start. In self-supervised, **zero** human labels are needed — the data labels itself.

## How It Works

The model is trained on **pretext tasks** — simple artificial tasks where the answer (label) is already hidden inside the data:

- **Next-word prediction:** given "Amazon Web Services, Inc. (AWS) is a subsidiary of...", predict the next word → label is "Services", "computing", "companies", etc.
- **Masked word prediction:** hide a word and ask the model to fill in the blank
- **Image reconstruction:** hide 75% of an image and ask the model to reconstruct it

![[Pasted image 20260426T061937.png]]

The pretext tasks are not useful in themselves — their purpose is to force the model to learn the underlying structure and patterns of the data (grammar rules, word meaning, relationships between concepts). This is directly related to how [[20260217T1155-embeddings|Embeddings]] are created.

## Pretext Task → Downstream Task

```
Unlabeled Data
      ↓
Pretext Task (model learns structure)
      ↓
Pre-trained model with rich internal representations
      ↓
Downstream Task (the actual useful task: translation, classification, Q&A...)
```

Once pre-trained via self-supervised learning, the model can be fine-tuned for specific downstream tasks with very little additional labeled data.

## Key Aspects

- Labels are derived automatically from the data — not invented or hallucinated by the model
- Enables training on massive unlabeled datasets (internet-scale text, images)
- The model learns to predict **any part of the input from another part**: past → future, visible → masked, partial → complete
- Foundation of modern large language models

## Context — Why It Matters for the Exam

This is the technique behind **GPT** (predicts the next token) and **BERT** (predicts masked tokens). Understanding self-supervised learning explains *how* foundation models acquire general knowledge before any fine-tuning or specialization.

## Applications

- **NLP** — language models (GPT, BERT, Claude)
- **Computer Vision** — image models trained on unlabeled images
- **Multimodal** — models like CLIP that learn relationships between text and images

---

## Related Concepts

- [[20260424T0945-semi-supervised-learning|Semi-Supervised Learning]]
- [[20260421T0644-supervised-learning|Supervised Learning]]
- [[20260422T1813-unsupervised-learning|Unsupervised Learning]]
- [[20260217T1155-embeddings|Embeddings]]
- [[20260129T1102-deep-learning-dl|Deep Learning (DL)]]
- [[20260129T1102-machine-learning-ml|Machine Learning (ML)]]
- [[20251029T060940-foundation-model|Foundation Model]]

## Exam Domain (AIF-C01)

**Domain 1 — Fundamentals of AI and ML**
- Task Statement 1.1: Types of ML — self-supervised learning as the mechanism behind foundation models and LLMs.

---

## Links

_References_
