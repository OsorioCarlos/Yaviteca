
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('estados').del()
    .then(function () {
      // Inserts seed entries
      return knex('estados').insert([
        {nombre_estado: 'Disponible'},
        {nombre_estado: 'No Disponible'}
      ]);
    });
};
