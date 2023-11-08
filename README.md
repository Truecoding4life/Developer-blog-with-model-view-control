# Developer World Blog, MVC- MODEL CONTROL VIEW 


## Description 
Welcome to the Developer Blog website, your platform for freely sharing your thoughts about the latest and greatest in technology, the most creative design ideas, and more. To unlock the full potential of our platform, simply log in with your email address and password. Once logged in, you're ready to unleash your ideas and insights to the world.


## PSEUDO-CODE
Creating directories within the convention of MVC (Model-View-Control)
- controllers, views, models folders
- server.js
### MODELS
- Setting up your database
- index to tie it all together
- User, Post, Comments (Users <-> Posts/Comments one to many relationships)
    - User -> id, username, password
        - encrypt password, need some hooks
    - Post -> id, title, description, date/timestamp(sequelize can do this for you, research!), fk_user_id
    - Comments -> id, description, fk_post_id, fk_user_id
### VIEWS
- handlebars
- login/sign up, homepage, dashboard, post(comments/new comment-partial), new-post(edit-post)
- folders for layouts and partials if you plan to use them
    - layouts main? partials post/comment?
### CONTROLLERS
- routes! /api/ and home
- index -> api routes, home routes
- home routes -> (get) '/', '/login/', '/post/:id', '/user/:id'(for the dashboard)
- /api/ index, user, (blog)post, comments
    - get, post, put, delete
    - index -> user routes, post routes, comment routes
    - (blog)post -> :id, title, description, (includes user)
    - user -> :id, username, password
    - comments -> :id, description (includes post/user), could do post.includes(comments)
### Basics
- server file, .env, .gitignore, readme
- public (css, img, js)
- config(connection)
- db(schema)
- seeds(index, postData?, commentData?)
- utils(auth, helpers)
### SERVER
- NPMs: path, express, express-session, express-handlebars, sequelize, dotenv, 
- middleware: 
    - app.use express.json/urlencoded/static(public)
    - engine, handlebars, helpers, session
- session: secret, cookie


## MODEL
Users <-> Posts/Comments one to many relationships)


USER hasOne Post
Post Belong To User

User hasOne Comment
Comment Belong to User

Post HasManyComment
Comment belongTo Post