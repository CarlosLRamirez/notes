---
aliases:
  - Diffusion Models
tags:
  - AI
  - gen-ai
  - image-generation
  - AIF-C01
created: 2025-11-18 07:21
modified: 2026-04-20 23:10
title: Diffusion Models
publish: true
folder: AI
---

## Main Concept

Diffusion models are a type of generative AI model that produces images by learning to **reverse a noise-adding process**. They are trained to understand how to reconstruct a clean image from pure noise, guided by a text prompt. Well-known examples: DALL-E, Stable Diffusion, and Amazon Nova Canvas.

## Two Key Processes

### 1. Training (Forward Diffusion)

- Start with a real image (e.g., a photo of a cat)
- Gradually add random noise in small steps
- The image becomes progressively more distorted
- End result: pure noise
- What the model learns: what noise was added at each step

### 2. Generation (Reverse Diffusion)

- Start with pure random noise
- Provide a text prompt ("a cat with a computer")
- The model removes noise step-by-step, guided by the prompt
- End result: a new image that matches the description

---

## Simple Analogy

**Training:** Learn how to destroy a sculpture step-by-step.
**Generation:** Recreate a sculpture by reversing the destruction process.

---

## AIF-C01 Exam Relevance

Diffusion models are explicitly listed in the exam guide (Domain 2) as a generative AI model type to know. Key points:

- They are used primarily for **image generation** (not text)
- They are a separate architecture from Transformer-based LLMs
- AWS offers diffusion-based image generation through **Amazon Nova Canvas** (via Amazon Bedrock) and **Amazon Titan Image Generator**

> **Exam tip:** If a question involves generating images from text prompts, the underlying model type is a **diffusion model** — not a transformer. The transformer handles text; diffusion handles images.

---

## Related Notes

- [[20251029T060940-foundation-model|Foundation Model]]
- [[20251108T094300-generative-ai-for-images|Generative AI for Images]]
- [[20250930T203103-generative-ai-overview|Generative AI (GenAI)]]
- [[20260306T2118-amazon-nova-models|Amazon Nova Models]]
