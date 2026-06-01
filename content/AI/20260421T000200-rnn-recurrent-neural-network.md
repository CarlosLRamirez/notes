---
title: RNN (Recurrent Neural Network)
aliases:
  - RNN
  - Recurrent Neural Network
tags:
  - AI
  - neural-networks
  - deep-learning
  - AIF-C01
created: 2026-04-21 00:02
modified: 2026-04-21 00:02
publish: true
folder: AI
---

## Main Concept

An **RNN** is a neural network designed to process **sequential data** — information where order and context matter. It has feedback loops that allow it to "remember" previous inputs while processing new ones.

## How It Works

RNNs process data one element at a time, maintaining a "memory" (hidden state) of what they've seen before. This allows them to understand context and dependencies in sequences.

## Common Uses

- **Time-series prediction** — stock prices, weather forecasting
- **Speech recognition** — understanding audio sequences
- **Text prediction** — next word prediction, language modeling
- **Video analysis** — understanding frame sequences

## RNN Variants

- **LSTM** (Long Short-Term Memory) — improved RNN with better long-term memory
- **GRU** (Gated Recurrent Unit) — simplified version of LSTM

## Important: Transformers vs. RNNs

**RNNs process sequentially** — slow, especially for long sequences
**Transformers process in parallel** — much faster, better for modern LLMs

This is why modern LLMs use Transformers, not RNNs.

## AIF-C01 Context

RNNs are mentioned as a predecessor to Transformers. Know that RNNs are good for sequential data but slow to train compared to Transformers. The exam may ask why Transformers replaced RNNs for language modeling.

---

## Related Notes

- [[20251016T040137-transformer-architecture|Transformer Architecture]]
- [[20250907T111932-neural-networks|Neural Networks]]
- [[20250917T074225-types-of-inferencing|Types of Inferencing]]
