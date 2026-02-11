---
created: 2026-02-06 10:04
modified: 2026-02-10 22:44
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

```json
[{"prompt": "Customer: My credit card was declined",
    "completion": "I apologize for the inconvenience. Let me help you resolve this. First, please verify that: 1) Your card hasn't expired, 2) You have sufficient funds, 3) There are no holds on your account. If everything looks correct, I can escalate this to our payment team. Would you like me to do that?"},
    
{"prompt": "Customer: How long does international transfer take?", "completion": "International transfers through our system typically take 2-3 business days. However, due to banking regulations in Guatemala, transfers to certain countries may take up to 5 business days. I can check the specific timeline for your destination country if you'd like?"}
  // ... hundreds or thousands more examples
]
```


![[Pasted image 20260206101637.png]]


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



