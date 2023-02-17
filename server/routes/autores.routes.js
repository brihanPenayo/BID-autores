const AutoresController = require('../controllers/autores.controller');
module.exports = function (app) {
    app.post('/new/', AutoresController.createAutor);
    app.get('/', AutoresController.getAll);
    app.put('/edit/:id', AutoresController.updateAutor);
    app.delete('/delete/:id', AutoresController.deleteAutor);
    app.get('/:id', AutoresController.getAutor);
}