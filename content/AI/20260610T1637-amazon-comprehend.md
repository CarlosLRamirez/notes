---
created: 2026-06-10 16:37
modified: 2026-06-12 08:52
tags:
  - AI
  - AWS
  - AIF-C01
  - ML
title: Amazon Comprehend
aliases: Amazon Comprehend
publish: true
folder: AI
---
# Amazon Comprehend

## Main Concept

Amazon Comprehend is a fully managed NLP (Natural Language Processing) service that uses ML to extract meaning and insights from text. You send text in, and Comprehend tells you what it means — no model training required. For domain-specific needs, Comprehend also supports custom models trained on your own data.

## Context

Comprehend is the go-to AWS service when the problem involves understanding unstructured text at scale. Instead of reading thousands of customer reviews, support tickets, or social media posts manually, Comprehend processes them automatically and surfaces actionable insights.

> [!TIP] Key Idea
>
> - **Input** → raw text (reviews, emails, documents, social media posts).
>
> - **Output** → structured insights about that text (sentiment, entities, language, key phrases, topics).
>
> - **No ML expertise needed** → fully managed, consumed via API.

## Two Modes: Pre-built vs Custom

> [!TIP] Key Idea
>
> - **Pre-built capabilities** → ready to use out of the box, no training data needed, covers general-purpose NLP tasks.
>
> - **Custom capabilities** → you provide labeled training data, Comprehend trains a model specific to your domain and categories.

> [!example] When to use each mode
>
> - "Analyze customer reviews for positive/negative sentiment" → pre-built sentiment analysis.
>
> - "Classify support tickets into YOUR company's specific categories (Billing, Technical, Returns, Shipping)" → Custom Classification.
>
> - "Detect standard entities like names and dates" → pre-built Entity Detection (NER).
>
> - "Detect YOUR company's proprietary entities like internal product codes or contract clause types" → Custom Entity Recognition.

## The Five Pre-built Capabilities

### Sentiment Analysis
Determines whether the overall tone of a piece of text is positive, negative, neutral, or mixed.

> [!example] Example
>
> Input: "The product arrived quickly but the packaging was damaged."
> Output: Mixed sentiment (positive: shipping speed / negative: packaging)
>
> Use case: automatically analyze thousands of customer reviews to measure overall satisfaction.

### Entity Detection (Named Entity Recognition — NER)
Identifies and classifies named entities within text — people, places, organizations, dates, quantities, and more. The underlying NLP technique is called Named Entity Recognition (NER) — AWS surfaces this capability as "Entity Detection" in Amazon Comprehend.

> [!TIP] Key Idea
>
> - **NER** → the academic/industry ML term for detecting named entities in text.
>
> - **Entity Detection** → what AWS calls NER inside Amazon Comprehend.
>
> - **Both terms refer to the same capability** — know both for the exam.

> [!example] Example
>
> Input: "John Smith placed an order from New York on January 5th for $250."
> Output: Person → John Smith / Location → New York / Date → January 5th / Quantity → $250
>
> Use case: automatically extract structured data from unstructured documents.

### Language Detection
Identifies the language a piece of text is written in.

> [!example] Example
>
> Input: "Bonjour, je voudrais annuler ma commande."
> Output: French (fr)
>
> Use case: automatically route support messages to the correct language team.

### Key Phrase Extraction
Extracts the most important phrases and concepts from a body of text.

> [!example] Example
>
> Input: a 10-page legal document.
> Output: "breach of contract", "payment terms", "liability clause"
>
> Use case: quickly summarize the key topics in long documents without reading them fully.

### Topic Modeling
Groups a large collection of documents by common themes — without you defining the themes in advance.

> [!example] Example
>
> Input: 10,000 customer support tickets.
> Output: Topic 1 → billing issues / Topic 2 → delivery problems / Topic 3 → product defects
>
> Use case: understand what customers are complaining about most without reading every ticket.

## The Two Custom Capabilities

### Custom Classification
Train a custom text classifier using your own labeled data so Comprehend learns YOUR specific categories — not just generic ones.

> [!TIP] Key Idea
>
> - **Pre-built topic modeling** → Comprehend decides what the topics are.
>
> - **Custom Classification** → YOU define the categories, you provide labeled examples, Comprehend learns them.
>
> - **Requires labeled training data** → you provide examples, Comprehend trains the custom classifier.

> [!example] Example
>
> A legal firm wants to classify contracts into: NDA, Employment Agreement, Lease, Purchase Agreement, and Partnership Agreement. These are specific legal categories that pre-built Comprehend does not know. You provide 500 labeled examples per category → Comprehend trains a custom classifier → new contracts are automatically classified into your categories.

### Custom Entity Recognition
Train a custom entity recognizer to detect domain-specific entities that the pre-built NER model does not know about. You provide labeled examples of your proprietary entities, and Comprehend learns to recognize them.

> [!TIP] Key Idea
>
> - **Pre-built NER / Entity Detection** → detects standard entities (Person, Location, Organization, Date, Quantity).
>
> - **Custom Entity Recognition** → detects YOUR domain-specific entities that standard NER does not cover.
>
> - **Requires labeled training data** → you provide examples, Comprehend trains the custom recognizer.

> [!example] Example 1
>
> A pharmaceutical company wants to extract drug names, dosage amounts, and clinical trial IDs from research documents. These are not standard NER entities — they are proprietary to the domain.
>
> Standard NER output: finds "Dr. Johnson" (Person) and "Boston" (Location).
> Custom Entity Recognition output: also finds "Metformin 500mg" (Drug) and "CT-2024-0891" (Trial ID).

> [!example] Example 2
>
> A bank wants to detect proprietary financial instrument codes and internal account types from customer communications — terms that standard NER has never seen. Custom Entity Recognition learns them from 200 labeled examples provided by the bank's team.

## Common Exam Scenarios

> [!TIP] Key Idea: When the answer is Amazon Comprehend
>
> - "Analyze customer reviews to understand satisfaction" → sentiment analysis.
>
> - "Extract names and dates from thousands of documents automatically" → entity detection / NER.
>
> - "Automatically detect what language incoming messages are written in" → language detection.
>
> - "Categorize support tickets by topic without predefined categories" → topic modeling.
>
> - "Classify documents into company-specific categories using labeled training data" → Custom Classification.
>
> - "Detect proprietary domain-specific entities not covered by standard NLP" → Custom Entity Recognition.
>
> - Any scenario involving **understanding unstructured text at scale** → Amazon Comprehend.

## How It Differs from Similar Services

```
Amazon Comprehend → understands TEXT meaning  
(sentiment, entities, topics, language)

Amazon Textract → extracts TEXT from images/documents  
(OCR — reading text out of a PDF or photo)

Amazon Translate → converts text from one language to another  
(translation, not understanding)

Amazon Lex → builds conversational interfaces  
(chatbots — understands user intent in dialogue)
```

> [!example] Analogy: A team of text analysts
>
> Imagine you have 100,000 customer emails to analyze. Hiring humans to read and categorize them would take months and cost a fortune. Amazon Comprehend is like having an infinitely scalable team of text analysts that processes all 100,000 emails in seconds — extracting sentiment, identifying key topics, flagging mentions of specific entities — all via a single API call. And if your business has specific categories those analysts need to learn, Custom Classification trains them on your company's unique taxonomy.

## Exam Scope

You will not be asked how to configure or implement Comprehend. You need to:
- Recognize what Comprehend does (NLP — text analysis).
- Match business scenarios to Comprehend's specific capabilities.
- Distinguish between pre-built capabilities and custom capabilities.
- Know that NER and Entity Detection refer to the same thing.
- Distinguish Comprehend from similar services (Textract, Translate, Lex).

## Exam Domain

- Domain 1, Task Statement 1.2: "Explain the capabilities of AWS managed AI/ML services (for example, **Amazon Comprehend**)."
- Domain 1, Task Statement 1.2: "Identify examples of real-world AI applications (for example, **NLP**)."

## Related Notes
- [[20260602T1055-aws-ai-ml-managed-services-index|AWS AI/ML Managed Services — Index]]
- [[Named Entity Recognition (NER)]]
- [[Custom Entity Recognition]]
- [[Custom Classification vs Pre-built Models]]
- [[Amazon Textract]]
- [[20260612T0849-amazon-translate|Amazon Translate]]
- [[Amazon Lex]]
- [[20250907T114034-natural-language-processing|Natural Language Processing]]
- [[20260602T1019-when-is-ml-not-appropriate|When NOT to Use ML]]