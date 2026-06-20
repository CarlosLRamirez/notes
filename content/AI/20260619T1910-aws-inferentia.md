---
created: 2026-06-19 19:10
modified: 2026-06-19 19:10
tags:
  - AWS
  - AI
  - AIF-C01
title: AWS Inferentia
aliases: AWS Inferentia
folder: AI
publish: true
---

## Main Concept

AWS Inferentia is a custom ML chip designed and built by AWS specifically for high-performance, low-cost ML inference. It is available as EC2 instances of type Inf1 and Inf2 and delivers significantly better throughput and lower cost than standard GPU instances for serving ML model predictions.

> [!TIP] Key Idea
> 
> - **Purpose** → running inference (serving predictions) from trained ML models.
>     
> - **Instance types** → Inf1, Inf2 (EC2 instances powered by Inferentia chips).
>     
> - **Performance benefit** → up to 4x throughput compared to equivalent GPU-based instances.
>     
> - **Cost benefit** → up to 70% cost reduction compared to GPU-based inference.
>     
> - **Environmental benefit** → lowest environmental footprint among ML instance types.
>     

## When to Use

```
Use Inferentia when:
- Serving a trained model in production at high volume.
- Inference costs on standard GPU instances are too high.
- You need high throughput for real-time predictions at scale.
- You want the lowest environmental footprint for inference workloads.
```

> [!example] Example
> 
> A company deploys a large language model to serve 10 million API requests per day. On standard GPU instances the inference cost is $100,000/month. Switching to Inf2 instances powered by Inferentia reduces the cost to approximately $30,000/month — same workload, 70% lower cost, and 4x more requests handled per chip.

## Key Numbers for the Exam

```
Instance types   → Inf1, Inf2
Throughput       → up to 4x vs standard GPU instances
Cost reduction   → up to 70% vs standard GPU instances for inference
Footprint        → lowest environmental footprint among ML instance types
```

## Critical Distinction: Inferentia vs Trainium

```
AWS Inferentia  → for INFERENCE (serving predictions from a trained model)
                  Inf1 / Inf2 instances
                  4x throughput / 70% cost reduction

AWS Trainium    → for TRAINING large models
                  Trn1 instances
                  50% cost reduction on training
```

> [!TIP] Key Exam Rule
> 
> - **Making predictions in production** → Inferentia.
>     
> - **Training a model** → Trainium.
>     
> - Memory trick: **Infer**entia → **Infer**ence. **Train**ium → **Train**ing.
>     

## Exam Domain

- Domain 2, Task Statement 2.3: "Understand cost tradeoffs of AWS generative AI services (for example, **responsiveness**, **performance**)." Inferentia directly addresses cost and performance of inference.
- Domain 2, Task Statement 2.3: Environmental footprint is a responsibility consideration for model selection.

## Related Notes

- [[AWS Trainium]]
- [[EC2 for AI]]
- [[Training vs Inferencing]]
- [[Inferencing at the Edge]]
- [[Amazon SageMaker]]
- [[Responsible AI]]