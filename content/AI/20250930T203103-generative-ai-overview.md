---
tags:
  - AI
  - fundamentals
  - GenAI
  - AIF-C01
created: 2025-09-30 20:31
modified: 2026-04-20 22:38
folder: AI
publish: true
title: Generative AI (GenAI)
aliases:
  - Generative AI (GenAI)
---

## Main Concept

Generative AI is a subset of Deep Learning used to **generate new content** — text, images, code, audio, video, and more — that is similar in nature to the data it was trained on. Unlike traditional ML models that classify or predict, generative models _create_.

## Where It Sits in the AI Stack

```
Artificial Intelligence
  └── Machine Learning
        └── Deep Learning
              └── Generative AI
```

## How It Works (Conceptually)

- Generative AI uses a [[20260129T1255-generative-model|Generative Model]], which is typically a large [[20251029T060940-foundation-model|Foundation Model]] backed by a deep neural network. These models are trained on massive amounts of data and learn the underlying patterns and structure of that data well enough to generate new, original examples.

- They are **multi-purpose** — a single foundation model can handle many different tasks (answer questions, summarize, translate, write code) without being retrained for each one. They can also be **fine-tuned** on more specific data to better fit a particular use case.

## Basic Example

You train a generative model with a large dataset of dog photos and a large dataset of cartoon images. The model learns what makes something a dog and what makes something look like a cartoon. After training, it can generate a completely new image — one it has never seen — of a dog drawn in cartoon style.

![[Pasted image 20251028070604.png]]

## What GenAI Can Generate

| Modality   | Examples                                                |
| ---------- | ------------------------------------------------------- |
| Text       | Conversations, summaries, translations, emails          |
| Code       | Functions, scripts, Infrastructure as Code              |
| Images     | Illustrations, product visuals, art                     |
| Audio      | Music, voice synthesis, sound effects                   |
| Video      | Clips, animations                                       |
| Embeddings | Vector representations of data for search and retrieval |

## Advantages (AIF-C01)

- **Adaptability** — one model can handle many tasks
- **Responsiveness** — generates outputs in natural language, accessible to non-technical users
- **Simplicity** — no need to build task-specific models from scratch

## Limitations and Risks (AIF-C01)

- **Hallucinations** — the model generates plausible-sounding but incorrect information
- **Nondeterminism** — the same input can produce different outputs
- **Interpretability** — hard to explain _why_ the model produced a given output
- **Bias** — reflects biases present in the training data
- **Not always appropriate** — when you need a guaranteed specific outcome (not a prediction), traditional rule-based or deterministic systems may be better

## AWS GenAI Offerings

- [[20250907T100953-amazon-bedrock-overview|Amazon Bedrock]] — managed service to build GenAI apps using foundation models
- [[20251001T170057-amazon-sagemaker-overview|Amazon SageMaker]] — platform for training and deploying ML/GenAI models
- [[20251009T063120-amazon-q-developer|Amazon Q]] — family of AI assistants embedded across AWS services
- [[20260417T0900-partyrock-amazon-bedrock-playground|PartyRock]] — no-code GenAI playground built on Bedrock
- [[20251009T064252-aws-genai-computing-infrastructure|AWS ML Computing Infrastructure]] — Trainium (training), Inferentia (inference)

---

## Related Notes

- [[20260129T1102-deep-learning-dl|Deep Learning (DL)]]
- [[20250409T073600-artificial-intelligence|Artificial Intelligence (AI)]]
- [[20260129T1255-generative-model|Generative Model]]
- [[20251029T060940-foundation-model|Foundation Model]]
