require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const { env } = process;
const {
  DB_HOST = 'localhost',
  DB_PORT = '27017',
  DB_NAME = 'mydatabase',
  MONGO_URL,
} = env;

// Mongo Local URI
// const LOCAL_URI = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
// const URI = LOCAL_URI;

// Mongo Atlas URI
const URI = MONGO_URL;

const client = new MongoClient(
  URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
);

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('You successfully connected to MongoDB!');
  } catch (err) {
    console.log(err);
  }
}

connectToMongoDB();

module.exports = client.db();
