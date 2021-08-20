const express = require('express');

const app = express();

const mongoose = require('mongoose');

//import router
const comicRouter = require('./router/router');

//connect mongoDB
const db = 'mongodb://localhost/comic';

const port = 5001;

mongoose.connect(db);

//middleware
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api', comicRouter);

app.listen(port, () => {
    console.log('App listening on port: ', port);
});
