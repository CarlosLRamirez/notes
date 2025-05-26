---
created: 2025-02-04T20:07:41
modified: 2025-02-11T06:43:35-06:00
aliases:
  - Simulación de Eventos Discretos
---


## Definición
La Simulación de Eventos discretos (DES) es una técnica de modelado que representa el funcionamiento de un sistema como una secuencia de eventos distintos que ocurren en momentos **específicos** del tiempo. En la DES, el estado del sistema cambia unicamente cuando ocurre un **evento**, y entre los eventos el estado permanece constante.

Este método resulta especialmente útil para analizar sistemas sistemas en donde los cambios se producen en intervalos discretos - por ejemplo, la llegada de clientes, la finalización o la ocurrencia de fallas en maquinaria -permitiendo así estudiar de forma focalizada el impacto y la sincronización de estos eventos en lugar de analizar una evolución continua del sistema.
## Ejemplos: 
- Sistema de colas en un banco
- Línea de producción en una fábrica

### Eventos discretos vs Variables de estado discretas

¿Por qué un sistema de un banco se puede modelar e forma discreta? porque en un banco, en un instante puede haber un cliente, y en el otro instante pueden haber dos clientes, no nos interesa o no es posible que en un instante del tiempo haya medio cliente, o 10% del cliente; sin embargo es importante tener claro que lo que lo hace "discreto" es desde la perspectiva del tiempo el cual se observa en puntos separados en el tiempo, y no de la naturaleza discreta de sus variables de estado.

En otras palabras, se podría dar el caso (teóricamente) en que las variables de estado puedan tomar valores continuos , siempre y cuando que las actualizaciones a esas variables ocurran unicamente en eventos discretos. Por ejemplo, algunos modelos podrían rastrear una variable continua (como un nivel de inventario continuamente variable, como un liquido), que unicamente es actualizada cuando una orden es puesta or recibida, lo cual son eventos discretos.


[[20250211T0643 Conceptos en la Simulación de Eventos Discretos (DES)]]
























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
Banks, 1.11 Discrete -Event System Simulation, Pag. 14

