
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Go outside', description: 'Go from your bedroom to outside, get some sunlight vampire.', completed: false},
        {id: 2, name: 'Turn on TV', description: 'Turn on the TV for some nice afternoon relaxation, vampire', completed: false},
        {id: 3, name: 'Make bed', description: 'Do something useful, vampire. Make that bed.', completed: false}
      ]);
    });
};
