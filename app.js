const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const PORT = 3000;
require('./middlewares/mongoDB');

const app = new express();
app.use(cors()); // help to connect frontend and backend seemlessly
app.use(express.json()); //receive data from frontend to backend
app.use(express.urlencoded({extended:true})); // useful when we use files,imgs etc
app.use(logger('dev'));

const path = require('path');
app.use(express.static('./dist/frontend'));

//api
const blogapi = require('./routes/blogapi');
app.use('/blogapi',blogapi);


app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/frontend/index.html'));
});   

app.listen(PORT,() => {
    console.log("server listening to port 3000");
});

