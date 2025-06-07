---
created: 2025-02-08T09:52:24
modified: 2025-05-26T09:45:33-06:00
aliases:
  - Formas de Representar un Modelo de Simulación
title: Formas de Representar un Modelo de Simulación
publish: true
---
# Formas de Representar un Modelo de Simulación
## Concepto Principal
*¿Què es? ¿De que se trata?*

## Contexto
*¿Porqué es importante? ¿Como se relaciona con otro tema?*

## Aspectos Clave
*Puntos principales*

## Aplicaciones
*¿Donde se podría aplicar?*


## Ejemplos
*Ejemplos de la vida real, Evidenca*

## Preguntas/Reflexiones
*¿Què preguntas o dudas me surgen del tema?*
*¿Cuales son mis reflexiones?*

## Conclusiones
*¿Cuales concluyo YO del tema?*


--- 
## Enlaces: 


## Referencias:


## Formas de Representar un Modelo de Simulación

Cuando diseñamos un modelo de simulación, es fundamental contar con herramientas para representar su comportamiento y estructura. A continuación, se presentan tres métodos comunes para representar modelos de simulación:
### 1. Diagrama de Flujo

Un **diagrama de flujo** es una representación gráfica de los procesos y decisiones dentro del sistema. Utiliza símbolos estándar para mostrar la lógica del sistema y la secuencia de eventos.

**Elementos principales:**

- **Óvalos:** Indican el inicio y el fin del proceso.
- **Rectángulos:** Representan actividades o procesos dentro del sistema.
- **Rombos:** Indican decisiones o bifurcaciones en el flujo.

**Ejemplo:** Un diagrama de flujo para la atención de clientes en un banco podría incluir:

1. Cliente llega a la fila.
2. Decide si hay un cajero disponible.
3. Si hay un cajero, el cliente es atendido.
4. Si no hay un cajero, el cliente espera en la fila.
5. Cliente completa la transacción y sale del sistema.

### 2. Lista de Eventos Ordenados

Una **lista de eventos ordenados** representa una ejecución específica de la simulación, mostrando la secuencia de eventos en el tiempo.

**Elementos principales:**

- **Tiempo:** Momento en que ocurre el evento.
- **Evento:** Acción que ocurre en ese momento.
- **Estado del sistema:** Condiciones del sistema después del evento.

**Ejemplo:** Una lista de eventos para un sistema de transporte público podría verse así:

|Tiempo (min)|Evento|Estado del Sistema|
|---|---|---|
|00:00|Pasajero 1 llega|1 en espera|
|00:03|Pasajero 2 llega|2 en espera|
|00:10|Autobús llega|2 suben, 0 en espera|

Este método es útil en simulaciones basadas en eventos discretos, donde se necesita un seguimiento detallado de los cambios en el tiempo.

### 3. Storyboard (Narración Paso a Paso)

Un **storyboard** representa la evolución del sistema en una serie de imágenes o descripciones secuenciales.

**Elementos principales:**

- **Escenarios:** Diferentes estados del sistema en momentos clave.
- **Descripción:** Explicación de lo que ocurre en cada escena.
- **Representación visual (opcional):** Imágenes o diagramas que ilustran el proceso.

**Ejemplo:** Un storyboard para un sistema de autobuses podría incluir:

6. Un pasajero llega a la parada de autobús y revisa el horario.
7. Más pasajeros llegan y esperan en la parada.
8. Llega un autobús y los pasajeros suben.
9. El autobús parte y los pasajeros llegan a su destino.

### Comparación de Métodos

| Método                         | Ventajas                                            | Uso Principal                          |
| ------------------------------ | --------------------------------------------------- | -------------------------------------- |
| **Diagrama de Flujo**          | Fácil de entender, visualiza procesos y lógica      | Definir la estructura del modelo       |
| **Lista de Eventos Ordenados** | Muestra ejecución específica con tiempos reales     | Simulación basada en eventos discretos |
| **Storyboard**                 | Explicación visual sencilla, útil en presentaciones | Explicar sistemas de forma didáctica   |

---
**Nota diaria:** [[2025-02-08]]
