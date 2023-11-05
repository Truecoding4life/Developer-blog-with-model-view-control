const router = require('express').Router();
const { User, Comment, Post} = require('../../models');

// Create new user
router.post('/', async(req,res)=>{})

// Create new Post
router.post('/', async(req,res)=>{})

// Update a post
router.put('/', async(req,res)=>{})
// Delete a post

// Create new Comment
router.delete('/', async(req,res)=>{})

// User Login
router.post('/', async(req,res)=>{})

// User Logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  
  module.exports = router;