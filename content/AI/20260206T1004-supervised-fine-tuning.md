---
created: 2026-02-06 10:04
modified: 2026-02-25 16:48
tags:
  - AI
  - amazon-bedrock
title: Supervised Fine-Tuning
aliases: Supervised Fine-Tuning
publish: true
folder: AI
---

## Main Concept 
**Supervised fine-tuning** is the process of taking a pre-trained foundation model and further training it on a **smaller, specialized dataset** with **labeled examples** to adapt it to a specific task or domain.

## Context
It allows you to use an existing well pre-trained model and train it even better on a specialized field or with an special behavior, this is very useful for business and industries.

## Key Aspects
- You obtain a model better trained for a particular field or area of knowledge.
- The labeled examples are input-output pairs, for instance:
	- ![[Pasted image 20260206101637.png]]
- Supervised Fine-Tunning is usually cheaper because requires less computational power and less data is usually required.
- However it requires experienced ML engineers to run the task
- You must prepare the data, do fine-tuning and then **evaluate** the model.



## Applications
- Customer service
- Health
- Legal services
- Banking
- etc.

## Examples

### Example 1:  Guatemalan Banking Chatbot

**Without Fine-tuning:** 

```md
User: "How much does a SINPE transfer cost?" 
Generic Titan: "I don't have specific information about SINPE transfers. Could you clarify what SINPE is?" 
❌ Doesn't know regional payment systems 
```

**With Fine-tuning:** 

```md
Training data includes 1,000+ examples of Guatemala banking queries

User: "How much does a SINPE transfer cost?" 
Fine-tuned Titan: "SINPE transfers in Guatemala cost Q5.00 for amounts up to Q5,000 and Q15.00 for larger amounts. Processing time is 1-2 hours on business days.
✅ Knows regional systems, pricing, local context
```

## Related Concepts:
- [[20251009T073200-model-fine-tuning|Model Fine-Tuning]]
- [[20260206T1026-reinforcement-fine-tuning|Reinforcement Fine-Tuning]]



---
## Links:



