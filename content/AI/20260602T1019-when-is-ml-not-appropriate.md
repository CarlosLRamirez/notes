---
created: 2026-06-02 10:19
modified: 2026-06-02 10:39
tags:
  - AI
  - ML
  - AIF-C01
title: When NOT to Use ML
aliases:
  - When is ML not appropriate
  - When NOT to Use ML
publish: true
folder: AI
---

## Main Concept

In the era of easy access to AI tools — especially Generative AI — there is a tendency to want to solve every problem with Machine Learning. However, many problems are deterministic or can be solved with standard programming and mathematics, where using ML is over-engineering a solution that does not need it.

## Two Clear Cases Where ML Is the Wrong Choice

### Deterministic Problems
Problems where the correct answer can always be computed exactly using a formula, algorithm, or rule — not estimated or predicted.

In these cases, ML models are counterproductive because they produce approximations, not exact answers. Supervised learning, unsupervised learning, and reinforcement learning all learn statistical patterns — they will get you close, but not always exactly right.

> [!TIP] Key Idea
>
> - **Deterministic problem** → there is one correct answer, always computable the same way.
>
> - **ML output** → a probabilistic approximation, not a guaranteed exact answer.
>
> - **Rule** → if the problem always needs an exact answer, write code — do not train a model.

> [!example] Examples of deterministic problems
>
> - "A deck has 5 red, 3 blue, and 2 yellow cards. What is the probability of drawing a blue card?" → 3/10, always. A formula solves this perfectly.
>
> - "Calculate compound interest given an initial capital of $10,000 at 5% annual rate over 10 years." → exact mathematical formula, no approximation needed.
>
> - A classic LLM failure: "How many letter r's are in the word raspberry?" — many older models answered incorrectly. This happens because LLMs process tokens, not individual characters — they were never designed for exact character-level counting.

### Cost-Benefit Analysis
Sometimes ML is technically possible but not economically justified. If the cost of building, training, and maintaining an ML solution exceeds the value it delivers — or if a simpler rule-based system works well enough — ML is not appropriate.

> [!TIP] Key Idea
>
> - **Ask first** → does the complexity and cost of ML justify the improvement over a simpler solution?
>
> - **If a simple rule works** → use the simple rule.
>
> - **ML is a tool, not a default** → the goal is solving the business problem, not using the most sophisticated technique.

> [!example] Example
>
> A business wants to flag orders over $10,000 for manual review. This is a simple threshold rule — it is always exact, always explainable, and requires zero training data. Building an ML model for this would be over-engineering with no benefit.

## Why This Matters for Generative AI Specifically

Although modern LLMs have increasingly strong reasoning capabilities, they are still probabilistic systems — they predict the most likely response, not the mathematically correct one. For problems that require precision, an LLM is the wrong tool regardless of how capable it has become.

> [!TIP] Key Idea
>
> - **LLMs** → excellent for language, reasoning, summarization, generation — probabilistic by nature.
>
> - **Exact computation** → use code, formulas, or deterministic algorithms.
>
> - **Hybrid approach** → use an LLM to write the code that solves the deterministic problem.

## Exam Scope

This concept is explicitly tested. The exam will present scenarios and ask you to determine whether ML is appropriate. Watch for:

- Scenarios requiring an exact, deterministic answer → ML is not appropriate.
- Scenarios where a simple rule or formula already works → ML is not appropriate.
- Scenarios where cost outweighs benefit → ML is not appropriate.
- Scenarios with predictions, patterns, or large data → ML is appropriate.

## Exam Domain

- Domain 1, Task Statement 1.2: "Determine when AI/ML solutions are not appropriate (for example, cost-benefit analyses, situations when a specific outcome is needed instead of a prediction)."

## Related Notes

- [[20260129T1102-machine-learning-ml|Machine Learning (ML)]]
- [[20250907T214022-an-ai-model-vs-and-algorithm|An AI Model vs and Algorithm]]
- [[20250907T210200-ai-model|AI Model]]
- [[20260421T0644-supervised-learning|Supervised Learning]]
- [[20260422T1813-unsupervised-learning|Unsupervised Learning]]
- [[20260426T0656-reinforcement-learning-rl|Reinforcement Learning]]
- [[Practical Use Cases for AI]]