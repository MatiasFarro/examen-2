//Rutas producto
const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clientes');

//api/productos
router.post('/', clienteController.crearClientes);
router.get('/', clienteController.obtenerCliente);
router.put('/:id', clienteController.actualizarClientes);
router.get('/:id', clienteController.verClientes);
router.delete('/:id', clienteController.eliminarClientes);

module.exports = router;