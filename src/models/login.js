const { ObjectId } = require('mongodb');
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

const login = async ({ email }) => {
  const user = await collection.findOne({ email });
  if (user) return user;
  return null;
};

const getAllUser = async () => {
  const result = await collection.find();
  const allUsers = await result.toArray();
  if (allUsers) return allUsers;
  return null;
};

const getUserById = async (id) => {
  const user = await collection.findOne({ _id: new ObjectId(id) });
  if (user) return user;
  return null;
};

const deleteUserById = async (id) => {
  const result = await collection.deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount > 0;
};

const updateUser = async (id, info) => {
  const result = await collection.findOne({ email: info.email });
  if (!result) {
    const user = await collection.updateOne({ _id: new ObjectId(id) }, {
      $set: info,
    });
    if (user) {
      const newUser = await getUserById(id);
      return newUser;
    }
  }
  return null;
};

module.exports = {
  createUser,
  login,
  getAllUser,
  getUserById,
  updateUser,
  deleteUserById,
};
