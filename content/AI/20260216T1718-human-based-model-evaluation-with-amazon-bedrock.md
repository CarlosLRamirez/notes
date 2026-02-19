---
created: 2026-02-16 17:18
modified: 2026-02-19 12:40
tags:
  - AI
  - amazon-bedrock
title: Human-based Model Evaluation with Amazon Bedrock
aliases: Human-based Model Evaluation with Amazon Bedrock
publish: true
folder: AI
---

## Main Concept 
With Amazon Bedrock you can also use human workers to give input to the model evaluation process. They could be an AWS Managed work team, or you can bring you own work team, than means employees of your company or a group of Subject-Matter Experts (SMEs) from your industry.  Instead of doing automatically or using a judge model, they will look for the benchmark answers and the generated answers, and tell if they are correct, or not.

## Context
Some models of certain industries should be evaluated by a real humans, specially on critical domains (healthcare, legal, etc.) where technical metrics are not enough. Humans can see details and context that automated process can miss.

## Key Aspects
- Evaluation Methods
	- Thumbs up/down (binary)
	- Ranking (comparing multiple responses)
	- Detailed scoring/rubrics (more granular evaluation)
- Task types: 
	- You can also choose for built-in task types (similarly to automatic evaluation)
	- You can also add your own custom task (because at the end you have human evaluating it.)
- Advantages:
	- Humans detect nuance and context
	- It could detect bias and fairness issues
	- It also can validate business perspective

## Reflexion Questions
- Does this require more time than automatic evaluation?
- Is this more expensive because you need human labor costs?

## Conclusions
- Although automated evaluation can help us conduct a faster preliminary assessment of a model, for certain types of cases, it cannot be substituted for human judgment. On the other hand, adding a human to the loop makes it slower and introduces subjectivity. It's a matter of trade-offs and depends on the use case and results we need.:

---
## Related Concepts
- [[20260216T1718-automatic-model-evaluation-with-amazon-bedrock|Automatic Model Evaluation with Amazon Bedrock]]
- [[20260217T1154-business-metrics-used-for-model-evaluation|Business Metrics used for Model Evaluation]]

## Links
- [Creating a model evaluation job that use human workers in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/evaluation-human.html)

