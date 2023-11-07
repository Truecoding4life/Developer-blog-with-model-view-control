const router = require('express').Router();
const { User, Comment, Post} = require('../../models');

// Create new user
router.post('/signup', async(req,res)=>{
  try {
    const dbUserData = await User.create({
      last_Name: req.body.lastName,
      first_Name: req.body.firstName,
      email: req.body.email,
      password: req.body.password,
      });
      res.status(200).json(dbUserData)
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.logged_in = true;

      res.status(200).json({user: userData, });
    });
  } catch (err) {
    res.status(400).json(err);
  }
})

// Login
router.post('/login', async(req,res)=>{
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
})

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