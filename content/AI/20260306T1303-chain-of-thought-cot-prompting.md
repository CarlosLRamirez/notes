---
created: 2026-03-06 13:03
modified: 2026-03-24 07:00
tags:
  - AI
  - prompt-engineering
title: Chain of Thought (CoT) Prompting
aliases:
  - Chain of Thought (CoT) Prompting
publish: true
folder: AI
---

## Concepto Principal
Chain of Thought (CoT) es una técnica de prompt engineering que induce al  modelo a razonar paso a paso antes de dar una respuesta final, en lugar de  responder directamente.

## Contexto/Why matters?

- **Resolución de problemas complejos:** Es vital para tareas de matemáticas, lógica simbólica o razonamiento de varios pasos donde los modelos suelen fallar si intentan responder directamente.
- **Transparencia:** Al ver los pasos, el usuario puede identificar exactamente en qué punto del razonamiento el modelo cometió un error (si lo hubo).
- **Mejora del rendimiento:** Se ha demostrado que el CoT mejora significativamente la precisión en modelos de gran tamaño frente a tareas que requieren lógica deductiva, es decir los FM generan mejor respuestas cuando "piensan en voz alta", ya que cada paso intermedio se convierte en contexto para el siguiente.


## Aspectos Clave

- **Razonamiento lógico:** Guía al modelo a través de una secuencia de pasos coherentes.  
	- En lugar de: Pregunta → Respuesta
	- CoT hace: Pregunta → Paso 1 → Paso 2 → Paso 3 → Respuesta
- **"Think step by step":** Es la frase "mágica" que suele disparar este comportamiento en los modelos.
- **Costo: 💲 (Medio):** Al generar más texto (los pasos intermedios), el costo por tokens de salida aumenta.    
- **Habilidad: Media:** El diseñador del prompt debe saber estructurar el razonamiento o pedirle al modelo que lo haga.

> [!IMPORTANT]
> "Es importante distinguir que el **Chain-of-Thought (CoT)** opera en dos dimensiones. Primero, como una **técnica de prompting**, donde el usuario guía explícitamente al modelo a través de instrucciones como _'pensemos paso a paso'_ para mejorar la precisión en tareas lógicas. Segundo, como una **capacidad nativa del modelo** (o _Reasoning Models_), donde el sistema realiza este proceso de razonamiento de forma interna y automática antes de entregar la respuesta final. Para el examen **AIF-C01**, nos enfocamos principalmente en su uso como una herramienta de diseño de prompts para optimizar el rendimiento del modelo en tareas de múltiples pasos."


## Ejemplo razonamiento con CoT

- **Sin CoT:** "¿Cuánto es 15% de 280?" → "42"
- **Con CoT:** 
	- "Primero calculo el 10% de 280 = 28. 
	- Luego el 5% = 14. Sumo ambos = 42.
	- Resultado → 42"

> La respuesta es la misma, pero el razonamiento intermedio  reduce errores en problemas complejos.


## Ejemplo de Prompt Engineering utilizando CoT

- **Prompt:**

```text
Let's write a story about a dog solving a mistery
	
First, describe the setting and the dog
Then, introduce the mistery
Next, show how the dog discovers clues
Finally, reveal how the dog soves the mistery and conclude the story.
	
Write a short story following this plan. Think step by step
```


## Relación con Agentes

En Agents for Amazon Bedrock, el FM usa CoT internamente  para descomponer una tarea compleja en pasos ejecutables antes de actuar.

## Exam Domain
- **Dominio 3: Applications of Foundation Models** (28% del examen).
- **Task Statement 3.2:** Choose effective prompt engineering techniques.


## Notas relacionadas
- Prompt Engineering
- Agents for Amazon Bedrock
- Agent Loop
- [[20251009T072400-prompt-engineering|Prompt Engineering]]
- [[20260306T0719-agents-for-amazon-bedrock|Agents for Amazon Bedrock]]
- [[20260306T1305-agent-loop]]
- Model Latent Space:
- Prompt Templates