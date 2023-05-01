require('dotenv').config();
const app = require('./app');

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Rodando na porta ${port}`));
