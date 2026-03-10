---
created: 2026-03-06 17:15
modified: 2026-03-06 18:17
tags:
  - AI
  - amazon-bedrock
title: Amazon Bedrock Pricing
aliases: Amazon Bedrock Pricing
publish: true
folder: AI
---

## Main Concept
Different pricing models are available for the Amazon Bedrock service.

## Context
Being aware of how AWS will charge us for its services is always important 
so that we don't get any surprises later and so that we can correctly assess 
cost-benefit and business cases.

## Model Use Pricing

### On-Demand (pay per token)
- No commitment.
- Input and output tokens are charged separately.
- Image models charge per image generated.
- Most expensive per unit but risk-free.

### Provisioned Throughput
- Reserve a specific throughput (number of input/output tokens processed  per minute) for a committed period of time (hours/months).
- Cheaper per token at high volume.
- Fixed cost even if you don't use it.
- Available for base and custom models.
- Required for custom models in production.

### Batch Inference
- Process large volumes of non-urgent data.
- Up to 50% cheaper than on-demand.
- Not real-time.
- Output is stored in a single file in Amazon S3.

## Model Customization Pricing

### Prompt Engineering 💰
- The cheapest approach.
- No model training needed.

### Retrieval Augmented Generation (RAG) 💰💰
- Uses external knowledge without modifying the model.
- No model training computation, but requires a vector database and  retrieval infrastructure.
- The sweet spot: gives you customized knowledge at On-Demand pricing.

### Instruction-based Fine-tuning 💰💰💰
- Requires additional training computation.
- Uses labeled input/output pairs.
- Requires Provisioned Throughput for production use.

### Domain Adaptation Fine-tuning (Continued Pre-training) 💰💰💰💰
- Requires intensive training computation.
- Uses large amounts of unlabeled domain-specific text.
- The most expensive customization approach.

## Exam Domain

- Domain 2, Task Statement 2.3: "Understand cost tradeoffs of AWS generative 
AI services (for example, token-based pricing, provisioned throughput, 
custom models)."
- Domain 3, Task Statement 3.1: cost tradeoffs of various approaches to 
foundation model customization (pre-training, fine-tuning, in-context 
learning, RAG).

## Related Notes

- [[20250907T100953-amazon-bedrock-overview|Amazon Bedrock Overview]]
- [[20251210T065400-model-customization-with-amazon-bedrock|Model Customization with Amazon Bedrock]]
- [[Amazon S3]]
