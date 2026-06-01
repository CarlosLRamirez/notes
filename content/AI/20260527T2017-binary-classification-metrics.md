---
created: 2026-05-27 20:17
modified: 2026-05-27 23:11
tags:
  - AI
  - ML
  - AIF-C01
title: Binary Classification Metrics
aliases: Binary Classification Metrics
publish: true
folder: AI
---

## Main Concept
Binary classification models predict one of two possible outcomes (yes/no,  fraud/not fraud, spam/not spam). Evaluation metrics measure how well the model performs — but different metrics capture different aspects of performance, and choosing the wrong one can be misleading.
## Why Multiple Metrics Exist
A model that always predicts "no fraud" on a dataset with 99% legitimate transactions achieves 99% accuracy — but detects zero fraud cases. This is why accuracy alone is insufficient for imbalanced datasets, and why Precision, Recall, F1, and AUC-ROC exist.

## The Four Prediction Outcomes
Every binary classification prediction falls into one of four buckets:

|              | Predicted YES       | Predicted NO        |
| ------------ | ------------------- | ------------------- |
| Actually YES | True Positive (TP)  | False Negative (FN) |
| Actually NO  | False Positive (FP) | True Negative (TN)  |

- False Positive → model said "yes" but it was "no" (false alarm)
- False Negative → model said "no" but it was "yes" (missed detection)

## The Metrics

### Accuracy
- Percentage of total predictions that were correct.
- Rarely used in practice — misleading on imbalanced datasets.

### Precision
- Of all cases the model flagged as positive, how many were actually positive?
- "When the model says YES, how often is it right?"
- Relevant when false positives are costly.

### Recall
- Of all actual positive cases, how many did the model catch?
- "Of all the real YESes, how many did the model find?"
- Relevant when false negatives are costly.

### F1 Score
- The balanced combination of Precision and Recall.
- Best for imbalanced datasets where both error types matter.
- Precision and Recall are a seesaw — F1 finds the sweet spot.

### AUC-ROC
- Measures how well the model separates the two classes across all decision thresholds. Value: 0.5 (useless) to 1.0 (perfect).
- Best for comparing models objectively regardless of threshold.

## When to Use Which

| Scenario                                 | Metric    |
| ---------------------------------------- | --------- |
| Quick general check (balanced data)      | Accuracy  |
| False positives are costly               | Precision |
| False negatives are costly               | Recall    |
| Both error types matter, imbalanced data | F1 Score  |
| Comparing models objectively             | AUC-ROC   |

## Exam Domain
- Domain 1, Task Statement 1.3: "Understand model performance metrics 
(for example, accuracy, AUC, F1 score)."

## Related Notes
- [[20260421T0300-classification#1. Binary Classification|Binary Classification]]
- [[20260527T2302-accuracy|Accuracy]]
- [[20260527T2304-f1-score|F1 Score]]
- [[20260527T2309-auc-roc|AUC-ROC]]
- [[20260524T0639-model-fit|Model Fit - Overfitting and Underfitting]]
- [[20260524T0716-bias|Bias]]
- [[20260524T0802-variance|Variance]]
## Links
- [Confusion Matrix](https://www.geeksforgeeks.org/machine-learning/confusion-matrix-machine-learning/)
