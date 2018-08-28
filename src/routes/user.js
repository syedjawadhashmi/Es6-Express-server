import { Router } from 'express';
import * as UserController from '../controllers/user';

const routes = new Router();


/**
 * @swagger
 * definitions:
 *   User:
 *     properties:
 *       title:
 *         type: string
 *       description:
 *         type: string
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     tags:
 *       - Users
 *     description: Returns all users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of users
 *         schema:
 *           $ref: '#/definitions/User'
 */

routes.get('/api/users',  UserController.getAllUsers);
/**
 * @swagger
 * /api/users:
 *   post:
 *     tags:
 *       - Users
 *     description: Creates a new user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: user object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/user'
 *     responses:
 *       200:
 *         description: Successfully created
 */
routes.post('/api/users',  UserController.createUser);
export default routes;
