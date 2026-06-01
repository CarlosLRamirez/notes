---
id: 20251210T065400-model-customization-with-amazon-bedrock
aliases:
  - Model Customization with Amazon Bedrock
tags:
  - AI
  - amazon-bedrock
  - AWS
created: 2025-12-10 06:54
modified: 2026-02-11 17:50
title: Model Customization with Amazon Bedrock
publish: true
folder: AI
---

## Main Concept

Amazon Bedrock offers three ways to customize a model. Strictly speaking, only the first two are forms of fine-tuning (this is where it gets confusing!):
- **Reinforcement fine-tuning**
- **Supervision fine-tuning**
- **Distillation** 

![[Pasted image 20260206080111.png]]


> [!IMPORTANT]
> Even though Bedrock shows Distillation as a Customization technique, strictly speaking Distillation is not a Customization method but a separate technique.

### Reinforcement fine-tuning:
It works with a reward-based learning, it requires less manual effort. Ideal for complex, multi-step, reasoning tasks.
### Supervision fine-tuning:
Adapts a pre-trained model to specific tasks using labeled data to improve performance in specific domain. *Input and output data is stored in Amazon S3.*

### Distillation:
It requires a teacher model to train the specialized (student) model. it creaste a smaller and faster model .
## Key  Points
- Amazon Bedrock allows customization of **certain** models by creating a copy of a foundation model and adapting it with your own data.
- This is made by changing the weights of a base foundation model.
- In order to be able to customize a model, the training data must adhere to a specific format
- The training data must be stores in Amazon S3
- Running a custom model is more expensive in Amazon Bedrock, you have different options:
	- Option 1: Run the custom model "on-demand" (price per token)
	- Option 2: Puchase provisioned throughput (billed per month)

> [!NOTE]
> Not all the models can be customized in Amazon Bedrock


## Graphical Example

![[Pasted image 20260206095402.png|400]]


> [!IMPORTANT]
> When you customize a model using fine-tuning or continued pre-training, Amazon Bedrock makes a separate copy of the base Foundation Model to create a private model

---

## Related Concepts
- [[20260209T1740-model-customization|Model Customization]]
- [[20251009T073200-model-fine-tuning|Model Fine-Tuning]]
- [[20260206T1004-supervised-fine-tuning|Supervised Fine-Tuning]]
- [[20260206T1026-reinforcement-fine-tuning|Reinforcement Fine-Tuning]]
- [[20260210T2249-model-distillation|Model Distillation]]
           
## References
- [Customize your model to improve its performance for your use case](https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models.html)
- [Supported models for fine-tuning in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/custom-model-supported.html)
