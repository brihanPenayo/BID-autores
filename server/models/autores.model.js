const mongoose = require('mongoose');
const AutoresSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Por favor ingresa un nombre'],
        minlength: [3, 'El minimo son 3 caracteres'],
        unique: [true, 'Ya existe el autor']
    },
}, { timestamps: true });

module.exports.Autores = mongoose.model('Autores', AutoresSchema);

