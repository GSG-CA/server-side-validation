const router = require('express').Router();
const Joi = require('joi');
const loginSchema = require('../validation/login-schema');
const signupSchema = require('../validation/signup-schema');

const error = require('./error');

router.post('/login', (req, res) => {
  const {error, value} = loginSchema.validate(req.body);
  
  if (error) {
    res.status(400).json({msg: error.message})
  } else {
    res.json(value)
  }

    // Async using Promises
  
  // loginSchema.validateAsync(req.body)
  // .then(value => res.json(value))
  // .catch(({message}) => res.status(400).json({msg: message}));
});

router.post('/signup', (req, res) => {
  const {error, value} = signupSchema.validate(req.body);

  if (error) {
    res.status(400).json({msg: error.message})
  } else {
    res.json(value)
  }

  // Async using Promises

  // signupSchema.validateAsync(req.body)
  // .then(value => res.json(value))
  // .catch(({message}) => res.status(400).json({msg: message}));
});

router.use(error.client);
router.use(error.server);

module.exports = router;
