---
aliases:
  - Supervised Learning
tags:
  - AI
  - ML
  - AIF-C01
created: 2026-04-21 06:44
modified: 2026-04-21 07:20
title: Supervised Learning
publish: true
folder: AI
---

## Main Concept

**Supervised Learning** is a machine learning approach where the model learns from **labeled data** — input-output pairs where the correct answer is already known. The goal is to learn the mapping function (the relationship between inputs and outputs) so the model can predict outputs for new, unseen inputs.

It's very powerful because labeled data teaches the model exactly what to learn. However, it's also difficult and expensive to obtain large labeled datasets for millions of data points.

## How It Works

1. You start with labeled training data (examples where you know the correct answers)
2. The model learns the relationship between inputs and outputs
3. Once trained, you can feed it new inputs and it predicts outputs based on learned patterns

**Real-world analogy:** It's like learning with a teacher who provides correct answers. The student (model) learns from these examples and can then answer new questions independently.

## Two Main Types: Regression vs. Classification

Supervised learning addresses two fundamental prediction problems:

### Regression
**Predicts continuous numeric values** — any real number within a range.
- Example: "What is the weight of a person 1.6m tall?" → 60 kg
- Output is a number (price, temperature, weight)
- See [[20260421T0200-regression|Regression]] for details

### Classification
**Predicts categorical labels** — assigns data to one or more discrete categories.
- Example: "Is this email spam or not spam?" → spam
- Output is a category (yes/no, class A/B/C, multiple labels)
- See [[20260421T0300-classification|Classification]] for details

## Why Labeled Data Matters

Supervised learning requires labels (known correct answers) in the training data. This is both a strength and a weakness:

**Strength:** With good labels, the model learns accurately what to predict  
**Weakness:** Obtaining millions of labeled examples is expensive, time-consuming, and often requires human experts

## Common Applications

**Regression problems:**
- House price prediction (input: size, location → output: price)
- Stock price forecasting (input: historical data → output: future price)
- Weather prediction (input: atmospheric data → output: temperature)
- Sales forecasting (input: historical sales → output: revenue)

**Classification problems:**
- Spam detection (input: email → output: spam or not spam)
- Disease diagnosis (input: medical tests → output: disease or healthy)
- Image recognition (input: image → output: object type)
- Fraud detection (input: transaction data → output: fraudulent or legitimate)

## Comparison: Supervised vs. Unsupervised

| Aspect | Supervised Learning | Unsupervised Learning |
|---|---|---|
| **Data requirement** | Labeled (known answers) | Unlabeled (no answers) |
| **Goal** | Predict outputs for new inputs | Find patterns/structure in data |
| **Difficulty** | Hard to get labels, easy to train | Easy to get data, hard to interpret |
| **Examples** | Regression, Classification | Clustering, dimensionality reduction |

## AIF-C01 Exam Relevance

The exam tests your understanding of:
- When to use supervised vs. unsupervised learning
- The difference between regression and classification
- Why labeled data is both powerful and expensive
- Common algorithms for each type (though the exam won't ask you to implement them)

> **Exam tip:** If a question mentions "labeled data," "predict outputs," or "training examples with known answers," the answer involves **supervised learning**.

---

## Related Notes

- [[20260421T0200-regression|Regression]]
- [[20260421T0300-classification|Classification]]
- [[20260129T1102-machine-learning-ml|Machine Learning (ML)]]
- [[20260420T2331-training-data|Training Data]]
- [[20251016T031521-data-preparation|Data Preparation]]
