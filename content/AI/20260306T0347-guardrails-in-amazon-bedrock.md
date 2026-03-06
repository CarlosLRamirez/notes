---
created: 2026-03-06 03:47
modified: 2026-03-06 06:08
tags:
  - AI
title: Guardrails en Amazon Bedrock
aliases:
  - Guardrails en Amazon Bedrock
publish: true
folder: AI
---

## Definición
Los Guardrails en Amazon Bedrock nos permiten definir medidas de seguridad o salvaguardas por encima de los modelos base para controlar las interacciones entre el usuario y los modelos base (FM). Es como un filtro de contenido o una capa de seguridad entre el usuario y el modelo.

## Contexto
Para las empresas es importante que sus aplicaciones de IA mantengan información confidencial reservada o que pueda violar alguna norma de privacidad o ética. En Amazon Bedrock, donde no se tiene acceso directo al modelo base, Guardrails es la principal palanca de control de comportamiento disponible.

## Capacidades clave
- **Filtrado de contenido** - bloquen contenido dañino, tóxico o inapropiado tanto a la entrada como a la salida del modelo.
- **Denegación de tópicos** - permite definir temas que el modelo no debe discutir sobre ellos (p. ej. competidores, consejos legales) limitando el alcance temático de la aplicación.
- **Censura de PII** - puede detectar y enmascarar información de identificación personal (PII), mejorando la privacidad del usuario y de terceros.
- **Verificación de fundamentación (grounding check)** - ayudan a reducir alucinaciones mediante la verificación de las respuestas contra un documento fuente.
- **Filtrado de Palabras** - permite bloquear palabras o frases específicas.
- **Multiples Guardrails** - permite crear multiples Guardrails y monitorear y analizar las entradas del usuario que podrían violar los Guardrails.
- **A nivel de aplicación** - Guardrail se activa a nivel de aplicación no a modelo base en sí. Un mismo modelo podria tener diferentes Guardrails para diferentes aplicaciónes.

## Ejemplo
Por ejemplo, se podría configurar un Guardrail para no permitir que la aplicación de IA responda sobre estados financieros de la empresa.

---
## Notas relacionadas
- [[20250907T100953-amazon-bedrock-overview|Amazon Bedrock Overview]]

## Exams Domain
- **Domain 4, Task Statement 4.1:** "Understand how to use tools to identify features of responsible AI (for example, Guardrails for Amazon Bedrock)."
- [[20260306T0357-domain-4-task-statement-4-1]]

---
## Links:
*References*


