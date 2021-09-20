const express = require('express');
const encodeURL = require('./encodeURLController');
const router = express.Router();

router.get('/encode', encodeURL.encode);

module.exports = router;

