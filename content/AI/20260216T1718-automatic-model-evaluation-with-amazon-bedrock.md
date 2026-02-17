---
created: 2026-02-16 17:18
modified: 2026-02-16 17:49
tags:
  - AI
  - amazon-bedrock
title: Automatic Model Evaluation with Amazon Bedrock
aliases: Automatic Model Evaluation with Amazon Bedrock
publish: true
folder: AI
---

## Main Concept 

With Amazon Bedrock you can automatically evaluate models, that means on a programatic way or even using another Large Language Model (LLM) to judge the first model. You can assign a series of tasks to the model and then calculate the results automatically. 

## Key Points

Some types of pre-built tasks that Bedrock has for evaluating models are: 
- Text summarization
- Questions and answers
- Text classification
- Open text generation 

To do this, you can bring your own "collection" of prompts or use the datasets that Bedrock already provides. 

**What is a prompt dataset?** It is a collection of questions and answers (benchmark type) that the model being evaluated is subjected to. 

The model's answers are then compared with the benchmark answers and the result is scored. This comparison is actually done by another model, which we call the "judging model," which weighs or scores the result. That weighting or score is calculated using various statistical methods (such as BERT Score, FI, etc.).

> [!NOTE]
> Amazon Bedrock Evaluations is primarily designed to evaluate **language** models using prompt datasets.
## My Conclusions

It is a more or less objective way of measuring how "good" a model is (although in reality it is based on what another model says). Therefore, the "quality" of the judging model is key to making the evaluation more objective.


---
## Related Concepts:
- [[20260216T1718-human-based-model-evaluation-with-amazon-bedrock|Human-based Model Evaluation with Amazon Bedrock]]
- [[20260216T1643-benchmark-dataset|Benchmark Dataset]]

## Links
- [Creating an automatic model evaluation job in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/evaluation-automatic.html)
