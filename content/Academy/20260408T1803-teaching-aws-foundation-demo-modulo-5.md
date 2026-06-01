---
created: 2026-04-08 18:03
modified: 2026-04-08 18:21
tags:
  - teaching
  - AWS
title: Teaching - AWS Foundation - Demo Modulo 5
aliases: Teaching - AWS Foundation - Demo Modulo 5
publish: true
folder: Academy
---

 Notas para la clase de hoy



```
#!/bin/bash

# Actualizar todos los paquetes del sistema
yum update -y

# Instalar el servidor web Apache
yum install -y httpd

# Iniciar el servicio de Apache
systemctl start httpd

# Habilitar Apache para que se ejecute automáticamente si la EC2 se reinicia
systemctl enable httpd

# Dar permisos al usuario ec2-user sobre la carpeta web (opcional pero recomendado)
usermod -a -G apache ec2-user
chown -R ec2-user:apache /var/www
chmod 2775 /var/www
find /var/www -type d -exec chmod 2775 {} \;
find /var/www -type f -exec chmod 0664 {} \;

# Crear el archivo index.html con el mensaje "Hola Mundo"
echo "<html><head><title>Hola Mundo</title></head><body><h1>¡Hola Mundo desde mi instancia EC2!</h1><p>Apache se instaló correctamente.</p></body></html>" > /var/www/html/index.html
```

## Conectarse a una EC2 por medio de un bastion

### Opción 1: Usar `ProxyJump` (La más rápida y recomendada)

No necesitas conectarte primero a la pública y luego a la privada. Puedes decirle a tu terminal (en tu computadora local) que use la EC2 pública como un "puente" para llegar directamente a la privada.

Abre tu terminal local y ejecuta:

Bash

```
ssh -J usuario@IP_PUBLICA_EC2 -i tu-llave.pem usuario@IP_PRIVADA_EC2
```

- **`-J`**: Le indica a SSH cuál es el "Jump host" (tu instancia pública).
    
- **`usuario`**: Depende del sistema operativo (por ejemplo, `ec2-user` para Amazon Linux, `ubuntu` para Ubuntu).
    
- _Nota:_ Como ambas usan la misma llave, solo necesitas especificar `-i tu-llave.pem` una vez.
    

---
### Opción 2: Reenvío de Agente SSH o `Agent Forwarding` (La más segura si necesitas estar dentro de la pública)

Por seguridad, **nunca debes guardar tu archivo `.pem` original en una EC2 pública**. Si alguien vulnera esa máquina, tendrá acceso a toda tu red privada. En su lugar, puedes "reenviar" temporalmente tu credencial desde tu computadora local.

**Paso 1: Añade la llave al agente SSH de tu máquina local:**

Bash

```
# Inicia el agente (si no está corriendo)
eval "$(ssh-agent -s)"

# Añade tu llave
ssh-add tu-llave.pem
```

**Paso 2: Conéctate a la EC2 pública usando la bandera `-A` (Agent Forwarding):**

Bash

```
ssh -A -i tu-llave.pem usuario@IP_PUBLICA_EC2
```

**Paso 3: Conéctate a la EC2 privada:**

Una vez dentro de la EC2 pública, simplemente ejecuta el comando SSH hacia la IP privada. Como reenviaste el agente, no te pedirá el archivo `.pem`:

Bash

```
ssh usuario@IP_PRIVADA_EC2
```

---

### Opción 3: Copiar el archivo `.pem` (No recomendada por seguridad)

Si es un entorno de pruebas rápido y no te importa la seguridad, puedes copiar el archivo `.pem` desde tu computadora a la EC2 pública.

**Paso 1: Copia el archivo usando `scp` desde tu máquina local:**

Bash

```
scp -i tu-llave.pem tu-llave.pem usuario@IP_PUBLICA_EC2:~/.
```

**Paso 2: Conéctate a tu EC2 pública:**

Bash

```
ssh -i tu-llave.pem usuario@IP_PUBLICA_EC2
```

**Paso 3: Cambia los permisos de la llave copiada:**

Una vez dentro de la EC2 pública, debes darle los permisos correctos al archivo para que SSH te deje usarlo.

Bash

```
chmod 400 tu-llave.pem
```

**Paso 4: Conéctate a la EC2 privada:**

Bash

```
ssh -i tu-llave.pem usuario@IP_PRIVADA_EC2
```

> **Consejo:** Revisa siempre que los Security Groups de la instancia privada permitan tráfico entrante por el puerto 22 (SSH) **exclusivamente** desde la IP privada de la EC2 pública o desde el Security Group al que pertenece la pública.