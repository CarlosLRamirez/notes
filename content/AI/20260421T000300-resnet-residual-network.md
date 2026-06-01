---
title: ResNet (Residual Network)
aliases:
  - ResNet
  - Residual Network
tags:
  - AI
  - computer-vision
  - deep-learning
  - AIF-C01
created: 2026-04-21 00:03
modified: 2026-04-21 00:03
publish: true
folder: AI
---

## Main Concept

**ResNet** is a deep convolutional neural network (CNN) used for image recognition tasks. It introduced the concept of "skip connections" (residual connections) that allow very deep networks to train effectively.

## The Problem It Solved

Before ResNet, very deep networks would degrade in performance during training — adding more layers actually made the model worse. ResNet solved this by allowing layers to "skip" connections, letting gradients flow more easily.

## Key Contribution

**Residual connections** — input directly connects to output, allowing the network to learn residual differences instead of the full transformation. This simple idea enabled training of networks with 150+ layers.

## Use Cases

- Image classification
- Object detection
- Facial recognition
- Medical image analysis

## Why It Matters

ResNet proved that **depth is not a fundamental limitation** — with the right architecture, deeper networks can perform better. This influenced modern architecture design across all deep learning.

## AIF-C01 Context

ResNet is mentioned as a CNN used for computer vision tasks. The exam won't ask you to build one, but may ask: "Which model type is best for image recognition?" Answer: CNN (like ResNet).

---

## Related Notes

- [[20250907T113120-computer-vision|Computer Vision]]
- [[20250907T111932-neural-networks|Neural Networks]]
- [[20260129T1102-deep-learning-dl|Deep Learning (DL)]]
