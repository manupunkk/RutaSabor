const db = require('../database/db');

exports.getAll = (req, res) => {
  const sql = `
    SELECT p.*, r.nombre AS restaurante
    FROM platos p
    LEFT JOIN restaurantes r ON p.restaurante_id = r.id
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getById = (req, res) => {
  const sql = `
    SELECT p.*, r.nombre AS restaurante
    FROM platos p
    LEFT JOIN restaurantes r ON p.restaurante_id = r.id
    WHERE p.id = ?
  `;
  db.query(sql, [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ mensaje: 'Plato no encontrado' });
    res.json(results[0]);
  });
};