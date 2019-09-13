
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments();
      tbl.string('name').notNullable();
      tbl.string('description');
      tbl.boolean('completed').notNullable().defaultTo(false);
    })
    .createTable('resources', tbl => {
      tbl.increments();
      tbl.string('name').notNullable();
      tbl.string('description');
    })
    .createTable('tasks', tbl => {
      tbl.increments();
      tbl.string('description').notNullable();
      tbl.string('notes');
      tbl.integer('project_id')
        .references('id')
        .inTable('projects');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};
