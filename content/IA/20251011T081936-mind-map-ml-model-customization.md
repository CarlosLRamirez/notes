---
id: 20251011T081936-mind-map-ml-model-customization
aliases:
  - "Mind Map: ML Model Customization"
tags:
  - IAM
  - mindmap
created: 2025-10-11 08:19
modified: 2025-10-11 09:29
publish: true
folder: IA
title: "Mind Map: ML Model Customization"
---

```mermaid
mindmap
  root((Model Customization))
    No Model Changes
      Prompt Engineering
        Zero-shot
        Few-shot
        Chain-of-thought
        Cost: $
        Time: Minutes
    External Knowledge
      RAG
        Knowledge Base
        Vector DB
        OpenSearch
        Cost: $$
        Time: Hours-Days
    Model Changes
      Transfer Learning
        Fine-tuning
          WITH LABELS
            Traditional Fine-tuning
              Single task
              Input-Output pairs
              Sentiment analysis
            Instruction Tuning
              Multi-task
              Instruction-Response
              ChatGPT, Claude
          WITHOUT LABELS
            Continued Pre-training
              Domain corpus
              Terminology learning
              Medical/Legal models
    Cross-cutting
      Domain Adaptation
        Via Pre-training
        Via Fine-tuning
        Via RAG
```