---
id: 20251009T073200-model-fine-tuning
aliases:
  - Model Fine-Tuning
tags:
  - AI
created: 2025-10-09 07:32
modified: 2026-02-09 17:18
folder: AI
publish: true
title: Model Fine-Tuning
---

## Main Concept
**Fine-tuning** is the process of taking a pre-trained foundation model and improve it by training on a specific dataset to specialize it for a particular task, domain, or behavior. The main idea is that you're NOT training from scratch -you're adjusting and exiting model.

## Context
**Fine-tuning** is important because it allows companies or organizations to make a trained model that is already good behave in a certain specific way, understand specific terminology, or learn proprietary information, saving the money and time to train a foundation model by themselves.
## Key Points
- Different methods of fine-tuning exist; we can classify them into these **two main categories**:
    - Supervised Fine-Tuning (uses labeled data)
    - Reinforcement Fine-Tuning
- Fine-tuning is more expensive than other customization methods (prompt engineering, few-shot learning, and RAG)
- Sometimes people  present **Distillation** as a fine-tuning method; however, strictly speaking, it is more considered a model compression method.
- There is also a technique called **Continued pre-training**; however, this is NOT a fine-tuning method.
---

## 🔗 Related Concepts
- [[20260206T1004-supervised-fine-tuning|Supervised Fine-Tuning]]
- [[20260206T1026-reinforcement-fine-tuning|Reinforcement Fine-Tuning]]
- [[20251011T071957-transfer-learning|Transfer Learning]]: Broader concept (fine-tuning is one type)
- [[20251009T072400-prompt-engineering|Prompt Engineering]]: Simpler alternative
- [[20251009T073427-retrieval-augmented-generation-rag|Retrieval Augmented Generation (RAG)]]: Complementary technique
- [[20251009T102549-model-domain-adaptation|Model Domain Adaptation]]: not a method, but an objective


---
