---
title: GAN (Generative Adversarial Network)
aliases:
  - GAN
  - Generative Adversarial Network
tags:
  - AI
  - gen-ai
  - image-generation
  - AIF-C01
created: 2026-04-21 00:06
modified: 2026-04-21 00:06
publish: true
folder: AI
---

## Main Concept

A **GAN** is a generative model made up of two competing neural networks: a **Generator** (creates fake data) and a **Discriminator** (tries to distinguish fake from real). They train against each other in an adversarial process.

## How It Works

1. **Generator** — takes random noise and creates synthetic data (images, etc.)
2. **Discriminator** — receives both real and fake data, tries to classify which is which
3. **Competition** — as the discriminator gets better at detecting fakes, the generator gets better at fooling it
4. **Result** — eventually, the generator produces data indistinguishable from the real thing

## Use Cases

- **Image generation** — creating realistic artificial images
- **Data augmentation** — generating synthetic training data
- **Style transfer** — applying artistic styles to images
- **Image-to-image translation** — converting sketches to photos, day to night, etc.
- **Super-resolution** — upscaling low-resolution images

## GAN vs. Diffusion Models

| | GAN | Diffusion |
|---|---|---|
| **Training** | Adversarial | Noise removal |
| **Stability** | Can be unstable | More stable |
| **Quality** | High quality but variable | Consistently high quality |
| **Current use** | Less common now | Preferred in modern GenAI |

Modern models like DALL-E, Stable Diffusion, and Amazon Nova Canvas use **diffusion**, not GANs, because they're more stable and produce better results.

## AIF-C01 Context

Know GANs as a **generative AI approach for creating synthetic data**. The exam may ask about methods for data augmentation or synthetic data generation — GANs are a classic answer, though diffusion models are more relevant today.

---

## Related Notes

- [[20251118T072141-diffusion-models|Diffusion Models]]
- [[20251108T094300-generative-ai-for-images|Generative AI for Images]]
- [[20250930T203103-generative-ai-overview|Generative AI (GenAI)]]
