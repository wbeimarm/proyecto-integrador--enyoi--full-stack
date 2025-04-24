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

## Autor

- **Wbeimar Monsalve**



