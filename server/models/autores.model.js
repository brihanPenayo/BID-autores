const mongoose = require('mongoose');
const AutoresSchema = new mongoose.Schema({
    nombre: { 
        type: String,
        minlength:[10, 'El minimo es de 10'] 
    },
    apellido: { type: String },
    edad: {type: Number}
}, { timestamps: true });
module.exports.Autores = mongoose.model('Autores', AutoresSchema);

