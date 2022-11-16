const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const PORT = process.env.PORT || 3000;
require('./middlewares/mongoDB');

const blogger = require('./models/blogger');
const blog = require('./models/blog');

const app = new express();
app.use(cors()); // help to connect frontend and backend seemlessly
app.use(express.json()); //receive data from frontend to backend
app.use(express.urlencoded({extended:true})); // useful when we use files,imgs etc
app.use(logger('dev'));

const path = require('path');
app.use(express.static('./dist/frontend'));

//api
const blogapi = require('./routes/blogapi');
app.use('/api/blogapi',blogapi);

// // get blogger info
// app.get('/api/bloggerinfo', async(req,res) =>{
//     try{
//         const bloggerDetails = await blogger.find().limit(1);
//         res.send(bloggerDetails);
//     }
//     catch(error){
//         console.log(error);
//     }
// })

// // post blogger info through thunderclient
// app.post('/api/bloggerinfo', async (req,res)=>{
//     try{
//         let info ={
//             name : req.body.name,
//             email: req.body.email,
//             photopath: req.body.photopath,
//             about: req.body.about,
//             followerscount: 1
//         }
//         const bloggerDetails = new blogger(info);
//         const saveBlogger = await bloggerDetails.save();
//         res.send(saveBlogger);
//     }
//     catch(error){
//         console.log(error);
//     }
// })

// // add follower or update follower count
// app.put('/api/bloggerinfo', async (req,res)=>{
//     try{
//         let item = {
//             name : req.body.name,
//             email: req.body.email,
//             photopath: req.body.photopath,
//             about: req.body.about,
//             followerscount : req.body.followerscount + 1
//         }
//         let newCount = { $set : item};
//         let updateCount = await blogger.findByIdAndUpdate({"_id": req.body._id}, newCount);
//         res.send(updateCount);
//     }
//     catch(error){
//         console.log(error);
//     }
// })

// //post blog info with comments through thunderclient
// app.post('/api/bloginfo', async (req,res)=>{
//     try{
//         let info ={
//             title : req.body.title,
//             author: req.body.author,
//             body: req.body.body,            
//             comments: req.body.comments,
//             group: req.body.group            
//         }
//         const blogDetails = new blog(info);
//         const saveBlog = await blogDetails.save();
//         res.send(saveBlog);
//     }
//     catch(error){
//         console.log(error);
//     }
// })

// // get bloglist
// app.get('/api/bloglist', async (req,res) =>{
//     try{
//         let blogDetails = await blog.find().sort({date:-1});
//         res.send(blogDetails);
//     }
//     catch(error){
//         console.log(error);
//     }
// })


app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/frontend/index.html'));
});   

app.listen(PORT,() => {
    console.log(`server listening to port ${PORT}`);
});

