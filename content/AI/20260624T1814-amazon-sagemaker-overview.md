---
created: 2026-06-24 18:14
modified: 2026-06-24 18:25
tags:
  - AWS
  - ML
  - AIF-C01
title: Amazon SageMaker Overview
aliases: Amazon SageMaker Overview
publish: true
folder: AI
---

## Main Concept

Amazon SageMaker is AWS's fully managed end-to-end ML platform. It covers every stage of the ML lifecycle — from data preparation to model training, deployment, and monitoring — without managing underlying infrastructure. 

SageMaker is the answer whenever a scenario requires building, training, or deploying a custom ML model, as opposed to consuming a pre-built managed service like Rekognition or Transcribe.

> [!TIP] Key Idea
> 
> - **Managed AI services** (Rekognition, Transcribe, Comprehend) → pre-built AI capabilities, no model building needed.
>     
> - **Amazon SageMaker** → when you need to build, train, and deploy YOUR OWN custom ML model.
>     
> - **The exam distinguishes these two paths clearly** — recognizing which one applies to a scenario is high-value.
>     

## SageMaker Studio

The central interface for everything in SageMaker — a unified, web-based environment where all ML development happens in one place.

> [!TIP] Key Idea
> 
> - **Team collaboration** → multiple team members work in the same environment.
>     
> - **End-to-end** → data prep, training, tuning, debugging, deployment, and monitoring — all from one interface.
>     
> - **Automated workflows** → orchestrate ML pipelines without switching tools.
>     

```
Exam trigger: "end-to-end ML development in a single unified environment" → SageMaker Studio.
```

## The SageMaker Features Map — By ML Pipeline Stage

### Data Preparation

**SageMaker Data Wrangler** Visual tool for data exploration, transformation, and preparation — EDA without writing code.

```
Exam trigger: "visually prepare and explore data before training" → SageMaker Data Wrangler.
```

**SageMaker Feature Store** Centralized repository to store, share, and reuse ML features across teams and models.

```
Exam trigger: "store and reuse features across multiple ML models or teams" → SageMaker Feature Store.
```

**SageMaker Ground Truth** Managed data labeling service combining human labelers with automated labeling.

```
Exam trigger: "label training data at scale" → SageMaker Ground Truth.
```

### Model Training & Tuning

**Amazon SageMaker (core)** Fully managed training environment — you bring your algorithm and data, SageMaker provisions compute and manages infrastructure.

> [!example] Example from Maarek's lesson
> 
> Goal: predict a student's AWS exam score. Input features: years of IT experience, years of AWS experience, hours spent on the course. Output: predicted exam score.
> 
> Historical data with known scores is used to train the model on SageMaker. Once trained, a new student inputs their profile and gets a predicted score — all without managing any servers.

**SageMaker Automatic Model Tuning (AMT)** Automates hyperparameter tuning. You define the objective metric — AMT handles the rest: choosing hyperparameter ranges, search strategy, run duration, and early stopping conditions.

> [!TIP] Key Idea
> 
> - **You define** → the objective metric (what to optimize for).
>     
> - **AMT handles** → hyperparameter ranges, search strategy, early stopping.
>     
> - **Benefit** → saves time and money by avoiding suboptimal configurations automatically.
>     

```
Exam trigger: "automatically find the best hyperparameter values" → SageMaker AMT.
```

**SageMaker JumpStart** Pre-built ML solutions and foundation models ready to deploy with one click.

```
Exam trigger: "deploy a pre-built foundation model or ML solution quickly" → SageMaker JumpStart.
```

### Model Deployment — The Four Types

This is a high-priority exam area. Maarek explicitly flags the keywords to watch for.

> [!TIP] Key Idea: The four deployment types and their exam signal words
> 
> - **Real-time** → low latency, small payload, one record, managed infrastructure.
>     
> - **Serverless** → low latency, no infrastructure to manage, risk of cold start on first call.
>     
> - **Asynchronous** → near-real time, large payload, one record at a time, long processing.
>     
> - **Batch Transform** → high latency, entire dataset, multiple records processed concurrently.
>     

#### Real-Time Inference

```
Latency:          Low
Payload size:     Up to 6 MB
Records:          One at a time
Processing time:  Up to 60 seconds
Infrastructure:   You configure CPU/GPU + auto-scaling

Exam signal words: "real-time", "immediate response", "small payload"
```

#### Serverless Inference

```
Latency:          Low (but cold start risk)
Payload size:     Up to 6 MB
Records:          One at a time
Processing time:  Up to 60 seconds
Infrastructure:   None to manage — auto-scaling built in
```

> [!TIP] Key Idea: Cold Start
> 
> If the serverless endpoint has had no traffic for a period, the first request triggers infrastructure to boot up — adding latency to that first call. Subsequent calls are fast.

```
Exam signal words: "no infrastructure to manage", "serverless", "variable traffic"
Key differentiator from real-time: no infrastructure management + cold start risk.
```

#### Asynchronous Inference

```
Latency:          Near-real time (not immediate)
Payload size:     Up to 1 GB
Records:          One large record at a time
Processing time:  Up to 1 hour
Storage:          Requests and responses go through Amazon S3

Exam signal words: "near-real time", "large payload", "long processing time", "up to 1 GB"
```

#### Batch Transform

```
Latency:          High (minutes to hours)
Payload size:     100 MB per mini-batch (many mini-batches allowed)
Records:          Entire dataset — multiple records processed concurrently
Processing time:  Up to 1 hour
Storage:          Requests and responses go through Amazon S3

Exam signal words: "entire dataset", "multiple predictions", "batch", "concurrent processing"
```

#### Deployment Types — Quick Comparison Table

|Type|Latency|Payload|Records|Key Signal|
|---|---|---|---|---|
|Real-time|Low|6 MB|1|immediate response|
|Serverless|Low + cold start|6 MB|1|no infrastructure|
|Asynchronous|Near-real time|1 GB|1|large payload|
|Batch Transform|High|100 MB/mini-batch|Many|entire dataset|

### Monitoring & Responsible AI

**SageMaker Model Monitor** Continuously monitors deployed models for data quality, model drift, bias drift, and feature attribution drift.

```
Exam trigger: "detect model drift or performance degradation in production" → SageMaker Model Monitor.
```

**SageMaker Clarify** Detects bias in training data and model predictions. Provides explainability reports.

```
Exam trigger: "detect bias in ML model" or "explain model predictions" → SageMaker Clarify.
```

**SageMaker Model Cards** Standardized documentation capturing model purpose, training data, evaluation results, and limitations.

```
Exam trigger: "document model details for transparency or governance" → SageMaker Model Cards.
```

## The Full SageMaker Feature Map

```
Studio               → unified end-to-end ML development environment
Data Wrangler        → prepare and explore data visually (EDA)
Feature Store        → store and reuse features across models
Ground Truth         → label training data at scale
Core SageMaker       → train custom ML models
AMT                  → automate hyperparameter tuning
JumpStart            → deploy pre-built models and solutions
Real-time endpoint   → low latency, one record, small payload
Serverless endpoint  → no infrastructure, cold start risk
Async endpoint       → near-real time, large payload, one record
Batch transform      → high latency, entire dataset, concurrent
Model Monitor        → detect drift and degradation in production
Clarify              → detect bias, explain predictions
Model Cards          → document models for transparency
```

## Where SageMaker Appears in the Exam Domains

```
Domain 1, Task 1.2  → SageMaker as the managed platform for custom ML models
Domain 1, Task 1.3  → features mapped to each ML pipeline stage
                      Data Wrangler, Feature Store, Core, AMT, Model Monitor
Domain 2, Task 2.3  → SageMaker JumpStart for generative AI applications
Domain 4, Task 4.1  → Clarify (bias), Model Monitor (monitoring), A2I (human review)
Domain 4, Task 4.2  → Model Cards (transparency and explainability)
Domain 5, Task 5.1  → Model Cards (data lineage and governance)
```

## What You Do NOT Need to Know

- How to write SageMaker training scripts or code.
- How to configure SageMaker endpoints technically.
- The mathematics behind any SageMaker built-in algorithm.
- How to implement bias detection technically.

You describe what each feature does and match it to the right scenario — nothing more.

## Related Notes

- [[Amazon SageMaker Data Wrangler]]
- [[Amazon SageMaker Feature Store]]
- [[Amazon SageMaker Ground Truth]]
- [[Amazon SageMaker Automatic Model Tuning (AMT)]]
- [[Amazon SageMaker JumpStart]]
- [[Amazon SageMaker Model Monitor]]
- [[Amazon SageMaker Clarify]]
- [[Amazon SageMaker Model Cards]]
- [[AWS AI/ML Managed Services — Index]]
- [[MLOps]]
- [[Model Drift]]
- [[Hyperparameter Tuning]]
- [[Phases of a Machine Learning Project]]
- [[Responsible AI]]
- [[Inferencing]]
- [[Batch Inferencing]]
- [[Real-time Inferencing]]