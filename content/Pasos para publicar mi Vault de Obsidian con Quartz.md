---
publish: true
modified: 2025-04-09T21:16:40-06:00
created: 2025-04-09T18:01:23-06:00
---
Estos son los pasos que seguí para publicar en internet mi Vault existente de Obsidian a travez de Github Pages, utilizando Quartz como el generador de sitio estático a partir de mis notas en Markdown

## Parte 1: Hacer que funcione en local

1. Clonar el repositorio de Quartz a una carpeta local

```
git clone https://github.com/jackyzha0/quartz.git
```

2. Mover el contenido del repositorio clonado a la carpeta definitiva con el nombre preferido para el repositorio.

```
mv quartz digital-jungle
```

3. Nos movemos a la carpeta donde estará el repositorio y validamos las versiones de `node` y `npm` e instalamos la dependencias

```
cd digital-jungle
node -v
npm -v
npm i
```

4. Este es el paso donde escogemos si vamos a crear el sitio desde cero, es decir desde una carpeta vacía,  copiar el contenido de una carpeta existente o utilizar simlinks para referenciar el contenido del sitio a una carpeta ya existente.

```
npx quartz create
```

-  Yo seleccioné la opción: `Symlink an existing folder`, y luego ingrese la ruta en el Vault de Obsidian con **SOLAMENTE** las notas que quiero publicar:  `/Users/carlos.ramirez/projects/CerebroDigital2025/3 Resources/9 Published`

> [!DANGER]
> Si en el Vault tenemos notas con información privada o sensible, estas van a ser copiadas en el repositorio de Github, si este es público, van estar accesibles para cualquiera. **Incluso si estas no son accesibles a travez de Github Pages**

* Luego seleccione la opción: `Treat links as shortest path`

- Efectivamente se creo un simlink desde la carpeta de `content`de Quartz a la carpeta principal del Vault

```shell
  8 -rw-r--r--    1 carlos.ramirez  staff     765 Apr  9 17:36 README.md
  0 lrwxr-xr-x    1 carlos.ramirez  staff      73 Apr  9 21:01 content -> /Users/carlos.ramirez/projects/CerebroDigital2025/3 Resources/9 Published
```

- Si quisiéramos modificar el simlink, se debe borrar el existente y crear uno nuevo

```
rm content
ln -s "/Users/carlos.ramirez/projects/CerebroDigital2025/3 Resources" content
```

5. Especificar solo el contenido que quiero que sea publicado en la pagina web.

- Por defecto, todas las notas que estén en la carpeta `../9 Published` serán parte del sitio estático, para controlar que solo las notas que estén explícitamente marcadas sean publicadas en el sitio estático,  se debe agregar el plugin [ExplicitPublish](https://quartz.jzhao.xyz/plugins/ExplicitPublish). 

- Para esto, se debe realizar la siguiente modificación en el archivo `quartz.config.ts`

```ts
    filters: [
      //Plugin.RemoveDrafts() /// comentar opción original
      Plugin.ExplicitPublish(),
```

- Para que una página sea publicada, el `frontmatter` de dicha pagina debe tener el campo `publish`, de esta manera:

```
---
publish: true
---
```

6. Agregar la pagina index.md en la carpeta `../9 Published`. No olvidar incluir la bandera de `publish`en el frontmatter

7. Probar el setup hasta este punto ejecutando este comando desde la carpeta del repositorio:

```
npx quartz build --serve 
```

- Probar que el sitio este accesible desde `http://localhost:8080/`


## Parte 2: Publicar en Github Pages

1. Crear el repositorio publico en Github
	- No agregar archivo `README.md` ni `.gitignore`
2. Luego copiamos la URL del repositorio
	> Usar la opción de SSH para copiar URL 
3. Ejecutar los siguientes comandos, cambiar `REMOTE-URL` por la URL que copiamos del paso anterior

```
# list all the repositories that are tracked
git remote -v
 
# if the origin doesn't match your own repository, set your repository as the origin
git remote set-url origin REMOTE-URL
 
# if you don't have upstream as a remote, add it so updates work
git remote add upstream https://github.com/jackyzha0/quartz.git
```

