---
created: 2026-04-24 09:15
modified: 2026-05-31 21:38
tags:
  - AI
  - machine-learning
  - AIF-C01
title: Association Rule Learning
aliases:
  - Association Rule Learning
  - Association Rule Learning Technique
publish: true
folder: AI
---

## Main Concept

Association Rule Learning is an [[20260422T1813-unsupervised-learning|Unsupervised Learning]] technique used to discover relationships between variables in large datasets — specifically, which items or events tend to occur together.

> "Customers who buy bread are very likely to also buy butter."

## How It Works

1. Analyze transaction records to find co-occurrence patterns
2. Identify rules of the form: **if X → then Y**
3. Rank rules by frequency and confidence
4. Use those rules to make decisions (product placement, promotions, recommendations)

**Technique:** Apriori algorithm

## Example — Market Basket Analysis

**Scenario:** A supermarket wants to understand which products are frequently bought together.

**Data:** Transaction records from customer purchases.

**Goal:** Identify associations between products to optimize product placement and promotions.

| Rule                      | Insight                                             |
| ------------------------- | --------------------------------------------------- |
| bread → butter            | Customers who buy bread very likely also buy butter |
| beer → chips              | Often purchased together on weekends                |
| baby wipes → baby shampoo | Co-purchased by new parents                         |

**Outcome:** The supermarket places associated products next to each other on shelves and runs bundled promotions — boosting sales.

![[Pasted image 20260424T062828.png]]

## Use Cases

- **Retail** — product placement and bundled promotions (Market Basket Analysis)
- **E-commerce** — "Customers who bought X also bought Y" recommendations
- **Healthcare** — identifying symptoms or conditions that frequently co-occur
- **Streaming** — pairing content that users tend to watch together

## Key Aspects

- Focuses on **co-occurrence**, not causality — bread doesn't _cause_ someone to buy butter, they just tend to happen together
- Works on unlabeled transaction data — no need to pre-define groups or outcomes
- Outputs are human-interpretable rules, making results easy to act on

---

## Related Concepts

- [[20260422T1813-unsupervised-learning|Unsupervised Learning]]
- [[20260424T0900-clustering-technique|Clustering Technique]]
- [[20260129T1102-machine-learning-ml|Machine Learning (ML)]]
- [[20260306T0936-feature-ml|Feature Engineering]]

## Exam Domain (AIF-C01)

**Domain 1 — Fundamentals of AI and ML**

- Task Statement 1.1: Basic AI/ML concepts — association rule learning is one of the core unsupervised learning techniques.

---

## Links

_References_
