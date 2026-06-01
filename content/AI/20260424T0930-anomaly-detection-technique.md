---
created: 2026-04-24 09:30
modified: 2026-04-24 09:30
tags:
  - AI
  - machine-learning
  - AIF-C01
title: Anomaly Detection Technique
aliases:
  - Anomaly Detection
  - Anomaly Detection Technique
publish: true
folder: AI
---

## Main Concept

Anomaly Detection is an [[20260422T1813-unsupervised-learning|Unsupervised Learning]] technique used to identify data points that deviate significantly from the expected pattern — these are called **outliers**. The model learns what "normal" looks like and flags anything that doesn't fit.

![[Pasted image 20260424T063108.png]]

## How It Works

1. The model learns the typical distribution of data points
2. It identifies clusters of normal behavior
3. Any data point that falls far outside those clusters is flagged as an anomaly (outlier)
4. A human reviews the flagged item and decides if it's a true anomaly

**Technique:** Isolation Forest

## Example — Fraud Detection

**Scenario:** A bank wants to detect fraudulent credit card transactions.

**Data:** Transaction records — amount, location, and time.

**Goal:** Identify transactions that deviate significantly from typical behavior.

- Most transactions cluster into recognizable normal patterns
- A transaction with an unusual amount, in an unexpected location, at an odd hour stands far outside all clusters → flagged as an **outlier**

**Outcome:** The system flags potentially fraudulent transactions for further human investigation.

> Once confirmed as fraud, that transaction can be **labeled** and fed back into a [[20260421T0644-supervised-learning|Supervised Learning]] model — making future fraud detection even more accurate.

## Key Aspects

- Does not require labeled data — the model defines "normal" from the data itself
- Output is a flag or score indicating how anomalous a data point is; humans decide the final action
- Bridges into supervised learning: confirmed anomalies become labeled training data

## Use Cases

- **Financial** — credit card fraud detection
- **Cybersecurity** — detecting unusual network traffic or intrusions
- **Manufacturing** — identifying defective products on a production line
- **Healthcare** — flagging abnormal patient readings

## AWS Service

**Amazon SageMaker** includes a built-in **Random Cut Forest (RCF)** algorithm designed specifically for anomaly detection on streaming and batch data.

---

## Related Concepts

- [[20260422T1813-unsupervised-learning|Unsupervised Learning]]
- [[20260424T0900-clustering-technique|Clustering Technique]]
- [[20260424T0915-association-rule-learning|Association Rule Learning]]
- [[20260421T0644-supervised-learning|Supervised Learning]]
- [[20260129T1102-machine-learning-ml|Machine Learning (ML)]]
- [[20251001T170057-amazon-sagemaker-overview|Amazon SageMaker Overview]]

## Exam Domain (AIF-C01)

**Domain 1 — Fundamentals of AI and ML**
- Task Statement 1.1: Basic AI/ML concepts — anomaly detection is one of the core unsupervised learning techniques.

---

## Links

_References_
