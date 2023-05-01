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
    }
    a {
      color: red
    }
  </style>
</head>
<body>
  <h1>Bem Vindo ao Slido API 🥳🥳🥳</h1>
  <h2>Acesse a rota
    <strong>
      <a href="${BASE_URL}/docs" target="_blank" >/docs</a>
    </strong>
  para mais informações!!</h2>
</body>
</html>
`;

module.exports = html;
