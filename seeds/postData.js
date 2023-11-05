const Post = require('../models/post');

const Posts = [
    {
        title: "Post 1",
        content: "This is the first post",
        user_id: 1,
    },{
        title: "Post 2",
        content: "This is the second post",
        user_id: 2,
    },{
        title: "Post 3",
        content: "This is the third post",
        user_id: 3,
    }
]

const seedComment = Post.bulkCreate(Posts);

module.exports = seedComment;