require('dotenv').config();
const { MongoClient } = require('mongodb');

const { env: { DB_HOST, DB_PORT, DB_NAME } } = process;
// const DB_HOST = 'AndreHorman'
// const DB_PORT = '@Nerd19942@cluster0.x1q4u2y.mongodb.net/?retryWrites=true&w=majority'
const uri = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB!');
  } catch (err) {
    console.log(err);
  }
}

connectToMongoDB();

module.exports = client.db();
