const AutoresController = require('../controllers/autores.controller');
module.exports = function(app){
    app.get('/api', AutoresController.index);
    app.post('/api/autores', AutoresController.createPerson);
    app.get('/api/autores',AutoresController.getAllPeople);
    app.get('/api/autores/:id',AutoresController.getPerson);
    app.put('/api/autores/:id',AutoresController.updatePerson);
    app.delete('/api/autores/:id',AutoresController.deletePerson);
}
