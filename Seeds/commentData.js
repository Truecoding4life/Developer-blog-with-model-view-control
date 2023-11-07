const Comment = require('../models/comment');

const Comments = [
    {
        content: "This is the first comment",
        user_id: 1,
        post_id: 3,
    },{
        content: "This is the second comment",
        user_id: 2,
        post_id: 2,
    },{
        content: "This is the third comment",
        user_id: 3,
        post_id: 1,
    }
]

const seedComment = ()=> Comment.bulkCreate(Comments);

module.exports = seedComment;