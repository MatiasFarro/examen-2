//Rutas producto
const express = require('express');
const router = express.Router();
const meseroController = require('../controllers/meseroController');

//api/usuario
router.post('/', meseroController.crearMesero);
router.get('/:usuario', crearMeseroController.obtenerMesero);

module.exports = router;