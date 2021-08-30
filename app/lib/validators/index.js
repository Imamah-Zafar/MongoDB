exports.validateRequest = (req, res, next, schema) => {
  const options = {
    abortEarly: true, // include all errors
    allowUnknown: true, // ignore unknown props
    stripUnknown: false // remove unknown props
  };
  const {error, value} = schema.validate(req.body, options);
  if (error) {
    res.http400(`${error.details.map(x => x.message.replace(/\"/g, '')).join(', ')}`)
  } else {
    next();
  }
}
