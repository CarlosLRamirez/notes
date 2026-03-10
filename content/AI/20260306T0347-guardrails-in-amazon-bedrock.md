---
created: 2026-03-06 03:47
modified: 2026-03-06 06:44
tags:
  - AI
  - spanish
title: Guardrails en Amazon Bedrock
aliases:
  - Guardrails en Amazon Bedrock
publish: true
folder: AI
---

## Definición
Los Guardrails en Amazon Bedrock nos permiten definir medidas de seguridad o salvaguardas por encima de los modelos base para controlar las interacciones entre el usuario y los modelos base (FM). Es como un filtro de contenido o una capa de seguridad entre el usuario y el modelo.

## Contexto
- Para las empresas es importante que sus aplicaciones de IA mantengan información confidencial reservada o que pueda violar alguna norma de privacidad o ética. En Amazon Bedrock, donde no se tiene acceso directo al modelo base, Guardrails es la principal palanca de control de comportamiento disponible.
- Los modelos base (FM) cuentan con medidas de seguridad intrínsecas, los Guardrails vienen a ser un complemento por encima del modelo que permite a las empresas y desarrolladores configurar filtros adicionales según sus propias reglas de negocio.

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

----
## Definition 
Guardrails in Amazon Bedrock allow us to define security measures or safeguards on top of base models to control interactions between the user and base models (FM). It is like a content filter or a security layer between the user and the model.

## Context
- It is important for companies that their AI applications keep confidential information private or that could violate privacy or ethical standards. In Amazon Bedrock, where there is no direct access to the base model, Guardrails is the main behavior control lever available.
- Base models (FM) have intrinsic security measures, and Guardrails are a complement to the model that allows companies and developers to configure additional filters according to their own business rules. 
## Key capabilities 
- **Content filtering** - block harmful, toxic, or inappropriate content both at the input and output of the model.
- **Topic denial** - allows you to define topics that the model should not discuss (e.g., competitors, legal advice), limiting the thematic scope of the application. - **PII censorship** - can detect and mask personally identifiable information (PII), improving user and third-party privacy.
- **Grounding check** - helps reduce hallucinations by verifying responses against a source document. - **Word filtering** - allows specific words or phrases to be blocked. - **Multiple Guardrails** - allows multiple Guardrails to be created and user inputs that could violate the Guardrails to be monitored and analyzed.
- **Application Level** - Guardrail is activated at the application level, not at the base model level. The same model could have different Guardrails for different applications. 

## Example
For example, a Guardrail could be configured to prevent the AI application from responding to questions about the company's financial statements.

---
## Related Notes
- [[20250907T100953-amazon-bedrock-overview|Amazon Bedrock Overview]]

## Exams Domain
- **Domain 4, Task Statement 4.1:** "Understand how to use tools to identify features of responsible AI (for example, Guardrails for Amazon Bedrock)."
- [[20260306T0357-domain-4-task-statement-4-1]]

---
## Links:
*References*


