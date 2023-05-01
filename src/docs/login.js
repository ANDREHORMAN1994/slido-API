/* eslint-disable max-len */
/**
 * @swagger
 * components:
 *   schemas:
 *     users:
 *       type: object
 *       required:
 *         - email
 *         - password
 *         - role
 *       properties:
 *         _id:
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
 *           description: Identificação do cliente como "user" ou "admin".
 *       example:
 *         email: "andre@hotmail.com"
 *         password: "1234567"
 *         role: "admin"
 */

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Cadastra um novo usuário.
 *     description: Cria um novo usuário com os dados fornecidos no corpo da requisição.
 *     tags:
 *       - Usuário
 *     requestBody:
 *       description: Objeto JSON com os dados do novo usuário.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/users'
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: Identificador único do usuário.
 *                 email:
 *                   type: string
 *                   description: Email do usuário.
 *                 password:
 *                   type: string
 *                   description: Senha do usuário.
 *                   format: password
 *                 role:
 *                   type: string
 *                   description: Identificação do cliente como usuário ou administrador.
 *             example:
 *               _id: "abc123"
 *               email: "andre@hotmail.com"
 *               password: "1234567"
 *               role: "admin"
 *       400:
 *         description: Campos inválidos ou faltando.
 *       409:
 *         description: Já existe um usuário cadastrado com esse email.
 *       500:
 *         description: Erro interno ao tentar criar o usuário.
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Autenticação do usuário.
 *     description: Autentica o usuário com email e senha e retorna um token JWT.
 *     tags:
 *       - Usuário
 *     requestBody:
 *       description: Objeto JSON com email e senha do usuário.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "andre@hotmail.com"
 *               password:
 *                 type: string
 *                 example: "1234567"
 *     responses:
 *       200:
 *         description: Retorna um objeto com as informações do usuário + o token JWT.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: Identificador único do usuário.
 *                 email:
 *                   type: string
 *                   description: Email do usuário.
 *                 password:
 *                   type: string
 *                   description: Senha do usuário.
 *                   format: password
 *                 role:
 *                   type: string
 *                   description: Identificação do cliente como usuário ou administrador.
 *                 token:
 *                   type: string
 *                   description: Um hash com caracteres.
 *             example:
 *               _id: "abc123"
 *               email: "andre@hotmail.com"
 *               password: "1234567"
 *               role: "admin"
 *               token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDRkZTYyMDc2MzU5MDVmM2QxNzZjMTEiLCJlbWFpbCI6ImFuZHJlQGhvdG1haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkbXovUjloS1FoSWhFaFpvakhFM3FiLmREZFFoUlJPcFNGL1FoZ3dsR0RtSGFIclBIWHpmNC4iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2ODI5MDQzMjMsImV4cCI6MTY4MjkwNzkyM30.ooLlb-0bWiWNsqFmyCspIfNa-b-vY_WgL0vaPt2kPEA"
 *       400:
 *         description: Campos inválidos ou faltando.
 *       401:
 *         description: A senha está errada ou incompatível.
 *       404:
 *         description: Esse usuário não existe.
 */

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Retorna um usuário pelo ID.
 *     description: Retorna um usuário com o ID especificado.
 *     tags:
 *       - Usuário
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do usuário a ser retornado
 *     responses:
 *       200:
 *         description: Retorna um objeto com as informações do usuário encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: Identificador único do usuário.
 *                 email:
 *                   type: string
 *                   description: Email do usuário.
 *                 password:
 *                   type: string
 *                   description: Senha do usuário.
 *                   format: password
 *                 role:
 *                   type: string
 *                   description: Identificação do cliente como usuário ou administrador.
 *             example:
 *               _id: "abc123"
 *               email: "andre@hotmail.com"
 *               password: "1234567"
 *               role: "admin"
 *       400:
 *         description: ID inválido ou faltando.
 *       500:
 *         description: Erro interno ao tentar encontrar o usuário pelo id.
 */

/**
 * @swagger
 * /users:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Retorna todos os usuários cadastrados.
 *     description: Retorna um array de objetos com todos os usuários cadastrados.
 *     tags:
 *       - Usuário
 *     responses:
 *       200:
 *         description: Retorna um array com todos os usuários cadastrados.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 _id:
 *                   type: string
 *                   description: Identificador único do usuário.
 *                 email:
 *                   type: string
 *                   description: Email do usuário.
 *                 password:
 *                   type: string
 *                   description: Senha do usuário.
 *                   format: password
 *                 role:
 *                   type: string
 *                   description: Identificação do cliente como usuário ou administrador.
 *             example:
 *               - _id: "1"
 *                 email: "andre@hotmail.com"
 *                 password: "1234567"
 *                 role: "admin"
 *               - _id: "2"
 *                 email: "horman@hotmail.com"
 *                 password: "1234567"
 *                 role: "user"
 *       500:
 *         description: Erro interno ao tentar acessar todos os usuários.
 */

/**
 * @swagger
 * /users/{id}:
 *   patch:
 *     security:
 *       - bearerAuth: []
 *     summary: Atualiza as informações de um usuário.
 *     description: Retorna um usuário atualizado com o ID especificado.
 *     tags:
 *       - Usuário
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do usuário a ser atualizado.
 *     requestBody:
 *       description: Novas informações do usuário.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email do usuário.
 *                 example: "andre@hotmail.com"
 *               password:
 *                 type: string
 *                 description: Senha do usuário.
 *                 example: "1234567"
 *     responses:
 *       200:
 *         description: Retorna um objeto com as informações do Usuário atualizado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: Identificador único do usuário.
 *                 email:
 *                   type: string
 *                   description: Email do usuário.
 *                 password:
 *                   type: string
 *                   description: Senha do usuário.
 *                   format: password
 *                 role:
 *                   type: string
 *                   description: Identificação do cliente como usuário ou administrador.
 *             example:
 *               _id: "abc123"
 *               email: "usuario.editado@hotmail.com"
 *               password: "1234567"
 *               role: "admin"
 *       400:
 *         description: Campos inválidos ou faltando.
 *       409:
 *         description: Já existe um usuário cadastrado com esse email.
 *       500:
 *         description: Erro interno ao tentar atualizar o usuário.
 */

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Deleta um usuário pelo seu ID.
 *     description: Deleta o usuário identificado pelo ID fornecido na rota.
 *     tags:
 *       - Usuário
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do usuário a ser atualizado.
 *     responses:
 *       204:
 *         description: Usuário deletado com sucesso.
 *       400:
 *         description: ID inválido ou faltando.
 *       500:
 *         description: Erro interno ao tentar deletar o usuário.
 */
