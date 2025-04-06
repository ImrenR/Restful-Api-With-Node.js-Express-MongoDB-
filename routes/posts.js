const express = require('express');
const router = express.Router();
const Post = require("../models/Post");

// Get all posts
router.get('/posts', (req,res)=>{
res.send("We are on home")

});
  // Post a new post
router.post ("/", (req,res)=> {
  console.log(req.body);
  res.send ('Post received');
});
  module.exports =router ;