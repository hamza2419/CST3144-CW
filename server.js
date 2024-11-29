const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.set('port', 3000);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    next();
});

const MongoClient = require('mongodb').MongoClient;

let db;
MongoClient.connect('mongodb+srv://hamzaakhan24:mdx986868@cst3144.sq6yv.mongodb.net/', (err, client) => {
    db = client.db('webstore');
});
