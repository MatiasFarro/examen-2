//const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const meseroSchema = new Schema({
    nombre: { type: String},
    email: { type: String},
    password: { type: String},
    telefono: { type: String},
    estado: { type: Boolean, default: true },
    
});

meseroSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt)
};


meseroSchema.methods.validatePassword = function (password) {
    return bcrypt.compare(password, this.password);
}


module.exports = model('Mesero', meseroSchema)