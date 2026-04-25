---
aliases:
  - Training vs Validation vs Test Set
  - Dataset Splits
tags:
  - AI
  - ML
  - supervised-learning
  - AIF-C01
created: 2026-04-21 17:39
modified: 2026-04-21 17:51
title: Training vs. Validation vs. Test Set
publish: true
folder: AI
---

## Main Concept

In supervised learning, you don't use the entire dataset to train the model. Instead, you split it into three separate subsets, each with a different purpose.

## The Three Splits

### Training Set (~60–80% of data)
Used to **train the model** — this is the data the model actually learns from.

Example: Out of 1,000 labeled images, 800 are used for training. The model adjusts its parameters based on these examples.

### Validation Set (~10–20% of data)
Used to **tune the model and evaluate performance during development**. The model never trains on this data, but it's used to adjust hyperparameters and catch overfitting early.

Example: 100 images are set aside for validation. You use them to test different configurations (learning rate, number of layers) and pick the best one.

### Test Set (~10–20% of data)
Used to **evaluate the final model performance** — only once, at the very end. This is the "real exam" for the model; it simulates how the model will perform on completely unseen, real-world data.

Example: The remaining 100 images are only used after training is complete to get an honest performance measurement.

## Why Three Splits?

If you trained and tested on the same data, the model would appear to perform well but fail on new data (overfitting). Keeping the test set completely separate until the end gives you an honest picture of real-world performance.

The validation set exists to prevent another problem: if you keep tweaking the model based on test set results, you're indirectly "training" on the test set. The validation set is the safe place to experiment.

## Quick Reference

| Set | Purpose | % of Data | Seen during training? |
|---|---|---|---|
| **Training** | Model learns from it | 60–80% | ✅ Yes |
| **Validation** | Tune hyperparameters, catch overfitting | 10–20% | ❌ No |
| **Test** | Final honest evaluation | 10–20% | ❌ No |

## AIF-C01 Exam Relevance

> **Exam tip:** Know the purpose of each split. The exam may ask "which dataset is used to evaluate final model performance?" (test set) or "which is used to tune the model?" (validation set). Also know that training on the test set inflates results and is a sign of poor ML practice.

---

## Related Notes

- [[20260421T0644-supervised-learning|Supervised Learning]]
- [[20260420T2331-training-data|Training Data]]
- [[20260211T1754-model-evaluation|Model Evaluation]]
