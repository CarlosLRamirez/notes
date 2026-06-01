---
created: 2026-05-29 07:04
modified: 2026-05-29 07:31
tags:
  - AI
  - ML
  - AIF-C01
title: Model Parameters
aliases: Model Parameters
publish: true
folder: AI
---

## Main Concept

Model parameters are the numeric values that a machine learning model learns automatically from training data. They are the "knowledge" the model builds during training — not something you set manually.

## The Two Types

### Weights
Numbers that indicate how much each input factor matters for the final prediction.

Think of it like consejeros (advisors) — each advisor has a weight that determines how much their opinion influences the final decision. A weight of 0.8 means you listen to that advisor a lot. A weight of 0.1 means you barely consider them.


>[!EXAMPLE]
> House price prediction example:
>
> - Square footage weight: 200 → each sq ft adds $200 to price
> - Number of bedrooms weight: 15,000 → each bedroom adds $15,000
> - Age of house weight: −500 → each year of age subtracts $500
> 
>The model learned these numbers from training data. You never set them manually.


### Bias
A base value the model learns that acts as a starting point before considering any inputs — like a default opinion the model has before looking at any evidence.

>[!EXAMPLE]
> House price prediction example:
>
> - Even a house with 0 sq ft and 0 bedrooms has a land value.
> - Bias = $50,000 (the base starting price before adding anything else)
>
> **Final prediction** = (weights × inputs) + bias = (200 × sqft) + (15,000 × bedrooms) + 50,000

****

## They Are Learned, Not Set

This is the most important distinction for the exam:
********
> [!tip]
> **Model Parameters** → learned AUTOMATICALLY during training (weights, biases) You never touch these.
>
> **Hyperparameters** → set MANUALLY before training begins (learning rate, batch size, epochs, regularization) You tune these.

A common exam distractor: "how would you tune the model weights?"
- The answer is: you don't — the model learns weights automatically. 
- What you tune are hyperparameters.

## How They Are Learned (Simple Version)

1. Weights start as random numbers
2. Model makes a prediction with those random weights
3. Prediction is compared to the actual answer
4. Model calculates how wrong it was (loss)
5. Weights are adjusted slightly in the right direction
6. Repeat thousands of times
7. Eventually weights converge (stop changing) → training complete


## Real-World Example

**Spam detection model:**

```
Training data: thousands of emails labeled spam or not spam.

What the model LEARNS (parameters):
- Weight on "free": +4.8 (strong spam signal)
- Weight on "congratulations": +5.2 (strong spam signal)
- Weight on "meeting": −3.1 (not spam signal)
- Bias: −0.5 (slight lean toward not spam)

New email arrives: "Free congratulations!" Score = 4.8 + 5.2 − 0.5 = 9.5 → SPAM

These weights were never set by anyone. The model discovered them by processing thousands of examples.
```

## Exam Scope

You do not need to understand the math behind how parameters are learned. 

What you need to know:

- Parameters are learned automatically during training.
- Weights and biases are the two types of model parameters.
- Parameters are NOT the same as hyperparameters.
- Better training data generally produces better parameters.
- **More parameters** = more complex model = **higher risk of overfitting**.

## Exam Domain
- Domain 1, Task Statement 1.3: implicit in "model training" and "hyperparameter tuning" — you tune hyperparameters, the model learns parameters.

## Related Notes

- [[20260529T0653-hyperparameter-tuning|Hyperparameter Tuning]]
- [[20260524T0639-model-fit|Model Fit - Overfitting and Underfitting]]
- [[20260528T0718-phases-of-a-machine-learning-project|Phases of a Machine Learning Project]]
- [[Training vs Inferencing]]
- [[Weights and Bias - Simple Analogies]]
