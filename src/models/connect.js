require('dotenv').config();
const { MongoClient } = require('mongodb');

const { env: { DB_HOST, DB_PORT, DB_NAME } } = process;
const MY_DB_HOST = DB_HOST || 'AndreHorman';
const MY_DB_PORT = DB_PORT || '@Nerd19942@cluster0.x1q4u2y.mongodb.net/?retryWrites=true&w=majority';
const MY_DB_NAME = DB_NAME || 'slido-api';
const uri = `mongodb://${MY_DB_HOST}:${MY_DB_PORT}/${MY_DB_NAME}`;

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
