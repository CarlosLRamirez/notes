---
aliases: [Amazon Q Business Admin Controls]
tags: [aws, ai-practitioner, amazon-q, responsible-ai, guardrails]
created: 2026-03-27 07:19
modified: 2026-03-27 07:19
title: Amazon Q Business Admin Controls
publish: true
folder: AI
---
## Concepto Principal
Los **Admin Controls** son las barreras de seguridad (guardrails) configurables que permiten a los administradores dictar sobre qué temas puede hablar el asistente y qué fuentes de conocimiento puede utilizar, asegurando la alineación con las políticas corporativas.

## Contexto (Exam Insights)
- **IA Responsable y Seguridad de Marca**: En el Dominio 4 (Responsible AI), la mitigación de contenido dañino, tóxico o simplemente irrelevante para el negocio es prioritaria. Los Admin Controls evitan que los empleados usen recursos computacionales de la empresa para pedirle al bot que escriba poesía, código malicioso o hable de política.
- **Equivalencia de Servicios**: En el ecosistema de constructores (*builders*), esta función la realiza **Amazon Bedrock Guardrails**. En el ecosistema SaaS corporativo, lo hacen los **Admin Controls** de Q Business.

## Aspectos Clave
- **Topic Blocking**: Permite restringir palabras clave o temas enteros de manera global o granular.
- **Control del Conocimiento Subyacente**: El administrador puede apagar el "conocimiento general del mundo" del modelo, forzando a que las respuestas provengan **exclusivamente** de los datos empresariales inyectados (Data Connectors).

## Ejemplo
Una empresa de logística configura un Admin Control bloqueando el tema "Deportes y Entretenimiento". Si un empleado pregunta *"¿Quién ganó el partido de anoche?"*, el sistema aborta la generación y responde con un mensaje predeterminado indicando que la consulta viola las políticas de uso interno. 🤣

## Dominios del Examen
- **Dominio 4**: Guidelines for Responsible AI (Task 4.1: Filtrado de contenido y seguridad del modelo).

---
## Related Concepts:

---
## Links:
*References*
