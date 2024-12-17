const { Schema, model } = require('mongoose');

const clientesSchema = new Schema({
    nombre: { type:String},
    email: { type:String},
    telefono: { type: Number },
    DNI: { type: Number },
});


module.exports = model('Clientes', clientesSchema)