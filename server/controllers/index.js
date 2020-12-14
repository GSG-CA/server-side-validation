'use strict';

const router = require('express').Router();
const Joi = require('joi');

const error = require('./error');

router.post('/signup', (req, res) => {
  // Write your code here
});

router.post('/login', (req, res) => {
  // Write your code here
});

router.use(error.client);
router.use(error.server);

module.exports = router;
