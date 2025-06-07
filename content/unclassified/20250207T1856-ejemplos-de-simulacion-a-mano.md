---
created: 2025-02-07T18:56:00
modified: 2025-05-26T09:45:26-06:00
aliases:
  - Ejemplos de Simulación a mano
title: Ejemplos de Simulación a mano
publish: true
---

# Ejemplos de Simulación a mano

> [!NOTE]
> Si podemos pensar como una computadora, probablemente podemos programar una para ejecutar una tarea.

A continuación, exploraremos los detalles de un modelo de simulación de eventos discretos a través de ejemplos prácticos.
## Ejemplo 1: Simulación de demanda

Supongamos que sabemos que la demanda semanal de un producto sigue la siguiente distribución de probabilidad. 

| **Demanda <br>(unidades por semana)** | **Probabilidad** |
| ------------------------------------- | ---------------- |
| 0                                     | .20              |
| 1                                     | .30              |
| 2                                     | .40              |
| 3                                     | .10              |
|                                       | Total = 1.00     |
Para **simular** la demanda semanal, podemos generar números aleatorios entre 0 y 9 y asignarlos a valores de demanda semanal de la siguiente manera:

| **Demanda <br>(unidades por semana)** | **Probabilidad** | **Digito(s) asignados** |
| ------------------------------------- | ---------------- | ----------------------- |
| 0                                     | .20              | 0,1                     |
| 1                                     | .30              | 2,3,4                   |
| 2                                     | .40              | 5,6,7,8                 |
| 3                                     | .10              | 9                       |
|                                       | Total = 1.00     |                         |
Esto significa que, si generamos un número aleatorio y obtenemos 0 o 1, la demanda semanal será 0. Si el número es 2, 3 o 4, la demanda será 1. Si es 5, 6, 7 u 8, la demanda será 2, y si es 9, la demanda será 3.

Para **correr** la simulación, generamos 10 valores aleatorios entre 0 y 9 y registramos la demanda simulada correspondiente.

https://numbergenerator.org/randomnumbergenerator#!numbers=10&low=0&high=9&unique=true&csv=&oddeven=&oddqty=0&sorted=false&addfilters=

**Ejemplo de simulación con 10 semanas**

| Semana | Dígito aleatorio <br>muestreado | Demanda<br>simulada |
| ------ | ------------------------------- | ------------------- |
| 1      | 5                               | 2                   |
| 2      | 8                               | 2                   |
| 3      | 9                               | 3                   |
| 4      | 2                               | 1                   |
| 5      | 8                               | 2                   |
| 6      | 6                               | 2                   |
| 7      | 5                               | 2                   |
| 8      | 2                               | 1                   |
| 9      | 5                               | 2                   |
| 10     | 2                               | 1                   |
|        | Suma                            | 18                  |
|        | $\bar{X}=18/10$                 | 1.8                 |
|        | $s$                             | 0.97                |
Este proceso nos permite estimar un parámetro del sistema, en este caso, la **media muestral** de la demanda semanal.

Si repetimos el experimento con otro conjunto de 10 valores aleatorios, obtendremos una **estimación diferente** de la media poblacional.

| Semana | Dígito aleatorio <br>muestreado | Demanda<br>simulada |
| ------ | ------------------------------- | ------------------- |
| 1      | 1                               | 0                   |
| 2      | 7                               | 2                   |
| 3      | 8                               | 2                   |
| 4      | 2                               | 1                   |
| 5      | 2                               | 1                   |
| 6      | 7                               | 2                   |
| 7      | 0                               | 0                   |
| 8      | 9                               | 1                   |
| 9      | 5                               | 2                   |
| 10     | 0                               | 0                   |
|        | Suma                            | 11                  |
|        | $\bar{X}=11/10$                 | 1.1                 |
|        | $s$                             | 0.88                |

En este caso ambos valores de $\bar{X}$ serán **estimadores** del verdadero promedio: $\mu$, la **media poblacional** ; la cual por tratarse de una simple distribución de probabilidad totalmente conocida sabemos que es igual que el valor esperado de X.

> [!NOTE]
> Sabemos que $\bar{x}$ es un estimador de $\mu=E(X)$

>[!QUESTION]
> ¿Cuál es el valor de  $\mu$ ?

### Cálculo Analítico del Valor Esperado  $\mu$

Dado que conocemos la distribución de probabilidad de la demanda, podemos calcular su valor esperado:
$$\mu=E(C)=\Sigma X \cdot P(X)$$

| 0 x 0.2 = | 0           |
| --------- | ----------- |
| 1 x 0.3 = | 0.3         |
| 2 x 0.4 = | 0.8         |
| 3 x 0.1 = | 0.3         |
|           | 1.4 = $\mu$ |
Esto confirma que la **demanda promedio real** para esta distribución es **1.4 unidades por semana**.

Como se puede ver, la simulación es muy similar a lo que haríamos en un ejercicio estadísticos, con la diferencia que en lugar de obtener los datos del mundo real, utilizamos en este caso un algoritmo para simular los datos.
### Reflexión: ¿Cuándo es útil la simulación?

En este caso particular, como ya conocemos la distribución de demanda, la mejor opción es calcular directamente su valor esperado. Sin embargo, en la mayoría de los problemas del mundo real, **no conocemos la distribución exacta** o es demasiado compleja para resolverla analíticamente.

En estos casos, la **simulación** es una herramienta clave para estimar valores y analizar el comportamiento del sistema bajo diferentes condiciones.

## Ejemplo 2: Ejemplo de una Caja Registradora

Queremos modelar el proceso de pago en una tienda pequeña. **Hay un solo cajero y una única fila de clientes.**

**Objetivos del análisis**
1. **Determinar el tiempo promedio que un cliente pasa en el sistema** (espera + servicio).
2. **Calcular el porcentaje de tiempo que el cajero permanece inactivo**.

Supongamos que:
• El **tiempo entre llegadas** de los clientes sigue una distribución **uniforme** entre **1 y 10 minutos**.
• El **tiempo de servicio** de cada cliente sigue una distribución **uniforme** entre **1 y 6 minutos**

Para simular este sistema, necesitamos generar una secuencia de eventos artificiales que sean representativos del comportamiento real. En otras palabras, requerimos una manera artificial de generar los **tiempos entre llegadas** y los **tiempos de servicio**, de acuerdo con las distribuciones establecidas.

Una manera de hacer esto es utilizar **diez fichas de póker** y **un dado**:
• Extraemos una ficha numerada del **1 al 10** para determinar el **tiempo entre llegadas**.
• Lanzamos un dado **(1 a 6)** para obtener el **tiempo de servicio** del cliente.

Repitiendo este proceso, podemos generar una secuencia de llegadas de clientes y tiempos de servicio.

Una vez que generamos estos tiempos, nuestro problema se reduce a **un ejercicio de registro y seguimiento de eventos en el sistema**.

### Resultados de una simulación manual con 20 clientes

A continuación, se muestra un **ejemplo de simulación** con 20 clientes. (Se asume que la simulación comienza en el momento en que llega el primer cliente al sistema).


![[6 Digital Garden/unclassified/_attachments/Pasted image 20250215045530.png|4 Zettlekasten/_attachments/Pasted image 20250215045530.png]]

### Métricas del sistema

Los resultados de esta corrida de la simulación son los siguientes:

- Tiempo promedio de los clientes en el sistema:  $\frac{68}{20}=3.4$ minutos
- Porcentaje del tiempo que el cajero esta desocupado = $\frac{55}{118}\times100\%=47\%$

Para obtener resultados estadísticamente significativos, sería necesario utilizar una muestra mucho más grande. Además, hemos pasado por alto algunos aspectos importantes en la simulación de sistemas, como las **condiciones iniciales** (por ejemplo, cuántos clientes ya están esperando cuando la tienda abre por la mañana).

Lo más importante aquí es que estamos utilizando **dos métodos para generar números aleatorios** (fichas numeradas y un dado) con el fin de **crear una experiencia simulada** del sistema. Esto nos permite analizar y comprender mejor algunas de sus características de desempeño.

### Consideraciones

Que podemos aprender de esta simulación:
1.  Es un modelo de simulación de eventos discretos (DES), el sistema únicamente cambia cuando ocurre uno de dos posibles eventos: un cliente entra al sistema o el cajero termina el servicio (y el cliente se va).
2. Este simple ejemplo iustra tres elementos críticos que están presentes en todo modelo de Simulación de Eventos Discretos (DES):
	- **Aleatoriedad**: Modelamos la incertidumbre con distribuciones de probabilidad.
	- **Avance de tiempo**: La simulación **salta de un evento a otro** en lugar de avanzar en intervalos fijos.
	- **Estadísticas de resultados**: Calculamos métricas como **tiempo en cola, tiempo en servicio y porcentaje de inactividad del cajero**.
	
---
## Referencias
Algunos de estos ejemplos está basado en material de **Linda Weiser Friedman**, publicado bajo la licencia **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)**. Fuente original: [https://sim.proffriedman.net/lectures].



--- 
## Enlaces: 


## Referencias:
https://youtu.be/E4wt9oVHzhc?si=8h8QMrv7mjvaiOoA

---
**Nota diaria:** [[2025-02-07]]
