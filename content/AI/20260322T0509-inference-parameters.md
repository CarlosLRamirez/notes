---
created: 2026-03-22 05:09
modified: 2026-05-07 22:11
tags:
  - AI
  - GenAI
title: Inference Parameters
aliases:
  - Inference Parameters
publish: true
folder: AI
---

## Concepto principal

Mediante ciertos parámetros podemos influenciar la respuesta de un modelo  de lenguaje para que sea menos creativo y más certero (menos estocástico).  A esto se le llama parámetros de inferencia.

## Contexto

Esto es importante sobre todo cuando necesitamos respuestas menos variables,  como por ejemplo para responder temas técnicos. Sin embargo, quizá no tanto para generar texto en temas creativos.

## Parámetros de Inferencia

### Temperature
- Parámetro entre 0 y 1 que le dice al modelo qué tan creativo queremos que se comporte al generar la respuesta.
- Valor bajo (ej. 0.2): respuestas más conservadoras, repetitivas, enfocadas en la respuesta más probable.
- Valor alto (ej. 1.0): respuestas más diversas, creativas e impredecibles, quizá menos coherentes.

### Top P
- Parámetro entre 0 y 1 que le indica al modelo qué porcentaje de tokens probables considerará para predecir el siguiente token.
- Bajo (ej. 0.25): considera solo el 25% de los tokens más probables, creando una respuesta más coherente.
- Alto (ej. 0.99): considera un rango más amplio de posibles tokens, obteniendo respuestas más creativas y diversas.

### Top K
- Indica el número de candidatos probables que el modelo considerará para el siguiente token.
- Valor bajo (ej. 10): reduce el pool y limita las opciones a los resultados más probables.
- Valor alto (ej. 500): amplía el pool y permite que el modelo considere resultados menos probables.

### Length
- Indica el tamaño máximo de la respuesta en tokens.

### Stop Sequences
- Tokens o cadenas de texto que le indican al modelo que debe detenerse de generar la respuesta al encontrarlos.

## Exam Domain

- Domain 3, Task Statement 3.1: "Understand the effect of inference parameters on model responses (for example, temperature, input/output length)."

## Conceptos relacionados

- [[20250907T210200-ai-model|AI Model]]
- [[20250917T074225-types-of-inferencing|Types of inferencing]]
- [[20251009T072400-prompt-engineering|Prompt Engineering]]
- [[20260322T0557-system-prompts|System Prompts]]


## Links / References
- [Influence response generation with inference parameters](https://docs.aws.amazon.com/bedrock/latest/userguide/inference-parameters.html)

