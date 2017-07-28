import path from 'path';
import swaggerJSDoc from 'swagger-jsdoc';

/**
 * Swagger definition.
 */
const swaggerDefinition = {
  info: {
    title: 'Node Swagger API',
    version: '1.0.0',
    description: 'Demonstrating how to desribe a RESTful API with Swagger',
  },
  host: 'es6-expres-server.herokuapp.com',
  basePath: '/',
};

/**
 * Options for the swagger docs.
 */
const swaggerOptions = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: [path.join(__dirname, '../routes/user.js')]
};

/**
 * Initialize swagger-jsdoc.
 */
let swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;