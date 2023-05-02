require('dotenv').config();

const {
  env: {
    BASE_URL = 'http://localhost:3001',
  },
} = process;

const html = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SLIDO API</title>
  <style>
    * {
      text-align: center;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeLegibility;
    }

    body {
      background-color: #13111C;
      color: #FFFFFF;
      height: 100vh;
    }

    .title-container {
      border-bottom: 1px solid #6E31AA;
      padding: 50px;
      font-size: 2rem;
    }

    .message-container {
      height: calc(100vh - 300px);
      display: flex;
    }

    .message-card {
      background-color: #181622;
      max-width: max-content;
      margin: auto;
      padding: 80px;
      border: 1px solid #6E31AA;
      border-radius: 10px;
      width: 700px;
    }

    .message-card-text {
      margin-bottom: 50px;
      text-align: justify;
      word-spacing: 1px;
      line-height: 1.5;
    }

    a {
      color: #a248fd;
    }
  </style>
</head>

<body>
  <h1 class="title-container">Bem Vindo ao Slido API 🥳🥳🥳</h1>
  <section class="message-container">
    <section class="message-card">
      <p class="message-card-text">A <strong>Slido API</strong> oferece recursos para o cadastro de usuários e para o
        gerenciamento completo
        de perguntas e respostas dos clientes. Com ela, é possível realizar um <strong>CRUD</strong> completo, sendo
        capaz de criar,
        visualizar, editar e remover cada pergunta ou resposta cadastrada.

        Além disso, a Slido API permite que os usuários realizem login como <strong>cliente ou admin</strong>,
        facilitando o controle de
        acesso e a gestão de permissões. Com essa funcionalidade, é possível garantir a segurança e a privacidade dos
        dados cadastrados na plataforma.</p>
      <h2 class="message-card-link">Acesse a rota
        <strong>
          <a href="${BASE_URL}/docs">/docs</a>
        </strong>
        para mais informações!!
      </h2>
    </section>
  </section>
</body>

</html>
`;

module.exports = html;
