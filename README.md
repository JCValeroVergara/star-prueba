# Proyecto: CRUD de Cantantes

Este proyecto es una aplicación web que consta de dos partes: una API para el backend utilizando Next.js y un frontend con React.js y Vite para interactuar con la API.

## Tecnologías utilizadas

- **Backend:** Next.js, Prisma, PostgreSQL (Docker)
- **Frontend:** React.js, Vite, React-Router-Dom, Redux-Toolkit, TailwindCss
- **Base de datos:** PostgreSQL (usando Docker y Prisma ORM)
- **Gestor de dependencias:** npm

---

## Instalación y configuración

### 1. Clonar el repositorio
```sh
  git clone <https://github.com/JCValeroVergara/star-prueba.git>
```

### 2. Configuración del Backend (API Cantantes)
```sh
  cd api-cantantes
  npm install
```

- Renombrar el archivo `.env.template` a `.env`.
- Reemplazar las variables de entorno con las configuraciones necesarias.

### 3. Levantar la base de datos con Docker
```sh
  docker compose up -d
```

### 4. Ejecutar Prisma
```sh
  npx prisma init
  npx prisma migrate dev
  npx prisma generate
```

### 5. Ejecutar el seed para poblar la base de datos
```sh
  localhost:3000/api/seed
```

---

### 6. Configuración del Frontend (Cliente React)
```sh
  cd client
  npm install
```

- Renombrar el archivo `.env.template` a `.env`.
- Reemplazar las variables de entorno con las configuraciones necesarias.

### 7. Levantar la aplicación

Ejecutar el backend:
```sh
  cd api-cantantes
  npm run dev
```

Ejecutar el frontend:
```sh
  cd client
  npm run dev
```

---

## Endpoints de la API

| Método  | Endpoint                 | Descripción                           |
|----------|--------------------------|-----------------------------------|
| **GET**  | `/api/cantantes`         | Listar todos los cantantes       |
| **GET**  | `/api/cantantes/:id`     | Obtener un cantante por ID       |
| **POST** | `/api/cantantes`         | Crear un nuevo cantante          |
| **PUT**  | `/api/cantantes/:id`     | Actualizar datos de un cantante  |
| **DELETE** | `/api/cantantes/:id`   | Eliminar un cantante por ID      |

---

## Funcionalidades del Frontend

- **Visualización de Cantantes:** Se muestra una tabla con ID, nombre, edad y género musical.
- **Crear Cantante:** Formulario para agregar un nuevo cantante.
- **Actualizar Cantante:** Permite modificar los datos de un cantante existente.
- **Eliminar Cantante:** Botón para eliminar un cantante de la base de datos.


---

## Autores
- **Juan Carlos Valero** - Desarrollador Full-Stack

