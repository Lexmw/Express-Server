// import files and packages up here
const express = require('express');
const morgan = require('morgan');
const data = require('./data.json');

const PORT = 3000;

// create your express server below
const app = express();

// add your routes and middleware below

app.get('/', function(req, res) {
    res.status(200);
    res.send('Status Code 200');
    console.log()
    done();
});
app.get('/data', function(req, res) {
    res.status(200).send(data);
    done();
})

app.use(morgan('dev'));

// finally export the express application
module.exports = app;
