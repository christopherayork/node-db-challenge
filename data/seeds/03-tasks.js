
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: 'Stand up and exit room.', notes: 'You have to open the door first.', project_id: 1},
        {id: 2, description: 'Walk down stairs', notes: 'Legs are important here.', project_id: 1},
        {id: 3, description: 'Exit through front door', notes: 'We know, doors are tricky.', project_id: 1},
        {id: 4, description: 'Sit down on couch.', notes: 'Cheetos from last week are what you\'re smelling.', project_id: 2},
        {id: 5, description: 'Turn on TV.', notes: 'You paid a lot for this, keep being a vampire so you can enjoy it.', project_id: 2},
        {id: 6, description: 'Straighten out your bedding, no need to be perfect.', notes: 'Just wash things on the weekend, you have TV to watch after all.', project_id: 3}
      ]);
    });
};
