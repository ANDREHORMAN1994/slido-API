const db = require('./connect');

const collection = db.collection('users');

const createUser = async (user) => {
  const result = await collection.findOne({ email: user.email });
  if (!result) {
    const { insertedId } = await collection.insertOne(user);
    return {
      id: insertedId,
      email: user.email,
      password: user.password,
    };
  }
  return null;
};

module.exports = {
  createUser,
};
