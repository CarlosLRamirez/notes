---
created: 2026-02-04 06:56
modified: 2026-02-04 07:12
tags:
  - AI
  - amazon-bedrock
  - AWS
  - ai-generated
title: Amazon Bedrock Models - When to Use What
aliases:
  - Amazon Bedrock Models - When to Use What
publish: true
folder: AI
---

## Main Concept 
A quick mental guide to when to use or not use a certain model available in Bedrock.

## Context
This kind of questions are included on the certification exam.

## DEFINITIVE CHART: Amazon Bedrock Models - When to Use What

| **USE CASE**                           | **MODEL TO USE**                                 | **WHY**                                             | **KEYWORD CLUES IN QUESTION**                                  |
| -------------------------------------- | ------------------------------------------------ | --------------------------------------------------- | -------------------------------------------------------------- |
| **SEARCH & RETRIEVAL**                 |                                                  |                                                     |                                                                |
| Semantic search                        | **Titan Text Embeddings V2**                     | Converts text to vectors, finds similar             | "search by meaning", "semantic search", "find similar"         |
| Image search (text + image)            | **Titan Multimodal Embeddings**                  | Handles text AND images in same space               | "search products by photo OR description", "image similarity"  |
| Personalized recommendations           | **Titan Text Embeddings V2**                     | Embeddings capture preferences                      | "recommend similar items", "personalization"                   |
| **CHATBOTS & Q&A**                     |                                                  |                                                     |                                                                |
| Enterprise chatbot with internal docs  | **Titan Text Premier + Bedrock Knowledge Bases** | Optimized for RAG, native integration               | "internal knowledge base", "RAG", "cite sources"               |
| Simple chatbot, low cost               | **Titan Text Lite**                              | Cheap, sufficient for basic tasks                   | "budget-constrained", "simple Q&A", "high volume"              |
| Chatbot with complex reasoning         | **Claude 3 (Sonnet/Opus)**                       | Better reasoning, deep analysis                     | "complex reasoning", "nuanced", "analysis"                     |
| **DOCUMENTS & TEXT**                   |                                                  |                                                     |                                                                |
| Very long documents (100K+ tokens)     | **Claude 3**                                     | 200K context window (largest)                       | "long documents", "200+ pages", "entire book"                  |
| Contract/legal analysis                | **Claude 3 Sonnet/Opus**                         | Precise reasoning, long context                     | "contract analysis", "legal documents", "compliance"           |
| Short document summarization           | **Titan Text Express**                           | Price/performance balance                           | "summarize", "extract key points" (short docs)                 |
| **CODE**                               |                                                  |                                                     |                                                                |
| Code generation                        | **Titan Text Premier / Claude 3**                | Both support code generation                        | "generate code", "write script", "programming"                 |
| Code explanation                       | **Claude 3**                                     | Better for detailed explanations                    | "explain this code", "debug", "code review"                    |
| **IMAGES**                             |                                                  |                                                     |                                                                |
| Generate images with READABLE text     | **Titan Image Generator**                        | Only one that does readable text well               | "readable text in image", "signs", "price tags", "posters"     |
| Generate artistic images               | **Stable Diffusion XL**                          | More flexible for art/creativity                    | "artistic", "creative", "illustration"                         |
| Search images by content               | **Titan Multimodal Embeddings**                  | For search, NOT generation                          | "search images", "find similar photos"                         |
| Analyze/describe images                | **Claude 3 (with vision)**                       | Understands images, does NOT generate               | "what's in this image", "describe", "analyze photo"            |
| Detect if image is AI-generated        | **Titan Image Generator (watermark feature)**    | Invisible watermarking + DetectGeneratedContent API | "verify authenticity", "detect AI-generated"                   |
| **SPECIFIC TASKS**                     |                                                  |                                                     |                                                                |
| Simple classification (high volume)    | **Titan Text Lite**                              | Cheapest for simple tasks                           | "classify into 5 categories", "tag", "millions of items"       |
| Structured data extraction             | **Titan Text Express/Premier**                   | Table creation, data formatting                     | "extract data", "create table", "structure information"        |
| Translation                            | **Titan Text Express** (100+ languages)          | Broad multilingual support                          | "translate", "multilingual"                                    |
| Autonomous agents (multi-step)         | **Titan Text Premier + Bedrock Agents**          | Native integration with Agents                      | "autonomous agent", "multi-step workflow", "tool use"          |
| **SPECIAL CASES**                      |                                                  |                                                     |                                                                |
| Open-source / Custom fine-tuning       | **Llama 2/3**                                    | Open-source model, customizable                     | "open-source", "fine-tune with our data", "self-hosted option" |
| Maximum accuracy (cost doesn't matter) | **Claude 3 Opus**                                | Most capable (and most expensive)                   | "highest accuracy", "most capable", "budget flexible"          |

---

## KEY FEATURES TABLE (For Quick Comparison):

|**MODEL**|**CONTEXT WINDOW**|**BEST FOR**|**PRICE**|**DON'T USE WHEN**|
|---|---|---|---|---|
|**Titan Text Lite**|4K tokens|Simple tasks, high volume|💰 Cheapest|❌ Complex reasoning|
|**Titan Text Express**|8K tokens|General use, balanced|💰💰 Medium|❌ Very long docs|
|**Titan Text Premier**|32K tokens|RAG, Agents, enterprise|💰💰💰 Medium-high|❌ Don't need Bedrock integration|
|**Claude 3 Haiku**|200K tokens|Fast, economical|💰💰 Medium|❌ Maximum capability needed|
|**Claude 3 Sonnet**|200K tokens|Capability/cost balance|💰💰💰 Medium-high|❌ Very tight budget|
|**Claude 3 Opus**|200K tokens|Maximum capability|💰💰💰💰 Most expensive|❌ Simple tasks (overkill)|
|**Llama 2 70B**|4K tokens|Open-source, customizable|💰💰 Medium|❌ Long docs, need support|
|**Stable Diffusion XL**|N/A (image)|Artistic images|💰💰💰 Per image|❌ Readable text in images|
|**Titan Image Generator**|N/A (image)|Readable text, watermarks|💰💰💰 Per image|❌ Very creative art|
|**Titan Text Embeddings V2**|8K tokens|Search, RAG, vectors|💰 Cheap|❌ Doesn't generate text|
|**Titan Multimodal Embeddings**|N/A|Multimodal search|💰💰 Medium|❌ Doesn't generate anything|

---

## GOLDEN RULES FOR THE EXAM:

### ✅ **ALWAYS CHOOSE THESE IF...**

1. **Question mentions "Bedrock Knowledge Bases" or "Bedrock Agents"** → **Titan Text Premier** (optimized for this)
    
2. **Question says "semantic search", "find similar", "RAG"** → **Titan Text Embeddings V2**
    
3. **Question says "long documents", "200+ pages", "entire book"** → **Claude 3** (200K context)
    
4. **Question says "budget-constrained", "high volume", "simple task"** → **Titan Text Lite**
    
5. **Question says "readable text in image", "signs", "posters"** → **Titan Image Generator**
    
6. **Question mentions "search images by photo or text"** → **Titan Multimodal Embeddings**
    

### ❌ **NEVER CHOOSE THESE:**

1. **GPT-4, ChatGPT, DALL-E** → Not in Bedrock
2. **Embeddings model to generate text** → Embeddings DON'T generate
3. **Titan Text Lite for complex analysis** → Too simple
4. **Claude Opus for simple classification** → Overkill (too expensive)

---

## QUICK DECISION DIAGRAM:

```
What do you need to do?
         |
         ├─ Generate TEXT
         |      ├─ Long documents? → Claude 3
         |      ├─ Bedrock Agents/KB integration? → Titan Text Premier
         |      ├─ Simple task + cheap? → Titan Text Lite
         |      └─ General use? → Titan Text Express
         |
         ├─ SEARCH for similar things
         |      ├─ Text only? → Titan Text Embeddings V2
         |      └─ Text + images? → Titan Multimodal Embeddings
         |
         ├─ Generate IMAGES
         |      ├─ With readable text? → Titan Image Generator
         |      └─ Art/creativity? → Stable Diffusion XL
         |
         └─ ANALYZE images → Claude 3 (vision)
```

---

## PRACTICE: Which Model Would You Use?

**Scenario 1:** "E-commerce with 500K products. Customers search by typing 'comfortable red shoes for walking'."
- Answer: **Titan Text Embeddings V2** - Semantic search in large catalog 

**Scenario 2:** "Generate promotional posters with readable prices and product names."
- Answer: **Titan Image Generator** - Only one that does readable text well 

**Scenario 3:** "Analyze 150-page contracts to identify risk clauses."
- Answer: **Claude 3 Sonnet/Opus** - 200K context + complex reasoning

**Scenario 4:** "Classify 1 million emails into spam/not-spam. Limited budget."
- Answer:  **Titan Text Lite** - Simple task + high volume + cheap 

---
