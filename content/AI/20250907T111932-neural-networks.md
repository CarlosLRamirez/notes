---
aliases:
  - Neural Networks
created: 2025-09-07 11:20
modified: 2026-04-20 22:31
folder: AI
publish: true
tags:
  - AI
  - ML
  - deep-learning
  - AIF-C01
title: Neural Networks
---

## Main Concept

Neural Networks are computing systems loosely inspired by how the biological brain works. The brain processes information through neurons connected by synapses — neural networks do something analogous using **nodes** connected in **layers**.

## Structure

Every neural network has at least three types of layers:

- **Input layer** — receives the raw data (pixels, text tokens, numbers, etc.)
- **Hidden layers** — intermediate layers where the actual pattern learning happens. The more hidden layers, the "deeper" the network — hence _Deep Learning_.
- **Output layer** — produces the final result (a category, a number, a word, etc.)

![[Pasted image 20260420T222004.png]]

## How Learning Works (without the math)

Think of nodes as decision points that pass information forward — or don't, depending on how strong their connection is. When the network sees a lot of data, it gradually adjusts the strength of the connections between nodes until it gets better at producing the right output.

That's really it at the conceptual level: **lots of data → lots of adjustments → connections that reflect patterns in the data**.

In practice, a neural network may have billions of nodes. The math and parameter tuning behind this process is well beyond the scope of this course and the AIF-C01 exam.

## Deep Learning Example

A classic example: recognizing handwritten digits. The input layer receives pixel values from an image. Hidden layers detect increasingly abstract features — edges, curves, shapes. The output layer produces a prediction: "this is a 7."

![[Pasted image 20260420T222458.png]]

## AIF-C01 Exam Relevance

The exam won't test the math. What you should know:

- Neural networks are the **building blocks of Deep Learning**
- More layers = deeper network = more capable, but also more data and compute required
- Foundation models (LLMs) are neural networks with a specific architecture called the **Transformer**
- Training neural networks at scale requires **GPUs** — that's why specialized hardware like AWS Trainium exists

---

## Related Notes

- [[20260129T1102-deep-learning-dl|Deep Learning (DL)]]
- [[20260129T1102-machine-learning-ml|Machine Learning (ML)]]
- [[20250930T203103-generative-ai-overview|Generative AI (GenAI)]]
