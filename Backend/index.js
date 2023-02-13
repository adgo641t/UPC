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

function hashPassword(password) {
  const saltRounds = 10;
  const hash =  bcrypt.hash(password, saltRounds);
  return hash;
}

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
          console.log("todo ok");

          res.status(200).send(JSON.stringify())

        }
      })//end of connection query
     
});

app.post('/register', (req, res) => {
  console.log("entro al register");
  console.log(req.body);
  const { _username, _password, _email } = req.body;

  let id = 4;

  const hash = hashPassword(_password);

  let query = `INSERT INTO users (id,Username, User_Email, password, rols) VALUES ('${id}','${_username}', '${_email}', '${hash}', 'User')`;

  connection.query(query, function (error, results, field) {
    if (error) {
      res.status(400).send({ results: null })
      console.log(error);
    } else {//si todos OK.
      res.status(200).send(JSON.stringify("insertado"))
    }
  })
});


app.listen(3001,80, () => {
    console.log('Aquesta és la nostra API-REST que corre en http://localhost:3001')
})