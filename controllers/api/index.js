const router = require('express').Router();

const apiRoutes = require('./server-router.js');

router.get('/', apiRoutes);

module.exports=router;



