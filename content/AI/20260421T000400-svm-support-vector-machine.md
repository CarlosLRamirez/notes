---
title: SVM (Support Vector Machine)
aliases:
  - SVM
  - Support Vector Machine
tags:
  - AI
  - ML
  - classification
  - AIF-C01
created: 2026-04-21 00:04
modified: 2026-04-21 00:04
publish: true
folder: AI
---

## Main Concept

An **SVM** is a traditional machine learning algorithm used for **classification and regression** tasks. It finds the optimal boundary that separates data points of different classes with the maximum margin.

## How It Works

SVMs plot data points in high-dimensional space and find a line (or hyperplane) that best separates classes. It maximizes the distance between the boundary and the nearest points from each class.

## Characteristics

- **Traditional ML** — not deep learning
- **Effective with smaller datasets** — doesn't require massive amounts of data like deep learning
- **Good for binary classification** — though can be extended to multi-class
- **Computationally expensive** — training time increases with dataset size

## Use Cases

- Text classification
- Spam detection
- Image classification (on smaller datasets)
- Medical diagnosis

## SVM vs. Deep Learning

| | SVM | Deep Learning |
|---|---|---|
| **Data requirement** | Smaller datasets OK | Needs massive datasets |
| **Training time** | Faster on small data | Slower but scales to big data |
| **Interpretability** | More interpretable | Black box |
| **Performance** | Good for small data | Better for large data |

## AIF-C01 Context

SVMs are "traditional ML" — the exam wants you to know when to use traditional ML vs. deep learning. If you have a small, well-defined dataset, SVM might be better than a complex neural network.

---

## Related Notes

- [[20260129T1102-machine-learning-ml|Machine Learning (ML)]]
- [[20250907T111932-neural-networks|Neural Networks]]
