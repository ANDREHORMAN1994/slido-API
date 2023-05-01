require('dotenv').config();
const { MongoClient } = require('mongodb');

const { env } = process;
const {
  DB_HOST = 'localhost',
  DB_PORT = '27017',
  DB_NAME = 'mydatabase',
  MONGOUSER,
  MONGOPASSWORD,
  MONGOHOST,
  MONGOPORT,
  MONGO_URL,
} = env;

const LOCAL_URI = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
const MONGO_URI = `mongodb://${MONGOUSER}:${MONGOPASSWORD}@${MONGOHOST}:${MONGOPORT}`;
const URI = MONGO_URL || MONGO_URI || LOCAL_URI;

const client = new MongoClient(
  URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
);

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
