---
created: 2026-03-22 06:05
modified: 2026-03-22 06:13
tags:
  - AI
title: Prompt Latency
aliases: Prompt Latency
publish: true
folder: AI
---

## Concepto principal

La latencia es qué tan rápido el modelo genera y devuelve una respuesta 
al usuario.

## Aspectos clave

### Factores que SÍ impactan la latencia
- El tamaño del modelo — modelos más grandes son más lentos.
- El modelo específico — por ejemplo, Llama tiene un rendimiento diferente que Claude para el mismo tipo de tarea.
- El número de tokens en la entrada — mientras más grande el input, más lento.
- El número de tokens en la salida — mientras más grande el output, más lento.

### Factores que NO impactan la latencia
- Los parámetros de inferencia como Temperatura, Top P y Top K NO afectan la latencia — solo afectan la calidad y creatividad de la respuesta.

## Exam Domain

- Domain 3, Task Statement 3.1: "Identify selection criteria to choose pre-trained models (for example, cost, modality, latency...)."
- Domain 2, Task Statement 2.3: cost tradeoffs of AWS generative AI services (responsiveness, performance).

## Conceptos relacionados
- [[20260322T0509-inference-parameters|Inference Parameters]]
- [[20251210T072927-chossing-a-foundation-model|Criteria for Choosing a Foundation Model]]
- [[20260306T1715-amazon-bedrock-pricing|Amazon Bedrock Pricing]]


## Links / References

