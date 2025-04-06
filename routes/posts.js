const express = require('express');
const router = express.Router();
const Post = require("../models/Post");
// ROUTES
router.get('/posts', (req,res)=>{

res.send("We are on home")
  
});
  
  module.exports =router ;