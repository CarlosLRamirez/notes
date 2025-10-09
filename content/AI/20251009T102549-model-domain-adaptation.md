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

- The OBJECTIVE of transferring on model from one domain to other
- It can be achieved with different methods

## Classification

- Domain Adaptation is not a method but an objective
- You can achieve Domain Adaptation by:
  - Continues pre-training - preferred method
  - Fine-tuning with labeled data
  - RAG (without change the model)
  - A combination of them

## Example

- **OBJECTIVE**: Adapt a general model -> Healthcare domain
- **METHODS**:
  1. Continued Pre-training on medical texts
  2. Fine-tune with medical Q&A
  3. RAG with a medical knowledge base
  4. A combination of the above

## Type of Domain Adaptation:

### A. Unsupervised Domain Adaptation

- No labels in the target domain
- Use: Continued Pre-training
- Example: Adapting from general news → medical news

### B. Supervised Domain Adaptation

- With labels in the target domain
- Use: Fine-tuning with labels
- Example: General sentiment classification → sentiment in medical reviews
