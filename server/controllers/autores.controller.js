const { Autores } = require("../models/autores.model");

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createAutores = async (request, response) => {
    try {
        const { nombre, apellido, edad } = request.body;
        autores = await Autores.create({
            nombre,
            apellido,
            edad
        });
        response.json(autores);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.getAll = async (request, response) => {
    try {
        const autores = await Autores.find({})
        response.json(autores);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.getPerson = async (request, response) => {
    try {
        const autores = await Autores.findOne({ _id: request.params.id })
        response.json(autores);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.updatePerson = async (request, response) => {
    try {
        const autores = await Autores.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        response.json(autores);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.deletePerson = async (request, response) => {
    try {
        const autores = await Autores.deleteOne({ _id: request.params.id })
        response.json(autores);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}