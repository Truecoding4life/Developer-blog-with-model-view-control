const router = require('express').Router();

const serverRoute = require('./client-router');
const api = require('./api')

router.use('/api',api);
router.use('/', serverRoute);

module.exports = router;