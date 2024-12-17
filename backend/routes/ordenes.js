//Rutas producto
const express = require('express');
const router = express.Router();
const ordenesController = require('../controllers/ordenes');


//api/productos
router.post('/', ordenesController.crearOrdenes);
router.get('/', ordenesController.obtenerOrden);
router.put('/:id', ordenesController.actualizarOrdenes);
router.delete('/:id', ordenesController.eliminarOrdenes);


module.exports = router;