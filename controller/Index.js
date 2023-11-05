const router = require('express').Router();

const homeRoutes = require('./client-router');
const api = require('./api')

router.use('/api',api);
router.use('/', homeRoutes);

module.exports = router;