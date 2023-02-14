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
  const query = `SELECT * FROM users WHERE Username = '${_username}' AND password = '${_password}'`

      connection.query(query, function (error, results, field) {
        if (error) {
          res.status(500).send({ results: null });
        } else {//si todos OK.
          //si el usuario existe.
          if(results.length != 0){
            const token = jwt.sign(JSON.stringify({user: _username}), 'secretpassword');
            return res.status(200).send({'Acces_Token': token});
            //si no hay usurio execute error
          }else{
            res.status(404).send({ results: null });

          }
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

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(3001,80, () => {
    console.log('Aquesta és la nostra API-REST que corre en http://localhost:3001')
})