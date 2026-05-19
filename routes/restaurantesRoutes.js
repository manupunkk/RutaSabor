const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/restaurantesControllers');

router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getById);
router.get('/:id/platos', ctrl.getPlatos);

module.exports = router;