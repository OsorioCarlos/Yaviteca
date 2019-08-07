
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('eliminados').del()
    .then(function () {
      // Inserts seed entries
      return knex('eliminados').insert([
        {nombre_eliminado: 'Falso'},
        {nombre_eliminado: 'Verdadero'}
      ]);
    });
};
