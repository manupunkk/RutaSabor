const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/restaurantes', require('./routes/restaurantesRoutes'));
app.use('/api/platos', require('./routes/platosRoutes'));

app.get('/', (req, res) => {
  res.json({ mensaje: 'API La Ruta del Sabor funcionando' });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});