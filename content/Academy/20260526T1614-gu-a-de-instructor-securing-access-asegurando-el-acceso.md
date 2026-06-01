---
created: 2026-05-26 16:14
modified: 2026-05-26 16:17
tags:
  - teaching
  - AWS
  - IAM
title: Guía de Instructor — Securing Access (Asegurando el Acceso)
aliases:
  - Guía de Instructor — Securing Access (Asegurando el Acceso)
publish: true
folder: Academy
---

# Guía de Instructor — Securing Access (Asegurando el Acceso)

### AWS Academy Cloud Architecting | Notas complementarias por slide con ejemplos y tips de examen

> **Formato:** Cada entrada resume lo que cubre el slide, agrega contexto complementario, incluye un ejemplo concreto y donde aplica, un tip de examen destacado.

---

## Slides 1–4 | Título, Introducción, Objetivos y Vista general del módulo

**Lo que cubren los slides:** Introducción al módulo. Tres objetivos: describir los principios de seguridad en AWS, explicar el propósito de usuarios/grupos/roles de IAM, y explicar cómo las políticas de IAM determinan permisos. Cuatro secciones de presentación más una actividad, un lab y evaluaciones de conocimiento.

**Complemento:** Vale la pena enmarcar desde el inicio que IAM es la base de todo lo demás en el curso. Cada módulo que viene — bases de datos, redes, cómputo — va a depender de IAM para controlar quién o qué puede acceder a esos recursos. Los estudiantes que entiendan IAM profundamente encontrarán el resto del curso mucho más fácil de razonar.

**Ejemplo de apertura para el grupo:** _"Al final de este módulo, van a poder ver un documento JSON de política de IAM y decirme exactamente qué permite o deniega, y a quién. Esa es la habilidad práctica que construimos hoy."_

---

## Slide 5 | Laboratorio del módulo

**Lo que cubre el slide:** Un laboratorio guiado: Exploring AWS Identity and Access Management (IAM).

**Complemento:** A diferencia del módulo de S3, no hay laboratorio de desafíos aquí. El laboratorio guiado es el ancla práctica. Diles a los estudiantes que pongan atención especial a cómo se adjuntan políticas a grupos vs. usuarios durante el lab — ese patrón se examina directamente en la pregunta de examen de muestra al final del módulo.

---

## Slide 6 | Preocupación del Arquitecto de Nube

**Lo que cubre el slide:** _"Necesito aplicar las mejores prácticas de seguridad cuando otorgo acceso a recursos en la nube para minimizar el riesgo de acceso no deseado en cada capa de una arquitectura."_

**Complemento:** Este slide establece el mindset correcto. La seguridad no es un paso final — es una restricción de diseño desde el principio. La frase "en cada capa" es importante: IAM controla el acceso a nivel de cuenta y servicio, pero la seguridad también aplica a nivel de red (security groups, NACLs), a nivel de datos (cifrado), y a nivel de aplicación. Este módulo se enfoca en la capa de identidad y acceso.

**Ejemplo concreto:** Un desarrollador que accidentalmente deja un bucket de S3 público, o una instancia EC2 con un rol IAM demasiado permisivo, genera incidentes de seguridad que pudieron prevenirse en tiempo de diseño. El trabajo del arquitecto es hacer que las configuraciones seguras sean el default, no la excepción.

---

## Slide 8 | Modelo de Responsabilidad Compartida de AWS

**Lo que cubre el slide:** AWS es responsable de la seguridad **de** la nube (infraestructura física, hardware, servicios administrados). El cliente es responsable de la seguridad **en** la nube (IAM, configuración del SO, cifrado de datos, seguridad de aplicaciones, configuración de red).

**Complemento:** La línea entre los dos lados del modelo se mueve según el tipo de servicio:

- **IaaS (EC2):** El cliente es dueño del SO, parchado, reglas de firewall, IAM.
- **PaaS (RDS):** AWS administra el SO y el parchado del motor de base de datos. El cliente administra quién tiene acceso, qué está cifrado, configuración de red.
- **SaaS (S3):** AWS administra toda la infraestructura. El cliente administra políticas de bucket, cifrado y configuraciones de acceso público.

**Ejemplo concreto:** Si una instancia EC2 es comprometida porque el cliente no parcheó el SO, esa es responsabilidad del cliente — AWS parcheó el hipervisor, no el SO invitado. Si hay una brecha física en un centro de datos de AWS, esa es responsabilidad de AWS — el cliente no tiene visibilidad ni control sobre esa capa.

> 💡 **Tip de examen:** El modelo de responsabilidad compartida es uno de los conceptos más evaluados en el SAA-C03. El examen distingue entre "AWS administra" y "el cliente administra." Responsabilidades del cliente siempre incluyen: configuración de IAM, clasificación y cifrado de datos, seguridad a nivel de SO en EC2, y reglas de security groups/NACLs. AWS siempre administra: seguridad física, hardware, hipervisor y la capa de servicio administrado.

---

## Slide 9 | La Seguridad es un Pilar del Well-Architected Framework

**Lo que cubre el slide:** La seguridad es uno de los seis pilares del AWS Well-Architected Framework.

**Complemento:** Los seis pilares son Excelencia Operacional, Seguridad, Confiabilidad, Eficiencia de Rendimiento, Optimización de Costos y Sostenibilidad. El examen espera que sepas a qué pilar pertenece cada decisión de diseño. Las preguntas relacionadas con seguridad (IAM, cifrado, auditorías) siempre mapean al pilar de Seguridad.

> 💡 **Tip de examen:** Si una pregunta pregunta qué pilar del Well-Architected Framework aborda habilitar CloudTrail, usar MFA, o aplicar políticas de mínimo privilegio en IAM, la respuesta siempre es el pilar de Seguridad.

---

## Slide 10 | Principios de Diseño para el Pilar de Seguridad

**Lo que cubre el slide:** Siete principios de diseño: implementar una base de identidad sólida, mantener trazabilidad, aplicar seguridad en todas las capas, automatizar las mejores prácticas de seguridad, proteger datos en tránsito y en reposo, mantener a las personas alejadas de los datos, y prepararse para eventos de seguridad.

**Complemento — conecta cada principio con un servicio AWS concreto:**

|Principio|Servicio o característica AWS|
|---|---|
|Base de identidad sólida|IAM, IAM Identity Center, MFA|
|Mantener trazabilidad|AWS CloudTrail, AWS Config|
|Seguridad en todas las capas|Security Groups, NACLs, WAF, Shield|
|Automatizar mejores prácticas|AWS Config Rules, Security Hub|
|Proteger datos en tránsito y en reposo|TLS, SSE-S3, SSE-KMS, ACM|
|Mantener personas alejadas de los datos|Roles IAM para servicios, sin acceso humano a datos de producción|
|Prepararse para eventos de seguridad|AWS GuardDuty, runbooks de respuesta a incidentes|

**Ejemplo concreto para "mantener personas alejadas de los datos":** Una función Lambda debe usar un rol IAM para acceder a DynamoDB — no las credenciales personales de un desarrollador embebidas en el código. El rol otorga exactamente el acceso que la función necesita, y los humanos nunca tocan los datos directamente.

> 💡 **Tip de examen:** El principio "mantener personas alejadas de los datos" casi siempre se traduce en "usar roles IAM en lugar de usuarios IAM para aplicaciones." Si una pregunta pregunta cómo una instancia EC2 debe acceder a S3, la respuesta es un rol IAM adjunto a la instancia — nunca access keys almacenadas en la instancia.

---

## Slide 11 | Permisos de Usuario para Acceder a Recursos

**Lo que cubre el slide:** John tiene una política IAM que permite acceso de solo lectura al Bucket 1 de S3 y a la Tabla 1 de DynamoDB, y un deny explícito sobre el Bucket 2 de S3.

**Complemento:** Este slide introduce el concepto central de IAM antes de la terminología formal. Úsalo para establecer que los permisos son intencionales y granulares — el acceso de John está limitado a recursos específicos, no a todos los recursos de la cuenta.

**Ejemplo concreto:** John es un analista de datos. Necesita leer de un bucket S3 específico y consultar una tabla DynamoDB para sus reportes. Nunca debe tener acceso al Bucket 2, que contiene datos de RRHH. El deny explícito sobre el Bucket 2 garantiza que aunque John sea agregado más adelante a un grupo con permisos más amplios, ese deny sigue en pie.

> 💡 **Tip de examen:** Un deny explícito siempre gana — anula cualquier allow, de cualquier política, en cualquier combinación. Esta es una regla fundamental de la evaluación de IAM que el examen prueba repetidamente.

---

## Slide 12 | Principio de Mínimo Privilegio

**Lo que cubre el slide:** John (Administrador) tiene permisos completos sobre los buckets S3. Mary (Marketing) tiene acceso de solo lectura al Bucket 1 y deny explícito sobre el Bucket 2. Mejores prácticas: otorgar solo los permisos requeridos, empezar con el mínimo, agregar según sea necesario, revocar permisos innecesarios.

**Complemento:** El mínimo privilegio no es solo una recomendación de seguridad — es una estrategia de mitigación de riesgo. El radio de impacto de una credencial comprometida es proporcional a los permisos que tiene adjuntos. Una credencial de administrador comprometida le da a un atacante control total de la cuenta. Una credencial de solo lectura comprometida le da visibilidad sobre los datos, lo cual es malo, pero no le permite borrar ni modificar recursos.

**Ejemplo concreto:** Una startup le da a cada desarrollador acceso de administrador "por conveniencia." La laptop de un desarrollador es robada. El atacante ahora tiene control total de la cuenta AWS — puede borrar bases de datos de producción, lanzar instancias costosas para minar criptomonedas, o exfiltrar todos los datos. Si el desarrollador hubiera tenido solo los permisos necesarios para su proyecto actual, el radio de impacto estaría limitado a ese alcance.

> 💡 **Tip de examen:** Cualquier pregunta que pida "el enfoque más seguro para otorgar acceso" tendrá el mínimo privilegio como principio correcto. Las opciones que otorgan acceso más amplio de lo necesario son siempre distractores. La respuesta correcta siempre otorga los permisos mínimos requeridos para la tarea específica.

---

## Slide 13 | Usar Cifrado — Proteger Datos en Tránsito

**Lo que cubre el slide:** TLS (Transport Layer Security) protege los datos que se mueven entre un cliente y el almacenamiento de AWS.

**Complemento:** TLS es el sucesor de SSL. Cuando ves HTTPS, TLS está en acción. Para los servicios de AWS, la mayoría de endpoints modernos aplican TLS por defecto — S3, API Gateway, conexiones RDS pueden requerir TLS. Para algunos servicios, se aplica explícitamente mediante políticas de bucket o grupos de parámetros.

**Ejemplo concreto:** Una app móvil envía datos de usuario a un bucket de S3 via HTTPS. TLS cifra los datos durante la transmisión — incluso si alguien intercepta el tráfico de red, solo ve bytes cifrados. Sin TLS (HTTP), los datos viajan en texto plano y pueden ser capturados por cualquiera en el camino de red.

**Cómo aplicar TLS obligatorio en un bucket S3 con una política de bucket:**

```json
{
  "Effect": "Deny",
  "Principal": "*",
  "Action": "s3:*",
  "Resource": "arn:aws:s3:::mi-bucket/*",
  "Condition": {
    "Bool": {"aws:SecureTransport": "false"}
  }
}
```

Esta política deniega cualquier solicitud que no use HTTPS.

> 💡 **Tip de examen:** "Proteger datos en tránsito" = TLS/HTTPS. "Proteger datos en reposo" = cifrado (SSE-S3, SSE-KMS, cifrado del lado del cliente). El examen distingue entre estos dos escenarios. Si una pregunta menciona datos moviéndose entre sistemas, piensa en TLS. Si menciona datos almacenados en algún lugar, piensa en cifrado en reposo.

---

## Slide 14 | Proteger Datos en Reposo — Cifrado del Lado del Cliente

**Lo que cubre el slide:** El cliente cifra los datos antes de enviarlos a AWS. El cliente recupera los datos cifrados y los descifra localmente. AWS nunca ve el texto plano.

**Complemento:** El cifrado del lado del cliente proporciona la garantía más fuerte: AWS nunca tiene acceso al texto plano. La contrapartida es que el cliente es dueño de todo el proceso de cifrado — gestión de llaves, rotación, librerías de cifrado y manejo de errores. Si pierdes la llave, los datos son irrecuperables permanentemente.

**Ejemplo concreto:** Una empresa de salud almacena imágenes médicas en S3. El cumplimiento normativo exige que el proveedor de nube nunca tenga acceso a datos de pacientes en texto plano. La aplicación del hospital cifra cada imagen localmente usando una llave almacenada en su HSM on-premises antes de subirla. AWS almacena los bytes cifrados. Incluso si AWS tuviera un empleado deshonesto con acceso a S3, solo vería texto cifrado.

> 💡 **Tip de examen:** Si la pregunta dice "el proveedor de nube nunca debe tener acceso a los datos en texto plano," el cifrado del lado del cliente es la respuesta. Si dice "los datos deben estar cifrados en reposo" sin esa restricción específica, SSE-S3 o SSE-KMS son respuestas válidas y más simples.

---

## Slide 15 | Proteger Datos en Reposo — Cifrado del Lado del Servidor

**Lo que cubre el slide:** El cliente envía datos sin cifrar a AWS. El servidor los cifra antes de almacenarlos. Cuando se solicitan, el servidor los descifra y los devuelve. Es transparente para el cliente.

**Complemento:** Existen tres variantes de SSE que el examen distingue:

|Tipo|Quién administra la llave|Dónde se almacena la llave|
|---|---|---|
|SSE-S3|AWS administra todo|AWS (transparente)|
|SSE-KMS|El cliente controla via KMS|AWS KMS|
|SSE-C|El cliente provee la llave en cada request|AWS nunca la almacena|

SSE-S3 está habilitado por defecto en todos los objetos nuevos de S3 desde enero de 2023. SSE-KMS agrega una capa de auditabilidad — cada operación de cifrado/descifrado queda registrada en CloudTrail mediante llamadas a la API de KMS. SSE-C requiere que el cliente envíe la llave con cada solicitud y AWS la descarta inmediatamente después de usarla.

**Ejemplo concreto:** Una empresa necesita demostrarle a auditores que el acceso a las llaves de cifrado queda registrado. SSE-S3 no lo proporciona — la gestión de llaves es interna a S3 sin una pista de auditoría separada. SSE-KMS sí — cada llamada `kms:Decrypt` aparece en CloudTrail con quién la hizo, cuándo y desde dónde.

> 💡 **Tip de examen:** SSE-KMS es la respuesta cuando la pregunta menciona "pista de auditoría para uso de llaves," "requisitos de cumplimiento normativo," o "control del cliente sobre la rotación de llaves." SSE-S3 es la respuesta cuando solo dice "cifrar datos en reposo" sin requisitos adicionales — es más simple y sin costo adicional más allá del almacenamiento.

---

## Slide 16 | Aprendizajes Clave: Principios de Seguridad

**Lo que cubre el slide:** Cuatro aprendizajes: modelo de responsabilidad compartida, pilar de seguridad del Well-Architected, mínimo privilegio, y proteger datos en tránsito y en reposo.

**Cómo usarlo:** Antes de pasar a la siguiente sección, pregunta al grupo: _"¿De qué es responsable AWS? ¿De qué es responsable el cliente? ¿Qué significa el mínimo privilegio en la práctica?"_ Estos son los conceptos que con más probabilidad aparecen en la evaluación de conocimientos.

---

## Slide 18 | Autenticación y Autorización

**Lo que cubre el slide:** Autenticación = verificar identidad (¿quién eres?). Autorización = determinar permisos (¿qué puedes hacer?). El solicitante puede ser una persona o una aplicación.

**Complemento:** Estos dos conceptos se confunden frecuentemente pero son pasos distintos en cada llamada a la API de AWS. Puedes estar autenticado (AWS sabe quién eres) pero no autorizado (AWS dice que no puedes hacer eso). Los mensajes de error son diferentes: fallo de autenticación = "credenciales inválidas", fallo de autorización = "acceso denegado."

**Ejemplo concreto:** Un desarrollador inicia sesión en la consola de AWS con su usuario y contraseña — eso es autenticación. Luego intenta acceder a la consola de RDS y ve "No estás autorizado para realizar esta acción" — eso es la autorización fallando. Su identidad fue confirmada, pero su política IAM no otorga acceso a RDS.

> 💡 **Tip de examen:** El examen puede describir un escenario donde un usuario puede iniciar sesión pero no puede realizar una acción. La solución involucra autorización de IAM (agregar una política), no autenticación (credenciales). Distinguir entre los dos es un concepto básico pero evaluable.

---

## Slide 19 | AWS Identity and Access Management (IAM)

**Lo que cubre el slide:** IAM controla el acceso individual y grupal, se integra con servicios AWS, soporta identidad federada, MFA y permisos granulares.

**Complemento:** IAM es un servicio global — no regional. Un usuario o rol IAM creado en una región está disponible en todas las regiones. Esto es diferente a la mayoría de servicios AWS que son regionales. También es gratuito — no hay costo por crear usuarios, roles, grupos o políticas IAM.

**Ejemplo concreto:** Una empresa tiene desarrolladores en Guatemala y Singapur. Ambos usan las mismas cuentas de usuario IAM — IAM no necesita configurarse por región. Sin embargo, los buckets S3 o instancias EC2 a los que esos usuarios acceden son recursos regionales.

> 💡 **Tip de examen:** IAM es global, no regional. Si una pregunta pregunta "¿cuál de los siguientes es un servicio global de AWS?", IAM es siempre una respuesta correcta. Otros servicios globales incluyen Route 53, CloudFront y AWS Organizations.

---

## Slide 20 | Terminología de IAM

**Lo que cubre el slide:** Cuatro términos: IAM resource (usuarios, grupos, roles, políticas), IAM entity (usada para autenticación: usuarios y roles), IAM identity (puede ser autorizada en políticas: usuario, grupo, o rol), Principal (persona o aplicación que hace solicitudes).

**Complemento:** La distinción entre entity e identity puede confundir a los estudiantes. La conclusión práctica es más simple: **usuarios y roles** son lo que AWS usa para identificar quién hace una solicitud. Los grupos son para conveniencia organizacional — nunca son el principal en una política, solo transportan políticas que aplican a sus miembros.

**Ejemplo concreto:** Cuando una instancia EC2 hace una llamada a la API de S3, el principal es el rol IAM adjunto a esa instancia. Cuando un desarrollador ejecuta un comando de AWS CLI, el principal es el usuario IAM cuyas access keys están configuradas en el CLI.

---

## Slide 21 | Usar IAM para Controlar el Acceso

**Lo que cubre el slide:** Cuatro conceptos de IAM: usuario IAM (persona o aplicación que se autentica), grupo IAM (colección de usuarios con autorización idéntica), rol IAM (permisos temporales, no asociado a una persona), política IAM (documento que define qué recursos son accesibles y con qué nivel).

**Complemento — la distinción clave entre usuarios y roles:**

- **Usuarios IAM:** tienen credenciales de larga duración (contraseña, access keys). Representan a una persona o aplicación específica.
- **Roles IAM:** tienen credenciales temporales (emitidas por STS, expiran automáticamente). Pueden ser asumidos por usuarios, aplicaciones o servicios AWS.

La mejor práctica de la industria es alejarse de los usuarios IAM hacia roles e identidad federada. AWS IAM Identity Center (antes SSO) es el enfoque recomendado para acceso humano en deployments modernos.

**Ejemplo concreto:** Una instancia EC2 necesita leer desde S3. Nunca debes crear un usuario IAM, generar access keys y almacenar esas llaves en la instancia EC2. En su lugar, adjunta un rol IAM a la instancia EC2. La instancia obtiene automáticamente credenciales temporales que rotan cada pocas horas — sin llaves que gestionar, sin llaves que accidentalmente exponer.

> 💡 **Tip de examen:** Cualquier pregunta sobre cómo un servicio AWS (EC2, Lambda, ECS) debe acceder a otro servicio AWS (S3, DynamoDB, SQS) — la respuesta siempre es un rol IAM. Nunca access keys hardcodeadas. El examen incluirá opciones con access keys como distractor — elimínalas primero.

---

## Slide 22 | Credenciales IAM para Autenticación

**Lo que cubre el slide:** Tres escenarios de autenticación: inicio de sesión en consola (usuario + contraseña), AWS CLI (access key), llamadas programáticas (access key). Una access key = access key ID + secret key.

**Complemento:** Las access keys son credenciales de larga duración — no expiran a menos que las rotes o elimines manualmente. Por eso el slide de mejores prácticas (el siguiente) enfatiza la rotación. Una access key filtrada que no se rota da acceso permanente hasta que alguien lo note.

**Ejemplo concreto:** Un desarrollador sube su archivo `~/.aws/credentials` accidentalmente a un repositorio público de GitHub. Su access key ahora es pública. En minutos, bots automatizados escanean GitHub buscando llaves de AWS y empiezan a lanzar instancias GPU para minar criptomonedas — facturado a la cuenta del desarrollador. AWS tiene herramientas (Trusted Advisor, GuardDuty) para detectar esto, pero el daño puede ser significativo antes de que se detecte.

> 💡 **Tip de examen:** El examen distingue entre acceso a la consola (contraseña) y acceso programático (access keys). Si una pregunta pregunta cómo revocar rápidamente el acceso programático de un desarrollador, la respuesta es deshabilitar o eliminar su access key — no resetear su contraseña.

---

## Slide 23 | Mejores Prácticas para Asegurar el Acceso

**Lo que cubre el slide:** Nueve mejores prácticas: mínimo privilegio, habilitar MFA, credenciales temporales para humanos, rotar access keys, contraseñas fuertes, asegurar credenciales locales, usar AWS Organizations, habilitar CloudTrail, proteger el usuario raíz.

**Complemento — los tres de mayor impacto para el examen:**

**1. MFA en todas partes:** Especialmente para el usuario raíz y cualquier usuario IAM con acceso a la consola. MFA agrega un segundo factor que un atacante no puede obtener solo robando una contraseña.

**2. Credenciales temporales:** AWS IAM Identity Center emite credenciales temporales cuando los usuarios se federan a través de él. Lambda, EC2 y otros servicios obtienen credenciales temporales mediante roles. Sin llaves de larga duración que gestionar o rotar.

**3. Habilitar CloudTrail:** CloudTrail registra cada llamada a la API hecha en tu cuenta — quién hizo qué, cuándo, desde dónde. Es la pista de auditoría que permite investigar incidentes. También es lo que el examen quiere decir cuando habla de "mantener trazabilidad."

> 💡 **Tip de examen:** "Habilitar CloudTrail" es casi siempre parte de la respuesta correcta cuando una pregunta habla de pistas de auditoría, registro de cumplimiento o investigar acceso no autorizado. CloudTrail = quién hizo qué. CloudWatch = métricas de rendimiento y alarmas. Estos dos se confunden frecuentemente en el examen.

---

## Slide 24 | Proteger el Usuario Raíz

**Lo que cubre el slide:** Para tareas diarias, crear un usuario administrador en AWS IAM Identity Center. Solo usar root para tareas que otros usuarios no pueden realizar.

**Complemento — tareas que requieren root y no pueden delegarse:**

- Cambiar nombre de cuenta, correo electrónico o contraseña de root
- Cerrar la cuenta de AWS
- Restaurar acceso de administrador IAM cuando está bloqueado
- Cambiar el plan de AWS Support
- Registrarse como vendedor en el Marketplace de Reserved Instances
- Configurar un bucket S3 que requiera MFA delete con un dispositivo MFA sincronizado con root

Todo lo demás debe hacerse con usuarios o roles IAM, nunca con root.

**Ejemplo concreto:** El administrador de nube de una empresa se va de la organización. Antes de desvincularlo, IT debe inmediatamente cambiar la contraseña de la cuenta root y rotar el dispositivo MFA de root. Si las credenciales de root son comprometidas, no hay límite de permisos que pueda detener al atacante.

> 💡 **Tip de examen:** Si una pregunta pregunta "¿qué cuenta debe usarse para la administración diaria de AWS?", la respuesta nunca es la cuenta root. La cuenta root debe estar protegida, sus access keys eliminadas y MFA aplicado. Esto aparece como pregunta de mejores prácticas repetidamente.

---

## Slide 25 | Pasos para Configurar un Usuario Administrador

**Lo que cubre el slide:** Flujo de cinco pasos: iniciar sesión como root → configurar MFA para root → crear usuario admin (John) con permisos, MFA y llaves programáticas → cerrar sesión como root → iniciar sesión como admin → crear usuarios adicionales.

**Complemento:** El objetivo de este flujo es minimizar el uso de root desde el primer día. Una vez que el usuario admin existe, root debe volver "a la caja fuerte" — dispositivo MFA almacenado de forma segura, contraseña de root conocida solo por un pequeño número de personas autorizadas, access keys de root eliminadas por completo.

**Ejemplo concreto:** La mejor práctica es eliminar las access keys de root completamente (no solo deshabilitarlas). Casi no existe un caso de uso legítimo para acceso programático de root. Si root necesita hacer algo, puede hacerse mediante la consola con MFA — no se necesita acceso por CLI.

---

## Slide 26 | Mejores Prácticas: Usuarios y Grupos IAM

**Lo que cubre el slide:** Adjuntar políticas IAM a grupos, no a usuarios individuales. Asignar usuarios IAM a grupos. Ejemplo: grupo Sales (política 1), grupo IT (política 2).

**Complemento:** Adjuntar políticas a grupos en lugar de usuarios individuales es el principio de escalabilidad. Si necesitas cambiar lo que el equipo de ventas puede hacer, cambias una política de grupo — se aplica a los 50 usuarios del grupo simultáneamente. Si hubieras adjuntado políticas a cada usuario individualmente, necesitarías actualizar 50 políticas.

**Ejemplo concreto:** Una empresa contrata 10 nuevos desarrolladores. El admin agrega a cada uno al grupo "Developers" de IAM. Inmediatamente obtienen todos los permisos definidos en la política de ese grupo — lectura/escritura en S3 para el bucket de dev, start/stop en EC2 para instancias de dev, acceso de lectura a CloudWatch. Sin configuración individual de políticas.

**Qué pasa cuando un usuario está en múltiples grupos:** El usuario obtiene la unión de todos los permisos de todos los grupos. Si el Grupo A permite acceso a S3 y el Grupo B permite acceso a EC2, un usuario en ambos grupos tiene ambos. Pero si cualquier grupo — o cualquier política individual — tiene un deny explícito, ese deny gana independientemente.

> 💡 **Tip de examen:** "Adjuntar políticas a grupos, no a usuarios individuales" es una mejor práctica que el examen evalúa explícitamente. Si una pregunta describe gestionar permisos para un equipo, la respuesta correcta adjunta políticas a un grupo y agrega usuarios al grupo — no adjuntamiento de política por usuario.

---

## Slide 27 | Roles IAM

**Lo que cubre el slide:** Los roles proporcionan credenciales de seguridad temporales, no están asociados a una sola persona, pueden ser asumidos por personas/aplicaciones/servicios, y frecuentemente se usan para delegar acceso. Casos de uso comunes: aplicaciones en EC2, acceso entre cuentas, aplicaciones móviles.

**Complemento:** Los roles funcionan a través de STS (Security Token Service). Cuando se asume un rol, STS emite credenciales temporales (access key ID, secret access key y session token) que expiran — típicamente en 1 hora por defecto, configurable hasta 12 horas. Después de la expiración, las credenciales dejan de funcionar automáticamente.

**Los tres casos de uso del slide expandidos:**

**1. Aplicación en EC2:** Una aplicación corriendo en EC2 necesita llamar a la API de S3. La instancia EC2 asume un rol mediante el servicio de metadatos de instancia. Sin credenciales almacenadas en la instancia.

**2. Acceso entre cuentas:** La Cuenta A (producción) tiene un bucket S3. La Cuenta B (ciencia de datos) necesita leer de él. Un rol en la Cuenta A confía en la Cuenta B. Los usuarios de la Cuenta B asumen ese rol para acceder al bucket. Sin necesidad de compartir credenciales entre cuentas.

**3. Aplicaciones móviles:** Los usuarios se autentican via Cognito, que emite credenciales temporales de AWS vinculadas a un rol. La app móvil puede entonces llamar a APIs de AWS directamente con permisos limitados.

> 💡 **Tip de examen:** El acceso entre cuentas es un escenario clásico del examen. El patrón siempre es: crear un rol en la cuenta que tiene el recurso, definir una política de confianza que permita a la otra cuenta asumirlo, luego dejar que los usuarios de la otra cuenta asuman el rol. Nunca compartir usuarios IAM o access keys entre cuentas.

---

## Slide 28 | Tres Ejemplos de Uso de un Rol IAM

**Lo que cubre el slide:** Diagrama mostrando tres escenarios: (1) usuario IAM de Cuenta 2 asumiendo un rol entre cuentas para acceder a un bucket S3 en Cuenta 1, (2) instancia EC2 usando un rol de instancia para acceder a un bucket, (3) un rol de bucket IAM.

**Ejemplo concreto para el escenario EC2:**

```
Instancia EC2 → asume rol IAM "app-s3-read-role"
  → política de confianza del rol: "ec2.amazonaws.com puede asumir este rol"
  → política de permisos del rol: "s3:GetObject sobre arn:aws:s3:::mi-bucket/*"
  → la instancia obtiene credenciales temporales via endpoint de metadatos
  → la app usa esas credenciales para llamar a S3
  → las credenciales rotan automáticamente cada hora
```

Sin access keys en la instancia, sin credenciales en el código.

---

## Slide 31 | Políticas y Permisos de IAM

**Lo que cubre el slide:** Dos tipos de políticas: basadas en identidad (adjuntas a usuario, grupo o rol) y basadas en recursos (adjuntas a un recurso AWS). Las políticas son documentos JSON. Seguir el mínimo privilegio.

**Complemento:**

||Basada en identidad|Basada en recursos|
|---|---|---|
|Se adjunta a|Usuario IAM, grupo o rol|Recurso AWS (bucket S3, cola SQS, llave KMS)|
|¿Principal especificado?|No (implícito por a qué está adjunta)|Sí (quién puede acceder a este recurso)|
|¿Entre cuentas?|No|Sí|
|Servicios de ejemplo|Todos los principales IAM|S3, SQS, SNS, KMS, Lambda|

No todos los servicios soportan políticas basadas en recursos. EC2, por ejemplo, no las soporta — controlas el acceso a EC2 mediante políticas basadas en identidad.

**Ejemplo concreto:** Quieres darle a una cuenta AWS externa acceso a una cola SQS. No puedes usar IAM (eso es interno a tu cuenta). Usas una política basada en recursos en la cola SQS que especifica el ARN de la cuenta externa en el elemento Principal.

> 💡 **Tip de examen:** El acceso entre cuentas sin asumir un rol requiere una política basada en recursos. Si una pregunta pregunta cómo darle a otra cuenta AWS acceso a tu bucket S3, la respuesta involucra una política de bucket (basada en recursos) — no un rol IAM, a menos que la pregunta diga específicamente que la otra cuenta necesita asumir un rol.

---

## Slide 32 | Determinando Permisos al Momento de la Solicitud

**Lo que cubre el slide:** La lógica de evaluación: evaluar todas las políticas aplicables → ¿deny explícito? → sí = denegar. No → ¿allow explícito? → no = deny implícito. Sí = permitir.

**Complemento:** Este flujo de evaluación es el concepto más importante de IAM. Memorízalo:

1. **Deny por defecto:** Todo está denegado a menos que se permita explícitamente.
2. **Allow explícito:** Un allow en cualquier política aplicable otorga acceso.
3. **Deny explícito siempre gana:** Un deny en cualquier política, en cualquier combinación, anula cualquier allow.

La consecuencia práctica: puedes tener 10 políticas que todas permiten una acción, pero si una política tiene un deny explícito, la acción es denegada. El orden no importa — AWS evalúa todas las políticas simultáneamente.

**Ejemplo concreto:** Un desarrollador está en dos grupos IAM. El Grupo A permite `ec2:TerminateInstances`. El Grupo B (agregado después para otro proyecto) tiene un deny explícito para `ec2:TerminateInstances`. Aunque el Grupo A lo permite, el deny gana. El desarrollador no puede terminar instancias hasta que se elimine el deny.

> 💡 **Tip de examen:** Esta lógica de evaluación genera múltiples preguntas de examen. Reglas clave: (1) El default es deny — sin política = sin acceso. (2) El deny explícito anula cualquier allow. (3) Un allow explícito en cualquier política aplicable es suficiente para otorgar acceso (asumiendo que no hay deny). Las preguntas presentarán escenarios de múltiples políticas y preguntarán cuál es el permiso efectivo — busca el deny primero, luego el allow.

---

## Slides 33–35 | Políticas Basadas en Identidad y en Recursos / Ejemplos 1 y 2

**Lo que cubren los slides:** Slide 33: comparación lado a lado de políticas basadas en identidad vs. en recursos con múltiples usuarios y recursos. Slides 34–35: dos ejemplos trabajados con el acceso de Bob a los Buckets X e Y.

**Análisis detallado del Ejemplo 1 — es el más evaluable:**

Política basada en identidad de Bob: permite GET, PUT, LIST en Bucket X; permite LIST en Bucket Y. Política basada en recursos del Bucket X: permite GET y LIST para Bob; **deniega PUT para Bob**.

Pregunta: ¿Puede Bob hacer PUT en el Bucket X?

- Política de identidad: Allow PUT en Bucket X ✓
- Política de recursos: **Deny explícito PUT en Bucket X** ✗
- Resultado: **Denegar** — el deny explícito gana.

**Análisis del Ejemplo 2:**

Política basada en identidad de Bob: permite LIST en Bucket Y (sin allow/deny explícito para GET). Política basada en recursos del Bucket Y: permite GET y LIST para Bob.

Pregunta: ¿Puede Bob hacer GET del Bucket Y?

- Política de identidad: Sin mención de GET en Bucket Y (deny implícito)
- Política de recursos: **Allow explícito GET en Bucket Y** ✓
- Resultado: **Permitir** — el allow explícito en la política de recursos anula el deny implícito.

**El aprendizaje clave del Ejemplo 2:** Para acceso dentro de la misma cuenta, un allow en _cualquiera_ de las dos políticas es suficiente para otorgar acceso. El deny implícito en la política de identidad es anulado por el allow explícito en la política de recursos. Esta regla es diferente para acceso entre cuentas, donde ambas políticas deben permitir la acción.

> 💡 **Tip de examen:** La regla entre cuentas es una trampa común: para acceso entre cuentas, tanto la política basada en identidad del principal como la política basada en recursos del recurso deben permitir la acción. Para acceso dentro de la misma cuenta, un allow en cualquiera de las dos políticas es suficiente (a menos que haya un deny explícito en alguna parte).

---

## Slide 38 | Estructura de un Documento de Política IAM

**Lo que cubre el slide:** Seis elementos: Version, Statement, Effect (Allow/Deny), Principal (para políticas basadas en recursos), Action, Resource, Condition.

**Complemento — los elementos en contexto:**

```json
{
  "Version": "2012-10-17",       ← Siempre usar esta versión. Soporta variables de política.
  "Statement": [{
    "Effect": "Allow",           ← Allow o Deny
    "Principal": {               ← Solo en políticas basadas en recursos
      "AWS": "arn:aws:iam::123456789012:user/john"
    },
    "Action": "s3:GetObject",    ← Acción específica de API. Wildcards: s3:* o *
    "Resource": "arn:aws:s3:::mi-bucket/*",  ← A qué aplica la acción
    "Condition": {               ← Opcional. Restricciones adicionales.
      "IpAddress": {"aws:SourceIp": "192.0.2.0/24"}
    }
  }]
}
```

**El elemento Version:** Siempre usar `"2012-10-17"`. La versión anterior `"2008-10-17"` no soporta variables de política como `${aws:username}`. Si ves una política sin elemento Version, AWS usa la versión más antigua.

**Formato ARN que hay que conocer:** `arn:aws:servicio:región:id-cuenta:recurso`

Ejemplos:

- `arn:aws:s3:::mi-bucket` (S3 es global, no necesita región ni cuenta)
- `arn:aws:ec2:us-east-1:123456789012:instance/i-1234567890abcdef0`
- `arn:aws:iam::123456789012:user/john` (IAM es global, sin región)

> 💡 **Tip de examen:** El elemento Condition es lo que hace precisas a las políticas IAM. Condiciones comunes evaluadas en el examen: `aws:SourceIp` (restringir por IP), `aws:MultiFactorAuthPresent` (requerir MFA), `aws:RequestedRegion` (restringir a regiones específicas), `s3:prefix` (restringir a prefijos S3 específicos). Si una pregunta pregunta cómo requerir MFA para acciones sensibles, la respuesta es una Condition en la política IAM con `aws:MultiFactorAuthPresent: true`.

---

## Slide 39 | Ejemplo: Política Basada en Recursos

**Lo que cubre el slide:** Una política de dos declaraciones: Statement 1 permite todas las acciones de DynamoDB y S3 sobre tres recursos específicos. Statement 2 deniega todas las acciones de DynamoDB y S3 sobre cualquier cosa que NO esté en esa lista (usando `NotResource`).

**Complemento — el elemento `NotResource`:** `NotResource` es el inverso de `Resource`. Coincide con todo excepto los recursos listados. Combinado con un efecto Deny, crea un patrón de "lista blanca": permite acciones solo en los recursos especificados, niega en todo lo demás.

Esta es una construcción poderosa pero potencialmente peligrosa — un error tipográfico en el ARN podría accidentalmente denegar acceso al recurso que pretendías proteger.

**Ejemplo concreto:** Esta política está diseñada para una aplicación específica que solo debe interactuar con su propia tabla DynamoDB y sus buckets S3. Incluso si el rol de la aplicación es utilizado de alguna manera por otro servicio, no puede tocar otras tablas o buckets de la cuenta.

> 💡 **Tip de examen:** `NotResource` con `Effect: Deny` es un patrón común para restringir el acceso a recursos específicos. El examen puede presentar esta construcción y preguntar qué hace — niega acceso a todo lo que NO está listado, limitando efectivamente al principal solo a los recursos especificados.

---

## Slide 40 | Ejemplo: Política Basada en Identidad

**Lo que cubre el slide:** Una política adjunta a un usuario que permite acciones IAM relacionadas con perfiles de inicio de sesión, access keys y llaves públicas SSH — pero solo sobre el recurso `arn:aws:iam::account-id:user/${aws:username}`.

**Complemento — la variable `${aws:username}`:** Esta es una variable de política. En tiempo de evaluación, AWS reemplaza `${aws:username}` con el nombre de usuario del usuario IAM que hace la solicitud. Entonces si John hace la solicitud, el recurso se convierte en `arn:aws:iam::account-id:user/john`. Esto permite escribir una sola política con alcance propio — cada usuario solo puede gestionar sus propias credenciales.

**Lo que esta política efectivamente permite:** Los usuarios pueden gestionar su propia contraseña, access keys y llaves SSH — pero no las de nadie más. Un patrón común de autogestión de credenciales.

> 💡 **Tip de examen:** Las variables de política (`${aws:username}`, `${aws:userid}`) permiten que una sola política aplique a múltiples usuarios con permisos de alcance propio. Si una pregunta pregunta cómo permitir que los usuarios gestionen solo sus propias credenciales IAM sin otorgar acceso de administrador, las variables de política son el mecanismo.

---

## Slide 41 | Ejemplo: Política Basada en Recursos, Entre Cuentas

**Lo que cubre el slide:** La Cuenta A crea una política de bucket que permite a la Cuenta B (identificada por número de cuenta `111122223333`) realizar cualquier acción S3 sobre `DOC-EXAMPLE-BUCKET`.

**Complemento:** Este es acceso entre cuentas sin asumir un rol. Los usuarios de la Cuenta B pueden acceder al bucket directamente, pero las políticas IAM de la Cuenta B también necesitan permitir la acción (para evaluación dentro de la misma cuenta la política de recursos sola sería suficiente, pero para acceso entre cuentas, ambos lados deben permitirlo).

**Ejemplo concreto:** Un equipo de plataforma de datos (Cuenta A) comparte datasets procesados con equipos de análisis en toda la organización (Cuentas B, C, D). Cada cuenta consumidora obtiene una entrada de política de bucket. Acceden a los datos directamente sin necesidad de asumir roles.

**El elemento Principal para acceso entre cuentas:**

```json
"Principal": {"AWS": "arn:aws:iam::111122223333:root"}   ← cuenta completa
"Principal": {"AWS": "arn:aws:iam::111122223333:user/analista"}  ← usuario específico
"Principal": {"AWS": "arn:aws:iam::111122223333:role/data-team"}  ← rol específico
```

> 💡 **Tip de examen:** El acceso entre cuentas a S3 típicamente usa políticas de bucket con la cuenta o principal externo en el elemento Principal. Si la pregunta especifica "sin requerir que el usuario asuma un rol," la respuesta es una política basada en recursos. Si "asumir un rol" es aceptable, un rol IAM con política de confianza también es válido.

---

## Slides 43–45 | Actividad: Análisis de Políticas IAM (1, 2 y 3 de 3)

**Úsalos como ejercicios interactivos en clase — no leas solo las respuestas.**

**Política 1 — IAM solo lectura:**

```json
{"Effect":"Allow","Action":["iam:Get*","iam:List*"],"Resource":"*"}
```

Punto de enseñanza clave: los wildcards en acciones (`Get*`) se expanden a todas las acciones que empiezan con "Get." Esto da acceso de solo lectura a todos los recursos IAM. Crear, modificar o eliminar cualquier cosa requiere acciones explícitas como `iam:CreateUser` — no está cubierto aquí.

**Política 2 — Terminar EC2 con condición de IP:** Punto de enseñanza clave: la Condition con `NotIpAddress` + `aws:SourceIp` significa "denegar si la IP de origen NO está en estos rangos." Combinado con el primer statement que permite terminar en cualquier lugar, el resultado efectivo es: permitir terminar solo desde los rangos de IP especificados. Así es como se restringe operaciones sensibles a IPs de la oficina corporativa o rangos de VPN.

**Política 3 — Denegar tipos de instancia que no sean micro/small:** Punto de enseñanza clave: una política con solo `Effect: Deny` y sin `Effect: Allow` no otorga nada por sí sola — solo restringe. Si se combina con un allow amplio (`ec2:*`), el deny crea un guardarraíl de costos — los desarrolladores pueden hacer cualquier cosa con EC2, pero no pueden lanzar tipos de instancia costosos.

> 💡 **Tip de examen:** Las preguntas de análisis de políticas son comunes en el SAA-C03. Practica trazar la lógica allow/deny. El método confiable: (1) busca cualquier deny explícito — si aplica, la respuesta es deny. (2) busca cualquier allow explícito — si aplica y ningún deny lo anula, la respuesta es allow. (3) Si ninguno, la respuesta es deny implícito.

---

## Slides 47–49 | Laboratorio Guiado: Explorando IAM

**Tareas del laboratorio:**

1. Experimentar con políticas IAM
2. Agregar usuarios a grupos IAM
3. Usar la URL de inicio de sesión de IAM

**Complemento — preguntas de debate del slide 49:**

_"¿Dónde accedes al servicio AWS Identity and Access Management (IAM)?"_ IAM es accesible desde la Consola de Administración de AWS en Servicios > Seguridad, Identidad y Cumplimiento. El dashboard de IAM es el punto de partida para gestionar todos los usuarios, grupos, roles y políticas. Importante: IAM es un servicio global — no hay selector de región para IAM.

_"¿Qué pasa cuando se actualiza una managed policy?"_ Los cambios se aplican inmediatamente a todos los principales (usuarios, grupos, roles) a los que está adjunta la política. Este es el poder de las managed policies — una actualización se propaga a todas partes. También es un riesgo: un error en una política ampliamente adjunta afecta a todos los que la usan simultáneamente.

---

## Slide 52 | Consideraciones para la Cafetería

**Lo que cubre el slide:** Discusión: ¿cómo asesorarías a la cafetería basándote en la preocupación clave del arquitecto presentada al inicio del módulo?

**Puntos de discusión sugeridos:**

- Frank y Martha (dueños) deben configurarse con usuarios IAM en un grupo "Owners" con acceso de nivel administrador, sin usar root.
- Sofía (líder técnica) debe tener un rol que le permita desplegar y gestionar recursos pero no acceder a facturación.
- Nikhil (empleado estudiante, constructor) debe tener un rol de desarrollador limitado a los servicios específicos que necesita — S3 para el sitio estático, sin acceso a facturación ni gestión de usuarios IAM.
- Habilitar MFA para todos los usuarios, especialmente los que tienen acceso a la consola.
- Habilitar CloudTrail para auditar todas las llamadas a la API en la cuenta.

---

## Slides 54–56 | Pregunta de Examen de Muestra

**La pregunta:** _"Un equipo de desarrolladores necesita acceso a varios servicios y recursos en una VPC durante 9 meses. Es probable que los miembros del equipo cambien durante el proyecto. ¿Qué opción cumple este requisito y sigue los principios clave de seguridad?"_

**Palabras clave identificadas por el slide:**

- Equipo de desarrolladores que probablemente cambie
- Necesita acceso durante 9 meses
- Sigue los principios clave de seguridad

**Análisis de cada opción:**

**A — Un solo usuario IAM para todo el equipo, adjuntar políticas al usuario:** Una cuenta de usuario compartida por múltiples personas = sin accountability individual. No puedes auditar quién hizo qué. No puedes revocar el acceso de una persona sin afectar a todos. Viola los principios de mínimo privilegio y trazabilidad. ❌

**B — Un usuario IAM por desarrollador, adjuntar políticas a cada usuario:** Accountability individual ✓, pero gestionar políticas por usuario es operativamente tedioso. Si los permisos necesitan cambiar, actualizas N políticas en lugar de una. Cuando un desarrollador se va, lo eliminas individualmente. No está mal, pero no es la mejor práctica. ❌

**C — Un usuario IAM por desarrollador, ponerlos en un grupo, adjuntar políticas al grupo:** Accountability individual ✓, eficiencia operativa ✓. Cuando un desarrollador se une: agregar al grupo → obtiene todos los permisos. Cuando un desarrollador se va: remover del grupo → pierde todos los permisos. Los cambios de permisos aplican a todo el grupo a la vez. Sigue el mínimo privilegio y la trazabilidad. ✅

**D — Un solo usuario IAM para el equipo, ponerlo en un grupo:** El mismo problema que A — credenciales compartidas, sin accountability individual. El grupo no ayuda porque el problema subyacente es un usuario compartido. ❌

**La respuesta es C.**

> 💡 **Tip de examen:** Este patrón de pregunta — "equipo que cambia, necesita acceso limitado, sigue mejores prácticas" — casi siempre se resuelve con "usuario IAM por persona + grupo IAM + adjuntar políticas al grupo." El grupo es el elemento clave que proporciona tanto escalabilidad (una actualización de política afecta a todos los miembros) como flexibilidad (agregar/remover individuos sin cambiar permisos). Memoriza este patrón.

---

_Guía de instructor preparada para AWS Academy Cloud Architecting — Módulo Securing Access_ _Basada en el deck de instructor ACAv3 en inglés_