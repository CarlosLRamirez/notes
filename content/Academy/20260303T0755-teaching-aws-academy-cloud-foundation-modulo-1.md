---
created: 2026-03-03 07:55
modified: 2026-05-12 07:24
tags:
  - teaching
  - AWS
  - edutek
  - aws-academy
title: Teaching - AWS Cloud Foundation Modulo 1
aliases: Teaching - AWS Cloud Foundation Modulo 1
publish: true
folder: Academy
---

# AWS Academy Cloud Foundation - Modulo 1
Guia de clase

Curso de Edutek
Inciado el 4 de Marzo de 2026
30 horas



## Enlaces a Material

ACFv2ES-LTI13-161193 (Principal)
https://awsacademy.instructure.com/courses/161193/modules

Edutek-awspract-CR-2026
https://awsacademy.instructure.com/courses/162108


Learners Lab Educator:
https://awsacademy.instructure.com/courses/83604/modules

Learners Lab que creé yo para estudiantes del Cloud Foundation
https://awsacademy.instructure.com/courses/162275


## Notas de Clase


### Caso para analisis del CAF

"Sabor Express" — Una cadena de restaurantes que quiere irse a la nube

Sabor Express tiene 50 sucursales en el país. Llevan 15 años operando con servidores propios en su oficina central. Ahora quieren modernizarse y migrar a AWS. Pero... ¿por dónde empiezan? ¿Qué preguntas tienen que hacerse?

El CAF les ayuda a organizarse. Veamos qué pregunta resuelve cada perspectiva:

---

#### 🏢 Perspectiva de Negocio

**"¿Vale la pena económicamente movernos a la nube?"**

Sabor Express gasta $8,000 al mes en mantener sus servidores: electricidad, técnicos, repuestos, licencias. En AWS podrían pagar solo por lo que usan. Además, durante diciembre sus sistemas colapsan porque hay el doble de pedidos. En la nube podrían crecer automáticamente ese mes y reducirse en enero.

Otras preguntas que esta perspectiva ayuda a responder:

- ¿Podemos lanzar una app de delivery más rápido si usamos la nube?
- ¿Podemos usar los datos de ventas para saber qué platillos promover en cada sucursal?
- ¿Entramos a nuevas ciudades más fácil si no dependemos de servidores físicos?

---

#### 👥 Perspectiva de Personas

**"¿Nuestros empleados saben usar la nube? ¿Y si se resisten al cambio?"**

El gerente de IT de Sabor Express lleva 10 años administrando los mismos servidores físicos. No sabe nada de AWS. Los cocineros y cajeros usan un sistema de punto de venta que nadie ha tocado en años. Si migran todo a la nube de golpe, el caos está garantizado.

Otras preguntas que esta perspectiva ayuda a responder:

- ¿A quién capacitamos primero y en qué?
- ¿Cómo le explicamos a los empleados que esto no significa que perderán su trabajo?
- ¿Contratamos un experto externo mientras formamos al equipo interno?
- ¿Cómo logramos que los gerentes de sucursal apoyen el cambio en vez de sabotearlo?

---

#### ⚖️ Perspectiva de Gobernanza

**"¿Cómo evitamos que esto se salga de control o cueste más de lo planeado?"**

El año pasado, un desarrollador de Sabor Express creó accidentalmente 200 servidores de prueba en AWS y los olvidó encendidos. La factura llegó a $4,000 ese mes por recursos que nadie usó. Nadie tenía claro quién era responsable de controlar el gasto.

Otras preguntas que esta perspectiva ayuda a responder:

- ¿Quién aprueba qué se puede crear en AWS y qué no?
- ¿Cómo sabemos si el proyecto de migración va bien o mal?
- ¿Qué pasa si a mitad del proyecto cambian los requisitos legales sobre dónde deben estar guardados los datos de los clientes?
- ¿Cómo medimos si la inversión en la nube realmente nos está dando resultados?

---

#### 🖥️ Perspectiva de Plataforma

**"¿Cómo movemos técnicamente nuestros sistemas a la nube?"**

Sabor Express tiene tres sistemas críticos: el punto de venta de las sucursales, el sistema de inventario central y la app de delivery que lanzaron el año pasado. Cada uno fue construido por un equipo diferente, en tecnologías diferentes, y ninguno fue diseñado para vivir en la nube.

Otras preguntas que esta perspectiva ayuda a responder:

- ¿Movemos los sistemas tal como están o los reescribimos?
- ¿Cómo conectamos las 50 sucursales a AWS de forma segura?
- ¿Cómo hacemos para que la app de delivery aguante 10 veces más pedidos en Navidad sin caerse?
- ¿Qué hacemos con el sistema de punto de venta que tiene 10 años y nadie sabe bien cómo funciona?

---

#### 🔒 Perspectiva de Seguridad

**"¿Cómo protegemos los datos de nuestros clientes y del negocio?"**

Sabor Express guarda los datos de tarjetas de crédito de miles de clientes. Si esa información se filtra, además de multas millonarias, perderían la confianza de sus clientes de un día para otro. También tienen recetas secretas y datos de proveedores que no pueden caer en manos de la competencia.

Otras preguntas que esta perspectiva ayuda a responder:

- ¿Quién puede ver los datos de los clientes y quién no?
- ¿Cómo nos enteramos si alguien está intentando hackear nuestros sistemas?
- Si mañana hay una filtración de datos, ¿qué hacemos en las próximas dos horas?
- ¿Cumplimos con las leyes de protección de datos de nuestro país?

---

#### ⚙️ Perspectiva de Operaciones

**"¿Cómo mantenemos todo funcionando una vez que estamos en la nube?"**

Un viernes por la noche, justo cuando hay más pedidos, el sistema de delivery de Sabor Express se cae. Antes, el técnico tenía que ir físicamente al servidor. Ahora en la nube, ¿quién responde? ¿En cuánto tiempo? ¿Cómo se enteran antes de que los clientes empiecen a quejarse en redes sociales?

Otras preguntas que esta perspectiva ayuda a responder:

- ¿Cómo hacemos backups de todas las órdenes del día sin que afecte la operación?
- Si se cae un sistema en una sucursal, ¿cuánto tiempo máximo podemos estar sin operar?
- ¿Cómo sabemos en tiempo real si algo está fallando antes de que los clientes lo noten?
- ¿Cómo actualizamos el software de punto de venta en 50 sucursales sin cerrar ninguna?

---

#### El resumen visual para tus estudiantes

|Perspectiva|La pregunta central de Sabor Express|
|---|---|
|Negocio|¿Vale la pena y qué ganamos?|
|Personas|¿Estamos listos como equipo humano?|
|Gobernanza|¿Cómo controlamos el proyecto y el gasto?|
|Plataforma|¿Cómo movemos los sistemas técnicamente?|
|Seguridad|¿Cómo protegemos datos y sistemas?|
|Operaciones|¿Cómo mantenemos todo funcionando?|

---

#### Idea de actividad para clase

Puedes darles a los estudiantes una lista de 10 problemas reales de Sabor Express mezclados, y pedirles que los clasifiquen en la perspectiva correcta. Por ejemplo:

> _"El sistema de delivery se cayó y tardaron 3 horas en darse cuenta"_ → ¿Qué perspectiva del CAF habría evitado esto?

Esto los obliga a razonar, no solo a memorizar, que es exactamente el tipo de pregunta que aparece en el examen Cloud Practitioner.


## Plan de Clase


## Quizes

[[AWS Academy Cloud Foundation - Banco de Preguntas 1]]

## Practicas de Laboratorio

### 2.1 Lab - HTML Demo - instructions
 **Cool HTML Demo for AWS Web Server 🚀**

Perfect for showing students! Here's a **professional, interactive demo page** that showcases AWS capabilities.

---

#### 📄 Complete HTML File (Ready to Use)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AWS Web Server Demo - Lightning Fast Setup</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        header {
            text-align: center;
            color: white;
            margin-bottom: 40px;
            animation: slideDown 0.8s ease;
        }

        header h1 {
            font-size: 3em;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        header p {
            font-size: 1.3em;
            opacity: 0.95;
        }

        .aws-logo {
            display: inline-block;
            font-size: 2em;
            margin-right: 15px;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
        }

        .stat-card {
            background: rgba(255, 255, 255, 0.95);
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            text-align: center;
            animation: fadeInUp 0.6s ease;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .stat-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.3);
        }

        .stat-card .number {
            font-size: 2.5em;
            font-weight: bold;
            color: #667eea;
            margin: 10px 0;
        }

        .stat-card .label {
            font-size: 1.1em;
            color: #333;
            font-weight: 600;
        }

        .stat-card .description {
            font-size: 0.9em;
            color: #666;
            margin-top: 10px;
        }

        .icon {
            font-size: 2.5em;
            margin-bottom: 10px;
        }

        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
            margin-bottom: 40px;
        }

        .feature-box {
            background: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
            border-left: 5px solid #667eea;
            animation: fadeInUp 0.6s ease 0.1s backwards;
        }

        .feature-box h3 {
            color: #667eea;
            margin-bottom: 15px;
            font-size: 1.3em;
        }

        .feature-box p {
            color: #555;
            line-height: 1.6;
        }

        .code-section {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 12px;
            padding: 30px;
            margin-bottom: 40px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }

        .code-section h2 {
            color: #333;
            margin-bottom: 20px;
            font-size: 1.5em;
        }

        .code-block {
            background: #2d2d2d;
            color: #f8f8f2;
            padding: 20px;
            border-radius: 8px;
            overflow-x: auto;
            font-family: 'Courier New', monospace;
            font-size: 0.95em;
            line-height: 1.5;
            margin-bottom: 15px;
        }

        .code-block code {
            color: #66d9ef;
        }

        .highlight {
            background: #ffd700;
            color: #000;
            padding: 2px 6px;
            border-radius: 3px;
            font-weight: bold;
        }

        .timeline {
            position: relative;
            padding: 20px 0;
        }

        .timeline-item {
            display: flex;
            margin-bottom: 30px;
            animation: fadeInLeft 0.6s ease;
        }

        .timeline-marker {
            background: #667eea;
            color: white;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 1.2em;
            flex-shrink: 0;
            margin-right: 20px;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }

        .timeline-content {
            background: white;
            padding: 20px;
            border-radius: 8px;
            flex: 1;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .timeline-content h4 {
            color: #667eea;
            margin-bottom: 8px;
        }

        .timeline-content p {
            color: #555;
            line-height: 1.6;
        }

        .cta-section {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 50px;
            border-radius: 15px;
            text-align: center;
            margin-bottom: 40px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        }

        .cta-section h2 {
            font-size: 2em;
            margin-bottom: 20px;
        }

        .cta-section p {
            font-size: 1.2em;
            margin-bottom: 30px;
            opacity: 0.95;
        }

        .btn {
            display: inline-block;
            padding: 15px 40px;
            background: white;
            color: #667eea;
            text-decoration: none;
            border-radius: 8px;
            font-weight: bold;
            font-size: 1.1em;
            transition: all 0.3s ease;
            cursor: pointer;
            border: none;
        }

        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }

        .btn-secondary {
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: 2px solid white;
            margin-left: 15px;
        }

        .btn-secondary:hover {
            background: white;
            color: #667eea;
        }

        .metrics {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
            margin: 30px 0;
        }

        .metric {
            background: #f0f0f0;
            padding: 15px;
            border-radius: 8px;
            text-align: center;
        }

        .metric-value {
            font-size: 1.8em;
            font-weight: bold;
            color: #667eea;
        }

        .metric-label {
            font-size: 0.9em;
            color: #666;
            margin-top: 5px;
        }

        footer {
            text-align: center;
            color: white;
            padding: 30px;
            border-top: 1px solid rgba(255, 255, 255, 0.2);
        }

        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeInLeft {
            from {
                opacity: 0;
                transform: translateX(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        .live-status {
            background: #4caf50;
            color: white;
            padding: 10px 20px;
            border-radius: 20px;
            display: inline-block;
            margin: 10px 0;
            font-weight: bold;
        }

        .live-status::before {
            content: "●";
            animation: pulse 2s infinite;
            margin-right: 8px;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }

        @media (max-width: 768px) {
            header h1 {
                font-size: 2em;
            }

            .stats-grid {
                grid-template-columns: 1fr;
            }

            .cta-section {
                padding: 30px;
            }

            .btn-secondary {
                display: block;
                margin-left: 0;
                margin-top: 15px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <header>
            <h1>
                <span class="aws-logo">☁️</span>
                AWS Web Server Demo
            </h1>
            <p>Deploying to the cloud has never been easier</p>
            <div class="live-status">LIVE ON AWS</div>
        </header>

        <!-- Key Statistics -->
        <div class="stats-grid">
            <div class="stat-card">
                <div class="icon">⚡</div>
                <div class="number">15</div>
                <div class="label">Minutes Setup</div>
                <div class="description">From zero to deployed</div>
            </div>

            <div class="stat-card">
                <div class="icon">💰</div>
                <div class="number">$0</div>
                <div class="label">Free Tier</div>
                <div class="description">First 12 months</div>
            </div>

            <div class="stat-card">
                <div class="icon">🚀</div>
                <div class="number">∞</div>
                <div class="label">Scalability</div>
                <div class="description">Grows with you</div>
            </div>

            <div class="stat-card">
                <div class="icon">🔒</div>
                <div class="number">99.99%</div>
                <div class="label">Uptime SLA</div>
                <div class="description">Enterprise grade</div>
            </div>
        </div>

        <!-- Main Features -->
        <div class="features">
            <div class="feature-box">
                <h3>🎯 Easy Deployment</h3>
                <p>Deploy your application in minutes using simple AWS services. No complex infrastructure knowledge required. Just upload your code and AWS handles the rest.</p>
            </div>

            <div class="feature-box">
                <h3>💡 Cost Effective</h3>
                <p>Pay only for what you use. AWS free tier gives you 12 months of free services. Perfect for students, startups, and learning resources.</p>
            </div>

            <div class="feature-box">
                <h3>🌍 Global Reach</h3>
                <p>Your application is available worldwide instantly. AWS has data centers in 30+ regions ensuring low latency for users anywhere.</p>
            </div>

            <div class="feature-box">
                <h3>📊 Monitoring Built-in</h3>
                <p>CloudWatch provides real-time monitoring, logging, and alerting. Know exactly what your application is doing at all times.</p>
            </div>

            <div class="feature-box">
                <h3>🔄 Auto Scaling</h3>
                <p>Your application automatically scales up or down based on demand. Handle traffic spikes without manual intervention.</p>
            </div>

            <div class="feature-box">
                <h3>🔐 Security First</h3>
                <p>Enterprise-grade security built-in. VPC, IAM roles, encryption, and compliance with international standards included.</p>
            </div>
        </div>

        <!-- Quick Start Timeline -->
        <div class="code-section">
            <h2>⚙️ Quick Start - 5 Simple Steps</h2>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-marker">1</div>
                    <div class="timeline-content">
                        <h4>Create AWS Account</h4>
                        <p>Sign up at <span class="highlight">aws.amazon.com</span> - takes 2 minutes</p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-marker">2</div>
                    <div class="timeline-content">
                        <h4>Choose Your Service</h4>
                        <p>Pick EC2, Lambda, or Elastic Beanstalk depending on your needs</p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-marker">3</div>
                    <div class="timeline-content">
                        <h4>Configure & Deploy</h4>
                        <p>Use AWS Console (visual) or CLI - both are equally easy</p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-marker">4</div>
                    <div class="timeline-content">
                        <h4>Get Your URL</h4>
                        <p>AWS gives you a public URL instantly - share it worldwide</p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-marker">5</div>
                    <div class="timeline-content">
                        <h4>Monitor & Iterate</h4>
                        <p>Use CloudWatch to monitor, then update your code anytime</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Code Example -->
        <div class="code-section">
            <h2>📝 Example: Deploy Node.js Server</h2>
            <div class="code-block">
<code>// Simple Node.js server
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from AWS! 🚀');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});</code>
            </div>
            <p style="color: #666; margin-bottom: 15px;">
                Push this to GitHub, connect to AWS Elastic Beanstalk, and your app is <span class="highlight">LIVE</span> in minutes!
            </p>
        </div>

        <!-- Performance Metrics -->
        <div class="code-section">
            <h2>📈 Current Performance Metrics</h2>
            <div class="metrics">
                <div class="metric">
                    <div class="metric-value">45ms</div>
                    <div class="metric-label">Average Response</div>
                </div>
                <div class="metric">
                    <div class="metric-value">99.99%</div>
                    <div class="metric-label">Uptime</div>
                </div>
                <div class="metric">
                    <div class="metric-value">2.3GB</div>
                    <div class="metric-label">Data Processed</div>
                </div>
                <div class="metric">
                    <div class="metric-value">15K</div>
                    <div class="metric-label">Requests/Hour</div>
                </div>
            </div>
        </div>

        <!-- Comparison Table -->
        <div class="code-section">
            <h2>📊 AWS Services Comparison</h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                <thead>
                    <tr style="background: #f0f0f0;">
                        <th style="padding: 12px; text-align: left; border-bottom: 2px solid #667eea;">Service</th>
                        <th style="padding: 12px; text-align: left; border-bottom: 2px solid #667eea;">Best For</th>
                        <th style="padding: 12px; text-align: left; border-bottom: 2px solid #667eea;">Cost</th>
                        <th style="padding: 12px; text-align: left; border-bottom: 2px solid #667eea;">Setup Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 12px;">EC2</td>
                        <td style="padding: 12px;">Full control, custom apps</td>
                        <td style="padding: 12px;">$3-10/month</td>
                        <td style="padding: 12px;">15 minutes</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd; background: #f9f9f9;">
                        <td style="padding: 12px;">Lambda</td>
                        <td style="padding: 12px;">Serverless, event-driven</td>
                        <td style="padding: 12px;">$0.20 per 1M calls</td>
                        <td style="padding: 12px;">5 minutes</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 12px;">Elastic Beanstalk</td>
                        <td style="padding: 12px;">Simplest deployment</td>
                        <td style="padding: 12px;">$5-15/month</td>
                        <td style="padding: 12px;">10 minutes</td>
                    </tr>
                    <tr style="background: #f9f9f9;">
                        <td style="padding: 12px;">ECS Fargate</td>
                        <td style="padding: 12px;">Container orchestration</td>
                        <td style="padding: 12px;">$7-20/month</td>
                        <td style="padding: 12px;">20 minutes</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Call to Action -->
        <div class="cta-section">
            <h2>Ready to Deploy?</h2>
            <p>Your first web server is just a few clicks away</p>
            <a href="https://aws.amazon.com/free/" class="btn" target="_blank">
                Start AWS Free Tier
            </a>
            <a href="https://docs.aws.amazon.com/" class="btn btn-secondary" target="_blank">
                Read Documentation
            </a>
        </div>

        <!-- Footer -->
        <footer>
            <p>AWS Web Server Demo | Built to show students how easy cloud deployment can be</p>
            <p style="margin-top: 15px; font-size: 0.9em;">
                This page itself is running on AWS and deployed in seconds! 
                <br>
                <strong>Yes, this exact HTML file is what you deploy - it's that simple!</strong>
            </p>
        </footer>
    </div>
</body>
</html>
```

---

#### 🚀 How to Use This for Teaching

#### **Method 1: Deploy to S3 + CloudFront (Fastest)**

```bash
# 1. Save the HTML file
# 2. Create S3 bucket
aws s3 mb s3://my-demo-site-uniquename

# 3. Upload the file
aws s3 cp demo.html s3://my-demo-site-uniquename/index.html --acl public-read

# 4. Enable website hosting
aws s3 website s3://my-demo-site-uniquename \
  --index-document index.html

# 5. Get the URL
# URL: http://my-demo-site-uniquename.s3-website-us-east-1.amazonaws.com
```

---

#### **Method 2: Deploy to EC2 (Show Full Setup)**

```bash
# 1. Launch EC2 instance (t2.micro, free tier)
# 2. SSH into instance
ssh -i your-key.pem ec2-user@your-instance-ip

# 3. Install web server
sudo yum update -y
sudo yum install -y httpd

# 4. Start service
sudo systemctl start httpd

# 5. Upload HTML
# Use FileZilla or:
scp -i your-key.pem demo.html ec2-user@instance:/tmp/
# Then: sudo cp /tmp/demo.html /var/www/html/index.html

# 6. Done! Access via browser with EC2 public IP
```

---

#### **Method 3: Deploy to Elastic Beanstalk (Zero Config)**

```bash
# 1. Install EB CLI
pip install awsebcli

# 2. Create folder
mkdir demo-site && cd demo-site
cp demo.html index.html

# 3. Initialize
eb init -p "Node.js 18 running on 64bit Amazon Linux 2" demo-site

# 4. Create environment
eb create demo-env

# 5. Deploy
eb deploy

# 6. Open in browser
eb open
```

---

#### 📊 What Makes This Great for Teaching

```
✅ Professional Design
   └─ Students see what real web apps look like

✅ Interactive Elements
   └─ Cards animate, buttons work, responsive design

✅ Key Statistics
   └─ Shows the value proposition clearly

✅ Timeline
   └─ Visual explanation of deployment steps

✅ Code Examples
   └─ Real Node.js example they can understand

✅ Comparison Table
   └─ Helps them choose which AWS service to use

✅ Call to Action
   └─ Motivates them to try it themselves

✅ Mobile Responsive
   └─ Works on phones/tablets

✅ Fast Loading
   └─ Single HTML file, no dependencies
   └─ Pure CSS animations (no JavaScript needed)

✅ It's THE DEMO
   └─ This page IS running on AWS
   └─ You deploy it to show that deployment works!
```

---

#### 💡 Teaching Tips

```
BEFORE CLASS:
1. Deploy this HTML to S3
2. Get the public URL
3. Show students the URL

DURING CLASS:
1. "This page is live on AWS"
2. Show them the HTML code
3. Walk through each service
4. Deploy same code to different services
5. Compare URLs and performance

ASSIGNMENT:
1. Students fork their own version
2. Customize the content
3. Deploy to AWS themselves
4. Share their URL in class
5. Bonus: Add their own sections!

DISCUSSION POINTS:
- "Why is S3 faster than EC2?"
- "When would you use Lambda?"
- "How does CloudFront speed it up?"
- "What's the minimum free tier cost?"
- "How would you add a database?"
```

---

#### 🎨 Easy Customizations for Your Class

```html
<!-- Change the title -->
<h1>Carlos's AWS Demo - Finanzas App</h1>

<!-- Change the color scheme (find and replace) -->
#667eea → Your school color
#764ba2 → Your secondary color

<!-- Add your logo -->
<img src="your-logo.png" style="height: 50px;">

<!-- Add student names to footer -->
<p>Created by: [Student Names]</p>

<!-- Add live counter -->
<div class="metric">
    <div class="metric-value" id="counter">0</div>
    <div class="metric-label">Visitors Today</div>
</div>

<script>
document.getElementById('counter').textContent = 
  Math.floor(Math.random() * 5000);
</script>
```

---


### [[2.2 Lab -  🚀 Laboratorio Práctico - Mi Primera Landing Page en la Nube]]
    


## Links:
*References*


