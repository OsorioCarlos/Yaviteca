
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('estados_conservacion').del()
    .then(function () {
      // Inserts seed entries
      return knex('estados_conservacion').insert([
        {nombre_estado_conservacion: 'Buen Estado'},
        {nombre_estado_conservacion: 'Regular'},
        {nombre_estado_conservacion: 'Mal Estado'}
      ]);
    });
};
