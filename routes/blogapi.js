const express = require('express');
const router = express.Router();

const blogger = require('../models/blogger');
const blog = require('../models/blog');

// get blogger info
router.get('/bloggerinfo', async(req,res) =>{
    try{
        const bloggerDetails = await blogger.find().limit(1);
        res.send(bloggerDetails);
    }
    catch(error){
        console.log(error);
    }
})

// post blogger info through thunderclient
router.post('/bloggerinfo', async (req,res)=>{
    try{
        let info ={
            name : req.body.name,
            email: req.body.email,
            photopath: req.body.photopath,
            about: req.body.about,
            followerscount: 1
        }
        const bloggerDetails = new blogger(info);
        const saveBlogger = await bloggerDetails.save();
        res.send(saveBlogger);
    }
    catch(error){
        console.log(error);
    }
})

// add follower or update follower count
router.put('/bloggerinfo', async (req,res)=>{
    try{
        let item = {
            name : req.body.name,
            email: req.body.email,
            photopath: req.body.photopath,
            about: req.body.about,
            followerscount : req.body.followerscount + 1
        }
        let newCount = { $set : item};
        let updateCount = await blogger.findByIdAndUpdate({"_id": req.body._id}, newCount);
        res.send(updateCount);
    }
    catch(error){
        console.log(error);
    }
})

//post blog info with comments through thunderclient
router.post('/bloginfo', async (req,res)=>{
    try{
        let info ={
            title : req.body.title,
            author: req.body.author,
            body: req.body.body,            
            comments: req.body.comments,
            group: req.body.group            
        }
        const blogDetails = new blog(info);
        const saveBlog = await blogDetails.save();
        res.send(saveBlog);
    }
    catch(error){
        console.log(error);
    }
})

// get bloglist
router.get('/bloglist', async (req,res) =>{
    try{
        let blogDetails = await blog.find().sort({date:-1});
        res.send(blogDetails);
    }
    catch(error){
        console.log(error);
    }
})


module.exports = router;
