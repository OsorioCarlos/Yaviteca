
exports.up = function(knex) {
    return knex.schema
    .createTable('estados_conservacion', function(table){
        table.increments('id_estado_conservacion');
        table.string('nombre_estado_conservacion', 50).notNullable();
    })
    .createTable('estados', function(table){
        table.increments('id_estado');
        table.string('nombre_estado', 50).notNullable();
    })
    .createTable('eliminados', function(table){
        table.increments('id_eliminado');
        table.string('nombre_eliminado', 50).notNullable();
    })
    .createTable('libros', function(table){
        table.increments('id_libro');
        table.string('codigo_isbn', 13).notNullable();
        table.string('nombre', 200).notNullable();
        table.string('editorial', 200).notNullable();
        table.string('autor', 200).notNullable();
        table.date('fecha_publicacion').notNullable();
        table.string('genero', 100).notNullable();
        table.integer('estado_conservacion').notNullable();
        table.integer('estado').notNullable();
        table.integer('eliminado').notNullable();
        table.date('fecha_creacion').notNullable();
        table.foreign('estado_conservacion').references('id_estado_conservacion').inTable('estados_conservacion');
        table.foreign('estado').references('id_estado').inTable('estados');
        table.foreign('eliminado').references('id_eliminado').inTable('eliminados');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('libros')
                        .dropTable('estados_conservacion')
                        .dropTable('estados')
                        .dropTable('eliminados')
};