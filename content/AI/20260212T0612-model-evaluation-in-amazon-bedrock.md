---
created: 2026-02-12 06:12
modified: 2026-02-16 17:44
tags:
  - AI
  - amazon-bedrock
  - AWS
title: Model Evaluation in Amazon Bedrock
aliases: Model Evaluation in Amazon Bedrock
publish: true
folder: AI
---
	
## Definition

With Amazon Bedrock, it is possible to evaluate language models both automatically and with human intervention, it also has the capability to evaluate knowledge bases uses as  Retrieval Augmented Generation (RAG) sources. That includes models and knowledge bases that are inside Bedrock but also outside of the service.
## Key Points
- We can use Amazon Bedrock to compute  performance metrics of a model such as semantic robustness.
- We can also calculate the correctness of a knowledge base in retrieving information and generating responses.
- In Amazon Bedrock you create evaluation jobs to do the evaluation of models and knowledge bases
- Model evaluation jobs support using the following types of Amazon Bedrock models:
	- Foundation models
	- Amazon Bedrock marketplace models
	- Customized foundation models
	- Imported foundation models
	- Prompt routers
	- Models that you haver purchased Provisioned Throughput

---
## Related Concepts
- [[20260216T1718-automatic-model-evaluation-with-amazon-bedrock|Automatic Model Evaluation with Amazon Bedrock]]
- [[20260216T1718-human-based-model-evaluation-with-amazon-bedrock|Human-based Model Evaluation with Amazon Bedrock]]

## Links:
- [Evaluate the performance of Amazon Bedrock resources](https://docs.aws.amazon.com/bedrock/latest/userguide/evaluation.html)




