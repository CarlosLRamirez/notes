---
created: 2026-01-29 12:55
modified: 2026-01-29 13:10
tags:
  - AI
  - GenAI
title: Generative Model
publish: true
folder: AI
aliases:
  - Generative Model
---
## Definition

A **generative model** is a type of machine learning model that learns the underlying patterns and distribution of training data to create new, similar data instances. Unlike discriminative models that classify or predict labels, generative models can produce original content—text, images, audio, code, or other data types.
## Context
Generative models are the fundamental building block for [[20250930T203103-generative-ai-overview|Generative AI]]
## Core Concept

Generative models learn "what the data looks like" rather than just learning decision boundaries. They capture the statistical properties and relationships within the training data, enabling them to generate novel examples that resemble but are not copies of the training set.

## How It Works

1. **Learning phase**: The model studies patterns, structures, and distributions in the training dataset
2. **Generation phase**: Using learned patterns, it produces new data by sampling from the learned distribution
3. **Output**: New instances that maintain the characteristics of the training data

## Key Characteristics

- Creates new content rather than just analyzing existing data
- Learns probability distributions of the input data
- Can produce diverse outputs from the same learned patterns
- Quality depends on training data quality and model architecture

## Common Types

- **Large Language Models (LLMs)**: Generate text (GPT, Claude, LLaMA)
- **Diffusion Models**: Generate images (Stable Diffusion, DALL-E)
- **Generative Adversarial Networks (GANs)**: Generate images, video
- **Variational Autoencoders (VAEs)**: Generate compressed representations

## Practical Applications

- Content creation (text, images, music)
- Code generation and completion
- Data augmentation for training other models
- Drug discovery and molecular design
- Synthetic data generation for privacy-preserving scenarios

## Relationship with Foundation Models

> [!TIP]
> **Important distinction:** Generative models and foundation models are **independent, overlapping categories**.

- Some foundation models are generative (GPT-4, Claude, Stable Diffusion)
- Some foundation models are NOT generative (BERT, CLIP, ViT for classification)
- Some generative models are NOT foundation models (small specialized GANs, domain-specific VAEs)

> [!NOTE]
> However, today most foundation models are generative models.

---

## Related Concepts
- [[20250930T203103-generative-ai-overview|Generative AI (GenAI)]]
- [[20251029T060940-foundation-model|Foundation Model]]
- Discriminative Models
- Training Data
- Model Fine-tuning
- [[20251009T072400-prompt-engineering|Prompt Engineering]]

