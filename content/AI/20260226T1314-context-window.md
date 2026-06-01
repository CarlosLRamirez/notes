---
created: 2026-02-27 06:16
modified: 2026-03-22 06:03
tags:
  - AI
title: Context Window
aliases:
  - Context Window
publish: true
folder: AI
---

## Main Concept

The context windows is the maximum amount of informatin (measured in Tokens) that a Foundation Model (FM) or Large Language Model (LLM) can process at one time during single interaction. Think of the context window as the "short-term memory" of the model.

## Why it's important?

- **Model Selection:** For task like summarizing a 100-page PDF, you would need a model with a large context window (e.g, specific version of Claude on Amazon Bedrock).
- **Cost Tradeoffs:** Generally, models with a larger context windows or higher token usage requires more memory and processing power, it also increase your costs, as many AWS AI services use **token-based pricing**.
- **Inference Parameters:** You can use parameters like `max-tokens`to control the lenght of the ouput and say within the limit of the windows.

## Key Aspects

- **Tokens**: These are the basic units of text processed by the model - roughly equivalent to 0.75 a word.
- **Input and Output:** The context window must accommodate both your prompt (input) and the model's response (output)
- **Limits**: If your conversation or document exceeds this limit, the model will "forget" the earliest part of the text to make room for new information. Larger context model increase model "coherence".

## Mainstream models comparision

- Google Gemini 3 Pro / 2.5 Pro — 1 million tokens, with Gemini 3 Pro advertised up to 10 million tokens
- Anthropic Claude 4 Sonnet / Opus — 200K tokens standard, with a beta 1 million token context window available on Sonnet 4 for higher-tier organizations
- OpenAI GPT-5 — 400K input tokens with a notably large 128K output window

## Practice Scenario

**Scenario:** A legal firm wants to use **Amazon Bedrock** to summarize very long court transcripts that are over 50,000 words long. However, the model they initially chose is cutting off the summary halfway through.
_Where could it be applied?_

**Question:** Which technical limitation is the firm likely hitting, and what is one way to address it using another technique?

---

## Related Concepts:

- [[20260220T0735-retrieval-augmented-generation-rag|Retrieval-Augmented Generation (RAG)]]
- [[20260226T0947-tokenization|Tokenization]]




## Exam Domains

- [[20260226T1159-domain-2-fundamentals-of-generative-ai-task-statement-2-1|Domain 2: Fundamentals of Generative AI — Task Statement 2.1]]
- [[20260226T0616-domain-3-task-statement-3-1-describe-design-considerations-for-applications-that-use-foundation-models|Domain 3 - Task Statement 3.1 - Describe design considerations for applications that use foundation models]]



---

## Links:

- [Article](https://www.siskar.com/blog/2026/2/16/the-1-trillion-token-context-window)
