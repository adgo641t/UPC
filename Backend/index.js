'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

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


app.get('/login', (req, res) => {

    connection.query('SELECT * FROM partidas', function (error, results, field) {
        if (error) {
          res.status(400).send({ results: null })
        } else {//si todos OK
          res.status(200).send(JSON.stringify(results))
        }
      })//end of connection query
});

app.post('/register', (req, res) => {
    
});

app.listen(3001,80, () => {
    console.log('Aquesta és la nostra API-REST que corre en http://localhost:3001')
})