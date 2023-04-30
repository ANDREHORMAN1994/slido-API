const db = require('./connect');

const collection = db.collection('users');

const createUser = async (user) => {
  const result = await collection.findOne({ email: user.email });
  if (!result) {
    const newUser = await collection.insertOne(user);
    return newUser;
  }
  return null;
};

module.exports = {
  createUser,
};
