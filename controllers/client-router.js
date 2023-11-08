const express = require("express");
const router = express.Router();
const { User, Post } = require("../models");

// Route for homepage
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: {
        model: User,
        attributes: ["first_Name", "last_Name", "email"],
      },
      attributes: ["title", "content"],
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    res.status(200).render("homepage", { 
      posts,
      loggedIn: req.session.loggedIn, });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Route for login
router.get("/login", async (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.status(200).redirect('/');
      return;
    }
    // Otherwise, render the 'login' template
    res.status(200).render('login');
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});



// Route for  dashboard
router.get("/dashboard", async (req, res) => {
  try {
    if(req.session.loggedIn){
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id
      },
      include: {
        model: User,
        attributes: ["first_Name", "last_Name"],
      },
      attributes: ["title", "content","id"],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.status(200).render("dashboard", { posts: posts, loggedIn: req.session.loggedIn});
  } else {
    res.status(200).render("dashboard", { loggedIn: req.session.loggedIn});
  }
  } catch (err) {
    res.status(500).json(err);
  }
});

// route for create post
router.get("/create", async (req, res) => {
    try{
      if(req.session.loggedIn){
        res.status(200).render('createpost', {loggedIn: req.session.loggedIn});
      }else{
        res.status(404).render('dashboard');}
    }catch(err){
      res.status(500).json(err);
    }
});


// Route for Sign Up
router.get('/signup', async(req,res) =>{
    try{
        res.render('signup')
    } 
    catch(err){
        res.status(500).json(err)}
})
module.exports = router;
