const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//Eri routet
const gameRoutes = require('./api/routes/games');
const orderRoutes = require('./api/routes/orders');
const userRoutes = require('./api/routes/user');

mongoose.connect('mongodb://jesseb:' +
    process.env.MONGO_ATLAS_PW +
    '@apiprojekti-shard-00-00-rl1ro.mongodb.net:27017,apiprojekti-shard-00-01-rl1ro.mongodb.net:27017,apiprojekti-shard-00-02-rl1ro.mongodb.net:27017/test?ssl=true&replicaSet=apiprojekti-shard-0&authSource=admin&retryWrites=true',
    {
        useNewUrlParser: true
    }
    );
mongoose.Promise = global.Promise;

//Middle ware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extened: false}));
app.use(bodyParser.json());

//Estetään CORS errorit
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});


//Routet mitkä käsittelee requesteja
app.use('/games', gameRoutes);
app.use('/orders', orderRoutes);
app.use('/user', userRoutes);



//Error handlaus
app.use((req, res, next) => {
    const error = new Error('Not found!');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;