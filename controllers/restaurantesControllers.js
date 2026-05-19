const db = require('../database/db');

exports.getAll = (req, res) => {
  const sql = `
    SELECT r.*, c.nombre AS categoria
    FROM restaurantes r
    LEFT JOIN categorias c ON r.categoria_id = c.id
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getById = (req, res) => {
  const sql = `
    SELECT r.*, c.nombre AS categoria
    FROM restaurantes r
    LEFT JOIN categorias c ON r.categoria_id = c.id
    WHERE r.id = ?
  `;
  db.query(sql, [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ mensaje: 'Restaurante no encontrado' });
    res.json(results[0]);
  });
};

exports.getPlatos = (req, res) => {
  const sql = `SELECT * FROM platos WHERE restaurante_id = ?`;
  db.query(sql, [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};