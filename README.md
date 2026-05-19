🍽️ La Ruta del Sabor — Backend
¿Qué es?
API REST para gestionar restaurantes y sus platos. Permite consultar información sobre distintos locales gastronómicos y los platos que ofrecen.

¿Para qué sirve?
Para obtener datos de restaurantes y platos desde una base de datos, listos para ser usados por cualquier aplicación frontend o cliente como Postman.

¿Cómo funciona?
El servidor recibe peticiones HTTP y responde con datos en formato JSON.
Endpoints disponibles
MétodoRutaDescripciónGET/api/restaurantesLista todos los restaurantesGET/api/restaurantes/:idDetalle de un restauranteGET/api/restaurantes/:id/platosPlatos de un restauranteGET/api/platosLista todos los platosGET/api/platos/:idDetalle de un plato

Tecnologías usadas

Node.js — entorno de ejecución
Express — framework para crear el servidor
MySQL — base de datos
CORS — permite conexiones desde otros orígenes


Estructura del proyecto
RutaSabor/
├── index.js                  → Punto de entrada
├── database/
│   └── db.js                 → Conexión a MySQL
├── controllers/
│   ├── restaurantesController.js
│   └── platosController.js
└── routes/
    ├── restaurantesRoutes.js
    └── platosRoutes.js
