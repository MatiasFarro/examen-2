//Rutas producto
const express = require('express');
const router = express.Router();
const platillosController = require('../controllers/platillos');

//api/productos
router.post('/', platillosController.obtenerPlatillos);
router.get('/', platillosController.añadirPlatillo);
router.put('/:id', platillosController.actualizarPlatillo);
router.get('/:id', platillosController.verPlatillo);
router.delete('/:id', platillosController.eliminarPlatillo);

module.exports = router;