const Joi = require('joi');
const validateRequest = require('./index').validateRequest;

exports.addCategory = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
  });
  validateRequest(req, res, next, schema);
}
