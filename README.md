
La Ruta del Sabor

¿Qué es?

API REST para gestionar restaurantes y sus platos. Permite consultar información sobre distintos locales gastronómicos y los platos que ofrecen, respondiendo en formato **JSON**.


¿Para qué sirve?

Para obtener datos desde una base de datos MySQL, listos para ser consumidos por cualquier frontend o cliente como **Postman**.


Endpoints disponibles

| Método | Ruta | Descripción |
|:------:|------|-------------|
| `GET` | `/api/restaurantes` | Lista todos los restaurantes |
| `GET` | `/api/restaurantes/:id` | Detalle de un restaurante |
| `GET` | `/api/restaurantes/:id/platos` | Platos de un restaurante |
| `GET` | `/api/platos` | Lista todos los platos |
| `GET` | `/api/platos/:id` | Detalle de un plato |


Tecnologías usadas

| Tecnología | Uso |
|-----------|-----|
| **Node.js** | Entorno de ejecución |
| **Express** | Framework para el servidor |
| **MySQL** | Base de datos |
| **CORS** | Permite conexiones desde otros orígenes |


Estructura del proyecto

```
backendRutaSabor/
├── index.js                      → Punto de entrada del servidor
├── database/
│   └── db.js                     → Conexión a MySQL
├── controllers/
│   ├── restaurantesController.js  → Lógica de restaurantes
│   └── platosController.js        → Lógica de platos
└── routes/
    ├── restaurantesRoutes.js       → Rutas de restaurantes
    └── platosRoutes.js             → Rutas de platos
```
