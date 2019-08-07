var knex = require('../db/knex')

module.exports = {
    deleteLibro
};

function deleteLibro(req, res){
    knex('libros').where('id_libro', req.params.id)
        .update({
            eliminado: req.body.eliminado
        })
        .then( () => {
            knex.select()
                .from('libros')
                .then( libros => res.send(libros) );
        })
}