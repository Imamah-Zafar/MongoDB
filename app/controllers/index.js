
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../docs/swagger.json');

module.exports =  (router) => {
  router.get('*',swaggerUi.serve ,swaggerUi.setup(swaggerDocument));
}
