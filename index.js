const express = require('express');
const helmet = require('helmet');

const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

const server = express();

server.use(helmet());
server.use(express.json());

//sanity check
server.get('/', (req,res) => {
    res.send('Everything is Working');
});

server.get('/notes', (req, res) => {
    db('notes')
      .select('id', 'title', 'content')
      .then(notes => {
          res.status(200).json(notes);
      })
      .catch(err => res.status(500).json(err));
});


server.listen(5000, () => console.log('running on port 5000'));