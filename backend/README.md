# Proyecto Enyoi Fullstack

Este es un proyecto básico de backend desarrollado con **Node.js**, **Express** y **PostgreSQL**. El objetivo principal es permitir la autenticación de usuarios mediante un endpoint que recibe un nombre de usuario y una clave, y devuelve el ID del usuario si los datos son correctos.

---

## Tecnologías utilizadas

- **Node.js**: Plataforma para ejecutar JavaScript en el servidor.
- **Express**: Framework para crear aplicaciones web y APIs.
- **PostgreSQL**: Sistema de gestión de bases de datos.
- **pg**: Cliente para conectar Node.js con PostgreSQL.
- **dotenv**: Cargar variables de entorno desde un archivo `.env`.
- **cors**: Permite peticiones entre aplicaciones (evita errores CORS).

---

## Estructura del proyecto

```bash
proyecto_enyoi_fullstack/
│
├── src/
│   ├── controllers/
│   │   └── usuariosController.js   # Lógica para buscar usuarios
│   ├── db/
│   │   └── db.js                   # Configuración de conexión a PostgreSQL
│   ├── routes/
│   │   └── usuariosRoutes.js       # Definición de rutas API
│   └── index.js                    # Punto de entrada del servidor
│
├── .env                            # Variables de entorno (no subir a GitHub)
├── .gitignore                      # Archivos ignorados por Git (debe incluir .env)
├── package.json                    # Configuración de npm y dependencias
├── README.md                       # Documentación del proyecto
```

---

## Instalación de las dependencias

Para instalar las dependencias necesarias, ejecuta:

```bash
npm install express pg cors dotenv
```

Estas dependencias son necesarias para el funcionamiento del proyecto:

- **express**: Para crear el servidor y manejar rutas de la API.
- **pg**: Para conectarse y hacer consultas a PostgreSQL desde Node.js.
- **cors**: Para permitir peticiones desde otros orígenes (evita errores CORS).
- **dotenv**: Para leer las variables del archivo `.env`.

---

## Configuración de variables de entorno

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```bash
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_HOST=localhost
DB_NAME=tu_base_de_datos
DB_PORT=5432
```


## Para hacer la prueba

Una vez que hayas instalado las dependencias y configurado tu base de datos, puedes probar el endpoint usando **Postman** o cualquier otra herramienta para hacer peticiones HTTP.

### URL del endpoint:
- **POST** `http://localhost:3000/api/buscarusuario`

### Cuerpo de la petición (formato JSON):

```json
{
  "usuario": "matias.cadavid",
  "clave": "Mc2025#pgSQL*"
}
```

---

## Respuestas esperadas

- Si el usuario existe:

```json
{
  "mensaje": "Usuario encontrado",
  "id": 3
}
```

- Si el usuario NO existe:

```json
{
  "mensaje": "Usuario no encontrado"
}
```

---


## Frontend del proyecto

Este proyecto también tiene una parte visual (frontend), que fue creada usando React con la herramienta Vite (que ayuda a que todo funcione rápido y más simple para nosotros los que estamos aprendiendo).

### ¿Qué hace el frontend?

El frontend muestra una interfaz donde se puede escribir el nombre de usuario y la clave, y al hacer clic en un botón, se conecta con el backend, para verificar si ese usuario existe o no. Si lo encuentra, muestra el ID; si no, dice que no existe.

### ¿Cómo fue creado el frontend?

Yo seguí estos pasos para crearlo desde cero.

```bash
npm create vite@latest
```

Ahí le puse un nombre (en este caso fue algo como `frontend`), seleccioné React y JavaScript.

Después entré a la carpeta y le instalé las dependencias:

```bash
cd frontend-react-busqueda
npm install
```

### Estructura del frontend

```bash
frontend/
│
├── public/
│   └── vite.svg
│
├── src/
│   ├── App.jsx                # Aquí está la lógica principal de la interfaz
│   ├── main.jsx               # Punto de entrada de React
│   └── index.css              # Estilos generales
│
├── package.json               # Lista de dependencias y scripts
├── vite.config.js             # Configuración de Vite
```

### Dependencias del frontend

Cuando instalé las cosas, se agregaron automáticamente estas dependencias:

- **react**: Para crear componentes y la interfaz.
- **react-dom**: Para conectar React con el navegador.
- **vite**: Herramienta para correr y construir el proyecto más fácil y rápido.

### ¿Cómo probar el frontend?

Una vez que estés dentro de la carpeta `frontend/`, puede hacer lo siguiente:

```bash
npm install
npm run dev
```

Después de eso, te aparecerá una dirección como esta en la terminal:

```
http://localhost:5173/
```

Solo la abres en tu navegador, y ya puedes usar la aplicación visual.

---

## Autor

- **Wbeimar Monsalve**



