const router = require('express').Router();
const Joi = require('joi');
const loginSchema = require('../validation/login-schema');
const signupSchema = require('../validation/signup-schema');

const error = require('./error');

router.post('/login', (req, res) => {
  // Write your code here
  const {error, value} = loginSchema.validate(req.body);
  if (error) {
    res.status(400).json({msg: error.message})
  } else {
    res.json(value)
  }
});

router.post('/signup', (req, res) => {
  // Write your code here
  const {error, value} = signupSchema.validate(req.body);

  if (error) {
    res.status(400).json({msg: error.message})
  } else {
    res.json(value)
  }
});

router.use(error.client);
router.use(error.server);

module.exports = router;
