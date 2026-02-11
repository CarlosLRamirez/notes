---
created: 2026-02-09 17:40
modified: 2026-02-10 22:41
tags:
  - AI
  - ML
  - foundation-models
title: Model Customization
aliases: Model Customization
publish: true
folder: AI
---

## Main Concept 
**Model Customization** is the process of adapting an already trained foundation model to work better for your specific needs, context, use case, etc. That could be adding more specific information, modify their style or tone, or add private or personal information.

## Context
**Model Customization** is needed because foundation models are trained with a massive amount of general knowledge but doesn't have specific information about your business, your use case, your rules, etc.. 

## Key Aspects

- There are different methods to implement model customization, which can be used individually or combined.
- Some methods are more expensive than others, but we get better quality results.
- Another difference is the speed; prompt engineering is faster than fine-tuning, but fine-tuning is more powerful. It's a matter of trade-offs.
## Model customization methods (taxonomy)
- Fine-Tuning (updating model weights with your data)
	- Supervised Fine-tuning (with labeled data)
	- Reinforcement fine-tuning (with feedback signals)
- Continued Pre-training (training on new domain data before fine-tuning)
- Prompt-based Methods (no weight updates)
	- Prompt engineering (instructions)
	- In-context Learning (examples in prompt)
	- Few-shot learning (providing examples in prompt)
- Retrieval Methods (augmenting model with external data)
	- Retrieval Augmented Generation (RAG)
- Parameter-Efficient Methods (lightweight alternatives to full fine-tuning)
	- Prefix Tuning (add trainable prefixes)
	- Adapter Layers (small trainable modules inserted into model)
- Ensemble Methods
	- Model Ensembling (combining multiple models)
## When to use each method
- Use prompt engineering when you need **quick adaptation** without resources
- Use fine-tuning when you have **labeled data** and need **deep** customization
- Use RAG when you have external documents to reference
- Use Continued Pre-Training when you need domain knowledge expansion **first**
- Use Parameter-Efficient methods when you want customization withouth full retraining

## Applications
- Business in general
- Domain Specific (Medicine, Industria, Military, etc..)
- Cultural/linguistic 
## Examples
- Customize a Model with private company knowledge base
- Enrich a model with medical terminology on a specific specialization
- Adapt the model with idioms and local phrases in order to behave more "locally"

---
## Related Concepts:
- [[20251009T073200-model-fine-tuning|Model Fine-Tuning]]
- [[20260206T1004-supervised-fine-tuning|Supervised Fine-Tuning]]
- [[20260206T1026-reinforcement-fine-tuning|Reinforcement Fine-Tuning]]
- [[20260210T2204-continued-pre-training|Continued Pre-training]]
- Prompt-based Methods
- [[20251009T072400-prompt-engineering|Prompt Engineering]]
- In-context Learning
- Few-shot learning
- Retrieval Methods
- [[20251009T073427-retrieval-augmented-generation-rag|Retrieval Augmented Generation (RAG)]]
- Parameter-Efficient Methods
- Prefix Tuning 
- Adapter Layers
- Ensemble Methods
- Model Ensembling 
- [[20251210T065400-model-customization-with-amazon-bedrock|Model Customization with Amazon Bedrock]]



---
## Links:
*References*


