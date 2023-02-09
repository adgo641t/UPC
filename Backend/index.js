'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'db',
    user: 'root',
    password: ''

});

app.use(cors());
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );


app.get('/login', (req, res) => {
    
});

app.post('/register', (req, res) => {
    
});

app.listen(3000,80, () => {
    console.log('Aquesta és la nostra API-REST que corre en http://localhost:3001')
})