---
created: 2026-05-29 06:53
modified: 2026-05-29 07:56
tags:
  - AI
  - ML
  - AIF-C01
title: Hyperparameter Tuning
aliases: Hyperparameter Tuning
publish: true
folder: AI
---

## Main Concept

Hyperparameters are settings that control HOW the model learns — not WHAT it learns. They are set by the engineer before training begins and do not change automatically during training.
Hyperparameter tuning is the process of finding the best combination of these settings to get the best model performance.

## The Key Distinction

> [!TIP] Key Idea
>
> - **Model Parameters** → WHAT the model learns (weights, biases). Learned automatically from data during training. You never touch these.
>
> - **Hyperparameters** → HOW the model learns. Set manually before training begins. You tune these.

> [!example] Analogy: Baking a cake
>
> - **Hyperparameters** = the oven settings you choose before baking (temperature, time, rack position).
>
> - **Model parameters** = how the cake actually turns out (texture, density, flavor).
>
> You control the oven settings. The oven (training process) determines the result.

## The Four Key Hyperparameters

### Learning Rate
Controls how big or small the adjustments to weights are after each training step.

> [!TIP] Key Idea
>
> - **High learning rate** → fast but overshoots the optimal solution.
>
> - **Low learning rate** → precise but slow convergence.
>
> - **Right learning rate** → fast enough to converge, precise enough to find the optimal solution.

> [!example] Analogy: Learning to ride a bike
>
> - **High learning rate** = you overcorrect every wobble → fast but you keep falling over.
>
> - **Low learning rate** = you make tiny corrections → very stable but takes forever to learn.
>
> - **Right learning rate** = just enough correction to stay balanced without taking too long.

### Batch Size
How many training examples the model looks at before updating its weights.

> [!TIP] Key Idea
>
> - **Small batch** → more frequent updates, more stable learning, slower to process.
>
> - **Large batch** → fewer updates, faster to process, less precise adjustments.

> [!example] Analogy: Grading exams to adjust your teaching style
>
> - **Small batch** = grade 5 exams, then adjust your teaching → more frequent adjustments, takes longer.
>
> - **Large batch** = grade 100 exams, then adjust → faster to process, but updates may be less precise.

### Number of Epochs
How many times the model goes through the entire training dataset.

> [!TIP] Key Idea
>
> - **Too few epochs** → model did not learn enough → underfitting.
>
> - **Too many epochs** → model memorized training data → overfitting.
>
> - **Just right** → model learned the patterns without memorizing.

> [!example] Analogy: Studying a textbook before an exam
>
> - **Too few epochs** = you only read the book once → you did not learn enough.
>
> - **Too many epochs** = you read the book 100 times → you memorized every word but cannot apply concepts to new problems.
>
> - **Just right** = you read enough times to understand, not so many times that you just memorize.

### Regularization
Controls how simple or complex the model is allowed to be. Higher regularization forces the model toward simpler solutions, which reduces overfitting.

> [!TIP] Key Idea
>
> - **No regularization** → complex model, higher risk of overfitting.
>
> - **High regularization** → simpler model, more generalizable.
>
> - **Key exam rule** → if the model is overfitting, increase regularization.

> [!example] Analogy: Writing an essay
>
> - **No regularization** = you can use any vocabulary, any length, any structure → complex, possibly overfitted to studied examples.
>
> - **High regularization** = you must keep it simple, clear, concise → less likely to overfit, more generalizable.

## How They Connect to Overfitting

> [!TIP] Key Idea: How to fix overfitting
>
> - **Best exam answer** → increase training data size.
>
> - **Secondary fixes** → reduce epochs (early stopping), increase regularization, reduce model complexity.
>
> - **Additional options** → data augmentation, ensembling (combine multiple models).
>
> - **Last resort** → adjust learning rate or batch size.

## How Tuning Is Done

- Manual approach: Grid search tries every possible combination of values — exhaustive but slow. Random search randomly samples combinations — faster and surprisingly effective.
- AWS approach: Amazon SageMaker Automatic Model Tuning (AMT) automates the search for optimal hyperparameter values — you define the range, SageMaker finds the best combination.

## Exam Scope

The exam will NOT ask you to perform hyperparameter tuning. 

It WILL ask you to recognize what **hyperparameters** are and how they differ from model parameters, know what each hyperparameter controls at a conceptual level, identify the relationship between hyperparameters and overfitting, know that Amazon SageMaker AMT automates this process, and know that the best answer for fixing overfitting is increasing training data — not tuning hyperparameters.

Note: "Performing hyperparameter tuning or model optimization" is explicitly listed as an OUT OF SCOPE job task in the exam guide — you describe it, you do not do it.

## AWS Services

| Service | Role |
|---|---|
| Amazon SageMaker | Model training environment |
| SageMaker Automatic Model Tuning (AMT) | Automated hyperparameter optimization |

## Exam Domain

- Domain 1, Task Statement 1.3: "Describe components of an ML pipeline (for example, model training, **hyperparameter tuning**, evaluation)."
- Domain 1, Task Statement 1.3: "Identify relevant AWS services for each stage of an ML pipeline (for example, **SageMaker**)."

## Related Notes

- [[20260529T0704-model-parameters|Model Parameters]]
- [[20260524T0639-model-fit|Model Fit - Overfitting and Underfitting]]
- [[20260524T0716-bias|Bias]]
- [[20260524T0802-variance|Variance]]
- [[20260528T0718-phases-of-a-machine-learning-project|Phases of a Machine Learning Project]]
- [[20251001T170057-amazon-sagemaker-overview|Amazon SageMaker]]
- [[20260529T0755-mlops]]
