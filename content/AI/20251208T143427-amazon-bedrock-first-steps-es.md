---
id: 20251208T143427-amazon-bedrock-first-steps-es
aliases:
  - Amazon Bedrock First Steps (es)
tags:
  - amazon-bedrock
  - hands-on-lab
  - ai
created: 2025-12-08 14:34
folder: AI
lang:
  - es
modified: 2025-12-09 18:20
publish: true
title: Amazon Bedrock First Steps (ES)
---

> [[20251208T143427-amazon-bedrock-first-steps-en|Version en Ingles de esta nota]]

## Introducción

Si te encuentras al igual que yo en tus primeros pasos con los servicios de AWS para Inteligencia Artificial, ya sea porque estés preparándote para rendir la certificación de AWS GenAI Practitioner o simplemente quieres experimentar con modelos de AI sin escribir código, esta gúia es para ti.

Aquí te muestro como fue mi primera experiencia con Amazon Bedrock, en la cual experimenté la generación de texto e imágenes utilizando algunos de los modelos fundacionales disponibles.

## Que es Amazon Bedrock

Amazon Bedrock es un servicio completamente gestionado por AWS, el cual puedes utilizar para construir aplicaciones de Inteligencia Artificial Generativa, provee acceso a diferentes modelos fundacionales de AI de los proveedores mas importantes, los cuales te permiten evaluar y personalizar los modelos a tus necesidades, sin preocuparte por la infraestructura que esté detrás.

## Guia desde Cero (Paso a Paso)

### Paso 1: Acceder a Amazon Bedrock en la consola de AWS y listar los modelos disponibles.

- Busqué en la consola de AWS el servicio de Amazon Bedrock,

![[Pasted image 20251208160123.png]]

Y me abrió la consola principal del servicio

![[Pasted image 20251208160241.png]]

- En la consola de Amazon Bedrock busqué Model Catalog

- Aquí es donde puedo ver todos los Foundation Models que están disponibles en Bedrock, clasificados según el Proveedor, Modalidad entre otros.

![[Pasted image 20251208161224.png]]

- Al seleccionar uno de los modelos se puede ver todos los detalles de dicho modelo

![[Pasted image 20251208165442.png]]

> [!NOTE]
> **¡Sorpresa:** Resulta que para utilizar los modelos de Anthropic primero tenemos que comprobar que no somos un bot!
> ![[Pasted image 20251208163809.png]]
> Ver más adelante como poder cumplir este pre-requisito.

### Paso 2: Probar modelos de texto de Amazon

- Para probar algún modelo en modo texto o chat, me fuí a Test > Chat/Text Playground

![[Pasted image 20251208165639.png]]

- Luego seleccioné donde decía Single Prompt (en lugar de Chat)

![[Pasted image 20251208165817.png]]

- y luego el botón de seleccionar modelo

![[Pasted image 20251208165922.png]]

- Aquí seleccioné el modelo **Amazon Micro** de Amazon.

![[Pasted image 20251208213651.png]]

- Dejando todas las configuraciones por defecto, escribí el siguiente prompt: prompt: _"Explain quantum computing to a 10-year-old, then write a haiku about it."_, este fue el resultado

```md
Sure! Let's start with an explanation that a 10-year-old can understand:

**Quantum Computing for Kids**

Imagine you have a really special kind of toy that can do many things at once. Normally, when you play with your toys, they can either be on or off, like a light switch. But with this special toy, it can be both on and off at the same time! This special toy is like a tiny, magical computer called a "quantum computer."

Quantum computers use tiny particles called "qubits" that can be both 0 and 1 at the same time. This lets them do many calculations all at once, which makes them super fast and powerful for solving really hard puzzles that normal computers can't solve easily.

Now, here's a haiku about quantum computing:

**Quantum Magic**
Tiny bits that dance and spin,
Super-fast, they solve the win,
Quantum's magic spin.
```

![[Pasted image 20251209060453.png]]

- También pude ver información relevante como por ejemplo el numero de tokens de entrada y de salida, así como la latencia, es decir el tiempo que el foundation model utilizó para generar cada token.

![[Pasted image 20251209060843.png]]

- Existen configuraciones adicionales disponibles que se pueden modificar para obtener un resultado más personalizado o específico.

![[Pasted image 20251209061047.png]]

### Paso 3: Probar un Modelo de Anthropic

- Como vimos anteriormente, para utilizar modelos de la empresa Anthropic como el Claude Sonet 4.5, la primera vez es necesario llenar un formulario en el cual se debe especificar el caso de uso por el cual necesitamos acceso a sus módulos, así como los datos de nuestra empresa y URL de la pagina Web.

![[Pasted image 20251209062312.png]]

- Completé el formulario con mi nombre y la URL de mi sitio personal, en el caso de uso describí que lo usaría para experimentación y pruebas, asegurándome de colocar una estimación del volumen de utilización (tokens por mes) y el tiempo que planeaba utilizarlo (para esto me apoyé de la misma IA 😃). Con esto inmediatamente me dejó continuar y estuvo listo para colocar el prompt.

- Utilize el mismo prompt que en el modelo anterior y los resultados fueron los siguientes.

![[Pasted image 20251209063254.png]]

- Pude notar que con este modelo se aplica cierto formato al texto, además que como era de esperarse el texto es diferente, aunque en ambos casos hacen sentido a lo preguntado.

```md
# Quantum Computing for a 10-Year-Old

Imagine you're in a huge maze trying to find the exit. A regular computer is like one person walking through the maze, trying one path at a time until they find the way out.

A quantum computer is like magic! It's as if you could walk down ALL the paths at the same time, then pick the right one. That's because quantum computers use special bits called "qubits" that can be both 0 AND 1 at the same time (regular computer bits can only be 0 OR 1).

It's like if your toy could be both in your toy box and under your bed at the exact same time - until you look at it, then it picks one place to be. Quantum computers use this weird trick to solve really hard problems super fast!

---

## Haiku

_Bits dance in between_
_Zero and one, both at once_
_All paths walked as one_
```

- Estas fueron las métricas para el modelo Claude Sonnet 4.5, como se puede ver este modelo se comporta distinto al anterior.

![[Pasted image 20251209063733.png]]

- Una diferencia con el modelo anterior es que este permite agregar archivos al prompt

![[Pasted image 20251209064527.png]]

- En cuanto a los parámetros de configuración del modelo, noté que son ligeramente distintos que el de Amazon, por ejemplo hay una opción para agregar razonamiento:

![[Pasted image 20251209063952.png]]

- Ademas que la cantidad máxima de tokens es mayor, y las opciones de aleatoriedad y diversidad se configuran de forma diferente.

![[Pasted image 20251209064138.png]]

### Paso 4: Prueba de un modelo para imágenes

- Luego probe la generación de imágenes, para esto me regreso a la consola principal de Amazon Bedrock y seleccioné Test > Image / Video playground

![[Pasted image 20251209064929.png]]

- Primero seleccioné el modelo

![[Pasted image 20251209065011.png]]

- Solo me aparecieron modelos de Amazon, y en este caso utilicé el modelo Nova Canvas 1.0

![[Pasted image 20251209065216.png]]

- Al igual que en los otros modelos de texto, aquí también tenemos diferentes parámetros configurables como por ejemplo el tamaño de la imagen, la cantidad, paleta de colores, y otros parámetros más avanzados que en este momento no comprendo.

![[Pasted image 20251209065409.png]]

- Escribí el siguiente prompt para experimentar con el modelo: _"Show me a person studying for the AWS GenAI practitioner exam on a library with other students."_,

![[Pasted image 20251209182747.png]]

- El resultado, bastante decente, aunque no generó nada que hiciera referencia a AWS o al examen de GenAI practitioner, las escena eran coherentes con lo que indicaba el prompt.

- La imagen la genero en cuestión de segundos, sin embargo no pude encontrar métricas exactas sobre tokens o latencia, 

## Resultados y Conclusiones

- Pude experimentar con Amazon Bedrock las funciones básicas para probar modelos para la generación de texto e imágenes, así como ver la cantidad de modelos fundacionales que ofrece de diversos proveedores.
- También logré utilizar modelos de Anthropic para lo cual tuve que cumplir un requisito previo el cual consiste en llenar un pequeño formulario.
- Amazon Bedrock nos sirve como un lugar centralizado donde podemos acceder a diferentes modelos fundacionales, su interfaz es intuitiva, ideal para principiantes.
- Para poder utilizar modelos de Anthropic desde Amazon Bedrock hay un pre-requisito sencillo de cumplir.

---
