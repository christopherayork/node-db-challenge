const express = require('express');
const server = express();
const db = require('./helpers');
server.use(express.json());


server.route('/projects')
  .get((req, res) => {
    db.getProjects()
      .then(r => {
        console.log(r);
        if(r) res.status(200).json(r);
        else res.status(400).json({ error: 'Could not retrieve Projects' });
      })
      .catch(e => {
        console.error(e);
        res.status(500).json({ errorMessage: 'Could not complete request' });
      })
  })
  .post((req, res) => {
    db.insertProject(req.body)
      .then(r => {
        console.log(r);
        if(r) res.status(201).json({ message: 'Project created', project_id: r });
        else res.status(400).json({ erorr: 'Could not insert Project' });
      })
      .catch(e => {
        console.error(e);
        res.status(500).json({ errorMessage: 'Could not complete request' });
      });
  });

server.get('/projects/:id', (req, res) => {
  db.getProject(req.params.id)
    .then(r => {
      console.log(r);
      if(r) res.status(200).json(r);
      else res.status(404).json({ error: 'Could not find requested Project' });
    })
    .catch(e => {
      console.error(e);
      res.status(500).json({ errorMessage: 'Could not complete request' });
    });
});

server.route('/resources')
  .get((req, res) => {
    db.getResources()
      .then(r => {
        console.log(r);
        if(r) res.status(200).json(r);
        else res.status(404).json({ error: 'Could not find Resources' });
      })
      .catch(e => {
        console.error(e);
        res.status(500).json({ errorMessage: 'Could not complete request' });
      });
  })
  .post((req, res) => {
    db.insertResource(req.body)
      .then(r => {
        console.log(r);
        if(r) res.status(201).json({ message: 'Resource inserted', resource_id: r });
        else res.status(400).json({ error: 'Could not insert Resource' });
      })
      .catch(e => {
        console.error(e);
        res.status(500).json({ errorMessage: 'Could not complete request' });
      });
  });

server.get('/resources/:id', (req, res) => {
  db.getResource(req.params.id)
    .then(r => {
      console.log(r);
      if(r) res.status(200).json(r);
      else res.status(400).json({ error: 'Could not get Resource' });
    })
    .catch(e => {
      console.error(e);
      res.status(500).json({ errorMessage: 'Could not complete request' });
    });
});

server.route('/tasks')
  .get((req, res) => {
    db.getTasks()
      .then(r => {
        console.log(r);
        if(r) res.status(200).json(r);
        else res.status(404).json({ error: 'Could not get Resources' });
      })
      .catch(e => {
        console.error(e);
        res.status(500).json({ errorMessage: 'Could not complete request' });
      });
  })
  .post((req, res) => {
    db.insertTask(req.body)
      .then(r => {
        console.log(r);
        if(r) res.status(201).json({ message: 'Task inserted', task_id: r });
        else res.status(400).json({ error: 'Could not insert Task' });
      })
      .catch(e => {
        console.error(e);
        res.status(500).json({ errorMessage: 'Could not complete request' });
      });
  });

server.get('/tasks/:id', (req, res) => {
  db.getTask(req.params.id)
    .then(r => {
      console.log(r);
      if(r) res.status(200).json(r);
      else res.status(404).json({ erorr: 'Could not locate Task' });
    })
    .catch(e => {
      console.error(e);
      res.status(500).json({ errorMessage: 'Could not complete request' });
    });
});

module.exports = server;