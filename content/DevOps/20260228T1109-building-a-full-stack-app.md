---
created: 2026-02-28 11:09
modified: 2026-03-03 07:17
tags:
  - lab
  - AWS
  - Amplify
title: 20260228T1109-building-a-full-stack-app
aliases:
  - Building a Full stack app
publish: true
folder: DevOps
---

## ¿Qué es Next.js?

Next.js es un **framework de desarrollo web** construido sobre React. Para entenderlo bien, hay que separar las dos capas:

**React** es una librería de JavaScript para construir interfaces de usuario. Te permite construir el frontend de una app — botones, formularios, páginas — de forma organizada y reutilizable. Pero React solo es frontend; no sabe nada de bases de datos, servidores, ni URLs.

**Next.js** toma React y le agrega todo lo demás. Le da estructura, manejo de rutas, y sobre todo, la capacidad de correr código en el servidor. Eso lo convierte en un framework **fullstack**.

### Las tres cosas que Next.js hace por ti

**Routing basado en archivos.** No necesitas configurar un router. Si creas un archivo en `src/app/dashboard/page.tsx`, automáticamente existe la ruta `/dashboard` en tu app. La estructura de carpetas es el mapa de tu aplicación.

**API Routes.** Dentro del mismo proyecto puedes crear endpoints de backend. Un archivo en `src/app/api/links/route.ts` se convierte en el endpoint `/api/links`. Ahí escribes lógica de servidor: conectarte a la base de datos, validar datos, llamar servicios externos.

**Server vs Client rendering.** Next.js decide inteligentemente qué se renderiza en el servidor y qué en el navegador del usuario. Esto afecta performance, SEO y seguridad. Por ahora no necesitas dominar esto, pero es importante saber que existe.

## 1. Create the Next.js app

- Run this to create the app skeleton, this is called "Project Scaffolding", i'm located in `~/projects/`

```bash
npx create-next-app@latest link-saver
```

- I did not selected recommended settings: 
- `✔ Would you like to use the recommended Next.js defaults? › No, customize settings` 

- And choosen the options like this:

- `✔ Would you like to use TypeScript?` -> Yes
- `✔ Which linter would you like to use?` -> ESLint
- `✔ Would you like to use React Compiler?` -> No 
- `✔ Would you like to use Tailwind CSS?` -> Yes
- `✔ Would you like your code inside a `src/` directory?` -> Yes
- `✔ Would you like to use App Router? (recommended)`-> Yes
- `✔ Would you like to customize the import alias (`@/*` by default)?` -->  Yes
- `✔ What import alias would you like configured?` --> @/*

- then to run locally

```
cd link-saver
npm run dev
```

- What `dev` means:
  `dev` is a script defined in your `package.json` file. If you open that file you'll see something like:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
}
```

So `npm run dev `is just a shortcut for running `next dev`, which starts Next.js in development mode.
The difference between the scripts matters:

- `dev` — starts the app locally for development. Shows detailed error messages, automatically reloads when you change a file, not optimized for performance. Never used in production.
- `build` — compiles and optimizes your app for production. Minifies code, removes dev tools, makes everything as fast as possible.
- `start` — runs the already-built production version. You always run build first, then start.

## 2. Push to GitHub

```bash
❯ git init
Reinitialized existing Git repository in /Users/carlos.ramirez/projects/link-saver/.git/
❯ git add .
❯ git commit -m "initial scaffold"
On branch main
nothing to commit, working tree clean
❯ git remote add origin git@github.com:CarlosLRamirez/link-saver.git
❯ git branch -M main
❯ git push -u origin main

Enumerating objects: 21, done.
Counting objects: 100% (21/21), done.
Delta compression using up to 8 threads
Compressing objects: 100% (21/21), done.
Writing objects: 100% (21/21), 63.26 KiB | 9.04 MiB/s, done.
Total 21 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To github.com:CarlosLRamirez/link-saver.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
```

## 3. Database creation on AWS

- Go to Aurora and RDS Service
- Choose the following options:
  - Full Configuration
  - PostgreSQL
  - Engine: default
  - Templates: Free-tier
  - DB instance identifier: link-saver-db
  - Master username: postgres
  - Master Password: en Bitwarden (link-saver-db Master password)
  - Instance type: db.t4g.micro
  - Storage: Default
  - Connectivity: All default except
    - Public Acces: Yes -This is only during development, and will be controlled via Security Group, on production we should turn off.
    - VPC Security Group: Create new
      - VPC SG name: `link-saver-db-sg`
  - Monitoring
    - Disable Enable Performance Insights
  - Additional configuration
    - Initial database name: linksaver
  - Everything else keep default
  - Create database 🚀

### 3.1 Security Group Configuration

- Go to VPC -> Security Groups
- Look for the SG with name `link-saver-db-sg`
- It should already have an Inbound rule for PostgreSQL protocol
- Edit the inbound rule and change your source ip if needed (never put Anywhere 🚫 here)

### 3.2 Database Connection

- Download and installed TablePlus
- Make a new connection, got the endpoint from RDS console, from Connectivty & security section
  - Use the master username, Master passwrod, and database name `linksaver`

### 3.3 Inital database setup

> [!IMPORTANT]
> Este paso lo tuve que devolver porque resulta que con Prisma (ver pasos siguientes), es mejor tener la base de datos en blanco y hacer el schema directamente desde Prisma. Veremos si es asi!

- Here I created the intial tables that the app will use, this diagram represent the tables, the entities and their relation.
- This is a crucial and standard step on software development where databases are involved.

```
 Diagrama Entidad-Relación (ERD)

┌─────────────┐          ┌─────────────┐
│    users    │          │    links    │
│─────────────│          │─────────────│
│ id (PK)     │ 1──────N │ id (PK)     │
│ email       │          │ user_id (FK)│
│ password    │          │ url         │
│ created_at  │          │ title       │
└─────────────┘          │ notes       │
                         │ created_at  │
                         └─────────────┘

```

- This is the SQL queries to create the initial tables:

```sql
CREATE TABLE users (
  id          SERIAL PRIMARY KEY,
  email       VARCHAR(255) NOT NULL UNIQUE,
  password    VARCHAR(255) NOT NULL,
  created_at  TIMESTAMP DEFAULT NOW()
);

CREATE TABLE links (
  id          SERIAL PRIMARY KEY,
  user_id     INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  url         TEXT NOT NULL,
  title       VARCHAR(255),
  notes       TEXT,
  created_at  TIMESTAMP DEFAULT NOW()
);
```

- To check if the tables are there, I used this query

```sql
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public';
```

## 4. Deploy with AWS Amplify

### 4.1 What is AWS Amplify?

Amplify is an AWS service that takes your code from GitHub and automatically deploys it to AWS infrastructure. Every time you do a `git push`, Amplify detects the change, runs the build, and publishes the new version. This is called **CI/CD — Continuous Integration / Continuous Deployment**.

Under the hood, Amplify is using CloudFront (global CDN), S3 (for static files), and Lambda (for the Next.js API routes) — but you don't have to configure any of that manually. Amplify abstracts it all away.

### 4.2 Deploying the App

- I went to **AWS Amplify** and clicked **Deploy an App**
- For the Git provider I chose **GitHub**
  - I needed to authorize Amplify to connect with my GitHub account, install a GitHub App, authenticate with MFA, and all that stuff. For simplicity I authorized all my repositories, but it's always better to grant the **minimum required permissions** to your GitHub account and repos
  - Then I selected the `link-saver` repository and the `main` branch (for simplicity I'm deploying directly from `main`)
  - Clicked **Next**
- On the next screen, Amplify already recognized I was using **Next.js** —no manual configuration needed

![Amplify detected Next.js framework](Pasted%20image%2020260228214924.png)

- Under **Advanced Settings** I added the database connection string as an environment variable:
  - **Key:** `DATABASE_URL`
  - **Value:** `postgresql://postgres:YOURPASSWORD@YOURENDPOINT:5432/linksaver`
  - This is called a **connection string** — a single URL that contains everything needed to connect to the database: protocol, credentials, host, port, and database name
  - No need to worry about exposing the password here — Amplify stores it securely and it will never be visible in the code or the repository

![Environment variables configuration](Pasted%20image%2020260228215417.png)

- I left all other options at their default values and clicked **Save and Deploy** 🚀

![Save and Deploy](Pasted%20image%2020260228220055.png)

- This kicked off the initial deployment, which took about 5 minutes. You can watch the build logs in real time — Amplify shows each step:
  **Provision → Build → Deploy**

![Deployment in progress](Pasted%20image%2020260228220306.png)

- Once it finished I opened the deployed URL and my Next.js app was live, running in the cloud on AWS.

![App live on AWS](Pasted%20image%2020260228220927.png)

### 4.3 What I Have Now

At this point the full deployment pipeline is in place:

```
I push code to GitHub
        │
        ▼
Amplify detects the change
        │
        ▼
Runs `npm run build`
        │
        ▼
Deploys to AWS infrastructure
        │
        ▼
App is live at a public URL
```

From this point forward, every `git push` to `main` automatically triggers a new deployment. This is the foundation that allows a development team to
ship changes continuously and reliably.

**Live URL:** https://main.d18hflzcp9sx7x.amplifyapp.com

## 5. Connect the app to the Database

El siguiente paso es instalar un **ORM** en tu proyecto. Antes de hacerlo, el concepto:

### 5.1 ¿Qué es un ORM?

- ORM significa **Object Relational Mapper**. Es una librería que te permite hablar con tu base de datos usando JavaScript/TypeScript en vez de escribir SQL crudo.
  - En vez de escribir:

```sql
SELECT * FROM links WHERE user_id = 1;
```

- Escribes:

```typescript
await db.links.findMany({ where: { userId: 1 } });
```

- El ORM traduce eso a SQL por ti. Más legible, más seguro, y más fácil de mantener.
- El ORM más popular para Next.js hoy en día es **Prisma**. Es lo que vamos a usar.

### 5.2 Wipe de la base de datos

- Voy a hacer rollback de la creación inicial de tablas de la base de datos (paso 3.2), según las inscripciones de Claude para el setup inicial de Prisma.
- Para eso ejecuto el siguientes querys
- Since the tables are empty, go ahead and drop everything:

```sql
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
```

- Then Prisma will own the entire schema from scratch — it'll create the tables with the exact types, constraints, and indexes it expects, plus its own migration history table. This is the cleanest starting point.

### 5.2 Prisma 7 Installation

- Prisma es el "componente" que permite a la aplicación conectarse a la base de datos, sin necesidad de usar queries SQL crudas en el codigo.
- I run this to install Prisma 7 ant its dependencies

```bash
npm install prisma @types/pg --save-dev
npm install @prisma/client @prisma/adapter-pg pg dotenv
```

### 5.3 Initialize Prisma

- Run this command

```bash
npx prisma init
```

- This creates three files:
  - `prisma/schema.prisma` — Your data model definition
  - `.env` — Where your database URL goes
  - `prisma.config.ts` — **New in Prisma 7** — Runtime configuration (replaces things that used to live in the schema file)

- Luego edite el archivo `.env` y agregue la variable de entorno DATABASE_URL, la cual se construye con el usuario, password y el endpoint de la base de datos RDS, de esta manera:

```bash
DATABASE_URL="postgresql://YOUR_USER:YOUR_PASSWORD@YOUR_RDS_ENDPOINT:5432/YOUR_DB_NAME"
```

> [!IMPORTANT]
> Es importante confirmar que el archivo `.env` esté incluido en el archivo `.ignore` para que estas credenciales nunca se suban al repositorio.
> Don't forget: Add .env to your .gitignore if it's not already there. You never want database credentials in your repo.

### 5.4 Configurar `prisma.config.ts`

- El archivo `prisma.config.ts` debe existir en la raiz del proyecto, yo dejé la configuración por defecto

```typescript
// This file was generated by Prisma, and assumes you have installed the following:
// npm install --save-dev prisma dotenv
import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
```

### 5.5 Configurar el archivo` prisma/schema.prisma`

- Aquí es donde se define el esquema de la base de datos a la cual se conecta Prisma
- Agregamos lo siguiente al final del archivo para agregar las dos tablas de la aplicación

```prisma
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique @db.VarChar(255)
  password  String   @db.VarChar(255)
  createdAt DateTime @default(now())
  links     Link[]
}

model Link {
  id        Int      @id @default(autoincrement())
  url       String
  title     String?  @db.VarChar(255)
  notes     String?
  createdAt DateTime @default(now())
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  userId    Int
}
```

### 5.6 Ensure ESM compatibility

Prisma 7 ships as an ES module. Check your `package.json` has:

```json
"type": "module"
```

> This step was not needed.

### 5.7 Run the first migration

- Run this command to start migration

```bash
npx prisma migrate dev --name init
```

- Output:

```bash
Loaded Prisma config from prisma.config.ts.

Prisma schema loaded from prisma/schema.prisma.
Datasource "db": PostgreSQL database "linksaver", schema "public" at "link-saver-db.ce34gkymkily.us-east-1.rds.amazonaws.com:5432"

Applying migration `20260302033843_init`

The following migration(s) have been created and applied from new schema changes:

prisma/migrations/
  └─ 20260302033843_init/
    └─ migration.sql

Your database is now in sync with your schema.
```

- This step does three things:
  - Connects to the RDS PostgreSQL using the URL from `prisma.config.ts`
  - Creates both `Link` and `User` tables in the database
  - Records the migration in `prisma/migrations/` (so you can track schema changes in Git)

If this succeeds, your local machine can talk to RDS. That's the big milestone. 


---

### 5.8 Generate the Prisma Client

- Generate the Prisma Client with this command. The client is in charge to actually talk with the PostgreSQL database, using Typescript language instead of SQL.

```bash
npx prisma generate
```
---

### 5.9 Create the Prisma Client singleton

- Creae the file `src/lib/prisma.ts` and add this:

```typescript
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const connectionString = process.env.DATABASE_URL!;
const adapter = new PrismaPg({ connectionString, ssl: { rejectUnauthorized: false } });

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
```


### 5.10 Create a test API route

- Create `src/app/api/links/route.ts`:

```typescript
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const links = await prisma.link.findMany({
      include: { user: true },
    });
    return NextResponse.json(links);
  } catch (error) {
    console.error("Error fetching links:", error);
    return NextResponse.json({ error: "Failed to fetch links" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // For testing: get or create a default user
    let user = await prisma.user.findFirst();
    if (!user) {
      user = await prisma.user.create({
        data: {
          email: "test@example.com",
          password: "temporary",
        },
      });
    }

    const link = await prisma.link.create({
      data: {
        url: body.url,
        title: body.title,
        notes: body.notes,
        userId: user.id,
      },
    });
    return NextResponse.json(link, { status: 201 });
  } catch (error) {
    console.error("Error creating link:", error);
    return NextResponse.json({ error: "Failed to create link" }, { status: 500 });
  }
}
```


## 5.11 Test

Start the dev server:

bash

```bash
npm run dev
```

In a second terminal:

bash

```bash
# Create a link (also creates the test user)
curl -X POST http://localhost:3000/api/links \
  -H "Content-Type: application/json" \
  -d '{"url": "https://aws.amazon.com", "title": "AWS Homepage", "notes": "Main AWS site"}'

# Fetch all links
curl http://localhost:3000/api/links
```

If the POST returns a JSON object with an `id` and the GET returns an array with that link, the full chain is working: Next.js → Prisma → RDS PostgreSQL.

Go step by step and let me know how each one goes.


----
[[20260302T1417-draft-building-a-full-stack-app-with-nexjt-and-aws-amplify-polished]]

