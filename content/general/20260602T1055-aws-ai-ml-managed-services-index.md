---
created: 2026-06-02 10:55
modified: 2026-06-24 07:17
tags:
  - AI
  - ML
  - AIF-C01
title: AWS AI/ML Managed Services — Index
aliases: AWS AI/ML Managed Services — Index
publish: true
fol: AI
---

## Main Concept

AWS AI/ML managed services are pre-built, fully managed services that provide AI/ML capabilities through simple API calls — no model training, no infrastructure management, and no ML expertise required. You consume the capability as a service and pay only for what you use.

## Why Managed Services Instead of Building Your Own

> [!TIP] Key Idea
>
> - **Lower barrier to entry** → no ML expertise needed to add AI capabilities to an application.
>
> - **Speed to market** → integrate AI features in days instead of months.
>
> - **Cost-effectiveness** → no upfront investment in data collection, training infrastructure, or ML talent.
>
> - **Accessibility** → any developer can consume AI capabilities via API calls.
>
> - **Efficiency** → AWS handles infrastructure, scaling, and model maintenance.
>
> - **Ability to meet business objectives** → focus on the business problem, not the underlying technology.

> [!example] Analogy: Electricity vs building your own power plant
>
> You could build your own power plant to get electricity — but why would you? AWS managed services are like the power grid: you plug in and consume the capability immediately, paying only for what you use. Building your own model is the power plant — expensive, complex, and only justified when the standard service does not meet your specific needs.

## The Services — By Capability

### Language & Text

| Service | What it does |
|---|---|
| **Amazon Comprehend** | Natural language processing — sentiment analysis, entity detection, language detection, topic modeling |
| **Amazon Translate** | Neural machine translation between languages |
| **Amazon Textract** | Extracts text and structured data (forms, tables) from documents and images |
| **Amazon Lex** | Build conversational interfaces — chatbots and voice bots (the technology behind Alexa) |
| **Amazon Kendra** | Intelligent enterprise search powered by ML — searches across documents and data sources |

### Speech

| Service | What it does |
|---|---|
| **Amazon Transcribe** | Automatic speech recognition — converts audio/speech to text |
| **Amazon Polly** | Text-to-speech — converts text to natural-sounding audio |

### Vision

| Service | What it does |
|---|---|
| **Amazon Rekognition** | Computer vision — image and video analysis, object detection, facial recognition, content moderation |

### Personalization & Recommendations

| Service | What it does |
|---|---|
| **Amazon Personalize** | Real-time personalization and recommendation engine — the same technology used by Amazon.com |

### Fraud & Risk

| Service | What it does |
|---|---|
| **Amazon Fraud Detector** | Detects potentially fraudulent activity using ML — online fraud, account takeover, payment fraud |

### Generative AI & Foundation Models

| Service | What it does |
|---|---|
| **Amazon Bedrock** | Fully managed access to foundation models from multiple providers (Anthropic, Meta, Mistral, Amazon Nova, etc.) via API |
| **Amazon Q** | Generative AI assistant for business — Q Business (enterprise knowledge), Q Developer (coding) |
| **Amazon SageMaker JumpStart** | Pre-built ML solutions and foundation models ready to deploy |

### Human Review

| Service | What it does |
|---|---|
| **Amazon Augmented AI (A2I)** | Adds human review workflows into ML predictions — for cases where model confidence is low |

### ML Platform

| Service | What it does |
|---|---|
| **Amazon SageMaker** | End-to-end ML platform — build, train, tune, deploy, and monitor custom ML models |

## Managed Service vs Custom Model — When to Use Which

> [!TIP] Key Idea
>
> - **Use a managed service** → when the capability is general-purpose and your use case is standard (speech-to-text, translation, sentiment analysis, image recognition).
>
> - **Use a custom model (SageMaker)** → when your use case is highly specific, proprietary data gives you a competitive advantage, or no managed service covers your need.
>
> - **Use Amazon Bedrock** → when you need foundation model capabilities with flexibility to choose providers and customize via RAG or fine-tuning.

> [!example] Decision examples
>
> - "Add subtitles to our videos" → Amazon Transcribe (managed, no model needed)
>
> - "Detect our proprietary product defects from factory photos" → custom model on SageMaker (too specific for Rekognition alone)
>
> - "Build a customer service chatbot" → Amazon Lex (managed) or Amazon Bedrock (if needs generative responses)
>
> - "Recommend products to users" → Amazon Personalize (managed recommendation engine)

## Exam Quick Reference

```
Speech to text          → Amazon Transcribe
Text to speech          → Amazon Polly
Translation             → Amazon Translate
NLP / sentiment         → Amazon Comprehend
Document extraction     → Amazon Textract
Enterprise search       → Amazon Kendra
Chatbot / voice bot     → Amazon Lex
Image / video analysis  → Amazon Rekognition
Recommendations         → Amazon Personalize
Fraud detection         → Amazon Fraud Detector
Foundation models       → Amazon Bedrock
Generative AI assistant → Amazon Q
Human review loop       → Amazon Augmented AI (A2I)
Custom ML models        → Amazon SageMaker
```

## Exam Scope

This is a high-priority area — expect multiple scenario questions asking you to match a business use case to the correct AWS service, and questions  asking you to justify the advantages of using managed services. **Memorize the quick reference table above.**

## Exam Domain

- Domain 1, Task Statement 1.2: "Explain the capabilities of AWS managed AI/ML services (for example, SageMaker, Amazon Transcribe, Amazon Translate, Amazon Comprehend, Amazon Lex, Amazon Polly)."
- Domain 2, Task Statement 2.3: "Describe the advantages of using AWS generative AI services to build applications (for example, accessibility, lower barrier to entry, efficiency, cost-effectiveness, speed to market, ability to meet business objectives)."
- Domain 2, Task Statement 2.3: "Understand the benefits of AWS infrastructure for generative AI applications (for example, security, compliance, responsibility, safety)."

## Related Notes

- [[20250907T100953-amazon-bedrock-overview|Amazon Bedrock]]
- [[20251001T170057-amazon-sagemaker-overview|Amazon SageMaker]]
- [[20260327T1721-amazon-q-apps-introduction|Amazon Q]]
- [[20260612T0900-amazon-transcribe|Amazon Transcribe]]
- [[20260619T1742-amazon-polly|Amazon Polly]]
- [[20260610T1637-amazon-comprehend|Amazon Comprehend]]
- [[20260612T0849-amazon-translate|Amazon Translate]]
- [[20260619T1827-amazon-textract|Amazon Textract]]
- [[20260619T1821-amazon-lex|Amazon Lex]]
- [[20260619T1829-amazon-kendra|Amazon Kendra]]
- [[20260619T1757-amazon-rekognition|Amazon Rekognition]]
- [[20260619T1824-amazon-personalize|Amazon Personalize]]
- [[Amazon Fraud Detector]]
- [[20260619T1838-amazon-augmented-ai-a2i|Amazon Augmented AI (A2I)]]
- [[20260602T1019-when-is-ml-not-appropriate|When NOT to Use ML]]
- [[Practical Use Cases for AI]]

