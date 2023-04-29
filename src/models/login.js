const db = require('./connect');

const collection = db.collection('users');

const createUser = async (user) => {
  const result = await collection.insertOne(user);
  return result;
};

module.exports = {
  createUser,
};
