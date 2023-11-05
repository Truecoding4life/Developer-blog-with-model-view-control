const router = require('express').Router()
const { User, Post, Comment} = require('../models');

// Get All Post render to homepage
router.get('/', async (req,res)=>{
    try{
        const postData = await Post.findAll({
            include:[{model:User}],attributes:{exclude:['password','email']},
        });
        if(!postData){
            res.status(404).json({message:'No Post Found'})
        }
        else{
            const posts = postData.map((post)=>post.get({plain:true}));
            res.render('homepage', posts)
        }
    }
    catch(err){
        res.status(500).json(err)
    }
} )
// Get All Post From A User render to Dashboard

// Get All Comments from Post render to post page





