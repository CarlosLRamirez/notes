---
created: 2026-03-06 18:35
modified: 2026-03-06 18:36
tags:
  - AI
  - amazon-bedrock
  - AWS
  - cheat-sheet
title: Amazon Bedrock - Cost & Tradeoffs Cheatsheet
aliases: Amazon Bedrock - Cost & Tradeoffs Cheatsheet
publish: true
folder: AI
---
# Amazon Bedrock - Cost & Tradeoffs Cheatsheet

## Pricing Models

| Model | Cost | Best For | Risk |
|---|---|---|---|
| On-Demand | 💰💰💰 | Low/unpredictable volume | None |
| Provisioned Throughput | 💰💰 per token | High/predictable volume | Pay even if unused |
| Batch Inference | 💰 (50% cheaper) | Non-urgent large volumes | Not real-time |

## Customization Approaches

| Approach | Cost | Modifies Model? | Best For |
|---|---|---|---|
| Prompt Engineering | 💰 | No | Simple behavior changes |
| In-context Learning | 💰 | No | Few examples in prompt |
| RAG | 💰💰 | No | Custom knowledge, privacy |
| Fine-tuning | 💰💰💰 | Yes | Specific behavior/domain |
| Continued Pre-training | 💰💰💰💰 | Yes | Deep domain adaptation |

## Customization vs Pricing Model

| Approach | On-Demand | Provisioned Throughput |
|---|---|---|
| Prompt Engineering | ✅ | ✅ |
| RAG | ✅ | ✅ |
| Fine-tuned model | ✅ testing only | ✅ production |
| Continued pre-training | ✅ testing only | ✅ production |

## Key Tradeoffs

| Factor | Tradeoff |
|---|---|
| More customization | Higher cost, better task-specific performance |
| Larger model | Higher cost, better quality |
| Smaller model | Lower cost, sufficient for simple tasks |
| RAG vs Fine-tuning | RAG = cheaper + updatable / Fine-tuning = better performance + static |
| Provisioned vs On-Demand | Provisioned = cheaper at scale / On-Demand = safer at low volume |
| Batch vs Real-time | Batch = cheaper / Real-time = faster |

## Cost Optimization Rules

| Scenario | Recommendation |
|---|---|
| Need custom knowledge | RAG first (cheapest, no training) |
| Need specific behavior | Fine-tuning (if RAG is not enough) |
| Simple tasks | Smaller/cheaper model (Haiku vs Sonnet) |
| High predictable volume | Provisioned Throughput |
| Non-urgent processing | Batch Inference |
| Long-term log storage | S3 over CloudWatch |

## Exam Keywords to Recognize

- **Token-based pricing** → On-Demand
- **Provisioned Throughput** → reserved capacity, custom models at scale
- **Batch inference** → non-real-time, cheapest
- **RAG** → sweet spot, no training cost
- **Fine-tuning** → training cost + Provisioned Throughput for production
- **In-context learning** → no training, prompt-based, On-Demand

## Exam Domain

- Domain 2, Task 2.3: cost tradeoffs of AWS generative AI services
- Domain 3, Task 3.1: cost tradeoffs of foundation model customization