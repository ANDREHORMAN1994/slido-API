const db = require('./connect');

const collection = db.collection('users');

const createUser = async ({ email, password, role }) => {
  const result = await collection.findOne({ email });
  if (!result) {
    const newUser = {
      email,
      password,
      role: role || 'user',
    };
    const { insertedId } = await collection.insertOne(newUser);
    return {
      _id: insertedId,
      ...newUser,
    };
  }
  return null;
};

const login = (user) => {

};

module.exports = {
  createUser,
};
