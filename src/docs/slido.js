/* eslint-disable max-len */
/**
 * @swagger
 * components:
 *   schemas:
 *     slido:
 *       type: object
 *       required:
 *         - question
 *         - answers
 *       properties:
 *         _id:
 *           type: string
 *           description: Identificador único da pergunta.
 *         question:
 *           type: string
 *           description: Pergunta do usuário.
 *         answers:
 *           type: array
 *           items:
 *             type: string
 *           description: Respostas do usuário.
 *         author:
 *           type: string
 *           description: Email do usuário que criou a pergunta.
 *         createdAt:
 *           type: object
 *           description: Data que a pergunta foi criada.
 *           properties:
 *             $date:
 *               type: string
 *               format: date-time
 *         updatedAt:
 *           type: object
 *           description: Data que a pergunta foi editada.
 *           properties:
 *             $date:
 *               type: string
 *               format: date-time
 *       example:
 *         question: "Primeira pergunta xxx1"
 *         answers: [ "resposta 01", "resposta 02", "resposta 03"]
 *         author: "andre@hotmail.com"
 *         createdAt: 2023-04-30T20:59:59.691Z
 *         updatedAt: 2023-04-30T21:00:50.925Z
 */

/**
 * @swagger
 * /slido:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Cadastra uma nova pergunta.
 *     description: Cria uma nova pergunta com os dados fornecidos no corpo da requisição.
 *     tags:
 *       - Slido
 *     requestBody:
 *       description: Objeto JSON com os dados da nova pergunta.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *                 example: "Primeira pergunta xxx"
 *               answers:
 *                 type: array
 *                 example: []
 *     responses:
 *       201:
 *         description: Pergunta criada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/slido'
 *             example:
 *               _id: "abc123"
 *               question: "Primeira pergunta xxx"
 *               answers: []
 *               author: "andre@hotmail.com"
 *               createdAt: 2023-04-30T20:59:59.691Z
 *               updatedAt: null
 *       400:
 *         description: Campos inválidos ou faltando.
 *       500:
 *         description: Erro interno ao tentar criar uma pergunta.
 */

/**
 * @swagger
 * /slido:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Retorna todas as perguntas cadastradas.
 *     description: Retorna um array de objetos com todas as perguntas cadastradas.
 *     tags:
 *       - Slido
 *     responses:
 *       200:
 *         description: Retorna um array com todas as perguntas cadastradas.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 _id:
 *                   type: string
 *                   description: Identificador único da pergunta.
 *                 question:
 *                   type: string
 *                   description: Pergunta do usuário.
 *                 answers:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: Respostas do usuário.
 *                 author:
 *                   type: string
 *                   description: Email do usuário que criou a pergunta.
 *                 createdAt:
 *                   type: object
 *                   description: Data que a pergunta foi criada.
 *                   properties:
 *                     $date:
 *                       type: string
 *                       format: date-time
 *                 updatedAt:
 *                   type: object
 *                   description: Data que a pergunta foi editada.
 *                   properties:
 *                     $date:
 *                       type: string
 *                       format: date-time
 *             example:
 *               - _id: 1
 *                 question: "pergunta 01"
 *                 answers: []
 *                 author: "andre@hotmail.com"
 *                 createdAt: 2023-03-30T20:59:59.691Z
 *                 updatedAt: null
 *               - _id: 2
 *                 question: "pergunta 02"
 *                 answers: []
 *                 author: "andre@hotmail.com"
 *                 createdAt: 2023-04-30T20:59:59.691Z
 *                 updatedAt: null
 *       500:
 *         description: Erro interno ao tentar acessar todas as perguntas.
 */

/**
 * @swagger
 * /slido/{id}:
 *   patch:
 *     security:
 *       - bearerAuth: []
 *     summary: Atualiza as informações de uma pergunta ou resposta.
 *     description: Retorna um objeto com as informações atualizadas da pergunta ou resposta.
 *     tags:
 *       - Slido
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da pergunta a ser atualizada.
 *     requestBody:
 *       description: Objeto JSON com os dados da nova pergunta.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *                 example: "Pergunta xxx editada"
 *               answers:
 *                 type: array
 *                 example: [ "resposta 01", "resposta 02" ]
 *     responses:
 *       200:
 *         description: Retorna um objeto com as informações da pergunta atualizada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/slido'
 *             example:
 *               _id: "abc123"
 *               question: "Pergunta xxx editada"
 *               answers: [ "resposta 01", "resposta 02" ]
 *               author: "andre@hotmail.com"
 *               createdAt: 2023-04-30T20:59:59.691Z
 *               updatedAt: 2023-05-30T20:59:59.691Z
 *       400:
 *         description: Campos inválidos ou faltando.
 *       500:
 *         description: Erro interno ao tentar atualizar uma pergunta.
 */

/**
 * @swagger
 * /slido/{id}:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Deleta uma pergunta pelo seu ID.
 *     description: Deleta uma pergunta identificada pelo ID fornecido na rota.
 *     tags:
 *       - Slido
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da pergunta a ser atualizada.
 *     responses:
 *       204:
 *         description: Pergunta deletada com sucesso.
 *       400:
 *         description: ID inválido ou faltando.
 *       500:
 *         description: Erro interno ao tentar deletar uma pergunta.
 */
