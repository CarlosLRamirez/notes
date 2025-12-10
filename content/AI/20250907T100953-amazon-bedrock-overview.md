---
id: 20250907T100953-amazon-bedrock-overview
aliases:
  - Amazon Bedrock Overview
tags:
  - aws
  - amazon-bedrock
  - AI
  - draft
created: 2025-09-07 10:09
modified: 2025-10-09 10:25
folder: AI
publish: true
title: Amazon Bedrock Overview
---


## Main Concept

Amazon Bedrock is a fully managed AWS service that is used to build Generative AI applications, providing access to several [[20251029T060940-foundation-model|Foundation Models]] from different providers.

## Key Points

- All the models are accesible through a single API
- You keep control of your data used to train the model.
- Pay-per-use pricing model
- It provides security, privacy, governance and responsible AI policies.
- You can **evaluate** models and **customize** with your own data.
- It's serverless, so you don't have infrastructure to manage, and you can use familiar AWS services to integrate to applications.


---

To Organize: ⬇️ 


# Model Evaluation with Amazon Bedrock

## Benefits

### Model evaluation

You can use Amazon Bedrock to evaluate, compare and select the best models according to your needs.

#### Automatic Evaluation

You can use automatic evaluation using metrics like accuracy and toxicity

#### Manual (human) Evaluation

You can also use human evaluation for things like style, brand and domain knowledge (subjective criteria)

# Model Customization with Amazon Bedrock

### Model Customization

[[20251011T094204-model-customization|Model Customization]]


> [!IMPORTANT]
> When you customize a model using fine-tuning or continued pre-training, Amazon Bedrock makes a separate copy of the base Foundation Model to create a private model

# Amazon Bedrock features

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



---

## Amazon Bedrock General Diagram

![[Pasted image 20251208141145.png]]


## Related Notes
- [[20251208T140329-amazon-bedrock-foundation-models|Amazon Bedrock Foundation Models]]
- [[20250930T080015-fine-tunning-in-amazon-bedrock|Fine-tunning in Amazon Bedrock]]


