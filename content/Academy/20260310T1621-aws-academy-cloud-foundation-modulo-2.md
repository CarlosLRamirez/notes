---
created: 2026-03-10 16:21
modified: 2026-03-10 16:27
tags:
  - teaching
  - AWS
  - aws-academy
  - edutek
title: AWS Academy Cloud Foundation - Modulo 2
aliases: AWS Academy Cloud Foundation - Modulo 2
publish: true
folder: Academy
---

# AWS Academy Cloud Foundation - Modulo 2

## 💰 Guía de Clase: Módulo 2 - Economía y Facturación de la Nube

### 1. La Filosofía de Precios (El "Gancho")

Explícales que AWS funciona como la factura de la luz o el agua: **"Pagas por lo que usas"**.

- **Dato Clave:** AWS ha bajado sus precios **más de 75 veces** desde 2006. Esto se debe a las "Economías de Escala" (al crecer tanto, sus costos bajan y te pasan ese ahorro a ti).
    
- **Los 3 pilares del costo:**
    1. **Cómputo:** Pagas por hora o segundo (instancias EC2).
    2. **Almacenamiento:** Pagas por GB (S3 o EBS).
    3. **Transferencia de Datos:** **Ojo aquí:** La entrada es gratis, la salida (hacia internet) se cobra.
        

### 2. Costo Total de Propiedad (TCO)

Aquí es donde muchos alumnos se confunden. No es solo comparar el precio de un servidor con una instancia de AWS.
- **Ejemplo del Iceberg:** El costo del servidor es solo la punta. Debajo del agua están: electricidad, refrigeración, seguridad física, personal de mantenimiento y el costo de oportunidad (el tiempo que pierdes configurando cables en lugar de innovar).
- **Dato de impacto:** Según el caso de _Delaware North_ que está en tu PPT, eliminaron el 90% de sus servidores físicos al migrar a AWS.
    

### 3. AWS Organizations (Gestión de Cuentas)

Úsalo para explicar cómo una empresa grande controla sus gastos.

- **Facturación Unificada:** Una sola factura para todas las cuentas de la empresa para obtener descuentos por volumen.
    
- **SCPs (Políticas de Control de Servicios):** Puedes prohibir que un equipo de "Desarrollo" use instancias carísimas por error.
    

### 4. Herramientas de Control (El Panel de Control)

Menciona estas cuatro herramientas como el "kit de supervivencia":

1. **Calculadora de Precios de AWS:** Para estimar costos _antes_ de construir.
    
2. **AWS Budgets:** Para que AWS te mande un correo si te estás pasando de tu presupuesto (¡muy importante para los alumnos!).
    
3. **Cost Explorer:** Para ver gráficos de en qué gastaste el mes pasado.
    
4. **Informes de Costo y Uso:** El detalle máximo (nivel Excel) de cada recurso.
    

### 5. Planes de Soporte (Diferencias Críticas)

AWS tiene 4 niveles: **Basic, Developer, Business y Enterprise**.

- **Dato Clave para el examen:** El plan **Enterprise** es el único que te da un **TAM** (Technical Account Manager), que es básicamente un consultor dedicado de AWS para tu empresa.
    
- **Respuesta ante crisis:** En el plan Enterprise, si tu sistema crítico falla, AWS te responde en **15 minutos o menos**.
    

---

### 🛠️ Apoyo para las Actividades

**Actividad 1: Calculadora de Precios (20 min)**

- **Tip de Robin:** Divide a la clase en grupos y dales el "Escenario 1" de la Guía del Instructor (pág. 11): _Aplicación web con RDS en Virginia_.
    
- Pídeles que comparen cuánto cuesta una instancia **Bajo Demanda** frente a una **Reservada**. El ahorro suele ser de hasta el 75%. ¡Eso les abrirá los ojos!
    

**Actividad 2: Búsqueda del Tesoro de Soporte**

- Pregúntales: _"Si soy una startup con poco dinero pero necesito que alguien me responda dudas técnicas en horario de oficina, ¿qué plan elijo?"_ (Respuesta: **Developer**).
    

---

### 🎓 Pregunta de Examen (Cloud Practitioner)

Úsala para cerrar:

> **Pregunta:** ¿Qué herramienta de AWS proporciona recomendaciones para optimizar la seguridad y reducir costos analizando tu configuración en tiempo real?
> 
> A) AWS Budgets
> 
> B) AWS Trusted Advisor
> 
> C) AWS Pricing Calculator
> 
> D) Amazon Inspector
> 
> **Respuesta correcta:** **B) AWS Trusted Advisor.** Diles que lo imaginen como un "médico" que revisa la salud de su cuenta.

---

### 💡 Nota técnica para ti (Learner Lab)

Carlos, como usarás el **Learner Lab**, recuerda a los alumnos que tienen **$100 USD** de crédito.

- Diles que si no terminan el laboratorio haciendo clic en **"End Lab"**, algunos recursos (como NAT Gateways o Load Balancers) seguirán consumiendo esos $100 aunque no los usen. ¡Que no se queden sin crédito a mitad de semestre!
    
