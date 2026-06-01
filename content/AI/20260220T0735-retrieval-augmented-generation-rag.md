---
aliases:
  - Retrieval-Augmented Generation (RAG)
tags:
  - AI
created: 2026-02-20 07:35
modified: 2026-03-24 07:12
title: Retrieval-Augmented Generation (RAG)
folder: AI
publish: true
---

## Main Concept

**RAG** is an architecture that allows a Foundation Model (FM) to query an external, private **Knowledge Base** in real time before generating a response. It is the primary method for customizing a model’s knowledge without modifying its internal weights (_fine-tuning_).

## Why it's important?

- **Hallucination Mitigation:** By "grounding" the response in real facts and corporate documents, the risk of fabricated information is reduced.
 
- **Constant Updates:** Overcomes the limitation of the training cutoff date, allowing access to data generated "today."
    
- **Cost-Effectiveness:** It is considerably cheaper than fine-tuning since it does not require computational resources for training, only vector storage.
 
- **Security and Privacy:** It allows the use of sensitive company data without this data becoming part of the model’s public knowledge.

## Key Aspects

- **Embeddings & Vector Stores:** Data is converted into numerical vectors and stored in AWS services such as **Amazon OpenSearch Service**, **Amazon Aurora**, or **Amazon RDS for PostgreSQL**.
    
- **Amazon Bedrock Knowledge Bases:** This is the AWS managed service that automates the entire RAG workflow (from ingestion into S3 to connecting to the model).
 
- **Source Citation:** A key advantage is the ability to cite the exact source of the document from which the information was extracted, increasing transparency.
## Example

- **Scenario:** An insurance company needs its chatbot to provide information about policies updated yesterday.
 
- **Implementation:** PDFs are uploaded to **Amazon S3** and automatically indexed in **Amazon OpenSearch** via **Knowledge Bases for Amazon Bedrock**.
    
- **Result:** The model retrieves the exact paragraph from the policy and generates a response citing the source file.


## 💡 Exam Tip (AIF-C01)

If a question asks you to choose between **RAG** and **Fine-tuning**:

- Choose **RAG** if the goal is to **update knowledge** or access private data.
 
- Choose **Fine-tuning** if the goal is to change the model’s **style, tone, or behavior** for a very specific task

## Exam Domain
- **Domain 3: Applications of Foundation Models** (28%)
	- **Task Statement 3.1:** Describe design considerations for applications that use foundation models (FMs). 
	- **Task Statement 3.4:** Describe methods to evaluate FM performance.
---
## Related Notes
- [[20260220T0733-rag-and-knowledge-bases-with-amazon-bedrock|RAG and Knowledge Bases with Amazon Bedrock]]

## Links:
- 
