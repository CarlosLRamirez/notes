---
created: 2025-02-28T12:25:35
modified: 2025-05-26T09:46:38-06:00
aliases:
  - Funciones Generadoras en Python
tags:
  - python
  - simpy
  - modelado-y-simulacion
  - simulación
zettel-type:
  - concept
title: Funciones Generadoras en Python
publish: true
---
# Funciones Generadoras en Python

## Resumen:

Las funciones generadoras en Python son funciones que utilizan la palabra clave `yield` para producir un objeto generador, permitiendo la creación de iteradores de manera sencilla. Estas funciones “pausan” su ejecución en cada `yield`, conservando su estado, y reanudan la ejecución cuando se solicita el siguiente valor, lo que permite trabajar con secuencias potencialmente infinitas o muy grandes de forma eficiente.
## Puntos Clave:

### Definición:

Una función generadora se define con def y contiene al menos un yield. Al llamarla, no se ejecuta de inmediato, sino que retorna un objeto generador.

### Comportamiento:

Cada vez que se invoca yield, la función cede el control y guarda su estado interno, de modo que al reanudar la ejecución se continúa desde ese punto.

### Ventajas:

• **Eficiencia de memoria:** Genera valores sobre la marcha sin almacenar toda la secuencia en memoria.
• **Simplicidad:** Permite escribir código iterativo y asíncrono de forma natural.
• **Aplicaciones en simulación:** En frameworks como SimPy, se usan para modelar procesos que se pausas y reanudan (por ejemplo, para esperar un tiempo o solicitar recursos).
## Ejemplo Básico:

```
def generador_numeros():
    n = 0
    while True:
        yield n  # Pausa y devuelve el valor actual de n
        n += 1

# Uso del generador
gen = generador_numeros()
print(next(gen))  # Imprime 0
print(next(gen))  # Imprime 1
print(next(gen))  # Imprime 2
```

## Notas Adicionales:

- En SimPy, cada proceso se implementa como una función generadora. Por ejemplo, cuando se usa yield env.timeout(tiempo) o yield resource.request(), se está pausando el proceso hasta que se cumpla la condición, permitiendo simular eventos discretos de manera eficiente.
- El uso de generadores facilita la modelación de la concurrencia sin necesidad de hilos reales, ya que el entorno de simulación gestiona la reanudación y pausa de los procesos de forma ordenada.

## Notas Relacionadas

[Simpy Introduction](20250221T1725-simpy-introduction.md)
[Introducción a Simpy y Simulación de Sistemas de Colas (M-M-1)](Introducción%20a%20Simpy%20y%20Simulación%20de%20Sistemas%20de%20Colas%20(M-M-1).md)
[Ejemplo de Simulacion con Simpy](20250224T1757%20Ejemplo%20Simulacion%20con%20Simpy.md)
[[Simulacion Sistema de cola 1 solo servidor en Python con Simpy]]

---
**Nota diaria:** [2025-02-28](2025-02-28.md)
