---
id: 20251208T140329-amazon-bedrock-foundation-models
aliases:
  - Amazon Bedrock Foundation Models
tags:
  - AI
  - amazon-bedrock
created: 2025-12-08 14:03
folder: AI
modified: 2026-02-10 22:54
publish: true
title: Amazon Bedrock - Base Foundation Models
---

## Main concept

Amazon Bedrock supports a extensive list of [[20251029T060940-foundation-model|Foundation Models (FM)]]  from multiple providers
## List of Models Providers

- AI21 Labs
- [Cohere](https://docs.cohere.com/docs/the-cohere-platform)
- Stability AI
- Amazon
- Anthropic
- DeepSeek
- Luma AI
- Meta
- Mistral AI
- You can see the full list [here](https://docs.aws.amazon.com/bedrock/latest/userguide/models-supported.html).
## Comparison Table

Comparison of 4 Foundation Models available on Amazon Bedrock

![[Pasted image 20260204060717.png]]

## Key Points

- Amazon Bedrock makes a copy of the FM, available only to you, which you can further fine-tune with your own data.
- None of your data is used to train the original Foundation Model
- Claude Model can receive a lot more data as an input (context windows), you can even send a complete book and then ask questions about it.

## Additional Reference
GPT-4o (OpenAI) has this features:
- 128K Tokens
- Multimodal (text, vision, audio), fastest GPT-4 class model, high intelligence
- Complex reasoning, coding, analysis, multimodal tasks, real-time conversations
- Input: $0.0025
- Output: $0.010

> [!NOTE]
> - However, OpenAI models are not available on Amazon Bedrock, so **they are not relevant for AWS certifications**.
> - Never respond questions that mention GPT4 or OpenAI Models




## Conclusions
- Generally, the more expensive models provide better answers, but the cheaper models can also provide good answers and be more cost-effective.

---
## Related Notes
- [[20251210T072927-chossing-a-foundation-model|Choosing a Foundation Model]]
- [[20260204T0656-amazon-bedrock-models-when-to-use-what|Amazon Bedrock Models - When to Use What]]
