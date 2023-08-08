require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 3001;
const URL = process.env.BASE_URL || 'http://localhost:3001';

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}\nAcesse: ${URL}/`));
