require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const { env } = process;
const {
  DB_HOST = 'localhost',
  DB_PORT = '27017',
  DB_NAME = 'mydatabase',
  MONGO_URL,
} = env;

const LOCAL_URI = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
const URI = MONGO_URL || LOCAL_URI;

const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 });
    console.log('You successfully connected to MongoDB!');
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

module.exports = client.db();
