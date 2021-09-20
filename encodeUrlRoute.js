const express = require('express');
const encodeURL = require('../controllers/encodeURLController');
const router = express.Router();

router.get('/encode', encodeURL.encode);

module.exports = router;

