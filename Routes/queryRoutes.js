// routes.js

const express = require('express');
const router = express.Router();
const queryController = require('../controller/queryController');

router.post('/createQuery', queryController.createQuery);
module.exports = router;
