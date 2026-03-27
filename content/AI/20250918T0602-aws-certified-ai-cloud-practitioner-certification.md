---
created: 2025-09-18T06:02:00
modified: 2026-03-27 03:56
tags:
  - AI
  - AWS
  - certification
  - course
  - toc
title: My preparation to the AWS Certified AI Cloud Practitioner Exam
aliases:
  - My preparation to the AWS Certified AI Cloud Practitioner Exam
publish: true
folder: AI
---

I am following Stephane Maarek's course as my main source to prepare for the exam.
## General Information
- Author: Stephane Maarek
- Platform: Udemy
- Start date: October 2025

## Exam Domains
[[20260306T1736-aws-certified-ai-practitioner-aif-c01-exam-domains|AWS Certified AI Practitioner (AIF-C01) - Exam Domains]]

## Notes by Section of the course
  
These are my notes generated following the course lesson structure.
### Section 1: Artificial Intelligence & Course Introduction

- **What is Artificial Intelligence (AI)?**
  - [[20250409T073600-artificial-intelligence|Artificial Intelligence (AI)]]
  - [[20250409T164400-brief-history-of-ai|History of AI]]
  - [[20260129T1118-areas-of-application-for-ai-use-cases|Areas of application for AI (use cases)]]
  - [[20250907T113120-computer-vision|Computer Vision]]
  - [[20250907T114034-natural-language-processing|Natural Language Processing]]
  - [[20260129T1102-machine-learning-ml|Machine Learning (ML)]]
  - [[20260129T1102-deep-learning-dl|Deep Learning (DL)]]
  - [[20250907T110418-relation-between-ai-ml-dl-genai|Relation between AI, ML, DL and others disciplines]]
  - [[20260129T1146-data-science|Data Science]]

### Section 2: Code & Slide Download

-- No notes --

### Section 3: Introduction to AWS & Cloud Computing

-- Skipped section, No notes ---

### Section 4: Course Cost & Budget Setup

-- No notes --

### Section 5: Amazon Bedrock and Generative AI (GenAI)

- **What is Generative AI?**
	- [[20250930T203103-generative-ai-overview|What is Generative AI (GenAI)?]]
	- [[20260129T1255-generative-model|Generative Model]]
	- [[20251029T060940-foundation-model|Foundation Model]]
	- [[20250917T073805-large-language-models|Large Language Models (LLM)]]
	- [[20251103T213300-interacting-with-llms-to-generate-content|Interacting with LLMs to Generate Content]]
	- [[20251108T092803-non-deterministic-nature-of-llms|Non-Deterministic Nature of LLMs]]
	- [[20251108T094300-generative-ai-for-images|Generative AI for Images]]
	- [[20251118T072141-diffusion-models|Diffusion Models]]
- **Amazon Bedrock Overview**
	- [[20250907T100953-amazon-bedrock-overview|Amazon Bedrock Overview]]
	- [[20251208T140329-amazon-bedrock-foundation-models|Amazon Bedrock Foundation Models]]
- Amazon Bedrock Hands On
	- [[20251208T143427-amazon-bedrock-first-steps-en|Lab Guide: Amazon B]]
	- [[20251208T143427-amazon-bedrock-first-steps-es|Lab Guide: Amazon Bedro]]
- Amazon Bedrock Foundation Model
	- [[20251210T072927-chossing-a-foundation-model|Criteria for Choosing a Foundation Model]]
	- [[20260201T0712-amazon-titan-models|Amazon Titan Models]]
- Amazon Bedrock Foundation Models Hands On
  - [[20260204T0656-amazon-bedrock-models-when-to-use-what|Amazon Bedrock Models - When to Use What]]
  - [[20260209T1740-model-customization|Model Customization]] 🚀
  - [[20251210T065400-model-customization-with-amazon-bedrock|Model Customization with Amazon Bedrock]] 🚀
- Amazon Bedrock - Fine Tuning a Model
  - [[20251009T073200-model-fine-tuning|Model Fine-Tuning]] 🚀
  - [[20260206T1004-supervised-fine-tuning|Supervised Fine-Tuning]]
  - [[20260206T1026-reinforcement-fine-tuning|Reinforcement Fine-Tuning]]
  - [[20260210T2249-model-distillation|Model Distillation]] 🚀
- Amazon Bedrock - FM Evaluation
  - [[20260211T1754-model-evaluation|Model Evaluation]]  
  - [[20260212T0612-model-evaluation-in-amazon-bedrock|Model Evaluation  in Amazon Bedrock]]
  - [[20260216T1718-automatic-model-evaluation-with-amazon-bedrock|Automatic Model Evaluation with Amazon Bedrock]] 🚀
  - [[20260216T1643-benchmark-dataset|Benchmark Dataset]]
- Amazon Bedrock - FM Evaluation - Hands On
  - [[20260216T1718-human-based-model-evaluation-with-amazon-bedrock|Human-based Model Evaluation with Amazon Bedrock]]
  - [[20260216T1918-metrics-used-for-foundation-model-evaluation|Metrics used for Foundation Model Evaluation]]
  - [[20260217T1154-business-metrics-used-for-model-evaluation|Business Metrics used for Model Evaluation]]
- Amazon Bedrock - RAG & Knowledge Bases
  - [[20260220T0735-retrieval-augmented-generation-rag|Retrieval-Augmented Generation (RAG)]] 📆
  - [[20260220T0733-rag-and-knowledge-bases-with-amazon-bedrock|RAG and Knowledge Bases with Amazon Bedrock]] 📆
  - [[20260226T0818-vector-databases-in-amazon-bedrock|Vector Databases in Amazon Bedrock]] 📆
- Amazon Bedrock - RAG & Knowledge Base - Hands On
  - In this lecture, the author makes a quick demo of the feature "chat with your document" within Amazon Bedrock. He does this by simulating a complete knowledge base (because creating an actual KB takes time). The author uses a document called "The Evolution of Internet," asks relevant questions and also irrelevant questions to show that the model only answers the information retrieved from the document and nothing else. No notes taken
  - ToDo: Create and document my own demo.
- Amazon Bedrock - RAG & Knowledge Base - Complete Setup - Hands On
  - In this lecture, the author demonstrates how to create a knowledge base from a PDF document. First, he creates an IAM role (he mentions that using the root user causes errors), then creates an S3 bucket where he uploads the PDF file, and then creates the knowledge base in Amazon Bedrock using Amazon OpenSearch Service, warning that it will incur a cost (he mentions that Pinecone is an alternative to keep it completely free). He then waits about 10 minutes, accesses an OpenSearch dashboard and does something I did not fully understand. After a short wait, he tests a prompt related to the document and gets a correct response that references the document. At the end, he deletes the bucket and the knowledge base.
  - ToDo:
    - Lab this the same way Stephan #tolab
    - Try Pinecone #tolab
    - Try other AWS-native databases. #tolab
- More GenAI Concepts
	- [[20260226T0947-tokenization|Tokenization]]
	- [[20260226T1314-context-window|Context Window]]
	- [[20260217T1155-embeddings|Embeddings]]
- Amazon Bedrock - GuardRails
	- [[20260306T0347-guardrails-in-amazon-bedrock|GuardRails in Amazon Bedrock]]
- Amazon Bedrock - GuardRails - Hands On
	-  Demonstration of the creation, configuration, and subsequent testing of a Guardrail in Amazon Bedrock. A topic denial (cooking recipes) and a PII filter (email masking) are created. Then, using a prompt, it is validated that the model does not respond with cooking recipes, and when sent a prompt with emails, it masks them in its final response. #tolab
- Amazon Bedrock - Agents
	- [[20260306T0700-ai-agent|AI Agent]]
	- [[20260306T0719-agents-for-amazon-bedrock|Agents for Amazon Bedrock]]
	- [[20260306T1305-agent-loop|Agent Loop]]
	- [[20260306T1303-chain-of-thought-cot-prompting|Chain of Thought (CoT)]]
- Amazon Bedrock - CloudWatch Integration
	- [[20260306T1621-amazon-bedrock-cloudwatch|Amazon Bedrock & CloudWatch]]
- Amazon Bedrock - CloudWatch Integration Hands On
	- Demo on Cloudwatch logs and metrics integration (not so interesting!)
- Amazon Bedrock Pricing
	- [[20260306T1715-amazon-bedrock-pricing|Amazon Bedrock Pricing]]
	- [[20260306T1835-amazon-bedrock-cost-tradeoffs-cheatsheet|Amazon Bedrock - Cost & Tradeoffs Cheatsheet]]
- Amazon Bedrock - AI Stylist - Hands On
	- https://aistylist.awsplayer.com/
- Amazon Nova
	- [[20260306T2118-amazon-nova-models|Amazon Nova Models]]
	- [[20260306T2137-amazon-nova-2-models|Amazon Nova 2 Models]]

### Section 6: Prompt Engineering
- Section Introduction
- What is Prompt Engineering?
	- [[20251009T072400-prompt-engineering|Prompt Engineering]]
	- [[20260306T2234-negative-prompting|Negative Prompting]]
- Prompt Engineering Hands On
	- Demo in Bedrock about using a good prompto to organize a 4 day travel in Paris, including negative prompting.
- Prompt Performance Optimization
	- [[20260322T0557-system-prompts|System Prompts]]
	- [[20260322T0509-inference-parameters|Inference Parameters]]
	- [[20260322T0605-prompt-latency|Prompt Latency]]
- Prompt Performance Optimization Hans On
	- The author created a demo using Amazon Bedrock and an Anthropic model to generate a short story about robots cooking. He limited the length to ~550 words and first ran the experiment with the temperature, top P, and top K set to their minimum values, which in theory produced a more conservative and boring story, and then changed them to maximum values, where the output is supposed to be more creative and imaginative. 
- Prompt Engineering Techniques
	- [[20251011T095400-zero-shot-prompting|Zero-Shot Prompting]]
	- [[20260323T0727-few-shots-prompting|Few-Shots Prompting]]
	- [[20260306T1303-chain-of-thought-cot-prompting|Chain of Thought (CoT) Prompting]]
	- [[20260220T0735-retrieval-augmented-generation-rag|Retrieval-Augmented Generation (RAG)]]
	- [[20260324T0714-rag-vs-fine-tuning|RAG vs. Fine-Tuning]]
- Prompt Templates
	- [[20260325T1721-prompt-templates|Prompt Templates]]
- Amazon Q Deep Dive
	- [[20260326T0734-amazon-q-business|Amazon Q Business]]



---

## Bitacora

- I picked it up again in October 2025, now with the goal of getting certified this year, or in January 2026.
- February 9: I'm taking too long. I'd better take notes as I go through the lessons, and then separate and connect them.
- I'll limit myself to taking notes based on what Maarek explains, without going into further detail. There's a reason why the author is setting that level: he knows what is necessary to pass the exam.
---
## Additional Notes
- [[20250907T111932-neural-networks|Neural Networks]]
- [[20250907T210200-ai-model|AI Model]]
- [[20250907T214022-an-ai-model-vs-and-algorithm|An AI Model vs and Algorithm]]
- [[20250917T074225-types-of-inferencing|Types of inferencing]]
- [[20250917T103414-data-types-and-formats-in-ai|Data type and formats in AI]]
- [[20251009T102549-model-domain-adaptation|Model Domain Adaptation]]
- [[20251001T170057-amazon-sagemaker-overview|Amazon SageMaker Overview]]
- [[20251009T063120-amazon-q-developer|Amazon Q Developer]]
- [[20251009T064252-aws-genai-computing-infrastructure|AWS ML Computing Infrastructure]]
- [[20251016T031521-data-preparation|Data Preparation]]
- [[20251016T040137-transformer-architecture|Transformer Architecture]]


