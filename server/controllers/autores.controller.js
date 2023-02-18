const { Autores } = require("../models/autores.model");

module.exports.createAutor = async (req, res) => {
    try {
        let { name } = req.body;
        name = name.trim();
        const autor = await Autores.create({
            name
        });
        res.json(autor);
    } catch (err) {
        res.status(400);
        res.json(err.message);
    }
}

module.exports.getAll = async (req, res) => {
    try {
        const autor = await Autores.find({})
        res.json(autor);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
}

module.exports.getAutor = async (req, res) => {
    try {
        const autor = await Autores.findOne({ _id: req.params.id })
        res.json(autor);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
}

module.exports.updateAutor = async (req, res) => {
    let { name } = req.body;
    name = name.trim();
    try {
        const autor = await Autores.findOneAndUpdate({ _id: req.params.id }, { name }, { new: true }, {runValidators: true})
        res.json(autor);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
}

module.exports.deleteAutor = async (req, res) => {
    try {
        const autor = await Autores.deleteOne({ _id: req.params.id })
        res.json(autor);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
}