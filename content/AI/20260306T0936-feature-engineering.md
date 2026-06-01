---
created: 2026-03-06 09:36
modified: 2026-04-22 18:11
tags:
  - AI
  - machine-learning
  - AIF-C01
title: Feature Engineering
aliases:
  - Feature Engineering
publish: true
folder: AI
---

## Main Concept

Feature engineering is the process (or art) of using domain knowledge to identify, within raw data, which variables — or which combinations of variables — best represent the phenomena that are relevant to the problem at hand. The goal is to provide the model with features that carry real, meaningful information, so it can find significant patterns and make better predictions from new input data.

## Context

Feature engineering is a core step in the **ML development lifecycle**, sitting between raw data collection and model training. The quality of features directly determines a model's ability to learn — no algorithm compensates for poorly represented data.

**Domain knowledge is essential**: an engineer who understands the domain (e.g., automotive engines, clinical medicine, financial markets) knows which variables and combinations reveal meaningful signals, without which the model only sees noise.

> In Deep Learning, neural networks can learn internal features automatically from raw data (the basis of embeddings), which reduces but does not eliminate the need for thoughtful feature design.

## Core Techniques

| Technique                  | Description                                        | Example                                       |
| -------------------------- | -------------------------------------------------- | --------------------------------------------- |
| **Feature Creation**       | Derive new variables from existing ones            | `price / sqft` from price and area            |
| **Feature Selection**      | Keep only the variables most predictive            | Drop `color` when predicting house price      |
| **Feature Transformation** | Rescale or encode data for algorithm compatibility | Normalize numerical values; encode categories |
| **Feature Extraction**     | Pull meaningful information from raw data          | Derive `age` from `birth_date`                |

## Structured vs. Unstructured Data

**Structured (Tabular)**

- Input: spreadsheet with rows and columns
- Tasks: create ratios, select relevant columns, normalize scales
- Example: predicting house prices using size, location, bedrooms — dropping color, keeping `price_per_sqft`

**Unstructured (Text, Images)**

- Input: raw text or pixels
- Tasks: convert to numerical representations the model can process
- Example: customer review → TF-IDF vectors or word embeddings; image → edge features via CNNs

## Example

A spam classifier might use these features extracted from raw emails:

- Number of words in ALL CAPS
- Contains the word "free"
- Sender is unknown

None of these exist as a column in raw email data — they are engineered from it.

## AWS Service

**[[20260306T0948-amazon-sagemaker-feature-store|Amazon SageMaker Feature Store]]** — managed repository to store, share, and reuse features across teams and models, ensuring consistency between training and inference.

---

## Related Concepts

- [[20260129T1102-machine-learning-ml|Machine Learning (ML)]]
- [[20260129T1102-deep-learning-dl|Deep Learning (DL)]]
- [[20260129T1146-data-science|Data Science]]
- [[20250917T103414-data-types-and-formats-in-ai|Data Types and Formats in AI]]
- [[20260217T1155-embeddings|Embeddings]]
- [[20251001T170057-amazon-sagemaker-overview|Amazon SageMaker Overview]]
- [[20260306T0948-amazon-sagemaker-feature-store|Amazon SageMaker Feature Store]]

## Exam Domain (AIF-C01)

**Domain 1 — Fundamentals of AI and ML**

- Task Statement 1.3: Describe the ML development lifecycle — feature engineering is an explicit step between data preparation and model training.

---

## Links

_References_
