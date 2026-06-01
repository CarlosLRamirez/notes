---
id: 20251029T060940-foundation-model
aliases:
  - Foundation Model
tags:
  - AI
  - ML
created: 2025-11-08 08:54
modified: 2026-02-10 22:54
title: Foundation Model
publish: true
folder: AI
---

# Foundation Model

## Main Concept

A Foundation Model is a large-scale machine learning model trained on massive and diverse datasets (typically billions+ of parameters) using self-supervised or unsupervised learning techniques. These models serve as a base that can be adapted to a wide variety of downstream tasks through fine-tuning or prompting.

## Context
Foundation models represent a paradigm shift in AI development: instead of training task-specific models from scratch, practitioners adapt pre-trained foundation models to their specific needs. This approach is cost-effective and leverages the broad knowledge captured during pre-training.
## Key Characteristics

- **Scale**: Billions of parameters, trained on vast datasets
- **Cost**: Millions of dollars in computational resources for pre-training
- **Generality**: Applicable across multiple tasks and domains
- **Adaptability**: Can be customized through fine-tuning, prompt engineering, or RAG
- **Transfer learning**: Knowledge from pre-training transfers to new tasks

## Types by Modality

- **Text-only**: GPT-4, Claude, LLaMA, BERT (language understanding)
- **Image-only**: Stable Diffusion, DALL-E (image generation/understanding)
- **Audio-only**: Whisper (speech recognition/transcription)
- **Multimodal**: GPT-4V, Claude 3, Gemini (multiple data types)

## Examples

1. **GPT-4** (for text generation - LLM )
2. **DALL-E 3** (Image generation)
3. **Whisper** (Audio/speech)
4. **CLIP** (Vision-language understanding)

> [!NOTE]
> A Foundation Model is pre-trained with huge data, and then adapted to specific task, that is why are called "**Foundation**" (not _Foundational_). 

---

## Related Notes

- [[Classification of Foundation Models]]
- [[20250917T073805-large-language-models|Large Language Models (LLM)]]
- [[Multimodal Foundation Models]]
- [[20251210T072927-chossing-a-foundation-model|Choosing a Foundation Model]]
- [[20260209T1740-model-customization|Model Customization]]




