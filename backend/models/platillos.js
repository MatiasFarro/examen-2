const { Schema, model } = require('mongoose');

const platillosSchema = new Schema({
    nombre: String,
    ingredientes: String,
    precio: Number,
    imagenes: String,
});


module.exports = model('Platillos', platillosSchema)