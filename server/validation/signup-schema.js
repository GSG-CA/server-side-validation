const Joi = require('joi');

const signupSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().alphanum().min(6).required(),
    confirmPassword: Joi.ref('password'),
    role: Joi.string().valid('admin', 'user').required(),
    mobile: Joi.string().min(7).required()
  })

  module.exports = signupSchema;