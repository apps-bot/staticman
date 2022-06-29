const express = require('express');
const router = express.Router();

const basic = require('./controllers/BasicController');

router.get('/help', basic.help);
router.get('/second', basic.second);

module.exports = router;
