'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
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

      connection.query(`SELECT * FROM users WHERE Username = '${_username}' and password = '${_password}'`, function (error, results, field) {
        if (error) {
          res.status(400).send({ results: null })
          console.log("todo mal");

        } else {//si todos OK.
          console.log("todo ok");

          res.status(200).send(JSON.stringify())

        }
      })//end of connection query
    
    
});

app.listen(3001,80, () => {
    console.log('Aquesta és la nostra API-REST que corre en http://localhost:3001')
})