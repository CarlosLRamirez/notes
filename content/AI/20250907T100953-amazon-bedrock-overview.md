---
id: 20250907T100953-amazon-bedrock-overview
aliases:
  - Amazon Bedrock Overview
tags:
  - aws
  - amazon-bedrock
  - AI
created: 2025-09-07 10:09
folder: AI
modified: 2025-10-09 05:37
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

You can customize foundation models for your specific needs, different approaches exists:

#### Prompt Engineering (No training needed)

- The better you ask to the model, the better it will answer.
- You don't need more training data, just optimize how to ask questions.
- You can add context, examples or specific information

#### Retrieval-Augmented Generation (RAG)

- You connect the model to your external knowledge base (you own data)
- External data could be documents, databases, wikis, etc.
- The external data is pre-indexed and controlled (you decide what information the model can access)
- You external data is converted to vectors (embeddings), and stored in databases like Amazon OpeSearch
- The model retrieves relevant information, then generate responses.
- Example: Customer service chat for a company
  - Knowledge base: Company's products manuals, FAQ documents, policy guides stored in Amazon S3.
  - Process: Customers asks, the system searches on the company documents and generates answers.

#### Fine-tuning with Supervised Learning (with Labels)

- You use example data that is labeled to train the model.
- The data has input-output format (question-answer, prompt-completion, description-category, etc...)
- You need hundreds to thousands of labeled example, high-quality i/o pairs, clear, consistent labeling.
- Benefits are, the model learn your specific style/format, better performance, consistent outputs, match your standard/use case.
- Use cases: Specific writing style, domain expertise, task specialization
- Example: A customer support ticket classification, data example:

  ```json
  {"input": "My password reset email never arrived and I can't log in",
  "output": "Authentication"}

  {"input": "The mobile app crashes every time I try to upload a photo",
  "output": "Technical_Bug"}

  {"input": "I was charged twice for my subscription this month",
  "output": "Billing"}

  {"input": "How do I change my profile picture?",
  "output": "General_Support"}

  {"input": "The website is loading very slowly on my browser",
  "output": "Technical_Bug"}

  {"input": "I want to upgrade to the premium plan",
  "output": "Sales"}

  {"input": "Can you delete my account and all my data?",
  "output": "Account_Management"}
  ```

#### Continued Pre-training (WITHOUT Labels)

- You continue training the model with your domain-specific text
- You need to provide large amount of unlabeled text of your own topics
- The goal is to improve the general knowledge in your specific field.
- Only certain Amazon models support Continued Pre-training in Amazon Bedrock
  - Amazon Titan Text G1 - Express
  - Amazon Titan Text G1 - Lite
- Example: You're building an AI assistant for doctors, but foundation models don't have deep medical knowledge or use proper medical terminology consistently.

```text
Medical textbooks (no labels needed - just raw text):
"Myocardial infarction occurs when blood flow to the heart muscle
is blocked, typically due to coronary artery thrombosis. The left
anterior descending artery is most commonly affected..."

Clinical guidelines:
"For acute management of ST-elevation myocardial infarction,
immediate reperfusion therapy is indicated. Primary percutaneous
coronary intervention should be performed within 90 minutes..."

Research papers:
"The pathophysiology of atherosclerosis involves endothelial
dysfunction, lipid accumulation, and inflammatory responses.
Macrophages play a crucial role in plaque formation..."

Patient case studies (anonymized):
"A 58-year-old male presented with chest pain radiating to the
left arm. ECG showed ST-segment elevation. Troponin levels were
elevated at 2.5 ng/mL..."
```

---

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
