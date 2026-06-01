---
created: 2026-03-25 12:08
modified: 2026-03-25 14:47
tags:
  - teaching
  - AWS
  - aws-academy
title: AWS Academy Cloud Foundation - Modulo 4
aliases: AWS Academy Cloud Foundation - Modulo 4
publish: true
folder: Academy
---
# Notas del Instructor: AWS IAM - Roles, Políticas y Mejores Prácticas

**Módulo de AWS Academy:** Módulo 4 (Seguridad en la Nube)

**Tema:** AWS Identity and Access Management (IAM)

## 1. Analogía Principal: Roles vs. Usuarios Programáticos

Para explicar a los alumnos por qué no deben dejar _Access Keys_ dentro del código o en instancias EC2, utilizo la siguiente analogía:

- 🧑‍💻 **Usuario IAM (Acceso Programático):** Es como un empleado con una **tarjeta de identificación permanente** (Access Key y Secret Key). Esa tarjeta tiene su nombre. Si la aplicación guarda esa tarjeta en su código fuente (hardcoding) y un hacker roba el código, el hacker obtiene la tarjeta y puede entrar a la empresa haciéndose pasar por la aplicación de forma permanente (hasta que se revoque la llave).
    
- 🎩 **Rol de IAM:** Es como un **sombrero o un pase de visitante temporal**. No tiene nombre ni credenciales permanentes. Un servidor (EC2) se "pone el sombrero" temporalmente para hacer un trabajo (ej. leer S3). AWS rota las credenciales automáticamente por detrás (vía STS). Si un hacker entra, no hay "llaves secretas" en el código que pueda robar y llevarse.
    

> [!tip] Regla de Oro para los Alumnos
> 
> - ¿Es un humano o una app _fuera_ de AWS (ej. script en la laptop)? -> **Usuario IAM con Access Keys.**
>     
> - ¿Es un servicio de AWS (ej. EC2, Lambda)? -> **Rol IAM.** ¡NUNCA guardar llaves en un servidor!
>     

## 2. Demo en Vivo: EC2 accediendo a S3 sin llaves

Esta demo ilustra el uso de un Rol IAM de manera práctica (alineado al caso de estudio de la diapositiva 29).

### Preparación (Antes de clase):

1. Crear un Bucket de S3 (ej. `bucket-demo-clase`) con un archivo de prueba.
    
2. Lanzar una instancia EC2 (Amazon Linux). **Importante:** Lanzarla _sin_ asignarle un Rol IAM. Abrir el puerto 22 (o usar EC2 Instance Connect).
    

### Ejecución (En clase):

1. **El Problema:** Conectarse a la instancia y ejecutar `aws s3 ls s3://[nombre-del-bucket]`.
    
    - _Resultado:_ Error (Access Denied). El servidor no tiene identidad.
        
2. **El Camino Incorrecto:** Preguntar a la clase por qué correr `aws configure` y pegar las _Access Keys_ de un usuario es una falla crítica de seguridad (Robo de credenciales).
    
3. **El Camino Correcto (Crear el Rol):** * Ir a IAM -> Roles -> Crear Rol.
    
    - Entidad de confianza: Servicio de AWS (EC2).
        
    - Política: `AmazonS3ReadOnlyAccess`.
        
    - Nombre: `Rol-Demo-EC2-S3`.
        
4. **La Solución:** * Ir a la consola EC2 -> Seleccionar Instancia -> Acciones -> Seguridad -> Modificar rol de IAM.
    
    - Asignar `Rol-Demo-EC2-S3`.
        
    - Volver a la terminal de EC2 (sin reiniciar) y ejecutar el comando `aws s3 ls` nuevamente.
        
    - _Resultado:_ ¡Éxito! AWS usa credenciales temporales automáticamente.
        

## 3. Conceptos Avanzados (Preguntas Frecuentes)

### A. ¿Cómo limito un Rol a una sola instancia EC2 específica?

> _"Profe, ¿cómo evito que otra instancia EC2 use este rol para leer mi bucket?"_

- **El Mito:** Poner el ID de la instancia en la "Trust Policy" del Rol. _(Falso: El rol confía en el servicio `ec2.amazonaws.com` en general)._
    
- **La Realidad (`iam:PassRole` + Etiquetas):** En AWS, no limitas el rol a la máquina, **limitas quién puede ponerle ese rol a la máquina**.
    
    1. Se requiere el permiso especial `iam:PassRole` para asignar un rol a un servicio.
        
    2. Usamos Políticas IAM para decirle a los desarrolladores: _"Solo puedes usar `iam:PassRole` para asignar este rol si la instancia EC2 destino tiene el Tag `Proyecto = Secreto`"_. (Control de Acceso Basado en Atributos - ABAC).
        

### B. ¿Dónde encuentro la lista de tooooodas las acciones de las políticas (ej. `ec2:Describe*`)?

La referencia maestra de AWS es la **Referencia de Autorización de Servicios de AWS**.

🔗 [Enlace a la documentación oficial de Acciones, Recursos y Condition Keys](https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html "null")

> [!info] Trucos Prácticos para la Clase
> 
> 1. **Editor Visual de IAM:** Al crear una política en la consola, usar el Editor Visual permite buscar comodines (como "Describe") y ver la lista real de acciones aplicables.
>     
> 2. **Simulador de Políticas IAM (Policy Simulator):** Herramienta excelente para probar qué acciones están permitidas o denegadas antes de implementar una política en producción.
>     

### C. Tipos de Políticas: Managed vs. Inline

¿Cuál es la diferencia si ambas las creamos desde cero? **El lugar donde viven y su reutilización.**

1. **AWS Managed Policies (Administradas por AWS):** Pre-construidas por AWS (ej. `AdministratorAccess`). No se puede modificar su código.
    
2. **Customer Managed Policies (Administradas por el cliente):** Creadas por nosotros desde cero. Viven como un objeto independiente en IAM. **Son reutilizables** (se pueden asignar a múltiples usuarios/roles).
    
3. **Inline Policies (Políticas insertadas/en línea):** Creadas desde cero, pero **se incrustan directamente dentro de un único Usuario, Grupo o Rol.** * No existen por sí solas.
    
    - No se pueden asignar a nadie más.
        
    - Si eliminas al Usuario/Rol, la política se destruye con él.
        
    - _Uso ideal:_ Cuando quieres asegurar que un permiso súper específico jamás se asigne por accidente a otra persona.
        

### D. Políticas basadas en Identidad vs. Políticas basadas en Recursos

Para explicar esto de forma sencilla a los alumnos, utiliza esta analogía:

- 🪪 **Políticas Basadas en Identidad (Identity-based policies):**
    
    - **Analogía:** Es como una **credencial o pase VIP** que un empleado lleva en el bolsillo. A donde quiera que vaya en el edificio, el pase le dice a qué salas puede entrar.
        
    - **Explicación técnica:** Se asocian a un Usuario, Grupo o Rol de IAM. Responden a la pregunta: _"¿Qué puede hacer esta persona/rol?"_ (Ej. El usuario Carlos tiene una política que le permite leer S3).
        
- 📋 **Políticas Basadas en Recursos (Resource-based policies):**
    
    - **Analogía:** Es como la **lista de invitados en la puerta de un club exclusivo** (el recurso). No importa qué pase lleve la persona en el bolsillo; si su nombre está en la lista pegada en la puerta de esa sala específica, puede entrar.
        
    - **Explicación técnica:** Se asocian directamente al recurso de AWS (no a la persona). Responden a la pregunta: _"¿Quién puede acceder a este recurso específico y desde dónde?"_.
        
    - **Ejemplo clásico:** Las _Bucket Policies_ de S3, o las políticas de claves de KMS.
        

**¿Qué pasa si se contraponen (conflicto de políticas)? ¿Quién gana?**

> _"Profe, ¿qué pasa si mi política de identidad me da acceso, pero la política del bucket me lo niega, o viceversa?"_

Esta es la regla de oro de evaluación de IAM en AWS (para una misma cuenta):

1. **El `Deny` explícito SIEMPRE gana:** Es un veto absoluto. No importa cuántos permisos tengas; si el pase VIP en tu bolsillo dice "Denegar" O la lista en la puerta del club dice "Denegar", te quedas afuera.
    
2. **Un `Allow` explícito en CUALQUIERA de las dos es suficiente:** Si _no hay ningún Deny en ninguna parte_, basta con que tu pase VIP diga "Permitir" **O** que la lista en la puerta diga "Permitir" para que tengas acceso al recurso. No necesitas tener el permiso en ambos lugares.
    

> [!info] Tip para el Examen de Certificación
> 
> Recuérdales a los alumnos que **todas** las identidades IAM pueden tener políticas asociadas, pero **no todos** los recursos de AWS soportan políticas basadas en recursos (los más comunes que sí las soportan son S3, KMS, SQS y SNS).

**Ejemplo Práctico: S3 Bucket Policy (El Deny Explícito SIEMPRE Gana)**

Esta es la demostración perfecta para la clase. Le daremos al `usuario-1` y al `usuario-2` permisos de `AmazonS3FullAccess` en sus políticas de identidad. Luego, aplicaremos esta política directamente en el bucket. El resultado será que el `usuario-2` quedará completamente bloqueado, demostrando que la política del recurso con un `Deny` aplasta los permisos de identidad.

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PermitirTodoAUsuario1",
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::895591877452:user/usuario-1"
      },
      "Action": "s3:*",
      "Resource": [
        "arn:aws:s3:::practitioner-demo-24032025-clrm",
        "arn:aws:s3:::practitioner-demo-24032025-clrm/*"
      ]
    },
    {
      "Sid": "DenegarTodoAUsuario2",
      "Effect": "Deny",
      "Principal": {
        "AWS": "arn:aws:iam::895591877452:user/usuario-2"
      },
      "Action": "s3:*",
      "Resource": [
        "arn:aws:s3:::practitioner-demo-24032025-clrm",
        "arn:aws:s3:::practitioner-demo-24032025-clrm/*"
      ]
    }
  ]
}
```

> [!info] Puntos clave para explicar a los alumnos en esta demostración:
> 
> 1. **El poder del `Effect: Deny`:** Explícales que aunque el `usuario-2` tenga `AmazonS3FullAccess` o incluso `AdministratorAccess` pegado en su usuario IAM (pase VIP), la lista en la puerta de este bucket específico (`practitioner-demo-24032025-clrm`) dice "Tú no entras". El `Deny` explícito es la ley máxima en la evaluación de políticas de AWS.
>     
> 2. **Doble Declaración de `Resource`:** Observen que se especifican dos ARNs en el bloque de recursos:
>     
>     - `"arn:aws:s3:::practitioner-demo-24032025-clrm"` -> Protege acciones a nivel del "contenedor" (ej. listar el contenido del bucket o ver sus métricas).
>         
>     - `"arn:aws:s3:::practitioner-demo-24032025-clrm/*"` -> Protege acciones sobre los "objetos" dentro del bucket (ej. leer, subir, borrar archivos).
>         
> 3. **Cambiar entre perfiles con la CLI:** Usa el "Pro Tip" de la CLI de abajo (`--profile usuario-1` y `--profile usuario-2`) para demostrarles en vivo cómo el comando `aws s3 ls` funciona para uno y falla rotundamente para el otro.
>     

## 4. Guía Práctica: Configuración y Uso Básico de AWS CLI

Para que los alumnos interactúen con AWS desde su terminal local, necesitan configurar la AWS CLI.

### A. Configurar Credenciales

**Método Estándar (Para Usuarios IAM normales):**

1. Abre la terminal.
    
2. Ejecuta el comando:
    
    ```
    aws configure
    ```
    
3. La CLI pedirá 4 datos de forma interactiva:
    
    - **AWS Access Key ID:** `AKIAIOSFODNN7EXAMPLE`
        
    - **AWS Secret Access Key:** `wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY`
        
    - **Default region name:** `us-east-1` (o la que estén usando en el curso).
        
    - **Default output format:** `json` (recomendado) o `table`.
        

> [!warning] Tip para el Learner Lab de AWS Academy
> 
> ¡Ojo aquí con los alumnos! En el _Learner Lab_, no tienen _Access Keys_ permanentes. Para usar la CLI localmente, deben:
> 
> 1. Ir al panel de Vocareum.
>     
> 2. Hacer clic en **"AWS Details"** y luego en **"Show"** junto a _AWS CLI_.
>     
> 3. Copiar todo el bloque de texto (que incluye el `aws_session_token`) y pegarlo en su archivo `~/.aws/credentials` (Mac/Linux) o `%USERPROFILE%\.aws\credentials` (Windows).
>     
>     _Estas credenciales cambian cada que inician el laboratorio._
>     

### B. Comandos Esenciales (Cheatsheet)

Ideal para compartir con los estudiantes para que comiencen a probar la CLI inmediatamente:

**1. Verificar tus credenciales (El "whoami" de AWS):**

_(Este es el comando genérico perfecto para saber si la sesión está activa y qué rol o usuario estamos usando)._

```
aws sts get-caller-identity
```

**2. Listar todos los buckets de S3:**

```
aws s3 ls
```

**3. Listar instancias EC2:**

_(El comando simple devuelve un documento JSON muy largo, así que te incluyo una versión "Pro" que filtra la salida a una tabla fácil de leer para los alumnos)._

```
# Comando simple (devuelve todo en JSON)
aws ec2 describe-instances

# Comando Pro (Devuelve solo el ID y el Estado en una tabla limpia)
aws ec2 describe-instances --query "Reservations[*].Instances[*].[InstanceId, State.Name]" --output table
```

**4. Detener una instancia EC2:**

_(Deben reemplazar el ID con el de su propia instancia)._

```
aws ec2 stop-instances --instance-ids i-1234567890abcdef0
```

**5. Iniciar una instancia EC2:**

```
aws ec2 start-instances --instance-ids i-1234567890abcdef0
```

### C. Pro Tip: Manejo de Múltiples Perfiles (Named Profiles)

> [!tip] Tip Avanzado para Pruebas en Clase
> 
> Si los alumnos están probando políticas y necesitan cambiar rápidamente entre varios usuarios (por ejemplo, probar si `user-1` tiene acceso pero `user-2` no), ¡no necesitan sobreescribir sus credenciales ejecutando `aws configure` cada vez!

Pueden configurar múltiples **perfiles nombrados** simplemente agregando el parámetro `--profile`:

```
# Configurar credenciales para el usuario 1
aws configure --profile user-1

# Configurar credenciales para el usuario 2
aws configure --profile user-2
```

Para ejecutar cualquier comando usando los permisos de un usuario específico, solo deben añadir la bandera `--profile` al final del comando:

```
# Ver quién soy usando el perfil del usuario 1
aws sts get-caller-identity --profile user-1

# Intentar listar buckets como el usuario 2
aws s3 ls --profile user-2
```

Esto es espectacular para hacer demostraciones en vivo en la misma terminal comparando diferentes niveles de acceso.