---
created: 2026-04-24 09:00
modified: 2026-04-24 09:00
tags:
  - AI
  - machine-learning
  - AIF-C01
title: Clustering Technique
aliases:
  - Clustering Technique
  - Clustering
publish: true
folder: AI
---

## Main Concept

Clustering is an [[20260422T1813-unsupervised-learning|Unsupervised Learning]] technique used to group similar data points together into clusters based on their features. The model identifies the groups on its own — humans then interpret what each group represents.

## How It Works

1. Feed unlabeled data into the model
2. The algorithm measures similarity between data points
3. Data points that are close together get grouped into the same cluster
4. Humans label and interpret what each cluster means

## Example — Customer Segmentation

**Scenario:** An e-commerce company wants to understand the different purchasing behaviors of its customers.

**Data:** Customer purchase history — purchase frequency, average order value, product categories.

**Technique:** K-Means Clustering

| Cluster | Purchase Pattern | Likely Interpretation |
|---|---|---|
| Group 1 | Pizza, Chips, Beers | Students |
| Group 2 | Baby Shampoo, Wipes | New parents |
| Group 3 | Fruits, Vegetables | Vegetarians |

The model plots all customers and identifies three distinct groups. The model does **not** know these are "students" or "new parents" — that interpretation comes from humans.

**Outcome:** The company can now target each segment with tailored marketing strategies — different email campaigns, promotions, or product recommendations per group.

![[Pasted image 20260424T062735.png]]

## Key Aspects

- The number of clusters (K) is usually defined by the human upfront in K-Means
- [[20260306T0936-feature-ml|Feature Engineering]] improves clustering quality — more meaningful features lead to more meaningful groups
- Output always requires human interpretation to assign meaning to each cluster

## Use Cases

- Customer segmentation
- Targeted marketing campaigns
- Recommendation systems
- Document or topic grouping

## AWS Service

**Amazon SageMaker** includes a built-in **K-Means** algorithm for clustering tasks.

---

## Related Concepts

- [[20260422T1813-unsupervised-learning|Unsupervised Learning]]
- [[20260421T0644-supervised-learning|Supervised Learning]]
- [[20260129T1102-machine-learning-ml|Machine Learning (ML)]]
- [[20260306T0936-feature-ml|Feature Engineering]]
- [[20251001T170057-amazon-sagemaker-overview|Amazon SageMaker Overview]]

## Exam Domain (AIF-C01)

**Domain 1 — Fundamentals of AI and ML**
- Task Statement 1.1: Basic AI/ML concepts — clustering is one of the core unsupervised learning techniques.

---

## Links

_References_
