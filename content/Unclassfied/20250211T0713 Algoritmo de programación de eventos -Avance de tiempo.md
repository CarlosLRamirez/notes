---
created: 2025-02-11T07:13:05
modified: 2025-02-15T07:04:13-06:00
aliases:
  - Algoritmo de programación de eventos/avance de tiempo
  - The event scheduling/time advance algorithm
---

# Algoritmo de Programación de Eventos / Avance de tiempo


## Concepto Principal
El **Algoritmo de Programación de Eventos/Avance del Tiempo** es el mecanismo central en la Simulación de Eventos Discretos (DES) que determina cómo avanza el tiempo en la simulación. Funciona avanzando el reloj de simulación hasta el tiempo del próximo evento programado, actualizando el estado del sistema y programando futuros eventos según corresponda. Esto garantiza que la evolución del sistema ocurra en función de eventos discretos en lugar de incrementos de tiempo continuos.

## Descripcion
El mecanismo que permite avanzar el tiempo en una simulación y garantizar que los eventos ocurran en el orden correcto se basa en la **Lista de Eventos Futuros (FEL, Future Event List)**. Esta lista contiene todos los eventos que están programados para ocurrir en el futuro.

Cuando se programa un evento futuro, significa que, en el momento en que comienza una actividad, se calcula o se genera su duración a partir de una distribución estadística. Luego, el evento que marca el final de esa actividad, junto con el tiempo en el que ocurrirá, se añade a la **Lista de Eventos Futuros**.

En el mundo real, la mayoría de los eventos no están programados, sino que simplemente ocurren de forma aleatoria, como fallas inesperadas en una máquina o la llegada de clientes a una tienda. En un modelo de simulación, estos eventos aleatorios se representan a través del final de una actividad, cuya duración se determina con una distribución estadística.

## Funcionamiento de la Lista de Eventos Futuros (FEL) en la Simulación de Eventos Discretos

• En cualquier instante de tiempo  t , la **Lista de Eventos Futuros (FEL)** contiene los eventos programados para ocurrir en el futuro, junto con sus tiempos asociados  ($t_1, t_2, \dots, t_n$) .
• La FEL está ordenada cronológicamente según el tiempo de los eventos, es decir:
$$t < t_1 \leq t_2 \leq t_3 \leq \dots \leq t_n$$
• El tiempo  t  representa el valor del **RELOJ**, es decir, el tiempo actual en la simulación.
• El evento asociado al tiempo $t_1$  se denomina **evento inminente**, ya que es el siguiente evento en ocurrir.
• Una vez que se actualiza el **estado del sistema** en el tiempo $t$ , el **RELOJ** avanza hasta  $t_1$ , se elimina el aviso del evento inminente de la FEL y se ejecuta dicho evento.
• La ejecución del evento inminente implica la creación de un **nuevo estado del sistema en el tiempo**  $t_1$ , el cual se basa en el estado anterior (en  $t$ ) y en la naturaleza del evento ejecutado.
• En el instante $t_1$ , es posible que se generen nuevos eventos futuros. Si esto ocurre, se programan y se insertan en la FEL en la posición correspondiente según su tiempo de ocurrencia.
• Luego de actualizar el estado del sistema en  $t_1$ , el **RELOJ** avanza hasta el tiempo del nuevo **evento inminente**, y dicho evento es ejecutado.
• Este proceso se repite de manera iterativa hasta que la simulación alcanza su condición de finalización.
• La secuencia de acciones que un simulador (o un lenguaje de simulación) debe ejecutar para **avanzar el reloj y construir un nuevo estado del sistema** se conoce como el **Algoritmo de Programación de Eventos y Avance del Tiempo**.


----
## Mecanismo de Avance en el Tiempo en la Simulación de Eventos Discretos

En una simulación de eventos discretos (**DES, Discrete Event Simulation**), el tiempo **no avanza de manera continua** como en la vida real, sino que **salta de un evento a otro**. Esto significa que el simulador **no procesa cada instante del tiempo**, sino solo los momentos en los que ocurre algo relevante en el sistema, como la llegada de un cliente o la finalización de un servicio.

### Tipos de Avance en el Tiempo

Existen diferentes formas de avanzar el tiempo en una simulación, pero las dos más comunes son:
#### Avance por Incrementos Fijos:

• Se avanza el tiempo en intervalos regulares (por ejemplo, cada 1 segundo, cada 5 minutos, etc.).
• Se usa en simulaciones donde los cambios en el sistema ocurren de manera continua o necesitamos conocer el estado en momentos específicos.
• Ejemplo: Un simulador de temperatura que mide los valores cada minuto.

  
#### Avance por Eventos (o Avance de Tiempo por Próximo Evento):

• En lugar de avanzar en intervalos fijos, el tiempo **salta directamente al momento en que ocurre el siguiente evento**.
• Esto hace que la simulación sea **más eficiente**, ya que solo se procesan los momentos en los que realmente ocurre algo.
• Ejemplo: En la simulación de un banco, solo se avanza el tiempo cuando llega un cliente o cuando un cajero termina de atender.

**¿Cómo Funciona el Avance de Tiempo en DES?**
1. Se identifica el siguiente evento en la **Lista de Eventos Futuros (FEL, Future Event List).**
2. El reloj de simulación avanza hasta el tiempo del próximo evento.
3. Se ejecuta el evento y se actualiza el estado del sistema.
4. Si el evento genera nuevos eventos (por ejemplo, la salida de un cliente genera la entrada de otro en servicio), estos se agregan a la FEL.
5. El proceso se repite hasta que se cumpla la condición de finalización de la simulación

Esto permite simular sistemas de manera eficiente sin procesar cada unidad de tiempo innecesaria.

**¿Por qué es importante el mecanismo de avance en el tiempo?**

• **Optimiza el uso de recursos**: No necesitamos evaluar cada instante del tiempo, solo los momentos clave.
• **Permite modelar sistemas complejos**: Nos ayuda a representar eventos como llegadas, servicios y cambios de estado en sistemas reales.
• **Facilita el análisis del comportamiento del sistema**: Al centrarnos en eventos importantes, podemos calcular métricas como tiempos de espera, utilización de recursos y rendimiento del sistema.



---


A **Future Event List (FEL)** is a priority queue that stores and manages upcoming events in a **Discrete Event Simulation (DES)**. It is **ordered by event time**, meaning that the event with the smallest timestamp (earliest occurrence) is processed first. The FEL ensures that the simulation progresses correctly by always executing the **next scheduled event** in chronological order.
### Example of a Future Event List (FEL)

Let’s consider a **bank teller system** where customers arrive, queue, get served, and then depart.  

At a given moment, the FEL might look like this:

| **Event Time** | **Event Type** | **Details**        |
| -------------- | -------------- | ------------------ |
| 2.0            | Arrival        | Customer 1 arrives |
| 5.0            | Arrival        | Customer 2 arrives |
| 6.0            | Departure      | Customer 1 leaves  |
| 9.0            | Arrival        | Customer 3 arrives |
| 10.0           | Departure      | Customer 2 leaves  |

**How it Works**

6. The simulation clock starts at **t = 0**.

7. The **first event (Arrival of Customer 1 at t = 2.0)** is removed from the FEL and processed.

8. The simulation clock is advanced to **t = 2.0**, and the system updates (e.g., the customer enters the queue or starts service).

9. A **new event (Departure of Customer 1 at t = 6.0)** is scheduled and inserted into the FEL in the correct order.

10. The process repeats, ensuring that events occur in the correct sequence.

**Key Points**

• The FEL is typically implemented as a **priority queue**, where events are sorted by their scheduled time.

• Events are **processed one by one**, and new events may be added dynamically.

• The **simulation clock** jumps from event to event instead of progressing continuously.

  

This structure allows for efficient event handling in **Discrete Event Simulation**. 🚀




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


