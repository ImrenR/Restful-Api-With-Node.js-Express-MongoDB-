const express = require('express');

const router = express.Router();

// ROUTES
router.get('/posts', (req,res)=>{

  res.send("We are on home")
  
  });
  
  module.exports =router ;