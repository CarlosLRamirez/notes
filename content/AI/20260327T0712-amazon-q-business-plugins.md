---
aliases:
  - Amazon Q Business Plugins
tags:
  - aws
  - ai-practitioner
  - amazon-q
  - AIF-C01
created: 2026-03-27 07:12
modified: 2026-03-27 07:14
title: Amazon Q Business Plugins
publish: true
folder: AI
---

## Concepto Principal

A diferencia de los conectores (que leen datos), los **Plugins** permiten la "Acción". Son integraciones bidireccionales que otorgan al asistente la capacidad de ejecutar tareas, crear registros o modificar datos en aplicaciones de terceros directamente desde la interfaz de chat.

## Contexto (Exam Insights)

- **Flujos de Trabajo "Agentic" (Agentes)**: En el ecosistema de IA moderna, pasar de solo responder preguntas a "tomar acciones" se conoce como comportamiento de agente. En el examen, debes diferenciar claramente: si la pregunta habla de _buscar información_, piensa en Connectors/RAG. Si habla de _crear un ticket, enviar un correo o ejecutar una API_, piensa en Plugins (o Action Groups si estuvieras en Amazon Bedrock).
- **Extensibilidad**: AWS permite crear "Custom Plugins" usando APIs REST, lo que significa que ninguna herramienta interna de la empresa queda fuera del alcance de la automatización.

## Aspectos Clave

- **Integraciones Nativas de Acción**: Jira, ServiceNow, Zendesk, Salesforce.
- **Ejecución en nombre del usuario**: Las acciones realizadas por el plugin mantienen la trazabilidad del usuario que solicitó la tarea.

## Ejemplo

Un desarrollador nota un bug en producción y le dice a Amazon Q Business: _"Crea un ticket de severidad alta en Jira reportando la caída de la pasarela de pagos"_. El plugin se conecta a la API de Jira, crea el _issue_ y devuelve el ID del ticket al chat.

## Dominios del Examen

- **Dominio 3**: Applications of Foundation Models (Task 3.3: Interacción de modelos con sistemas y APIs externas).

---

## Related Concepts:

- [[20260326T0734-amazon-q-business-introduction|Amazon Q Business Introduction]]
- [[20260327T0529-amazon-q-business-data-connectors|Amazon Q Business Data Connectors]]

---

## Links:

_References_
