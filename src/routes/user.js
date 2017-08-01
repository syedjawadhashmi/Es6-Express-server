import { Router } from 'express';
import * as UserController from '../controllers/user';

const routes = new Router();


/**
  * @swagger
 * definitions:
 *   User:
 *     title: User
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         description: Unique identifier representing a specific user
 *       name:
 *         type: string
 *         description: Name of the user
 *       createdAt:
 *         type: string
 *         format: date-time
 *         description: User creation datetime
 *       updatedAt:
 *         type: string
 *         format: date-time
 *         description: User update datetime
 *   NewUser:
 *     title: NewUser
 *     type: object
 *     properties:
 *       name:
 *         type: string
 *         description: Name of the user
 *   Error:
 *     title: Error
 *     type: object
 *     properties:
 *       code:
 *         type: integer
 *         format: int32
 *       message:
 *         type: string
 *   ServerError:
 *     allOf:
 *       - $ref: '#/definitions/Error'
 *       - title: ServerError
 *   NotFoundError:
 *     allOf:
 *       - $ref: '#/definitions/Error'
 *       - title: NotFoundError
 *   ValidationError:
 *     allOf:
 *       - $ref: '#/definitions/Error'
 *       - title: ValidationError
 *       - properties:
 *           details:
 *             type: array
 *             items:
 *               title: FieldError
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 param:
 *                   type: string
 */

/**
 * @swagger
 * /api/users:
   * /users:
  *   get:
  *     summary: List all users
  *     description: Returns users
  *     produces:
  *       - application/json
  *     tags:
  *       - Users
  *     responses:
  *       200:
  *         description: An array of users
  *         schema:
  *           title: Users
  *           type: array
  *           items:
  *             $ref: '#/definitions/User'
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
