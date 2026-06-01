---
title: Classification
aliases:
  - Classification
  - Binary Classification
tags:
  - AI
  - ML
  - supervised-learning
  - AIF-C01
created: 2026-04-21 03:00
modified: 2026-05-27 22:59
publish: true
folder: AI
---

## Main Concept

**Classification** is a supervised learning technique used to **predict categorical labels** — assigning input data to one or more discrete categories or classes. The output is not a number, but a category.

Unlike regression (which predicts "how much?"), classification answers "what is it?" or "which category does it belong to?"

## How It Works

You train a model on labeled data where each example belongs to a known category. Once trained, when you give the model a new input, it predicts which category it belongs to based on what it learned.

**Example:** You train a spam filter on emails labeled "spam" and "not spam." The model learns what characteristics make an email spam. When a new email arrives, the model classifies it as spam or not spam.

![[Pasted image 20260421T065425.png]]

## Three Types of Classification

### 1. Binary Classification
**Predicts between exactly two categories.**

Examples:
- Spam or not spam (emails)
- Fraudulent or legitimate (transactions)
- Disease or healthy (medical diagnosis)
- Yes or no (any yes/no question)

### 2. Multi-class Classification
**Predicts between three or more categories, but each example belongs to exactly ONE category.**

Examples:
- Animal type: dog, cat, or giraffe
- Image recognition: cat, dog, bird, or rabbit
- Disease classification: disease A, disease B, disease C, or healthy
- Document type: report, email, news, or social media

### 3. Multi-label Classification
**Each example can belong to MULTIPLE categories at once.**

Examples:
- Movie genres: a movie can be both "action" AND "comedy"
- Document tags: an article can be tagged "technology" AND "business" AND "finance"
- Symptom diagnosis: a patient can have multiple diseases simultaneously

## Key Characteristics

- **Output is categorical** — a specific class or label, not a number
- **Requires labeled data** — you must know which category each training example belongs to
- **Discrete decisions** — unlike regression (which is continuous), you're picking from a specific set of options
- **Clear boundaries** — the model draws boundaries between categories

## Common Classification Examples

| Problem | Input | Output | Type |
|---|---|---|---|
| **Email spam detection** | Email content | Spam / Not spam | Binary |
| **Image recognition** | Image | Cat / Dog / Bird | Multi-class |
| **Disease diagnosis** | Medical tests | Disease A / B / C / Healthy | Multi-class |
| **Movie recommendations** | Movie features | Action, Comedy, Drama (multiple labels possible) | Multi-label |
| **Credit fraud detection** | Transaction data | Fraudulent / Legitimate | Binary |
| **Customer churn** | Customer behavior | Will leave / Will stay | Binary |

## Classification vs. Regression

| Aspect | Classification | Regression |
|---|---|---|
| **Output type** | Discrete category | Continuous number |
| **Example** | "This is a dog" | "This dog weighs 20 kg" |
| **Question it answers** | "What is it?" or "Which category?" | "How much?" or "How many?" |
| **Data pattern** | Points grouped by category | Points scattered around a line |

## Algorithms for Classification

Common algorithms used for classification (exam won't ask you to code these):
- **Logistic Regression** — simple, interpretable
- **Decision Trees** — easy to understand
- **SVM (Support Vector Machine)** — powerful for complex problems
- **k-NN (k-Nearest Neighbors)** — finds similar examples in training data
- **Neural Networks** — learns complex patterns
- **Random Forests** — ensemble of decision trees

## Why Classification Matters

Classification is used for decision-making, security, and automation:
- **Security:** spam detection, fraud detection, intrusion detection
- **Healthcare:** disease diagnosis, patient risk assessment
- **Business:** customer churn prediction, sentiment analysis
- **Automation:** image recognition, voice recognition, document classification

## AIF-C01 Exam Relevance

The exam expects you to:
- Recognize classification problems (predicting a category or label)
- Know that classification requires labeled training data
- Understand the difference between binary, multi-class, and multi-label
- Distinguish it from regression
- Know that different algorithms can be used for classification

> **Exam tip:** If you see "classify, categorize, predict a label, or identify which category," it's a **classification problem**. If the output is a specific category (not a number), it's **classification**.

---

## Related Notes
- [[20260421T0644-supervised-learning|Supervised Learning]]
- [[20260527T2017-binary-classification-metrics|Binary Classification Metrics]]
- [[20260421T0200-regression|Regression]]
- [[20260129T1102-machine-learning-ml|Machine Learning (ML)]]
- [[20260420T2331-training-data|Training Data]]
