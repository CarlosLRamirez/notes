---
id: 20250930T080015-fine-tunning-in-amazon-bedrock
aliases:
  - Fine-tunning in Amazon Bedrock
tags:
  - AI
  - amazon-bedrock
created: 2025-09-30 08:00
folder: AI
modified: 2025-09-30 10:57
publish: true
title: Fine-tunning in Amazon Bedrock
---

## **Amazon Bedrock Models Supporting Fine-tuning**

| **Model Family**               | **Fine-tuning (WITH Labels)** | **Continued Pre-training (WITHOUT Labels)** |
| ------------------------------ | ----------------------------- | ------------------------------------------- |
| **Amazon Nova Micro/Lite/Pro** | ✅ Text, Image, Video         | ❌                                          |
| **Amazon Nova Canvas**         | ✅ Image Generation           | ❌                                          |
| **Amazon Titan Text**          | ✅ Text                       | ✅                                          |
| **Amazon Titan Image**         | ✅ Image                      | ❌                                          |
| **Meta Llama 2**               | ✅ Text                       | ✅                                          |
| **Meta Llama 3.x**             | ✅ Text                       | ❌                                          |
| **Cohere Command**             | ✅ Text                       | ❌                                          |
| **Anthropic Claude**           | ❌                            | ❌                                          |
| **AI21 Labs**                  | ❌                            | ❌                                          |

---

## **Key Takeaways for AWS AI Practitioner Certification:**

### **Fine-tuning (WITH Labels) is available for:**

- Amazon Nova understanding models (Micro, Lite, Pro) - text, image, video
- Amazon Nova Canvas - image generation
- Amazon Titan models - text and image
- Meta Llama models - text
- Cohere models - text and embeddings

### **Continued Pre-training (WITHOUT Labels) is available for:**

- Amazon Titan Text models only
- Meta Llama 2 only

### **No customization available for:**

- Anthropic Claude (use as-is or use RAG for customization)
- AI21 Labs models
- Most third-party models beyond Llama and Cohere

> [!NOTE]
> **Important Note**: With Amazon Bedrock, you are in control of your data, and all your inputs and customizations remain private to your AWS account. Your data is not used for service improvement and is never shared with third-party model providers
