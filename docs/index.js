/**
 * @swagger
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       required:
 *         - email
 *         - password
 *         - role
 *       properties:
 *         id:
 *           type: string
 *           description: Identificador único do usuário.
 *         email:
 *           type: string
 *           description: Email do usuário.
 *         password:
 *           type: string
 *           description: Senha do usuário.
 *           format: password
 *         role:
 *           type: string
 *           description: Identificação do cliente como usuário ou administrador.
 *       example:
 *         name: John Doe
 *         email: john.doe@example.com
 *         password: 123456
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags:
 *       - users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Invalid request body
 *       500:
 *         description: Internal server error
 */
