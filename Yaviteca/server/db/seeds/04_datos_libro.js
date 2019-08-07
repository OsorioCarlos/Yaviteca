var tiempo = new Date();

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('libros').del()
    .then(function () {
      // Inserts seed entries
      return knex('libros').insert([
        {codigo_isbn: 9788425223280, nombre: 'Fundamentos de programación con JS', editorial: 'Don Bosco', autor: 'Xavier Lugo', fecha_publicacion: '2008-12-31', genero: 'Programación', estado_conservacion: 2, estado: 1, eliminado: 1, fecha_creacion: '2019-07-11'},
        {codigo_isbn: 9889435324291, nombre: 'Programación con Java', editorial: 'Don Bosco', autor: 'Xavier Lugo', fecha_publicacion: '2008-03-13', genero: 'Programación', estado_conservacion: 2, estado: 1, eliminado: 1, fecha_creacion: '2019-07-11'},
        {codigo_isbn: 9687415122299, nombre: 'Geometría Analítica de Lheman', editorial: 'PLA', autor: 'Charles Lheman', fecha_publicacion: '2013-06-03', genero: 'Matemáticas', estado_conservacion: 1, estado: 1, eliminado: 1, fecha_creacion: tiempo},
        {codigo_isbn: 9990445425302, nombre: 'Gastronomía para la alta cocina', editorial: 'PLA', autor: 'Jhon Gustov', fecha_publicacion: '2009-09-22', genero: 'Cocina', estado_conservacion: 2, estado: 1, eliminado: 1, fecha_creacion: '2019-07-11'},
        {codigo_isbn: 9586405021268, nombre: 'Cocina clásica ecuatoriana', editorial: 'Buena Lectura', autor: 'Doña Petrona', fecha_publicacion: '2010-04-02', genero: 'Cocina', estado_conservacion: 1, estado: 1, eliminado: 1, fecha_creacion: '2019-07-11'},
        {codigo_isbn: 1009145552531, nombre: 'Álgebra de Baldor', editorial: 'Mi libro', autor: 'Baldor', fecha_publicacion: '2005-07-04', genero: 'Matemáticas', estado_conservacion: 3, estado: 1, eliminado: 1, fecha_creacion: '2019-07-11'},
        {codigo_isbn: 9485394920257, nombre: 'Comunismo en la sociedad', editorial: 'Buena Lectura', autor: 'Karl Marx', fecha_publicacion: '2014-05-29', genero: 'Política', estado_conservacion: 1, estado: 1, eliminado: 1, fecha_creacion: tiempo},
        {codigo_isbn: 1019246562732, nombre: 'Tutorial de Python', editorial: 'Buena Lectura', autor: 'Guido van Rossum', fecha_publicacion: '2013-01-23', genero: 'Programación', estado_conservacion: 1, estado: 1, eliminado: 1, fecha_creacion: '2019-07-11'},
        {codigo_isbn: 9384384819246, nombre: 'Contabilidad básica', editorial: 'Don Bosco', autor: 'Luis Quinaloa', fecha_publicacion: '2011-11-16', genero: 'Economía', estado_conservacion: 1, estado: 1, eliminado: 1, fecha_creacion: '2019-07-11'},
        {codigo_isbn: 1029347572833, nombre: 'Diseño de alta costura', editorial: 'Don Bosco', autor: 'Anónimo', fecha_publicacion: '2014-05-29', genero: 'Modas', estado_conservacion: 1, estado: 1, eliminado: 1, fecha_creacion: tiempo}
      ]);
    });
};
