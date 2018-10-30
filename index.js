const express = require('express');
const helmet = require('helmet');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

const server = express();
const cors = require('cors');
const logger = require('morgan');

server.use(helmet());
server.use(express.json());
server.use(logger('combined'));
server.use(cors());

//sanity check
server.get('/', (req,res) => {
    res.send('Everything is Working');
});

server.get('/notes', protected, (req, res) => {
    db('notes')
      .select('id', 'title', 'content')
      .then(notes => {
          res.status(200).json(notes);
      })
      .catch(err => res.status(500).json(err));
});

server.get('/notes/:id', async (req, res) => {
  try {
      const { id } = req.params;

      const note = await db('notes').where({ id });

      if(note) {
          res.status(200).json(note);
      } else {
          res.status(404).json({ message: 'No note found with this id' });
        }
      } catch (error) {
          res.status(500).json(err);
      }
});

server.post('/notes', (req, res) => {
    const note = req.body;

    db.insert(note)
      .into('notes')
      .then(ids => {
          res.status(201).json(ids[0]);
      })
      .catch(err => {
          res.status(500).json(err);
      });
})

server.put('/notes/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    db('notes')
      .where({ id: id })
      .update(changes)
      .then(count => {
          if(!count || count < 1) {
              res.status(404).json({ message: 'No records found to update' })
          } else {
              res.status(200).json(count);
          }
      })
      .catch(err => res.status(500).json(err));
});

server.delete('/notes/:id', (req, res) => {
    const { id } = req.params;

    db('notes')
      .where({ id })
      .delete(id)
      .then(count => {
        if (!count || count < 1) {
            res.status(404).json({ message: 'No records found to delete' });
          } else {
            res.status(200).json(count);
          }
      })
      .catch(err => res.status(500).json(err));
})

//Auth endpoints
server.post('/api/register', (req, res) => {
    const credentials = req.body;

    const hash = bcrypt.hashSync(credentials.password, 10);
    credentials.password = hash;

    db('users')
      .insert(credentials)
      .then(ids => {
          const id = ids[0];
          res.status(201).json({ newUserId: id });
      })
      .catch(err => {
          res.status(500).json(err);
      });
});

const jwtSecret = 'Coffee is in my DNA';

function generateToken(user) {
    const jwtPayload = {
        ...user, 
        hello: 'User',
        role: 'admin'
    };

    const jwtOptions = {
        expiresIn: '5m',
    }

    return jwt.sign(jwtPayload, jwtSecret, jwtOptions);
}

server.post('/api/login', (req, res) => {
    const creds = req.body;

    db('users')
      .where({ username: creds.username })
      .first()
      .then(user => {
          if(user && bcrypt.compareSync(creds.password, user.password)) {
              const token = generateToken(user);
              res.status(200).json({ welcome: user.username, token });
          } else {
              res.status(401).json({ message: 'You have been denied access' });
          }
      })
      .catch(err => {
          res.status(500).json({ err })
      });
});

//middleware

function protected(req, res, next) {
    const token = req.headers.authorization;

    if(token) {
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
            if(err) {
                res.status(401).json({ message: 'invalid Token' });
            } else {
                req.decodedToken = decodedToken;
                next();
            }
        })
    } else {
        res.status(401).json({ message: 'no token has been provided' });
    }
}


server.listen(5000, () => console.log('running on port 5000'));