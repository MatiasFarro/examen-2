//Rutas producto
const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoria');

//api/productos
router.post('/', categoriaController.crearCategorias);
router.get('/', categoriaController.obtenerCategorias);
router.put('/:id', categoriaController.actualizarCategorias);
router.get('/:id', categoriaController.verCategorias);
router.delete('/:id', categoriaController.eliminarCategorias);

module.exports = router;