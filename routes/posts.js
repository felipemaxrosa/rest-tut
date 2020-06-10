const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Get all Posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// Create a new Post
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });

  try {
    let data = await post.save();
    res.json(data);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

// Get by Id
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete a post
router.delete('/:id', async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.id });
    res.json({ message: `Post ${req.params.id} removed`});
  } catch (err) {
    res.json({ message: err });
  }

});

// Update a post
router.patch('/:id', async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.id }, 
      { $set : { title: req.body.title }
    });

    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }

});

module.exports = router;