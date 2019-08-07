var knex = require('../db/knex')

module.exports = {
    editLibro,
    alquilarLibro,
    devolverLibro,
    cambiarEstado
};

function editLibro(req, res){
    knex('libros').where('id_libro', req.params.id)
        .update({
            nombre: req.body.nombre,
            editorial: req.body.editorial,
            autor: req.body.autor,
            fecha_publicacion: req.body.fecha_publicacion,
            genero: req.body.genero,
            estado_conservacion: req.body.estado_conservacion,
            estado: req.body.estado
        })
        .then( () => {
            knex.select()
                .from('libros')
                .then( libros => res.send(libros) );
        })
}

function alquilarLibro(req, res){
    knex('libros').where('id_libro', req.params.id)
        .update({
            estado: req.body.estado
        })
        .then( () => {
            knex.select()
                .from('libros')
                .then( libros => res.send(libros) );
        })
}

function devolverLibro(req, res){
    knex('prestamos').where('id_prestamo', req.params.id)
        .update({
            fecha_devolucion: req.body.fecha_devolucion
        })
        .then( () => {
            knex.select()
                .from('prestamos')
                .then( prestamos => res.send(prestamos) );
        })
}

function cambiarEstado(req, res){
    knex('libros').where('id_libro', req.params.id)
        .update({
            estado: req.body.estado
        })
        .then( () => {
            knex.select()
                .from('libros')
                .then( libros => res.send(libros) );
        })
}