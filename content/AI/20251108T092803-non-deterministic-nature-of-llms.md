---
id: 20251108T092803-non-deterministic-nature-of-llms
aliases:
  - Non Deterministic Nature of LLMs
tags:
  - AI
  - LLM
created: 2025-11-08 09:28
modified: 2026-02-10 22:55
title: Non Deterministic Nature of LLMs
publish: true
folder: AI
---

## Main Concept

LLMs generate text through a probabilistic process, making them inherently non-deterministic. For each token, the model generates a probability distribution over possible next words based on the input context.

**Example:**
For the sentence "After the rain the streets were...", an LLM might calculate:

- "wet" (0.4)
- "flooded" (0.25)
- "slippery" (0.15)
- "empty" (0.10)
- "muddy" (0.05)
- "clean" (0.03)
- "blocked" (0.02)

**Key characteristics:**

1. **Randomness in selection**: The model samples from the probability distribution, so it may choose "wet" one time and "flooded" another time, even with identical input
2. **Context sensitivity**: Probabilities are calculated based on the entire input context. For instance, if the input mentioned a strike, the probability of "blocked" would increase
3. **Iterative process**: This probabilistic selection happens for every token generated throughout the entire output

This explains why running the same prompt multiple times can produce different responses, even with identical settings.

## Related Notes

- [[20251108T094300-generative-ai-for-images|Generative AI for Images]]
