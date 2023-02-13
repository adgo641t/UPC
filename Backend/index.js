'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'bd',
    user: 'root',
    password: 'alumne'

});



app.use(cors());
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );


app.post('/login', (req, res) => {
  console.log(req.body);
  const { _username, _password } = req.body;

    console.log(_username);
    console.log(_password);

      connection.query(`SELECT * FROM users WHERE Username = '${_username}' AND password = '${_password}'`, function (error, results, field) {
        if (error) {
          res.status(400).send({ results: null })
          console.log("todo mal");

        } else {//si todos OK.
          jwt.sign({user: _username}, 'secret', (error, token) => {
            localStorage.setItem('token', token);
          });
        }
      })//end of connection query
     
});

app.post('/register', async (req, res) => {
  const { _username, _password, _email } = req.body;

  let id = 5;

  const hash = await bcrypt.hash(_password, 1);

  let query = `INSERT INTO users (id,Username, User_Email, password, rols) VALUES ('${id}','${_username}', '${_email}', '${hash}', 'User')`;

   connection.query(query, function (error, results, field) {
    if (error) {
      res.status(400).send({ results: error })
    } else {//si todos OK.
      res.status(200).send(JSON.stringify("User Added Correctly"))
    }
  })
});


app.listen(3001,80, () => {
    console.log('Aquesta és la nostra API-REST que corre en http://localhost:3001')
})