---
id: 20251009T102549-model-domain-adaptation
aliases:
  - Model Domain Adaptation
tags: []
created: 2025-10-09 10:25
modified: 2025-10-09 10:36
folder: AI
publish: true
title: Model Domain Adaptation
---

## Main Concept

Domain Adaptation is a specific type of [[20251011T071957-transfer-learning|Transfer Learning]]

- It is used in scenarios where **task is the same**, but the data distribution has shifted between the source and target datasets.
- The OBJECTIVE of transferring on model from one domain to other
- Domain adaptation can be achieved thought fine-tuning, where the model is retrained on labeled or unlabeled data from the target domain to align its feature representation.

## Example

For example, a model trained to detect cars in sunny weather (input), might need to be adapted to detect cars in rainy conditions (target domain)


## Type of Domain Adaptation:

### A. Unsupervised Domain Adaptation

- No labels in the target domain
- Use: Continued Pre-training
- Example: Adapting from general news → medical news

### B. Supervised Domain Adaptation

- With labels in the target domain
- Use: Fine-tuning with labels
- Example: General sentiment classification → sentiment in medical reviews
