const { Schema, model } = require('mongoose');

const categoriasSchema = new Schema({
    nombre: String,
    descripcion: String,
});




module.exports = model('Categorias', categoriasSchema)