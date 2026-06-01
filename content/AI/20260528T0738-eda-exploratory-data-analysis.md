---
created: 2026-05-28 07:38
modified: 2026-05-29 07:56
tags: []
title: EDA - Exploratory Data Analysis
aliases: EDA - Exploratory Data Analysis
publish: true
folder: AI
---

## Main Concept 
EDA is the phase of the ML lifecycle where data scientists explore and understand the raw data before building any model. The goal is to understand the shape, quality, distribution, and relationships within the data to make informed decisions about feature engineering and model selection

## Context
EDA happens early in the ML project lifecycle — after data collection and before feature engineering and model training. The insights from EDA directly inform which features to use, which to discard, and whether the data is sufficient for the intended ML task.

## Key Activities
### Statistical Analysis
- Compute basic statistics: mean, median, min, max, standard deviation.
- Identify missing values, outliers, and data quality issues.
- Understand class distribution — are the classes balanced or imbalanced?

### Data Visualization
- Plot distributions to understand the shape of the data.
- Identify patterns, trends, and anomalies visually.
- Common charts: histograms, scatter plots, box plots.

## Why EDA Matters for Model Quality

>[!tip]
> **Poor EDA** → wrong features → poor model performance
> **Good EDA** → right features → better model performance

EDA directly feeds into feature engineering — you cannot engineer good  features from data you do not understand.

## AWS Services

| Service                        | Role in EDA                                           |
| ------------------------------ | ----------------------------------------------------- |
| Amazon SageMaker Data Wrangler | Visual data exploration, transformation, and analysis |
| Amazon QuickSight              | Business intelligence and data visualization          |
| AWS Glue DataBrew              | Visual data preparation and profiling                 |
| Amazon S3                      | Central storage for raw datasets                      |

## Exam Domain

- Domain 1, Task Statement 1.3: "Describe components of an ML pipeline (for example, data collection, **exploratory data analysis [EDA]**,  data pre-processing, feature engineering...)."
- Domain 1, Task Statement 1.3: "Identify relevant AWS services and  features for each stage of an ML pipeline (for example, SageMaker,  **Amazon SageMaker Data Wrangler**...)."

## Related Notes

- [[20260528T0718-phases-of-a-machine-learning-project|Phases of a Machine Learning Project]]
- [[20260306T0936-feature-engineering|Feature Engineering]]
- [[Data Pre-processing]]
- [[Correlation Matrix]]
- [[Amazon SageMaker Data Wrangler]]
- [[Amazon QuickSight]]
- [[AWS Glue DataBrew]]
- [[20260524T0639-model-fit|Model Fit - Overfitting and Underfitting]]
- [[20260527T2017-binary-classification-metrics|Binary Classification Metrics]]

---
## Links:
*References*


