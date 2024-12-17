//Rutas producto
const express = require('express');
const router = express.Router();
const meseroController = require('../controllers/mesero');

//api/usuario
router.post('/', meseroController.crearMesero);
router.get('/:id', meseroController.verMesero);
router.put('/:id', meseroController.actualizarMesero);
router.delete('/:id', meseroController.eliminarMesero);
router.get('/', meseroController.obtenerMesero)

module.exports = router;