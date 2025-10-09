---
id: 20250907T100953-amazon-bedrock-overview
aliases:
  - Amazon Bedrock Overview
tags:
  - aws
  - amazon-bedrock
  - AI
created: 2025-09-07 10:09
modified: 2025-10-09 10:25
folder: AI
publish: true
title: Amazon Bedrock Overview
---

## What is Amazon Bedrock?

- It's a fully managed AWS service
- It provides access to high performing [[20250907T2102-ai-model#A Foundation Model|Foundation Models (FMs)]] from leading AI companies like OpenAI, Antrhopic, Amazon, Meta, Deepseek, etc..
- All the models are accesible through a single API
- According to AWS it provides capabilities to build Generative AI applications, with security, privacy and responsible AI policies.
- You can **experiment** and **evaluate** this top models and customize with your own data, then you can build agents which can run tasks for you, and even integrate with you business systems.
- It's serverless, so you don't have infrastructure to manage, and you can use familiar AWS services to integrate to applications.

## Benefits

### Model evaluation

You can use Amazon Bedrock to evaluate, compare and select the best models according to your needs.

#### Automatic Evaluation

You can use automatic evaluation using metrics like accuracy and toxicity

#### Manual (human) Evaluation

You can also use human evaluation for things like style, brand and domain knowledge (subjective criteria)

### Model Customization

- You can customize or adapt a foundation models for your specific needs
- Different approaches exists, being the most common:
  - [[20251009T072400-prompt-engineering|Prompt Engineering]]
  - [[20251009T073427-retrieval-augmented-generation-rag|Retrieval Augmented Generation (RAG)]]
  - [[20251009T073200-model-fine-tuning|Model Fine-Tuning]]

> [!IMPORTANT]
> When you customize a model using fine-tuning or continued pre-training, Amazon Bedrock makes a separate copy of the base Foundation Model to create a private model

## Features

### Security and Privacy

- Your data is encrypted at rest in the same AWS Region and is not shared outside of it.
- It supports compliance standards like SOC, ISO, HIPPA and GDRP
- You can use AWS Private Links to connect resources on VPCs to the Amazon Bedrock endpoints.

### Guardrails

- You can implement guardrails via corporate policies to configure things such as:
  - Filters for inappropriate content
  - Monitor violations
  - Redact Personal Identifiable Information (PII)

### Agents

- With Amazon Bedrock agents you can run multi-step tasks and interact with other AWS Services and Data Source (like S3 or DynamoDB, etc..
- With agents you can automate task like API Calls, Engineering Prompts, and general Orchestration of you Gen AI pipelines.

## Foundation Models Supported in Bedrock

- Amazon Bedrock supports a extensive list of foundation models from multiple providers, you can see the full list [here](https://docs.aws.amazon.com/bedrock/latest/userguide/models-supported.html).
- Main FM providers in Amazon Bedrock
  - AI21 Labs
  - Amazon
  - Anthropic
  - [Cohere](https://docs.cohere.com/docs/the-cohere-platform)
  - DeepSeek
  - Luma AI
  - Meta
  - Mistral AI
  - OpenAI
  - Qwen
  - Stability AI
  - TwelveLabs
  - Writer

## Related Notes

- [[20250930T080015-fine-tunning-in-amazon-bedrock|Fine-tunning in Amazon Bedrock]]
