---
created: 2026-03-25 19:32
modified: 2026-03-25 19:33
tags:
  - teaching
  - AWS
  - IAM
title: "Guía de Laboratorio: IAM, AWS CLI y Políticas de Seguridad"
aliases: "Guía de Laboratorio: IAM, AWS CLI y Políticas de Seguridad"
publish: true
folder: Academy
---
# Guía de Laboratorio: IAM, AWS CLI y Políticas de Seguridad

¡Bienvenido al laboratorio de Seguridad y Gestión de Accesos! En esta práctica aplicarás conceptos fundamentales de AWS Identity and Access Management (IAM).

**Objetivos del Laboratorio:**

1. Configurar y utilizar la interfaz de línea de comandos (AWS CLI).
    
2. Asignar permisos a servidores de forma segura utilizando Roles IAM.
    
3. Demostrar la regla del "Deny Explícito" utilizando Políticas Basadas en Recursos (S3 Bucket Policies).
    

## Práctica 1: Configuración y Acceso por AWS CLI

En esta primera parte, conectaremos tu terminal local con tu cuenta de AWS Academy utilizando credenciales temporales.

### Paso 1: Obtener tus credenciales del Learner Lab

1. Ingresa a tu panel de **Vocareum** (AWS Academy Learner Lab) e inicia tu laboratorio haciendo clic en **Start Lab**.
    
2. Haz clic en el enlace **AWS Details** (arriba a la derecha).
    
3. En la ventana que aparece, busca la sección **AWS CLI** y haz clic en **Show**.
    
4. Copia todo el bloque de texto que aparece (comienza con `[default]` e incluye `aws_access_key_id`, `aws_secret_access_key` y `aws_session_token`).
    

### Paso 2: Configurar tu entorno local

1. Abre la terminal de tu computadora (Símbolo del sistema/PowerShell en Windows, o Terminal en Mac/Linux).
    
2. Busca o crea el archivo de credenciales de AWS:
    
    - **Windows:** `%USERPROFILE%\.aws\credentials` (Ej. `C:\Users\TuUsuario\.aws\credentials`)
        
    - **Mac/Linux:** `~/.aws/credentials`
        
3. Abre el archivo con un editor de texto de texto simple (como el Bloc de Notas) y pega el bloque de texto que copiaste en el Paso 1. Guarda el archivo.
    

### Paso 3: Verificar la conexión

1. En tu terminal, ejecuta el comando de verificación de identidad:
    
    ```
    aws sts get-caller-identity
    ```
    
2. Si la configuración fue exitosa, verás un resultado en formato JSON con tu `UserId`, `Account` y `Arn`. ¡Ya estás conectado a AWS desde tu computadora!
    

## Práctica 2: Roles IAM (Acceso Seguro sin Llaves)

Vamos a demostrar por qué NUNCA debes guardar tus credenciales de AWS CLI dentro de un servidor EC2, y cómo usar Roles en su lugar.

### Paso 1: Crear un recurso de prueba

1. Ve a la consola de AWS, entra a **S3** y crea un bucket.
    
2. Nómbralo algo único, por ejemplo: `lab-roles-bucket-[tu-nombre-y-fecha]`.
    
3. Sube cualquier archivo de texto o imagen pequeño a este bucket.
    

### Paso 2: Lanzar una instancia EC2 y probar el error

1. Ve a la consola de **EC2** y lanza una nueva instancia usando **Amazon Linux 2023** (puedes dejar todos los valores por defecto). **IMPORTANTE: No le asignes ningún Rol IAM en este paso.**
    
2. Una vez que la instancia esté en ejecución, selecciónala y haz clic en **Conectar** usando **EC2 Instance Connect** (en el navegador).
    
3. En la terminal de la instancia, intenta listar los archivos de tu bucket ejecutando:
    
    ```
    aws s3 ls s3://[NOMBRE-DE-TU-BUCKET]
    ```
    
    - _Resultado esperado:_ Un error de **Access Denied** o falta de credenciales. La instancia no tiene permisos.
        

### Paso 3: Crear y asignar el Rol IAM

1. Abre una nueva pestaña, ve a la consola de **IAM** -> **Roles** -> **Crear rol**.
    
2. Tipo de entidad de confianza: **Servicio de AWS**. Caso de uso: **EC2**.
    
3. En permisos, busca y selecciona: `AmazonS3ReadOnlyAccess`.
    
4. Nombre del rol: `Rol-EC2-Lector-S3`. Haz clic en **Crear rol**.
    
5. Regresa a la consola de **EC2**, selecciona tu instancia -> **Acciones** -> **Seguridad** -> **Modificar rol de IAM**.
    
6. Selecciona el `Rol-EC2-Lector-S3` y haz clic en **Actualizar rol de IAM**.
    

### Paso 4: Comprobar el acceso

1. Regresa a la pestaña donde tienes abierta la terminal de tu instancia EC2.
    
2. Vuelve a ejecutar el comando:
    
    ```
    aws s3 ls s3://[NOMBRE-DE-TU-BUCKET]
    ```
    
    - _Resultado esperado:_ ¡Éxito! Ahora verás el archivo que subiste. AWS generó credenciales temporales en segundo plano gracias al Rol.
        

## Práctica 3: Políticas Basadas en Recursos (El Poder del Deny Explícito)

En esta práctica simularemos a dos usuarios con "Acceso Total" a S3. Luego, aplicaremos una política directamente en el bucket que bloquee explícitamente al Usuario 2.

### Paso 1: Crear los usuarios en IAM

1. Ve a la consola de **IAM** -> **Usuarios** -> **Agregar usuarios**.
    
2. Crea el usuario con el nombre: `usuario-1`.
    
3. En permisos, selecciona **Asociar políticas directamente** y elige `AmazonS3FullAccess`.
    
4. Repite el mismo proceso para crear un `usuario-2`, también con `AmazonS3FullAccess`.
    

### Paso 2: Obtener Access Keys para los usuarios

1. Entra a los detalles de `usuario-1` -> Pestaña **Credenciales de seguridad** -> **Crear clave de acceso**.
    
2. Selecciona **CLI**, confirma y copia el _Access Key_ y el _Secret Key_. (No cierres la ventana o guárdalos en un bloc de notas temporal).
    
3. Haz lo mismo para el `usuario-2`.
    

### Paso 3: Configurar los perfiles en tu CLI local

En la terminal de tu computadora (la que configuraste en la Práctica 1), vamos a crear perfiles nombrados para probar múltiples cuentas rápidamente.

1. Ejecuta el comando para configurar al usuario 1:
    
    ```
    aws configure --profile usuario-1
    ```
    
    _Pega las llaves del usuario 1, usa tu región actual (ej. `us-east-1`) y formato `json`._
    
2. Ejecuta el comando para el usuario 2:
    
    ```
    aws configure --profile usuario-2
    ```
    
    _Pega las llaves del usuario 2._
    

### Paso 4: Crear el Bucket Protegido

1. En la consola de AWS, ve a **S3** y crea un nuevo bucket llamado `bucket-protegido-[tu-nombre]`.
    
2. Como ambos usuarios tienen `AmazonS3FullAccess`, en este momento **ambos** pueden ver el bucket. Compruébalo en tu terminal:
    
    ```
    aws s3 ls s3://bucket-protegido-[tu-nombre] --profile usuario-1
    aws s3 ls s3://bucket-protegido-[tu-nombre] --profile usuario-2
    ```
    
    _(Ninguno de los dos debería dar error)._
    

### Paso 5: Aplicar la Resource Policy (Bucket Policy)

1. En la consola de **S3**, entra a tu nuevo `bucket-protegido-[tu-nombre]`.
    
2. Ve a la pestaña **Permisos** -> **Política del bucket** -> **Editar**.
    
3. Copia y pega la siguiente política. **IMPORTANTE:** Debes reemplazar `[TU_ID_DE_CUENTA]` por tu número de cuenta de AWS (12 dígitos, sin guiones) y `[NOMBRE_DEL_BUCKET]` por el nombre real de tu bucket.
    

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PermitirTodoAUsuario1",
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::[TU_ID_DE_CUENTA]:user/usuario-1"
      },
      "Action": "s3:*",
      "Resource": [
        "arn:aws:s3:::[NOMBRE_DEL_BUCKET]",
        "arn:aws:s3:::[NOMBRE_DEL_BUCKET]/*"
      ]
    },
    {
      "Sid": "DenegarTodoAUsuario2",
      "Effect": "Deny",
      "Principal": {
        "AWS": "arn:aws:iam::[TU_ID_DE_CUENTA]:user/usuario-2"
      },
      "Action": "s3:*",
      "Resource": [
        "arn:aws:s3:::[NOMBRE_DEL_BUCKET]",
        "arn:aws:s3:::[NOMBRE_DEL_BUCKET]/*"
      ]
    }
  ]
}
```

4. Haz clic en **Guardar cambios**.
    

### Paso 6: La Prueba Final (¡El Deny Gana!)

Regresa a tu terminal local y prueba el acceso nuevamente.

1. Prueba como `usuario-1`:
    
    ```
    aws s3 ls s3://bucket-protegido-[tu-nombre] --profile usuario-1
    ```
    
    _Resultado: Sin errores. El usuario 1 tiene permiso._
    
2. Prueba como `usuario-2`:
    
    ```
    aws s3 ls s3://bucket-protegido-[tu-nombre] --profile usuario-2
    ```
    
    _Resultado:_ **¡Access Denied!** **Conclusión:** Acabas de demostrar la regla más importante de evaluación de políticas en AWS: No importa que el Usuario 2 tenga el pase VIP de `AmazonS3FullAccess` pegado a su identidad; si la política del recurso (Bucket Policy) tiene un **Deny Explícito**, el acceso es denegado rotundamente. ¡El `Deny` siempre gana!
    

_Fin del Laboratorio. ¡No olvides eliminar tus instancias EC2 y usuarios de IAM cuando termines para evitar costos innecesarios en tu entorno!_