const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://remyak:atLasDB22@cluster0.nxczl99.mongodb.net/BlogDB?retryWrites=true&w=majority')
.then(() => { console.log("Mongodb connected successfully"); })
.catch( error => { console.log("Mongodb connection error : "+ error);})

