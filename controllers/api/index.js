const router = require('express').Router();

const apiRoutes = require('./server-router');

router.get('/', apiRoutes);

module.exports=router;



