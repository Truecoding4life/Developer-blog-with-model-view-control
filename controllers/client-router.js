const express = require("express");
const router = express.Router();
const { User, Post } = require("../models");

// Get All Post render to homepage
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: {
        model: User,
        attributes: ["first_Name", "last_Name"],
      },
      attributes: ["title", "content"],
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    res.status(200).render("homepage", { posts });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Get All Comments from Post render to post page
router.get("/login", async (req, res) => {
  try {
    res.status(200).render("login");
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get("/dashboard", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: {
        model: User,
        attributes: ["first_Name", "last_Name"],
      },
      attributes: ["title", "content"],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.status(200).render("dashboard", { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
