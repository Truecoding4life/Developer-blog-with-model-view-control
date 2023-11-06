const router = require('express').Router();

const serverRoute = require('./client-router.js');
const api = require('./api/index.js')

router.use('/api',api);
router.use('/', serverRoute);

module.exports = router;