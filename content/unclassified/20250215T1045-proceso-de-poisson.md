---
modified: 2025-05-26T09:46:05-06:00
created: 2025-02-15T10:45:28-06:00
aliases:
  - Proceso de Poisson
title: Proceso de Poisson
publish: true
---
# Proceso de Poisson
## **¿Qué es un Proceso de Poisson?**

Un **proceso de Poisson** es un modelo matemático que describe la ocurrencia de eventos aleatorios en un intervalo de tiempo o espacio, bajo las siguientes condiciones:

1. **Los eventos ocurren de manera independiente**: La ocurrencia de un evento no afecta la probabilidad de que ocurra otro.
2. **La tasa de ocurrencia es constante**: Existe una tasa promedio de eventos por unidad de tiempo o espacio, denotada como **λ (lambda)**.
3. **No ocurren dos eventos simultáneamente**: En un intervalo de tiempo infinitesimal, solo puede ocurrir un evento a la vez.

Este modelo se usa en situaciones donde los eventos ocurren de manera aleatoria, pero con una frecuencia promedio conocida.

---
## **Ejemplo Intuitivo**

Imagina que trabajas en una cafetería y quieres modelar **la llegada de clientes** a lo largo del día.

- Si en promedio llegan **12 clientes por hora**, pero no sabemos exactamente **en qué momento** lo harán, podemos usar un proceso de Poisson para describir cuántos clientes llegan en un periodo determinado.
- En una hora, podríamos observar **10 clientes, 15 clientes o incluso 20 clientes**, pero la media a largo plazo seguirá siendo **12 clientes por hora**.

---

## **Propiedades Clave del Proceso de Poisson**

1. **Número de eventos en un intervalo de tiempo**
   - Si los eventos ocurren con una tasa promedio **λ eventos por unidad de tiempo**, el número de eventos en un intervalo sigue una **Distribución de Poisson**: 
  $$P(X = k) = \frac{(\lambda t)^k e^{-\lambda t}}{k!}, \quad k = 0, 1, 2, \dots$$
     
     Donde:
     - $X$ es el número de eventos en el intervalo de tiempo $t$
     - $\lambda$  es la tasa promedio de eventos por unidad de tiempo
     - $k$  es el número de eventos observados en el intervalo
     - $e$  es la base del logaritmo natural (~2.718)

2. **Tiempo entre eventos (Distribución Exponencial)**
   - Si los eventos ocurren según un proceso de Poisson, entonces **el tiempo entre eventos consecutivos** sigue una **Distribución Exponencial** con parámetro $\lambda$:
	  $$f(t) = \lambda e^{-\lambda t}, \quad t \geq 0$$

		Esto significa que **los tiempos entre llegadas son variables y aleatorios**, pero su promedio es $1/λ$

---
## **Ejemplo Aplicado**

### **Llegadas de Clientes en un Banco**

Supongamos que en un banco, los clientes llegan con una tasa de **6 clientes por hora** ($λ$ = 6 clientes/hora). Podemos responder las siguientes preguntas con el Proceso de Poisson:

- **¿Cuál es la probabilidad de que lleguen exactamente 8 clientes en una hora?**  
  Usamos la **Distribución de Poisson** con $\lambda = 6, k = 8$:  
$$P(X = 8) = \frac{(6^8) e^{-6}}{8!} \approx 0.103$$  
  Es decir, hay un **10.3% de probabilidad** de que lleguen exactamente **8 clientes** en una hora.
  
- **¿Cuánto tiempo pasa entre la llegada de un cliente y otro?**  

	Usamos la **Distribución Exponencial** con $\lambda = 6$:

$$f(t) = 6 e^{-6t}$$

Esto significa que **el tiempo entre llegadas promedio es 1/6 de hora (10 minutos)**, pero puede haber intervalos más cortos o largos debido a la aleatoriedad.

---
## **Relación con la Simulación**

En la simulación de eventos discretos, un **proceso de Poisson** nos ayuda a modelar **la llegada de clientes, llamadas telefónicas, fallos en sistemas y muchos otros eventos**.

🔹 Para generar llegadas en **Excel**:

```excel
=-5 * LN(RAND())
```

🔹 Para generar llegadas en **Python**:
```python
import numpy as np
np.random.exponential(5)
```

*donde **5** es el tiempo promedio entre llegadas o entre fallas, etc..*

Este modelo es la base para la **Teoría de Colas**, donde analizamos cómo se comporta un sistema con múltiples servidores, tiempos de espera y utilización de recursos.


## **Conclusión**
✅ Un **proceso de Poisson** modela **el número de eventos** en un intervalo de tiempo.
✅ El **tiempo entre eventos** sigue una **Distribución Exponencial**.
✅ Es ampliamente utilizado en la **simulación de eventos discretos** y la **teoría de colas**.

🚀 ¡Este concepto es clave para modelar sistemas como bancos, hospitales y tráfico en redes de comunicación!