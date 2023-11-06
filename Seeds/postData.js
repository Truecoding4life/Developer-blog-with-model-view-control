const Post = require('../models/post');

const Posts = [
    {
        title: "What I is Bootstrap?",
        content: "Bootstrap is a popular open-source front-end framework for web development. ",
        user_id: 3,
    },{
        title: "My first post",
        content: "Hello Devs! This is my first post.",
        user_id: 2,
    },{
        title: "Group Study Anybody ? ",
        content: "Here is the link to my discord join me here https://discord.gg/",
        user_id: 1,
    }
]

const seedComment = ()=> Post.bulkCreate(Posts);

module.exports = seedComment;