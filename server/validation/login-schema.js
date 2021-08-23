const Joi = require('joi');

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().alphanum().min(6).required()
  });

module.exports = loginSchema;

