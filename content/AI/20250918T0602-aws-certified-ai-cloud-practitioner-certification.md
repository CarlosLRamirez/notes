---
created: 2025-09-18 06:02
modified: 2026-05-29 07:56
tags:
  - AI
  - AWS
  - certification
  - course
  - toc
aliases:
  - My preparation to the AWS Certified AI Cloud Practitioner Exam
publish: true
folder: AI
title: AIF-C01 exam preparation
---

Tactical index of Stephane Maarek's AIF-C01 course mapped to my atomic notes. Lessons with a wikilink have a note. Pending lessons are marked `[ ]`. A separate exam-domain index will be created once coverage is complete.

**Course:** Stephane Maarek — AWS Certified AI Practitioner (Udemy) · Started: October 2025

## Legend

| Symbol         | Meaning                           |
| -------------- | --------------------------------- |
| `[[wikilink]]` | Note exists                       |
| `- [ ]`        | Lesson pending — no note yet      |
| `#tolab`       | Hands-on lab pending              |
| 🚀             | Published on LinkedIn             |
| 📆             | Scheduled / pending LinkedIn post |

## Exam Domains

[[20260306T1736-aws-certified-ai-practitioner-aif-c01-exam-domains|AWS Certified AI Practitioner (AIF-C01) — Exam Domains]]

---

## Course Index

### Section 1: Artificial Intelligence & Course Introduction

- [[20250409T073600-artificial-intelligence|Artificial Intelligence (AI)]]
- [[20250409T164400-brief-history-of-ai|History of AI]]
- [[20260129T1118-areas-of-application-for-ai-use-cases|Areas of application for AI (use cases)]]
- [[20250907T113120-computer-vision|Computer Vision]]
- [[20250907T114034-natural-language-processing|Natural Language Processing]]
- [[20260129T1102-machine-learning-ml|Machine Learning (ML)]]
- [[20260129T1102-deep-learning-dl|Deep Learning (DL)]]
- [[20250907T110418-relation-between-ai-ml-dl-genai|Relation between AI, ML, DL and GenAI]]
- [[20260129T1146-data-science|Data Science]]

### Section 2: Code & Slide Download

— No notes —

### Section 3: Introduction to AWS & Cloud Computing

— Skipped —

### Section 4: Course Cost & Budget Setup

— No notes —

### Section 5: Amazon Bedrock and Generative AI (GenAI)

#### What is Generative AI?

- [[20250930T203103-generative-ai-overview|What is Generative AI (GenAI)?]]
- [[20260129T1255-generative-model|Generative Model]]
- [[20251029T060940-foundation-model|Foundation Model]]
- [[20250917T073805-large-language-models|Large Language Models (LLM)]]
- [[20251103T213300-interacting-with-llms-to-generate-content|Interacting with LLMs to Generate Content]]
- [[20251108T092803-non-deterministic-nature-of-llms|Non-Deterministic Nature of LLMs]]
- [[20251108T094300-generative-ai-for-images|Generative AI for Images]]
- [[20251118T072141-diffusion-models|Diffusion Models]]

#### Amazon Bedrock Overview

- [[20250907T100953-amazon-bedrock-overview|Amazon Bedrock Overview]]
- [[20251208T140329-amazon-bedrock-foundation-models|Amazon Bedrock Foundation Models]]
- [[20251208T143427-amazon-bedrock-first-steps-en|Lab Guide: Amazon Bedrock First Steps (EN)]]
- [[20251208T143427-amazon-bedrock-first-steps-es|Lab Guide: Amazon Bedrock First Steps (ES)]]

#### Amazon Bedrock Foundation Models

- [[20251210T072927-chossing-a-foundation-model|Criteria for Choosing a Foundation Model]]
- [[20260201T0712-amazon-titan-models|Amazon Titan Models]]
- [[20260204T0656-amazon-bedrock-models-when-to-use-what|Amazon Bedrock Models — When to Use What]]

#### Model Customization & Fine-Tuning

- [[20260209T1740-model-customization|Model Customization]] 🚀
- [[20251210T065400-model-customization-with-amazon-bedrock|Model Customization with Amazon Bedrock]] 🚀
- [[20251009T073200-model-fine-tuning|Model Fine-Tuning]] 🚀
- [[20260206T1004-supervised-fine-tuning|Supervised Fine-Tuning]]
- [[20260206T1026-reinforcement-fine-tuning|Reinforcement Fine-Tuning]]
- [[20260210T2249-model-distillation|Model Distillation]] 🚀
- [[20260210T2204-continued-pre-training|Continued Pre-Training]]
- [[20251009T102549-model-domain-adaptation|Model Domain Adaptation]]

#### Foundation Model Evaluation

- [[20260211T1754-model-evaluation|Model Evaluation]]
- [[20260212T0612-model-evaluation-in-amazon-bedrock|Model Evaluation in Amazon Bedrock]]
- [[20260216T1718-automatic-model-evaluation-with-amazon-bedrock|Automatic Model Evaluation with Amazon Bedrock]] 🚀
- [[20260216T1643-benchmark-dataset|Benchmark Dataset]]
- [[20260216T1718-human-based-model-evaluation-with-amazon-bedrock|Human-based Model Evaluation with Amazon Bedrock]]
- [[20260216T1918-metrics-used-for-foundation-model-evaluation|Metrics used for Foundation Model Evaluation]]
- [[20260217T1154-business-metrics-used-for-model-evaluation|Business Metrics used for Model Evaluation]]

#### RAG & Knowledge Bases

- [[20260220T0735-retrieval-augmented-generation-rag|Retrieval-Augmented Generation (RAG)]] 📆
- [[20260220T0733-rag-and-knowledge-bases-with-amazon-bedrock|RAG and Knowledge Bases with Amazon Bedrock]] 📆
- [[20260226T0818-vector-databases-in-amazon-bedrock|Vector Databases in Amazon Bedrock]] 📆

> **Hands-On (no notes):** Demo of "chat with your document" in Bedrock using a simulated KB. Model only answers from the document — irrelevant questions get no answer.
> #tolab Create and document my own demo.
> #tolab Full KB setup with Pinecone (free) and other AWS-native vector DBs.

#### More GenAI Concepts

- [[20260226T0947-tokenization|Tokenization]]
- [[20260226T1314-context-window|Context Window]]
- [[20260217T1155-embeddings|Embeddings]]

#### Guardrails

- [[20260306T0347-guardrails-in-amazon-bedrock|GuardRails in Amazon Bedrock]]

> **Hands-On (no notes):** Created a Guardrail with topic denial (cooking recipes) and PII filter (email masking). Validated with prompts.
> #tolab Replicate this setup.

#### Agents

- [[20260306T0700-ai-agent|AI Agent]]
- [[20260306T0719-agents-for-amazon-bedrock|Agents for Amazon Bedrock]]
- [[20260306T1305-agent-loop|Agent Loop]]
- [[20260306T1303-chain-of-thought-cot-prompting|Chain of Thought (CoT) Prompting]]

#### Monitoring & Pricing

- [[20260306T1621-amazon-bedrock-cloudwatch|Amazon Bedrock & CloudWatch]]
- [[20260306T1715-amazon-bedrock-pricing|Amazon Bedrock Pricing]]
- [[20260306T1835-amazon-bedrock-cost-tradeoffs-cheatsheet|Amazon Bedrock — Cost & Tradeoffs Cheatsheet]]

#### Amazon Nova

- [[20260306T2118-amazon-nova-models|Amazon Nova Models]]
- [[20260306T2137-amazon-nova-2-models|Amazon Nova 2 Models]]

---

### Section 6: Prompt Engineering

#### What is Prompt Engineering?

- [[20251009T072400-prompt-engineering|Prompt Engineering]]
- [[20260306T2234-negative-prompting|Negative Prompting]]

#### Prompt Performance Optimization

- [[20260322T0557-system-prompts|System Prompts]]
- [[20260322T0509-inference-parameters|Inference Parameters]]
- [[20260322T0605-prompt-latency|Prompt Latency]]

#### Prompt Engineering Techniques

- [[20251011T095400-zero-shot-prompting|Zero-Shot Prompting]]
- [[20260323T0727-few-shots-prompting|Few-Shots Prompting]]
- [[20260306T1303-chain-of-thought-cot-prompting|Chain of Thought (CoT) Prompting]]
- [[20260323T0754-single-shot-prompting|Single-Shot Prompting]]
- [[20260220T0735-retrieval-augmented-generation-rag|Retrieval-Augmented Generation (RAG)]]
- [[20260324T0714-rag-vs-fine-tuning|RAG vs. Fine-Tuning]]

#### Prompt Templates

- [[20260325T1721-prompt-templates|Prompt Templates]]

---

### Section 7: Amazon Q Deep Dive

#### Amazon Q Business

- [[20260326T0734-amazon-q-business-introduction|Amazon Q Business Introduction]]
- [[20260327T0529-amazon-q-business-data-connectors|Amazon Q Business Data Connectors]]
- [[20260327T0712-amazon-q-business-plugins|Amazon Q Business Plugins]]
- [[20260327T0715-amazon-q-business-authentication|Amazon Q Business Authentication]]
- [[20260327T0726-amazon-q-business-anonymous-vs-authenticated-access|Amazon Q Business: Anonymous vs. Authenticated Access]]
- [[20260327T0719-amazon-q-business-admin-controls|Amazon Q Business Admin Controls]]

> **Hands-On (no notes):** Amazon Q Business chat demo with Anonymous Access and S3 connector.

#### Amazon Q Apps

- [[20260327T1721-amazon-q-apps-introduction|Amazon Q Apps Introduction]]

#### Amazon Q Developer

- [[20251009T063120-amazon-q-developer|Amazon Q Developer]]

#### Amazon Q for AWS Services

- [[20260415T1736-amazon-q-for-quicksight|Amazon Q for QuickSight]]
- [[20260416T1802-amazon-q-for-ec2|Amazon Q for EC2]]
- [[20260416T1829-amazon-q-for-aws-chatbot|Amazon Q for AWS Chatbot]]
- [[20260417T0725-amazon-q-for-glue|Amazon Q for Glue]]
- [[20260417T0800-amazon-q-for-amazon-connect|Amazon Q for Amazon Connect]]

#### PartyRock

- [[20260417T0900-partyrock-amazon-bedrock-playground|PartyRock — Amazon Bedrock Playground]]

---

### Section 8: Artificial Intelligence (AI) & Machine Learning (ML)

#### AI, ML, Deep Learning & GenAI

- [[20250409T073600-artificial-intelligence|Artificial Intelligence (AI)]]
- [[20250907T210200-ai-model|AI Model]]
- [[20250907T214022-an-ai-model-vs-and-algorithm|AI Model vs. Algorithm]]
- [[20260129T1102-machine-learning-ml|Machine Learning (ML)]]
- [[20260129T1102-deep-learning-dl|Deep Learning (DL)]]
- [[20250907T111932-neural-networks|Neural Networks]]
- [[20250930T203103-generative-ai-overview|Generative AI (GenAI)]]
- [[20251016T040137-transformer-architecture|Transformer Architecture]]
- [[20251016T052900-transformer-architecture-components|Transformer Architecture Components]]
- [[20251118T072141-diffusion-models|Diffusion Models]]
- [[20251103T203200-multimodal-foundation-models|Multimodal Foundation Models]]
- [[20251009T064252-aws-genai-computing-infrastructure|AWS ML Computing Infrastructure]]

#### ML Terms You May Encounter in the Exam

- [[20260421T000000-gpt-generative-pretrained-transformer|GPT — Generative Pre-Trained Transformer]]
- [[20260421T000100-bert-bidirectional-encoder-representations|BERT — Bidirectional Encoder Representations]]
- [[20260421T000200-rnn-recurrent-neural-network|RNN — Recurrent Neural Network]]
- [[20260421T000300-resnet-residual-network|ResNet — Residual Network]]
- [[20260421T000400-svm-support-vector-machine|SVM — Support Vector Machine]]
- [[20260421T000500-wavenet-audio-synthesis|WaveNet — Audio Synthesis]]
- [[20260421T000600-gan-generative-adversarial-network|GAN — Generative Adversarial Network]]
- [[20260421T000700-xgboost-extreme-gradient-boosting|XGBoost — Extreme Gradient Boosting]]

#### Training Data & Data Preparation

- [[20260420T2331-training-data|Training Data]]
- [[20251016T031521-data-preparation|Data Preparation]]
- [[20250917T103414-data-types-and-formats-in-ai|Data Types and Formats in AI]]

#### Supervised Learning

- [[20260421T0644-supervised-learning|Supervised Learning]]
- [[20260421T0200-regression|Regression]]
- [[20260421T0300-classification|Classification]]
- [[20260421T1739-training-vs-validation-vs-test-set|Training vs. Validation vs. Test Set]]
- [[20260306T0936-feature-engineering|Feature Engineering]]

#### Unsupervised Learning

- [[20260422T1813-unsupervised-learning|Unsupervised Learning]]
- [[20260424T0900-clustering-technique|Clustering Technique]]
- [[20260424T0915-association-rule-learning|Association Rule Learning]]
- [[20260424T0930-anomaly-detection-technique|Anomaly Detection Technique]]
- [[20260424T0945-semi-supervised-learning|Semi-Supervised Learning]]

#### Self-Supervised Learning

- [[20260424T1944-self-supervised-learning|Self-Supervised Learning]]

#### Reinforcement Learning

- [[20260426T0656-reinforcement-learning-rl|Reinforcement Learning (RL)]]

#### RLHF - Reinforcement Learning from Human Feedback

- [[20251016T034417-rlhf|RLHF — Reinforcement Learning from Human Feedback]]

#### Model Fit, Bias, and Variance
- [[20260524T0639-model-fit|Model Fit]]
- [[20260524T0716-bias|Bias]]
- [[20260524T0802-variance|Variance]]

#### Model Evaluation Metrics

- [[20260527T2017-binary-classification-metrics|Binary Classification Metrics]]
- [[20260527T2302-accuracy|Accuracy]]
- [[20260527T2304-f1-score|F1 Score]]
- [[20260527T2309-auc-roc|AUC-ROC]]
 - [[20260527T2317-regression-metrics|Regression Metrics]]
#### Machine Learning — Inferencing

- [[20260528T0607-inferencing|Inferencing]]
- [[20260528T0642-inferencing-at-the-edge|Inferencing at the Edge]]
- [[20260528T0700-small-language-models-slms|Small Language Models (SLMs)]]

#### Phases of a Machine Learning Project

- [[20260528T0718-phases-of-a-machine-learning-project|Phases of a Machine Learning Project]]
- [[20260528T0738-eda-exploratory-data-analysis|EDA - Exploratory Data Analysis]]
- [[20260529T0749-model-drift|Model Drift]]
- [[20260529T0755-mlops|MLOps]]
#### Hypermarameters
- [[20260529T0653-hyperparameter-tuning|Hyperparameter Tuning]]
- [[20260529T0704-model-parameters|Model Parameters]]

#### Pending — Section 8



- [ ] When is ML not appropriate?
- [[20251001T170057-amazon-sagemaker-overview|Amazon SageMaker Overview]]
- [[20260306T0948-amazon-sagemaker-feature-store|Amazon SageMaker Feature Store]]

---



---

## Study Log

- Picked it up again in October 2025 with the goal of getting certified by January 2026.
- Feb 9: Taking too long. Better to take notes as I go and connect them later.
- Limit notes to what Maarek covers — he knows what the exam needs.
