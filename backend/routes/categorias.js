//Rutas producto
const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoria');


//api/productos
router.post('/api/categoria', categoriaController.crearCategorias);
router.get('/api/categoria', categoriaController.obtenerCategorias);
router.put('/api/categoria:id', categoriaController.actualizarCategorias);
router.get('/api/categoria:id', categoriaController.verCategorias);
router.delete('/api/categoria:id', categoriaController.eliminarCategorias);

module.exports = router;