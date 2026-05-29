---
created: 2026-05-28 07:00
modified: 2026-05-28 07:11
tags: []
title: Small Language Models (SLMs)
aliases: Small Language Models (SLMs)
publish: true
folder: AI
---

## Main Concept 
A Small Language Model (SLM) is a language model designed to be compact enough to run on devices with limited computing resources, while still being capable of handling a defined set of tasks effectively.

## Context
LLMs like Claude or GPT require significant compute resources and run on powerful remote servers. SLMs trade raw capability for efficiency — they are smaller, faster, and can run locally on constrained hardware without an internet connection.
 
 > [!tip] Key Idea
 > **LLM** → powerful, large, remote server, high latency, needs connectivity
 > **SLM** → compact, limited, local device, low latency, works offline

## Key Characteristics
- **Low compute footprint** — runs on edge devices (Raspberry Pi, smartphones, microcontrollers, embedded systems).
- **Very low latency** — no network round-trip required.
- **Offline capability** — does not require internet connectivity.
- **Narrower capability** — optimized for specific tasks rather than  general-purpose reasoning. - Lower cost per inference — no cloud API call needed.
## Tradeoffs vs LLMs

|                    | SLM                    | LLM                    |
| ------------------ | ---------------------- | ---------------------- |
| Location           | Edge device (local)    | Remote server (cloud)  |
| Latency            | Very low               | Higher                 |
| Connectivity       | Not required           | Required               |
| Capability         | Limited, task-specific | Broad, general-purpose |
| Cost per inference | Low                    | Higher                 |
| Hardware           | Constrained            | Powerful               |

## Relationship to Edge Computing
SLMs are the enabling technology for inferencing at the edge. Without compact models that fit on constrained hardware, edge inferencing would not be practical. See [[20260528T0642-inferencing-at-the-edge|Inferencing at the Edge]].

## Hybrid Pattern
SLMs and LLMs are not mutually exclusive. A common architecture uses both:
- An SLM runs locally on the edge device for fast, low-complexity decisions.
- When the query exceeds the SLM's capability or requires deeper reasoning, the device makes an API call to a remote LLM in the cloud.

This hybrid pattern achieves both low latency for routine decisions and high accuracy for complex ones — at the cost of added architectural complexity and occasional network dependency.

**Examples**: voice assistants (wake word local, complex queries cloud), autonomous vehicles (driving decisions local, fleet analytics cloud).

![[Pasted image 20260528065811.png]]

## AIF-C01 Exam Domains
SLM as a specific term does not appear explicitly in the AIF-C01 exam guide. However the underlying concepts connect to:
- Latency as a model selection criterion — Domain 3, Task Statement 3.1
- Model size and complexity as selection criteria — Domain 3, Task Statement 3.1
- Cost tradeoffs of generative AI services — Domain 2, Task Statement 2.3


## Related Notes
- [[20260528T0642-inferencing-at-the-edge|Inferencing at the Edge]]
- [[20260528T0607-inferencing|Inferencing]]
- [[20250917T073805-large-language-models|Large Language Models (LLM)]]
- [[20260322T0605-prompt-latency|Prompt Latency]]
- [[20250907T100953-amazon-bedrock-overview|Amazon Bedrock]]
- [[Model Selection Criteria]]

