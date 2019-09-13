
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'Legs', description: 'They\'re your legs, remember? Walk with them.'},
        {id: 2, name: 'Eyes', description: 'Yes, you can see. Use them oculars.'},
        {id: 3, name: 'Couch', description: 'Smells like cheetos, decent place to sit.'},
        {id: 4, name: 'TV', description: 'Marvelous invention, source of your unproductivity.'},
        {id: 5, name: 'Front Door', description: 'Keeps weird people out, and keeps you pale.'}
      ]);
    });
};
