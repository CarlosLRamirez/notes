---
modified: 2026-06-02 18:52
created: 2026-05-21 10:17
aliases:
  - "AWS Cloud Architecting: Modulo 3 - Guia"
title: "AWS Cloud Architecting: Modulo 3 - Guia"
folder: Teaching
publish: true
---
# Guía de Instructor — Módulo 3: Incorporación de una Capa de Almacenamiento

### Notas complementarias por slide | AWS Academy Cloud Architecting

> **Formato de cada entrada:** Las notas del presentador oficial aparecen resumidas en _cursiva_ como contexto. Lo que sigue es el complemento, ejemplo concreto y tip de examen donde aplica.

---

## Slides 1–3 | Bienvenida, Información general y Objetivos del módulo

_Las notas oficiales presentan las 5 secciones, las 2 demostraciones, los 2 labs y la evaluación de conocimientos. Los objetivos apuntan a reconocer los casos de uso de S3, sus clases de almacenamiento, cómo mover datos, cómo elegir región y crear un sitio estático._

**Complemento:** Vale la pena mencionar desde el inicio que S3 no es solo un servicio de almacenamiento — es la base de almacenamiento de la mayoría de arquitecturas en AWS. Muchos otros servicios (Athena, EMR, SageMaker, CloudFront) dependen de S3 como capa de datos subyacente. Establecer ese contexto ayuda a que los estudiantes no lo vean como un servicio aislado.

---

## Slide 5 | El almacenamiento como parte de una arquitectura mayor

_Las notas oficiales indican que en este módulo se comienza con la arquitectura más simple: un sitio web estático alojado completamente en S3. El diagrama mayor queda parcialmente oculto; solo S3 está iluminado._

**Complemento:** Señala que el diagrama completo representa la arquitectura final del curso. Hoy se enciende una sola pieza. Esto evita que los estudiantes se sientan abrumados y establece la narrativa de construcción incremental que tiene el curso.

---

## Slide 6 | Requisitos de la empresa de cafetería

_Las notas oficiales presentan el caso de Frank, Martha, Sofía y Nikhil. La cafetería no tiene presencia en internet. El primer desafío es un sitio web básico con menú, horarios y ubicación._

**Complemento:** Este caso hilo conductor se repite en todos los módulos del curso. Los estudiantes juegan el rol de Nikhil en los labs. Conviene presentarlo como un cliente real: tiene restricciones de presupuesto, no tiene equipo técnico interno y necesita soluciones simples que escalen.

**Ejemplo concreto:** Una cafetería que solo muestra menú, horario y ubicación no necesita base de datos ni servidor. Todo es contenido estático. S3 resuelve esto con costo casi cero y sin infraestructura que administrar.

---

## Slide 8 | Amazon S3 — ¿Qué es?

_Las notas oficiales explican que S3 es almacenamiento de objetos, que los objetos van en buckets con nombre globalmente único, que el tamaño máximo por objeto es 5 TB, y que cada objeto tiene clave, ID de versión, valor, metadatos y subrecursos. Aclara que S3 no tiene directorios reales — la clave incluye toda la ruta._

**Complemento:** El punto de los "directorios falsos" es importante. Cuando en la consola ves `fotos/2024/imagen.jpg`, eso no es una carpeta — es toda la clave del objeto. S3 simplemente usa el `/` como separador visual para facilitar la navegación, pero internamente es un espacio de nombres plano.

**Ejemplo concreto:** Si subes un archivo con la clave `reportes/enero/ventas.csv`, la URL del objeto será `https://mi-bucket.s3.amazonaws.com/reportes/enero/ventas.csv`. Si borras el "directorio" `reportes/enero/`, en realidad estás borrando todos los objetos cuya clave empieza con ese prefijo.

> 💡 **Tip de examen:** El examen no pregunta directamente sobre metadatos y subrecursos, pero sí sobre las características de un objeto S3. Recuerda: clave, ID de versión, valor, metadatos y subrecursos son las cinco propiedades. El límite de 5 TB por objeto aparece con frecuencia como distractor en preguntas sobre qué servicio usar para almacenar archivos grandes.

---

## Slide 9 | Beneficios de Amazon S3

_Las notas oficiales describen los cinco beneficios: durabilidad (11 nueves), disponibilidad (99.99%), escalabilidad (ilimitada), seguridad (control de acceso detallado) y rendimiento (latencia en milisegundos). Explica que la durabilidad refleja la pérdida anual esperada: 10,000 objetos → perderías uno cada 10 millones de años en promedio._

**Complemento:** El punto más importante que confunden los estudiantes es la diferencia entre durabilidad y disponibilidad. Son métricas distintas que miden cosas distintas.

- **Durabilidad** responde: ¿seguirá existiendo mi objeto mañana? (11 nueves = 99.999999999%)
- **Disponibilidad** responde: ¿puedo acceder a mi objeto ahora mismo? (99.99% = hasta ~52 minutos de downtime al año)

**Ejemplo concreto:** Un archivo en S3 Standard tiene durabilidad de 11 nueves. Eso significa que si almacenas 10 millones de objetos durante 10,000 años, estadísticamente perderías uno. En cambio, la disponibilidad del 99.99% significa que el servicio puede tener ventanas breves de mantenimiento, pero tus datos nunca desaparecen.

> 💡 **Tip de examen:** Una pregunta clásica pide elegir entre servicios basándose en requisitos de durabilidad. S3 Standard con 11 nueves es la referencia. Si la pregunta menciona "datos de acceso frecuente" y "alta durabilidad", la respuesta es S3 Standard. Si dice "datos que se pueden recrear fácilmente" y "costo mínimo", apunta a S3 One Zone-IA.

---

## Slide 10 | Patrones de uso comunes de Amazon S3

_Las notas oficiales anuncian que se explorarán cuatro casos prácticos comunes donde S3 es parte esencial de la arquitectura._

**Complemento:** Antes de entrar a los casos, es útil enmarcar que S3 no es solo "donde guardas archivos". Es un servicio de almacenamiento que desacopla los datos del cómputo, lo que lo hace fundamental para arquitecturas sin servidor, pipelines de datos y distribución de contenido.

---

## Slide 11 | Caso práctico 1: Almacenar y distribuir contenido y multimedia web

_Las notas oficiales explican que S3 almacena y distribuye videos, fotos y música. Cada objeto tiene una URL HTTP única. S3 puede actuar como origen para CloudFront. La elasticidad lo hace ideal para picos de demanda. No requiere aprovisionar almacenamiento._

**Complemento:** El patrón S3 + CloudFront es el estándar de la industria para servir contenido estático a escala global. S3 sirve como repositorio; CloudFront pone el contenido en los edge locations más cercanos al usuario final, reduciendo latencia y costos de transferencia de S3.

**Ejemplo concreto:** Una plataforma de e-learning que tiene miles de videos de cursos. Los videos se almacenan en S3. CloudFront distribuye el contenido desde el edge location más cercano al estudiante. Sin CloudFront, cada descarga va directo a la región de S3 — con CloudFront, la mayoría de reproducciones se sirven desde cache en el edge, sin costo de transferencia de S3.

> 💡 **Tip de examen:** Si una pregunta menciona "distribución global de contenido estático con baja latencia", la respuesta siempre involucra CloudFront + S3. S3 solo no resuelve el problema de latencia geográfica.

---

## Slide 12 | Protección de buckets y objetos de Amazon S3

_Las notas oficiales detallan las seis herramientas de control de acceso: bloqueo de acceso público (habilitado por defecto en buckets nuevos), políticas IAM (cuando el usuario se puede autenticar con IAM), políticas de bucket (para acceso entre cuentas o acceso anónimo), ACLs (mecanismo heredado, usar menos), puntos de acceso S3 (para conjuntos de datos compartidos con múltiples apps), y URLs prefirmadas (acceso temporal). También menciona Trusted Advisor para auditar permisos._

**Complemento:** La jerarquía de evaluación de permisos es clave: un `Deny` explícito en cualquier política siempre gana, incluso sobre un `Allow` en otra política. Esto aplica tanto a políticas IAM como de bucket.

**Ejemplo concreto de cada herramienta:**

- **Bloqueo de acceso público:** Actívalo en todos los buckets que contienen datos internos. Un solo toggle previene exposición accidental.
- **Políticas IAM:** Una aplicación EC2 con un rol IAM que tiene `s3:GetObject` sobre un bucket específico. La app accede sin necesitar credenciales hardcodeadas.
- **Políticas de bucket:** Una empresa A quiere que la empresa B (otra cuenta AWS) lea objetos de su bucket. Esto no se puede hacer solo con IAM — necesita una política de bucket con `Principal` apuntando al ARN de la otra cuenta.
- **URLs prefirmadas:** Un usuario de tu app quiere descargar un reporte personal. Tu backend genera una URL prefirmada válida por 15 minutos. El usuario descarga el archivo sin necesitar credenciales de AWS.
- **ACLs:** Mecanismo anterior a IAM. AWS recomienda no usarlas en diseños nuevos. Solo aparecen en contextos legacy.

> 💡 **Tip de examen:** Las preguntas sobre control de acceso en S3 suelen girar alrededor de dos escenarios: (1) acceso entre cuentas → política de bucket, y (2) acceso temporal a un objeto específico → URL prefirmada. Aprende a identificar cuál herramienta aplica a cada escenario.

---

## Slide 13 | Tres enfoques generales para configurar el acceso

_Las notas oficiales describen los tres estados posibles: privado (solo el propietario), público (cualquiera puede acceder), y acceso controlado (acceso selectivo por usuario). Advierte que el acceso público total rara vez es apropiado en producción — el caso del sitio estático es la excepción, no la regla._

**Complemento:** El estado "privado" es el punto de partida de todo. La advertencia de las notas es correcta y vale la pena reforzarla: la gran mayoría de vulnerabilidades de seguridad reportadas en S3 involucran buckets que fueron configurados como públicos accidentalmente o por desconocimiento.

**Ejemplo concreto:** Una empresa financiera almacena estados de cuenta en S3. Los buckets son privados. Cuando un cliente quiere ver su estado de cuenta, la aplicación genera una URL prefirmada válida por 5 minutos. El cliente descarga el PDF. El bucket nunca fue público, pero el cliente accedió a su documento sin problema.

> 💡 **Tip de examen:** Si una pregunta describe una situación donde "solo usuarios autenticados de la aplicación deben acceder a objetos", la respuesta correcta nunca es "hacer el bucket público". El patrón correcto es URL prefirmada o política IAM según el contexto.

---

## Slide 14 | Considere cifrar los objetos en Amazon S3

_Las notas oficiales explican las dos opciones de cifrado: cifrado del lado del servidor (SSE, S3 cifra antes de guardar en disco y descifra al descargar) y cifrado del cliente (el usuario cifra antes de subir y administra las claves). Menciona AWS KMS como opción para administrar claves._

**Complemento:** Hay tres variantes de cifrado del lado del servidor que el examen puede mencionar:

- **SSE-S3:** S3 administra las claves completamente. La opción más simple.
- **SSE-KMS:** AWS KMS administra las claves. Más control y auditoría. Tiene costo adicional por llamadas a KMS.
- **SSE-C:** El cliente provee la clave en cada solicitud. S3 cifra y descifra pero no almacena la clave.

**Ejemplo concreto:** Una empresa de salud que almacena imágenes médicas en S3 habilita SSE-KMS. Esto les da un registro de auditoría de CloudTrail cada vez que se accede a una clave de KMS, lo que ayuda a cumplir con HIPAA. Una empresa de bajo riesgo que solo quiere "no guardar en texto claro" usa SSE-S3 — más simple y sin costo adicional.

> 💡 **Tip de examen:** Si una pregunta menciona requisitos de cumplimiento normativo (HIPAA, PCI-DSS) y cifrado, SSE-KMS suele ser la respuesta correcta porque ofrece trazabilidad. Si solo dice "los datos deben estar cifrados en reposo", SSE-S3 es suficiente y más simple.

---

## Slide 15 | Caso práctico 2: Alojar sitios web estáticos

_Las notas oficiales explican que un sitio estático tiene HTML, CSS, imágenes, videos y JavaScript del lado del cliente. No soporta scripting del lado del servidor (PHP, JSP, ASP.NET). Para activarlo: configurar el bucket para alojamiento de sitios web y subir el contenido. Sin necesidad de servidor ni VM._

**Complemento:** La URL de un bucket configurado como sitio web tiene un formato diferente a la URL de objeto normal:

- URL de objeto: `https://bucket-name.s3.amazonaws.com/index.html`
- URL de sitio web: `http://bucket-name.s3-website-us-east-1.amazonaws.com`

La URL de sitio web soporta redirecciones y documentos de error personalizados (`error.html`). La URL de objeto no.

**Ejemplo concreto:** La documentación técnica de muchos proyectos open source está alojada en S3 como sitio estático. Generan HTML estático con herramientas como Jekyll o Hugo, suben los archivos a S3 y configuran el bucket como sitio web. Resultado: documentación siempre disponible, con alta durabilidad, sin servidor que mantener y con costo mínimo.

> 💡 **Tip de examen:** El examen distingue entre sitio estático y sitio dinámico. Si la pregunta describe lógica de servidor, consultas a base de datos o procesamiento backend, S3 como sitio web no es la respuesta. Si solo habla de "servir archivos HTML, imágenes y JavaScript", S3 es la solución correcta.

---

## Slide 16 | Práctica recomendada: Control de versiones

_Las notas oficiales describen el control de versiones como mecanismo para recuperar datos ante fallas de aplicación o eliminaciones/sobrescrituras accidentales. Al eliminar un objeto versionado, S3 inserta un marcador de eliminación en lugar de borrar permanentemente. Los buckets tienen tres estados: sin versioning (default), versioning habilitado, versioning suspendido. Una vez habilitado, no se puede volver al estado sin versioning._

**Complemento:** El comportamiento del marcador de eliminación es el punto que más confunde. Cuando eliminas un objeto con versioning activo, el objeto no desaparece — S3 lo oculta poniendo un marcador encima. Para restaurarlo, solo eliminas ese marcador. Para eliminarlo permanentemente, debes especificar el ID de versión explícitamente en la solicitud DELETE.

**Ejemplo concreto:** Un desarrollador sube accidentalmente un `config.json` con credenciales expuestas. Con versioning activo: sube inmediatamente una versión limpia del archivo (nueva versión queda activa), luego elimina permanentemente la versión comprometida especificando su version ID. El bucket conserva el historial de todas las demás versiones, pero la versión con credenciales queda eliminada definitivamente.

> 💡 **Tip de examen:** Dos puntos frecuentes en el examen: (1) "¿Cómo proteger contra eliminación accidental?" → habilitar versioning. (2) "Una vez habilitado el versioning, ¿se puede deshabilitar?" → No, solo suspender. El estado "suspendido" detiene la creación de nuevas versiones pero conserva las existentes.

---

## Slide 17 | Demostración: Control de versiones de Amazon S3

_Las notas oficiales indican que el instructor puede demostrar el control de versiones en la consola._

**Complemento — pasos sugeridos para la demo:**

1. Crear bucket con versioning habilitado.
2. Subir `index.html` con texto "Versión 1".
3. Modificar el archivo localmente → subir `index.html` con texto "Versión 2".
4. Mostrar en la consola que existen dos versiones del mismo objeto.
5. Eliminar el objeto → mostrar el marcador de eliminación que aparece.
6. Restaurar la versión anterior eliminando el marcador de eliminación.

El punto de impacto visual es el paso 6: los estudiantes ven que un objeto "eliminado" puede recuperarse completamente.

---

## Slide 18 | Compatibilidad con CORS

_Las notas oficiales explican que CORS permite que aplicaciones web cargadas en un dominio interactúen con recursos en otro dominio. La configuración CORS es un documento XML con reglas que especifican orígenes permitidos, métodos HTTP permitidos y otros parámetros._

**Complemento:** CORS es un mecanismo de seguridad del navegador, no de S3. El navegador bloquea las solicitudes cross-origin por defecto. La configuración CORS en S3 le indica al navegador qué orígenes están autorizados para hacer solicitudes al bucket.

**Ejemplo concreto:** Una SPA (Single Page Application) alojada en `https://app.micafeteria.com` necesita cargar imágenes del menú desde un bucket S3 en `https://assets-cafeteria.s3.amazonaws.com`. Sin CORS configurado en el bucket, el navegador bloquea esas solicitudes. Con la regla CORS que permite el origen `https://app.micafeteria.com` y el método `GET`, las imágenes cargan correctamente.

> 💡 **Tip de examen:** CORS aparece poco en el examen SAA-C03. Si aparece, suele ser en el contexto de "una aplicación web no puede cargar recursos de S3 — ¿cuál es la causa?" La respuesta es configuración CORS incorrecta o ausente en el bucket.

---

## Slides 19–22 | Laboratorio guiado: Alojamiento de un sitio web estático

_Las notas oficiales describen las 4 tareas: crear bucket, cargar contenido, habilitar acceso a objetos, actualizar el sitio web. Duración estimada: ~20 minutos._

**Complemento:** El error más frecuente en este lab es intentar crear la política de bucket para acceso público sin antes desactivar el "Block Public Access". S3 rechazará la política con un error. El orden correcto es: (1) desactivar Block Public Access, (2) crear la política de bucket.

Un punto de aprendizaje valioso post-lab: pedir a los estudiantes que comparen la URL de objeto (`s3.amazonaws.com`) con la URL del endpoint del sitio web (`s3-website-<región>.amazonaws.com`). Son dos endpoints distintos con comportamientos diferentes.

---

## Slide 23 | Caso práctico 3: Almacén de datos para cómputo y análisis

_Las notas oficiales describen el patrón ETL sobre S3: iniciar capacidad de cómputo (flota EC2 Spot o clúster EMR), extraer datos crudos de S3, transformar los datos, cargar los datos procesados en un bucket S3 diferente, terminar la capacidad de cómputo, y analizar con QuickSight o Athena._

**Complemento:** Este patrón se llama "data lake" en la industria. S3 actúa como repositorio central de datos en distintos estados: crudos (raw), procesados (curated) y listos para análisis (analytics). El patrón de separar los buckets por estado del dato (raw → processed → analytics) es una práctica recomendada de arquitectura de data lakes.

**Ejemplo concreto:** Una aerolínea almacena registros de vuelos en S3 (datos crudos). Diariamente, un clúster EMR procesa esos registros para calcular métricas de puntualidad, los guarda en otro bucket (datos procesados) y Amazon Athena los consulta directamente desde S3 sin moverlos a una base de datos. El resultado está disponible en QuickSight como dashboard operativo.

> 💡 **Tip de examen:** Cuando una pregunta describe procesamiento de grandes volúmenes de datos con necesidad de almacenamiento intermedio entre pasos, S3 como almacén de datos es la respuesta. La clave es que S3 desacopla el almacenamiento del cómputo, lo que permite escalar cada uno independientemente.

---

## Slide 24 | Caso práctico 4: Respaldar y archivar datos críticos

_Las notas oficiales describen S3 como solución de respaldo para centros de datos corporativos y servidores EC2. Menciona la posibilidad de mover datos a largo plazo a Glacier y configurar replicación entre regiones (CRR) para mayor durabilidad._

**Complemento:** La replicación entre regiones (CRR) es una función que copia automáticamente objetos de un bucket origen a un bucket destino en otra región. Requiere versioning habilitado en ambos buckets. Un punto importante: la CRR no replica objetos que existían antes de activarla — solo replica los objetos subidos después de configurarla.

**Ejemplo concreto:** Una empresa con sede en México tiene su bucket principal en `us-east-1`. Configura CRR hacia `sa-east-1` (São Paulo) para tener una copia en Latinoamérica. Si hay un evento regional que afecta `us-east-1`, los datos están disponibles en `sa-east-1`. La CRR se hace automáticamente sin intervención manual.

> 💡 **Tip de examen:** Dos puntos de examen sobre CRR: (1) Requiere versioning activo en ambos buckets — origen y destino. (2) No replica objetos preexistentes. Si una pregunta pregunta sobre mejorar durabilidad ante falla regional, CRR es la respuesta. Si pregunta sobre acceso más rápido para usuarios en otra región, CRR también aplica pero CloudFront puede ser la respuesta si habla de latencia de lectura, no de escritura.

---

## Slide 25 | Modelo de consistencia de datos de Amazon S3

_Las notas oficiales explican que desde diciembre de 2020, S3 tiene consistencia alta (strong consistency) para operaciones GET, LIST y PUT en objetos. Antes tenía consistencia eventual para sobrescrituras. La excepción: las configuraciones de bucket siguen siendo eventualmente consistentes._

**Complemento:** La consistencia alta significa que si haces un PUT exitoso, cualquier GET o LIST posterior devolverá los datos recién escritos — sin retrasos. Esto simplifica el diseño de aplicaciones que antes necesitaban lógica de reintento o espera para asegurarse de leer la versión más reciente.

**Ejemplo concreto:** Un pipeline de análisis sube un archivo de resultados a S3 y luego inmediatamente lanza un job de EMR que lo necesita. Antes de 2020, había riesgo de que EMR leyera la versión anterior del archivo. Con consistencia alta, el job de EMR siempre lee el archivo recién subido.

La excepción que el slide menciona: si borras un bucket y listas todos los buckets de inmediato, el bucket borrado puede seguir apareciendo brevemente en la lista. Eso es la consistencia eventual de configuraciones.

> 💡 **Tip de examen:** Este tema aparece en preguntas de arquitectura de data lakes y big data. Si una pregunta dice "la aplicación necesita leer datos inmediatamente después de escribirlos en S3", la respuesta correcta considera que S3 ya tiene consistencia alta y no requiere workarounds adicionales.

---

## Slide 28 | Clases de almacenamiento de Amazon S3 y Amazon S3 Glacier

_Las notas oficiales describen las seis clases: S3 Standard (acceso frecuente, 3+ AZs), S3 Standard-IA (acceso poco frecuente, tarifa mínima de 30 días, costo de recuperación más alto), S3 One Zone-IA (una sola AZ, para datos reproducibles o backups secundarios), S3 Intelligent-Tiering (mueve automáticamente entre tiers según patrones de acceso, sin tarifas de recuperación), S3 Glacier (archivado, tres opciones de retrieval: 1-5 min, 3-5 horas, 5-12 horas) y S3 Glacier Deep Archive (acceso 1-2 veces/año, recuperación en 12 horas, el más barato)._

**Complemento:** El examen usa la selección de clase de almacenamiento como caso de arquitectura de costos. La lógica de decisión es:

|Pregunta clave|Dirección|
|---|---|
|¿Datos de acceso frecuente?|S3 Standard|
|¿Acceso poco frecuente pero necesitas ms de latencia al recuperar?|S3 Standard-IA|
|¿Acceso poco frecuente, datos no críticos y quieres el costo más bajo posible sin Glacier?|S3 One Zone-IA|
|¿Patrón de acceso desconocido o variable?|S3 Intelligent-Tiering|
|¿Archivado, toleras horas de espera al recuperar?|S3 Glacier|
|¿Archivado a largo plazo, accedes rarísimas veces, tolerás 12h de espera?|S3 Glacier Deep Archive|

**Ejemplo concreto:** Una empresa de producción audiovisual tiene tres tipos de contenido: (1) proyectos activos que se editan diariamente → S3 Standard, (2) proyectos terminados del año pasado que rara vez se consultan → S3 Standard-IA, (3) archivos maestros que deben conservarse por ley por 10 años pero casi nunca se acceden → S3 Glacier Deep Archive. Con lifecycle policies, esto se gestiona automáticamente.

> 💡 **Tip de examen:** S3 Standard-IA tiene una tarifa mínima de almacenamiento de 30 días. Si subes un objeto y lo borras al día 15, igual pagas 30 días. El examen puede plantear escenarios donde elegir Standard-IA sería incorrecto porque los objetos tienen ciclo de vida muy corto. S3 One Zone-IA almacena en una sola AZ — si esa AZ falla, los datos son inaccesibles temporalmente o se pierden. Solo úsalo para datos que puedes recrear.

---

## Slide 29 | Políticas de ciclo de vida de Amazon S3

_Las notas oficiales explican que las lifecycle policies son conjuntos de reglas que automatizan la transición de objetos entre clases de almacenamiento o su eliminación, basándose en su antigüedad. El ejemplo muestra: video.mp4 en Standard por 30 días → Standard-IA a los 60 días → Glacier a los 365 días → eliminación._

**Complemento:** Las lifecycle policies pueden aplicarse a todo el bucket o a objetos que coincidan con un prefijo de clave específico (por ejemplo, solo objetos en `logs/`). También pueden aplicarse a versiones anteriores de objetos cuando el versioning está activo — lo que permite una estrategia como: "mantén la versión actual en Standard, mueve versiones antiguas a Glacier después de 90 días".

**Ejemplo concreto:** Una aplicación genera logs diarios en S3 bajo el prefijo `logs/`. Se configura una lifecycle policy sobre ese prefijo: transición a Standard-IA a los 30 días, transición a Glacier a los 90 días, eliminación a los 365 días. Los logs recientes (útiles para debugging inmediato) están en Standard con acceso rápido; los logs viejos están baratos en Glacier; y después de un año se eliminan automáticamente cumpliendo con la política de retención de datos de la empresa. Todo sin intervención manual.

> 💡 **Tip de examen:** Las preguntas sobre optimización de costos de S3 casi siempre tienen lifecycle policies como parte de la respuesta correcta. La clave es identificar el patrón de acceso descrito: si los datos "pierden importancia con el tiempo" o "solo se consultan los primeros 30 días", una lifecycle policy es la solución. También recuerda que las transiciones tienen un orden obligatorio — no puedes pasar de Glacier de vuelta a Standard-IA con una lifecycle rule; las transiciones solo van en dirección descendente en costo.

---

## Slide 30 | Costos de Amazon S3

_Las notas oficiales detallan los cuatro componentes de costo: almacenamiento por GB/mes (varía por región y clase), solicitudes (PUT, COPY, GET, LIST, etc.), transferencia de datos salientes a otras regiones o a internet, y funciones de administración. Sin cargo por: transferencia entrante desde internet, transferencias dentro de la misma región entre servicios AWS, transferencia saliente a CloudFront, y solicitudes DELETE/CANCEL._

**Complemento:** El modelo "inbound gratis, outbound con costo" es intencional — incentiva que los datos entren y se procesen dentro de AWS. El punto de "transferencia saliente a CloudFront es gratis" es estratégico: alienta el uso de CloudFront como capa de distribución, lo que reduce la carga directa sobre los buckets S3.

**Ejemplo concreto:** Una empresa tiene un bucket S3 en `us-east-1` y una instancia EC2 también en `us-east-1`. Cuando la instancia lee datos del bucket, esa transferencia es **gratuita** (mismo región, mismo servicio AWS). Si esa instancia estuviera en `eu-west-1`, la transferencia tiene costo de datos salientes entre regiones.

> 💡 **Tip de examen:** Las preguntas de optimización de costos frecuentemente incluyen "¿cuál de estas arquitecturas reduce los costos de transferencia de datos?" Recuerda: CloudFront + S3 elimina los costos de transferencia saliente de S3 hacia CloudFront. Colocar los recursos de cómputo en la misma región que el bucket S3 elimina costos de transferencia entre regiones.

---

## Slide 33 | Mover objetos a Amazon S3

_Las notas oficiales presentan tres métodos: (1) Consola web (arrastrar y soltar, enfoque asistido), (2) AWS CLI con el ejemplo `aws s3 cp test.txt s3://AWSDOC-EXAMPLE-BUCKET/test.txt`, y (3) AWS SDK para integración programática._

**Complemento:** La CLI de S3 tiene un comando especialmente útil que las notas no mencionan: `aws s3 sync`. Sincroniza un directorio local completo con un bucket, subiendo solo los archivos que cambiaron. Es el comando estándar para deployar sitios web estáticos desde un pipeline CI/CD.

```bash
# Sincronizar directorio local con bucket (solo sube archivos nuevos o modificados)
aws s3 sync ./build/ s3://mi-bucket-web/ --delete
```

El flag `--delete` elimina del bucket los archivos que ya no existen en local.

> 💡 **Tip de examen:** El examen no suele preguntar sobre comandos específicos de CLI. Pero sí puede preguntar sobre qué método usar en un escenario dado: si la pregunta habla de "automatización", "scripts" o "integración con aplicaciones", la respuesta apunta a CLI o SDK, no a la consola.

---

## Slide 34 | Carga multiparte (Multipart Upload)

_Las notas oficiales explican que la API de carga multiparte divide un objeto grande en partes que se cargan por separado y se ensamblan al final. Beneficios: rendimiento mejorado (paralelismo), recuperación rápida ante fallas de red (solo retrasmites la parte fallida), capacidad de pausar/reanudar, capacidad de iniciar sin conocer el tamaño final. Tamaño mínimo por parte: 5 MB. Recomendado para objetos > 100 MB. Obligatorio para objetos > 5 GB._

**Complemento:** Un detalle operativo importante que las notas no mencionan: una carga multiparte iniciada pero nunca completada ni cancelada explícitamente sigue acumulando costos de almacenamiento por las partes ya subidas. Para evitar esto, se recomienda configurar una lifecycle policy que limpie cargas multiparte incompletas después de X días:

```
Acción: Abort incomplete multipart uploads
Días después de iniciar: 7
```

**Ejemplo concreto:** Una empresa de medios sube archivos de video de 50 GB a S3. Sin multipart upload, si la conexión falla en el GB 45, debes empezar desde cero. Con multipart upload de 100 MB por parte, si falla la parte 450, solo retrasmites esa parte (100 MB). La diferencia en tiempo de recuperación es de horas vs. segundos.

> 💡 **Tip de examen:** El examen puede preguntar qué hacer cuando una carga de archivos grandes falla frecuentemente por problemas de red. La respuesta es multipart upload, porque permite reintentar solo las partes fallidas. El límite mínimo de 5 MB por parte y la recomendación de usarlo para archivos > 100 MB son datos que aparecen en preguntas de detalle.

---

## Slide 35 | Amazon S3 Transfer Acceleration

_Las notas oficiales explican que Transfer Acceleration usa CloudFront y las ubicaciones perimetrales de AWS para acelerar cargas. Los datos suben al edge location más cercano y luego viajan por la red troncal de AWS hasta el bucket. Mejora típica: 50-500% en transferencias transfronterizas de objetos grandes. Cuándo usarlo: clientes globales cargando a un bucket centralizado, transferencias regulares entre continentes, o cuando no se aprovecha todo el ancho de banda disponible._

**Complemento:** Transfer Acceleration cambia el endpoint de carga. En lugar de `bucket.s3.amazonaws.com`, se usa `bucket.s3-accelerate.amazonaws.com`. La diferencia de velocidad es más notable mientras más lejos esté el cliente de la región del bucket.

**Ejemplo concreto:** Una empresa guatemalteca tiene su bucket en `us-east-1` (Virginia). Sin Transfer Acceleration, los archivos viajan directamente por internet público de Guatemala a Virginia con todas las variaciones de latencia y congestión que eso implica. Con Transfer Acceleration, el archivo sube al edge location de CloudFront más cercano (posiblemente en Miami o Atlanta) y de ahí viaja por la red privada de AWS hasta el bucket en Virginia. La red privada de AWS es más estable y rápida que el internet público.

> 💡 **Tip de examen:** La distinción entre Transfer Acceleration y multipart upload es importante. Transfer Acceleration resuelve el problema de distancia geográfica (clientes lejos del bucket). Multipart upload resuelve el problema de archivos grandes y conexiones inestables. Pueden combinarse — un cliente remoto subiendo un archivo grande usaría ambos.

---

## Slide 37 | AWS Snowball

_Las notas oficiales presentan Snowball como opción de transporte de datos a escala de petabytes. No requiere escribir código ni comprar hardware. Se crea un job en la consola, AWS envía el dispositivo, el cliente lo conecta a su red local, transfiere los archivos, y lo devuelve. Ejemplo de escala: transferir 10 PB por internet con 10 Gbps tardaría más de 100 días._

**Complemento:** La regla práctica para decidir entre transferencia por internet vs. Snowball es comparar el tiempo de transferencia por internet con el tiempo de envío físico del dispositivo (generalmente una semana de ida y otra de vuelta). Si la transferencia por internet tarda más de una semana, Snowball es competitivo o superior.

**Ejemplo concreto:** Un hospital tiene 200 TB de imágenes médicas (radiografías, MRIs) en sus servidores locales y quiere migrarlos a AWS. Con su enlace de 1 Gbps dedicado a producción, transferir 200 TB tomaría aproximadamente 18 días, saturando el enlace y afectando la operación normal. Con Snowball: solicitan el dispositivo, transfieren localmente a velocidad de red interna (mucho más rápido que 1 Gbps hacia internet), lo devuelven, y AWS ingesta los datos en 1-2 días. Total: ~1 semana, sin afectar el enlace de producción.

> 💡 **Tip de examen:** Las preguntas de Snowball vs. transferencia online se resuelven con dos criterios: volumen de datos y ancho de banda disponible. Cualquier escenario con "petabytes", "migración masiva" o "conexión a internet limitada o costosa" apunta a Snowball. Si el volumen es manejable (TBs con buen ancho de banda), la transferencia directa por internet o con Transfer Acceleration es suficiente.

---

## Slide 38 | AWS Snowmobile

_Las notas oficiales describen Snowmobile como un contenedor de 45 pies arrastrado por camión, capaz de transferir hasta 100 PB por unidad. Seguridad física: GPS, videovigilancia 24/7, personal dedicado, escolta opcional. Cifrado AES-256 con KMS. Caso de escala: 100 PB por internet con 10 Gbps tardaría ~1018 días (casi 3 años)._

**Complemento:** La escala de Snowmobile es de exabytes — se usan múltiples unidades en paralelo para migraciones de esa magnitud. Los clientes típicos son proveedores de contenido con bibliotecas de video masivas, institutos de investigación científica, o empresas que cierran centros de datos completos.

**Ejemplo concreto:** Una empresa de streaming con 100 PB de contenido audiovisual quiere migrar su datacenter completo a AWS. Solicitar múltiples Snowmobiles le permite mover esos datos en semanas en lugar de años. El camión llega al datacenter, se conecta a la red local, se transfieren los datos a velocidad de red interna, y el camión parte hacia la instalación de AWS.

> 💡 **Tip de examen:** Snowball vs. Snowmobile es sencillo de distinguir: Snowball para petabytes, Snowmobile para exabytes (o cuando los datos superan los ~10 PB y la logística de múltiples Snowballs sería engorrosa). El examen también puede incluir Snowball Edge, una variante con capacidad de cómputo integrada para procesar datos en el campo antes de enviarlos — aunque este módulo no lo cubre en detalle.

---

## Slide 41 | Elegir una región: consideraciones de conformidad y latencia

_Las notas oficiales presentan dos de los cuatro criterios: (1) residencia de datos y conformidad normativa — los datos en AWS están sujetos a las leyes del país donde se almacenan; regulaciones como HIPAA tienen pautas estrictas sobre dónde pueden almacenarse los datos; (2) proximidad — incluso diferencias de latencia pequeñas afectan la experiencia del usuario._

**Complemento:** El criterio de conformidad es no negociable y siempre va primero en la evaluación. Si hay una ley que exige que los datos permanezcan en el país, eso elimina todas las otras opciones. Para el contexto de Latinoamérica: varios países tienen leyes de protección de datos que pueden requerir que los datos de ciudadanos no salgan del territorio nacional. Antes de diseñar cualquier arquitectura para un cliente, este punto debe verificarse.

**Ejemplo concreto:** Una empresa mexicana de servicios financieros debe cumplir con regulaciones de la CNBV que exigen que ciertos datos de clientes permanezcan en México. AWS tiene una región en México (`mx-central-1`). Eso resuelve el requisito de residencia. Si AWS no tuviera región en México, la empresa necesitaría soluciones híbridas u on-premises para esos datos específicos.

> 💡 **Tip de examen:** Las preguntas sobre selección de región tienen un orden de prioridad implícito: cumplimiento normativo > latencia > disponibilidad de servicios > costo. Si una pregunta menciona requisitos legales o regulatorios, eso determina la región independientemente del costo o la latencia. El examen no te pedirá que elijas entre `us-east-1` y `eu-west-1` por costo, pero sí puede pedirte que identifiques que una regulación de GDPR requiere datos en Europa.

---

## Slide 42 | Elegir una región: consideraciones de costos y disponibilidad del servicio

_Las notas oficiales presentan los otros dos criterios: (3) disponibilidad de servicios — no todos los servicios están en todas las regiones; los nuevos se lanzan primero en `us-east-1`; (4) costo — los precios varían por región; la diferencia normalmente no es suficiente para prevalecer sobre los otros tres criterios, pero puede ser el factor decisivo cuando los demás son equivalentes. También menciona el trade-off de multi-región: menor latencia y mayor resiliencia a costa de mayor complejidad operativa._

**Complemento:** El orden correcto de evaluación para el examen es: **cumplimiento → latencia → disponibilidad de servicios → costo**. El costo casi nunca es el criterio dominante en arquitectura de producción, pero el examen puede plantear escenarios donde es el factor de desempate cuando todo lo demás es igual.

**Ejemplo concreto:** Una startup que construye un servicio de IA necesita Amazon Bedrock, que en 2024 no estaba disponible en todas las regiones. Si el startup tiene usuarios en Europa pero Bedrock solo está en `us-east-1` y `eu-west-1`, la decisión de región se basa primero en disponibilidad de servicio, luego en latencia para sus usuarios europeos.

> 💡 **Tip de examen:** Las preguntas sobre selección de región suelen incluir los cuatro criterios como distractores. Busca el criterio que es mandatorio en el escenario — si hay cumplimiento normativo, eso decide. Si no hay cumplimiento, busca el criterio más restrictivo en el escenario (disponibilidad de un servicio específico, luego latencia, luego costo). `us-east-1` es frecuentemente la región con mayor disponibilidad de servicios y suele ser la más barata — es una buena región por defecto cuando el escenario no tiene restricciones específicas.

---

## Slides 52–53 | Pregunta de examen de ejemplo

_Las notas oficiales presentan la pregunta: "vendedores cargan cifras de ventas diariamente; se necesita solución de almacenamiento duradero que proteja de eliminación accidental". Opciones: A) EBS con snapshots semanales, B) S3 con control de versiones, C) dos buckets S3 en diferentes regiones, D) almacenamiento de instancia EC2._

**⚠️ Error en el material oficial:** El slide 52 dice "La respuesta correcta es la C" pero el texto explicativo en el slide 53 y la lógica del problema claramente apuntan a la opción **B**. Señálalo explícitamente en clase para no confundir a los estudiantes.

**Análisis de la pregunta:**

Las palabras clave son "proteger de eliminación accidental" y "solución de almacenamiento duradero".

- **A — EBS con snapshots semanales:** Un snapshot semanal significa que podrías perder hasta 7 días de datos entre snapshots. No resuelve "eliminación accidental" de archivos individuales en el momento en que ocurre. ❌
- **B — S3 con control de versiones:** Cuando se elimina un objeto con versioning activo, S3 inserta un marcador de eliminación. El objeto no se pierde. Puedes restaurarlo eliminando ese marcador. Resuelve exactamente el requisito. ✅
- **C — Dos buckets S3 en diferentes regiones:** Un usuario con permisos podría borrar el objeto de ambos buckets. Esto mejora disponibilidad ante falla regional, pero no protege contra eliminación accidental por usuarios. ❌
- **D — Almacenamiento de instancia EC2:** Es almacenamiento efímero. Se pierde cuando la instancia termina. Nunca es la respuesta para datos que requieren durabilidad. ❌

**La respuesta correcta es B.**

> 💡 **Tip de examen:** El método de eliminación de opciones funciona así en preguntas de S3: primero elimina las opciones que no son S3 si la pregunta es claramente sobre almacenamiento de objetos no estructurado. Luego identifica la característica de S3 que resuelve el problema específico del escenario. "Eliminación accidental" → versioning. "Acceso poco frecuente con costo optimizado" → Standard-IA o lifecycle policy. "Distribución global con baja latencia" → CloudFront + S3.

---

_Guía preparada para AWS Academy Cloud Architecting — Módulo 3_ _Basada en las notas del presentador oficiales versión 2022_