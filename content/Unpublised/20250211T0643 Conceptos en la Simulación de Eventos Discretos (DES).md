---
created: 2025-02-11T06:43:40
modified: 2025-02-11T07:13:00-06:00
aliases:
  - Conceptos en la Simulación de Eventos Discretos (DES)
---
## Conceptos en la Simulación de Eventos Discretos (DES)

Los cuatro elementos principales de un modelo de  simulación de eventos discretos son:
- Entidades
- Atributos
- Actividades 
- Eventos

Los principales conceptos que involucra la simulación de evento discretos (DES) son:

**Sistema**: Una colección de entidades (e.g. personas y maquinaria) que interactúan entre si a lo largo del tiempo para alcanzar uno más objetivos

**Modelo**: Una representación abstracta del sistema, que contiene relaciones estructurales, lógicas o matemáticas que describen el sistema en términos de su estado, entidades y atributos, conjuntos, procesos, eventos, actividades y retardos.

**Estado del Sistema:** Una colección de **variables** que contienen toda la información necesaria para describir el sistema en cualquier momento.

**Entidad**: Cualquier objeto o componente en el sistema que requiere una representación explícita en el modelo (e.g., un servidor, un cliente, una máquina).

**Atributo**: Las propiedades de una entidad dada (e.g., la prioridad de un cliente en espera, la velocidad actual de un vehículo).

**Lista**: Una colección de entidades, ya sean permanentes o temporales, que se asocian y organizan siguiendo un orden lógico. Esto significa que, más allá de simplemente agrupar elementos, la lista impone una secuencia basada en algún criterio.

**Cola**: Una cola es un tipo específico de lista en donde el orden sigue reglas particulares, generalmente basadas en el orden de llegada (**FIFO**) o algún otro criterio, como prioridad.

**Evento**: Algo que ocurre de forma instantánea y que podría cambiar el estado del sistema (por ejemplo, la llegada de un cliente).

Los eventos son el elemento clave en la simulación de eventos discretos (**DES**). En una simulación, **no se registra ni se computa** lo que sucede entre un evento y otro.

Un evento también puede usarse para programar la finalización de la simulación en un tiempo particular o para tomar una decisión sobre la operación del sistema en un instante dado. En este caso, el evento no necesariamente cambia el estado del sistema.

**Aviso de Evento (Event Notice):** Un **aviso de evento** es el descriptor o registro de un evento que ocurrirá en el momento actual o en algún momento futuro. Incluye cualquier dato asociado necesario para ejecutar el evento, así como otras instrucciones relevantes para la simulación.

Como mínimo, el aviso de evento contiene el **tipo de evento** y el **tiempo del evento**. Se puede decir que es la representación estructurada que permite al simulador saber **cuándo** y **cómo** debe procesar el evento.

**Ejemplo de Aviso de Evento: Llegada de un Cliente**
- Tiempo del evento: 3.25 minutos
- Tipo de Evento: Llegada
- Descripción: un nuevo cliente (ID 101) llega al banco
- Impacto en el estado del sistema:
	- La longitud de la cola se incremente en 1
	- Si un cajero esta disponible, el cliente comenzará a ser servido inmediatamente, de lo contrario esperará en la cola
- Proximas acciones:
	- Programar un evento de **“Inicio de servicio”** si hay un cajero disponible.
	- Actualizar el calendario de eventos con el siguiente evento de llegada o finalización de servicio, según corresponda.

**Lista de Eventos:** Una lista de **avisos de eventos** para futuros eventos, ordenados según el tiempo de ocurrencia. También se conoce como **Lista de Eventos Futuros (FEL, Future Event List).**

**Actividad:** Una duración de tiempo de **longitud específica** (por ejemplo, un tiempo de servicio o un tiempo entre llegadas), que se conoce desde el momento en que inicia (aunque puede definirse en términos de una distribución estadística).

**Retardo (Delay):** Un período de tiempo durante el cual ocurre un proceso o actividad particular, y en el que el estado del sistema **permanece en espera** hasta que el proceso se complete.

El retardo se modela como el tiempo transcurrido entre el inicio de un proceso (o evento) y su finalización.

**Reloj**: Una variable representando el tiempo simulado, generalmente llamada CLOCK.

### Diferencia entre una Actividad y un Retardo

Una **actividad** generalmente representa un tiempo de servicio, un tiempo entre llegadas o cualquier otro tiempo de procesamiento cuya duración ha sido definida dentro del modelo.

Una actividad puede ser especificada de varias formas:
• **Determinista**: Su duración es fija. Ejemplo: siempre dura exactamente **5 minutos**.
• **Estadística**: Su duración se define a partir de una distribución de probabilidad. Ejemplo: un sorteo aleatorio del conjunto {2,5,7} con probabilidades iguales.
• **Funcional**: La duración depende de otras variables del sistema o atributos de la entidad.

Ejemplo: el tiempo de carga de un buque de mineral de hierro puede depender del **peso de carga permitido** y de la **tasa de carga en toneladas por hora**.

A diferencia de una **actividad**, la duración de un **retardo** no la especifica el modelador de antemano, sino que es determinada dinámicamente por las condiciones del sistema.

Frecuentemente, los retardos son valores medidos y constituyen **resultados de la simulación**.



--- 
## Enlaces: 
[[20250211T0713 Algoritmo de programación de eventos -Avance de tiempo]]

## Referencias:
Banks - 3.1 Models of a System - Pag 91-93