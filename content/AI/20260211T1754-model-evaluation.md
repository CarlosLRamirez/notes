---
created: 2026-02-11 17:54
modified: 2026-02-17 11:52
tags:
  - AI
  - machine-learning
title: Model Evaluation
aliases: Model Evaluation
publish: true
folder: AI
---

## Main Concept  
Model evaluation is the process of measuring how well a model performs on tasks it hasn't seen before, so we can decide if the model is ready for real-world use, or still needs improvements. It is a quality control mechanism, and must be carried out with a certain level of rigor.
## Context
Sometimes a model can memorize training data but fail on new data, we need to know if the model is actually learning patterns or just repeating what it has learned (this is known as ***overfitting***). Model evaluations process helps to choose the best model that fill our needs.
## Key Points
- Model evaluation should happens during model development, customization and is a continuous process during production.
- Different metrics are measured during evaluation:
	- Accuracy (correct prediction)
	- Precision/Recall (for imbalanced data)
	- Loss (how wrong predictions are)
	- User satisfaction (for subjective tasks)
	- Business metrics (conversion rate, revenue impact)
## Examples
- Simple example:
	- You train a model on 800 customer conversations
	- Then you evaluate 100 new conversations the model never saw
	- You measure: "Does it give good responses to new issues?"

## Reflexion Questions
- Once a commercial model has been released, it still get evaluated? YES
## Conclusions
- Not all the models have the same performance.
- Model evaluation could be automated.
- Model evaluation is not one-time but an ongoing task.

---
## Related Concepts:
- [[20260212T0612-model-evaluation-in-amazon-bedrock|Model Evaluation in Amazon Bedrock]]
- [[20260216T1643-benchmark-dataset|Benchmark Dataset]]
- [[20260216T1918-metrics-used-for-foundation-model-evaluation|Metrics used for Foundation Model Evaluation]]


## Links:


