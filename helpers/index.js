const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);

function insertResource(resource) {
  if(!resource || !resource.name) return false;
  else return db('resources').insert(resource);
}

function getResources() {
  return db('resources');
}

function getResource(resource_id) {
  if(!resource_id) return false;
  else return db('resources').where({ id: resource_id });
}

function insertProject(project) {
  if(!project || !project.name) return false;
  if(!project.completed) project.completed = false;
  return db('projects').insert(project);
}

async function getProjects() {
  let projects = await db('projects');
  projects.forEach(p => {
    p.completed = p.completed === 1;
  });
  return projects;
}

async function getProject(project_id) {
  if(!project_id) return false;
  let project = await db('projects').where({ id: project_id });
  project.completed = project.completed === 1;
  return project;
}

function insertTask(task) {
  if(!task || !task.description || !task.project_id) return false;
  else return db('tasks').insert(task);
}

async function getTasks(project_id) {
  if(!project_id) return false;
  else {
    let tasks = await db.select(
      [
        'projects.name as project_name',
        'projects.description as project_description',
        'tasks.description as task_description',
        'tasks.notes',
        'tasks.project_id'
      ])
      .from('tasks')
      .leftJoin('projects', 'tasks.project_id', 'id')
      .orderBy('project.id');
    tasks.forEach(t => {
      t.completed = t.completed === 1;
    });
    return tasks;
  }
}