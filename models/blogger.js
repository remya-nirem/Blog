const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bloggerSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    photopath : {
        type : String
    },
    about :{
        type : String,
        required : true
    },
    followerscount: {
        type : Number
    }
});

const bloggerInfo = mongoose.model('blogger',bloggerSchema);
module.exports = bloggerInfo;