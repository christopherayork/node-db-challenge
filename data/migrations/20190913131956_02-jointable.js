
exports.up = function(knex) {
  return knex.schema
    .createTable('projectResources', tbl => {
      tbl.integer('project_id').notNullable();
      tbl.integer('resource_id').notNullable();
      tbl.primary(['project_id', 'resource_id']);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projectResources');
};
