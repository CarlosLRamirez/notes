---
aliases:
  - Amazon Q Developer
tags:
  - AI
  - AWS
created: 2025-10-09 06:31
modified: 2026-04-15 16:04
folder: AI
publish: true
title: Amazon Q Developer
---

## Concepto Principal

- Amazon Q Developer es realidad dos cosas diferentes:
  - Por un lado, es una herramienta en forma de chatbot que nos permite "hablarle" a la consola de AWS por medio de lenguaje natural, nos puede ayudar en operaciones comunes que hacemos en la consola de AWS, así como para buscar información de los servicios y su documentación.
  - Por otro lado es un complemento de generación de código basado en IA (similar a Github Copilot, Claude Code, etc..), especializado en desarrollo basado en servicio de AWS

## Aspectos Clave


- El componente de chatbot nos permite lo siguiente:
  - Puede responder preguntas sobre la documentación de AWS y nos puede ayudar a seleccionar algún servicio
  - Responde sobre los recursos de AWS en nuestra cuenta.
  - Nos puede sugerir comandos de CLI que podemos ejecutar para hacer cambios en la cuenta
  - Nos puede ayudar con análisis de facturación, resolver problemas y hacer troubleshooting.

- El componente de Code Companion:
  - Soporta varios lenguajes: Java, Javascript, Python, Typescript, C#...
  - Contiene un agente de software para implementar funcionalidades, generar documentación e iniciar (bootstrapping) proyectos nuevos.
  - Se puede integrar como extensiones de las IDE de desarrollo mas utilizados (VS code, Visual Studio, Jetbrains), y nos ayuda en:
    - responder consultas sobre desarrollo con AWS.
    - Completado y generación de código
    - Escaneo de vulnerabilidades de código
    - Debugging, optimización y mejoras
  - AWS renombró esta servicio como "Kiro".


## Ejemplo

- Un desarrollador podría pedirle "lista todas mis funciones Lambda", y Amazon Q Developer respondería, "tienes 5 recursos de funciones Lambda en la región de us-east-1: test-function-1, etc.."
- Podemos decirle: "Change the timeout for Lambda function test-api-1 in the Singapur region, to 10 seconds", y Amazon Q Developer nos daría el comando de aws cli para hacerlo, mas una explicación. **Según Mareek, al momento de grabar el curso Amazon Q developer aún no es capaz de ejecutar el comando por cuenta propia**.
- Podemos preguntar: "What where the top three highest-cost services in Q1?", y nos responde con los montos y los parámetros utilizados, así como accesos directo a las fuentes

## Exam Insights

- La "Regla de Congelación" del Examen: Los exámenes de certificación de AWS se actualizan con menos frecuencia que la consola web. Aunque en la consola actual (2026) veas que Q Developer te redirige a Kiro, en el examen AIF-C01 el servicio seguirá apareciendo como Amazon Q Developer.
- Identificación del Servicio: En las preguntas de opción múltiple, si el escenario trata sobre programación, terminal (CLI), IDEs o solución de problemas técnicos en la consola, la respuesta correcta es Amazon Q Developer.
- Kiro en el Examen: Es altamente improbable que el nombre "Kiro" aparezca como respuesta correcta en el AIF-C01. Si lo ves, trátalo como la evolución tecnológica de Q Developer, pero prioriza el nombre oficial del examen.

## Dominios del Examen
- Dominio 2: Fundamentals of GenAI (Task 2.3: Tecnologías para construir aplicaciones de IA).
- Dominio 3: Applications of Foundation Models (Task 3.1: Casos de uso de modelos de fundación en desarrollo).


## Notas Relacionadas
- [[20260326T0734-amazon-q-business-introduction|Amazon Q Business Introduction]]



