const User = require('../models/user');

const Users = [ {
    "first_Name":"John",
    "last_Name":"Doe",
    "email":"myBoo@yahoo.com",
    "password":"password123",
},{
    "first_Name":"Jane",
    "last_Name":"Doe",
    "email":"JaneDoe@yahoo.com",
    "password":"password123",
}, {
    "first_Name":"John",
    "last_Name":"Smith",
    "email":"JohnSmith@yahoo.com",
    "password":"password123",
}
]

const seedUser = () => User.bulkCreate(Users);

module.exports = seedUser;