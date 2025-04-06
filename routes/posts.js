const express = require('express');
const router = express.Router();
const Post = require("../models/Post");

// Get all posts
router.get('/', async (req,res)=>{
try{
  const posts = await Post.find();
  res.json(posts);
}
catch(err){
  res.json({message: err});
}
});


// Post a new post
router.post ("/", async (req,res)=> {
  const post = new Post ({
    title : req.body.title,
    descripton : req.body.description,
  });
 
 try{ 
  const savedPost= await post.save()
  res.json(savedPost);
} catch (err) {
  res.status(400).json({ message: err });
}

});

// Get a specific post
router.get('/:postId', async (req,res)=>{
  try{
    const post = await Post.findById(req.params.postId);
    res.json(post);
  }catch(err){
    res.json({message: err});
  }
});

// Delete a post
router.delete ('/:postid', async (req,res)=>{
  try{
    const removedPost = await Post.findByIdAndDelete(req.params.postid);
    
    if (removedPost) {
      res.json({ message: 'Post deleted successfully.' });
    } else {
      res.status(404).json({ message: 'Post not found.' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


  module.exports =router ;