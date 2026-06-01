---
created: 2026-05-27 23:17
modified: 2026-05-27 23:24
tags:
  - AI
  - ML
  - AIF-C01
title: Regression Metrics
aliases: Regression Metrics
publish: true
folder: AI
---

## Main Concept
Regression models predict a continuous numerical value (price, temperature, sales volume). Unlike classification metrics that measure correctness, regression metrics measure how far the model's predictions are from the actual values.

## Standard Metrics

### MAE — Mean Absolute Error
Average distance between predicted and actual values, in the same units as the output.
- Easy to interpret: "on average the model is off by $X"
- Treats all errors equally regardless of size.
- Example: model predicts house price at $300k, actual is $320k → error = $20k

### MAPE — Mean Absolute Percentage Error
Expresses error as a percentage of the actual value instead of absolute units.
- Most intuitive for business contexts: "the model is off by X%"
- Comparable across different problems and scales. 
- Weakness: breaks down when actual values are zero or near zero. 
- Example: predicted $300k, actual $320k → error = 6.25%

### RMSE — Root Mean Squared Error
Similar to MAE but penalizes large errors more heavily than small ones.
- Use when large errors are especially costly.
- A model that is usually close but occasionally very wrong scores worse on RMSE than on MAE.
- More sensitive to outliers than MAE.

### R² — Coefficient of Determination
Measures how much of the variation in the output the model explains.
- R² = 1.0 → model explains the data perfectly
- R² = 0.0 → model explains nothing (no better than predicting the mean)
- R² = 0.85 → model explains 85% of the variation in the output

## Key Distinction for the Exam

```

Classification → predicts a category → Accuracy, F1, AUC-ROC Regression → predicts a number → MAE, RMSE, R²

```

Applying classification metrics to a regression problem (or vice versa) is a common distractor in scenario questions.

## Exam Domain

- Domain 1, Task Statement 1.2: "Select the appropriate ML techniques for specific use cases (for example, regression, classification, clustering)."
- Domain 1, Task Statement 1.3: model performance metrics — regression metrics are not explicitly listed but the distinction from classification metrics is relevant.

## Related Notes
- [[20260421T0200-regression|Regression]]
- [[20260421T0644-supervised-learning|Supervised Learning]]
- [[20260421T0300-classification|Binary Classification]]
- [[20260527T2302-accuracy|Accuracy]]
- [[20260527T2304-f1-score|F1 Score]]
- [[20260527T2309-auc-roc|AUC-ROC]]