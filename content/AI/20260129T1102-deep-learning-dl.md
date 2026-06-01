---
created: 2026-01-29 11:02
modified: 2026-04-20 07:38
tags:
  - AI
  - machine-learning
  - AIF-C01
title: Deep Learning (DL)
aliases:
  - Deep Learning (DL)
publish: true
folder: AI
---

## Main Concept

Deep Learning is an advanced form of [[20260129T1102-machine-learning-ml|Machine Learning]] that uses multiple layers of [[20250907T111932-neural-networks|Neural Networks]] to process data. It's called "deep" because of the depth of those layers — each one learns increasingly abstract representations of the input. The architecture loosely emulates how neurons and synapses work in the brain, though the analogy only goes so far.

## Context

Deep Learning is the foundation of most modern Generative AI models. Before DL, ML required significant manual feature engineering — humans had to decide what characteristics to extract from data. Deep Learning removes that burden by learning features automatically from raw input.

![[Pasted image 20260420T073349.png]]

## Key Aspects

- **Requires large amounts of data** — typically millions of examples to train effectively. Less data usually means worse performance compared to traditional ML.
- **Computationally expensive** — training many layers of neural networks demands serious compute. GPUs (and increasingly specialized chips like AWS Trainium) are far more efficient than CPUs for this type of parallel workload.
- **Automatic feature extraction** — unlike traditional ML, DL models learn which features matter directly from raw data (pixels, characters, audio samples).
- **Better for complex unstructured data** — images, audio, video, and text are where DL excels. For structured/tabular data, traditional ML often still wins.

## Relationship to the AI Stack

```
Artificial Intelligence
  └── Machine Learning
        └── Deep Learning
              └── Generative AI (LLMs, Diffusion Models, etc.)
```

Deep Learning is the layer that made modern GenAI possible. Foundation models like Claude, GPT, and Stable Diffusion are all built on deep neural network architectures.

## Examples

**Computer Vision** — image classification, object detection, and image segmentation all rely on deep learning (specifically Convolutional Neural Networks, or CNNs).

**Natural Language Processing** — text classification, sentiment analysis, machine translation, and language generation are powered by deep learning architectures, most notably the Transformer.

## AIF-C01 Exam Relevance

> **Exam tip:** Know where Deep Learning sits in the AI hierarchy (subset of ML, foundation of GenAI). The exam won't go deep into architecture details, but you should understand *why* DL enabled the GenAI revolution: automatic feature learning at scale, powered by GPUs and massive datasets.

Key associations for the exam:
- DL → requires **GPUs** (AWS: EC2 P/G instances, AWS Trainium for training, AWS Inferentia for inference)
- DL → foundation of **LLMs and foundation models**
- DL → powers **Computer Vision and NLP** use cases

---

## Related Notes

- [[20250409T073600-artificial-intelligence|Artificial Intelligence (AI)]]
- [[20260129T1102-machine-learning-ml|Machine Learning (ML)]]
- [[20250907T111932-neural-networks|Neural Networks]]
- [[20250930T203103-generative-ai-overview|Generative AI (GenAI)]]
- [[20250907T113120-computer-vision|Computer Vision]]
- [[20250907T114034-natural-language-processing|Natural Language Processing]]

---
