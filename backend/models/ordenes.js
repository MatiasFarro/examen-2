const { Schema, model } = require('mongoose');
const platillos = require('./platillos');

const ordenesSchema = new Schema({
    idMesa: { type: String },
    platillos: [
        {
            idPlatillo: { type: String },
            cantidad: { type: Number },
        },
    ],
    estado: {
        type: String,
        enum: ["pendiente", "entregado", "cancelado"],
        default: "pendiente",
    },
});


module.exports = model('Ordenes', ordenesSchema)