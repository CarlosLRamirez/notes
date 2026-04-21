---
title: XGBoost (Extreme Gradient Boosting)
aliases:
  - XGBoost
  - Extreme Gradient Boosting
tags:
  - AI
  - ML
  - ensemble-methods
  - AIF-C01
created: 2026-04-21 00:07
modified: 2026-04-21 00:07
publish: true
folder: AI
---

## Main Concept

**XGBoost** is a machine learning algorithm based on **gradient boosting** — an ensemble method that combines many weak learners (typically decision trees) into a powerful predictor.

## How It Works

1. Start with a simple decision tree
2. Train a second tree to correct the errors of the first
3. Train a third tree to correct the errors of the first two
4. Continue iteratively
5. Final prediction = sum of all trees' predictions

Each new tree focuses on the residual errors from previous trees.

## Key Characteristics

- **Ensemble method** — combines multiple models
- **Gradient boosting** — uses gradients to minimize error
- **Regularization** — includes penalties to prevent overfitting
- **Parallel processing** — "Extreme" refers to extreme optimization for speed
- **Non-deep learning** — traditional ML, not neural networks

## Use Cases

- **Tabular/structured data** — excels on spreadsheet-like datasets
- **Classification** — spam detection, credit default prediction
- **Regression** — house price prediction, demand forecasting
- **Competition winner** — dominates Kaggle competitions for structured data

## When to Use XGBoost

✅ Small to medium datasets  
✅ Tabular/structured data  
✅ When interpretability matters  
✅ Fast training and prediction  

❌ Large unstructured data (use deep learning)  
❌ Images/text (use CNNs/Transformers)  

## AIF-C01 Context

XGBoost represents **ensemble methods** in traditional ML. For structured/tabular data, XGBoost is often the best choice before considering deep learning. The exam wants you to know when to use traditional ML techniques vs. neural networks.

---

## Related Notes

- [[20260129T1102-machine-learning-ml|Machine Learning (ML)]]
- [[20260129T1102-deep-learning-dl|Deep Learning (DL)]]
