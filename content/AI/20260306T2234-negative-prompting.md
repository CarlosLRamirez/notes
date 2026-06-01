---
created: 2026-03-06 22:34
modified: 2026-03-06 22:56
tags:
  - AI
  - prompt-engineering
title: Negative Prompting
aliases: Negative Prompting
publish: true
folder: AI
---
## Main Concept

Negative prompting is a prompt engineering technique that explicitly tells the model what **not** to do, produce, or include in its response. Instead of only defining the desired behavior, you also define the boundaries — what is out of scope, unwanted, or forbidden. It complements positive instructions in the prompt.

---

## Why It Works

FMs are trained to be helpful and will try to fill gaps in your instructions with assumptions. Without negative prompts, the model decides what to include or exclude on its own. Negative prompting removes that ambiguity.

```
Without negative prompt:
"Explain machine learning" 
→ model might include math formulas, code, advanced theory

With negative prompt:
"Explain machine learning. Do not use technical jargon, 
math formulas, or code examples."
→ model stays within defined boundaries
```

---

## Examples

**Customer service bot:**

```
You are a customer service agent for a bank.
Answer customer questions about their accounts.
Do not discuss competitor products.
Do not provide specific legal or financial advice.
Do not make promises about fee reversals.
```

**Content summarizer:**

```
Summarize the following article in 3 bullet points.
Do not include opinions or conclusions not present 
in the original text.
Do not exceed 50 words per bullet point.
```

**Children's educational assistant:**

```
Answer questions about history for a 10-year-old student.
Do not use violent or graphic descriptions.
Do not reference adult themes.
Keep language simple and encouraging.
```

---

## Relationship to the 4 Building Blocks

Negative prompts typically live inside the **Instructions** block but can also appear in the **Output Indicator** block:

```
Instructions    → "Do not discuss competitors"  (behavior boundary)
Output Indicator → "Do not use bullet points"   (format boundary)
```

---

## Exam Scope

The exam guide lists negative prompts explicitly under Task 3.2 as one of the "concepts and constructs of prompt engineering." You need to:

- Recognize what negative prompting is
- Understand when and why to use it
- Identify it as a tool for response quality improvement and guardrails

You do not need to know implementation details or advanced techniques beyond this.

---

## Sample Exam Questions

**Question 1:** A company deploys a generative AI chatbot for HR inquiries. The model keeps offering legal advice even though it shouldn't. Which prompt engineering technique would most directly address this?

- A) Few-shot prompting
- B) Chain-of-thought prompting
- C) Negative prompting
- D) Zero-shot prompting

**Answer: C** — Negative prompting directly restricts unwanted behavior by explicitly telling the model what not to do.

---

**Question 2:** Which of the following is an example of a negative prompt?

- A) "You are a helpful assistant for a retail company."
- B) "Here are three examples of how to respond to customer complaints."
- C) "Do not discuss pricing, promotions, or competitor products."
- D) "Respond in JSON format with fields: name, issue, resolution."

**Answer: C** — It explicitly defines what the model should exclude from its responses.

---

## Related Topics to Explore

- Prompt injection and hijacking — the dark side of prompts, attackers use malicious input to override your instructions including your negative prompts
- [[20260306T0347-guardrails-in-amazon-bedrock|Guardrails en Amazon Bedrock]] — the infrastructure-level complement to negative prompting
- Few-shot prompting — using examples to guide behavior vs. using restrictions
- System prompts — where negative prompts typically live in production systems
- Prompt templates — how negative prompts are standardized across an application
