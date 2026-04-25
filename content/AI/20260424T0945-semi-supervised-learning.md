---
created: 2026-04-24 09:45
modified: 2026-04-24 09:45
tags:
  - AI
  - machine-learning
  - AIF-C01
title: Semi-Supervised Learning
aliases:
  - Semi-Supervised Learning
publish: true
folder: AI
---

## Main Concept

Semi-Supervised Learning sits between [[20260421T0644-supervised-learning|Supervised Learning]] and [[20260422T1813-unsupervised-learning|Unsupervised Learning]]. It uses a **small amount of labeled data** combined with a **large amount of unlabeled data** to train a model.

This is very realistic in practice — labeling data at scale is expensive and time-consuming, but completely unlabeled datasets are abundant.

## How It Works

1. Train an initial model on the small set of **labeled data** (partial labels)
2. Use that partially trained model to label the unlabeled data — this is called **pseudo-labeling**
3. Re-train the model on the full dataset (original labels + pseudo-labels) without being explicitly programmed
4. The final model now behaves like a fully supervised model

```
Partial Labels (Banana, Orange)
        +
Large Unlabeled Dataset
        ↓
    Model trains
        ↓
  Pseudo-labeling (model labels unlabeled data)
        ↓
  Re-train on full labeled dataset
        ↓
  "It's an Apple!"
```

![[Pasted image 20260424T063626.png]]

## Key Concept — Pseudo-Labeling

The model uses what it learned from labeled examples to assign labels to unlabeled data. Those generated labels are called **pseudo-labels** because they were not assigned by a human — they are the model's best guess, used as if they were real labels for the next training round.

## Why It Matters

- Labeling thousands or millions of data points manually is impractical and costly
- Semi-supervised learning allows you to get most of the benefit of supervised learning while only labeling a small fraction of the data
- Common in real-world applications where labeled data is scarce

## Use Cases

- **Image classification** — label a few hundred images, let the model pseudo-label thousands more
- **Medical diagnosis** — limited labeled patient records combined with large unlabeled datasets
- **NLP** — a small set of labeled documents used to label a large corpus

---

## Related Concepts

- [[20260421T0644-supervised-learning|Supervised Learning]]
- [[20260422T1813-unsupervised-learning|Unsupervised Learning]]
- [[20260424T0930-anomaly-detection-technique|Anomaly Detection]] — confirmed anomalies become labeled data, feeding back into supervised or semi-supervised models
- [[20260129T1102-machine-learning-ml|Machine Learning (ML)]]

## Exam Domain (AIF-C01)

**Domain 1 — Fundamentals of AI and ML**
- Task Statement 1.1: Basic AI/ML concepts — semi-supervised learning as a hybrid approach between supervised and unsupervised learning.

---

## Links

_References_
