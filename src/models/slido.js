const { ObjectId } = require('mongodb');
const db = require('./connect');

const collection = db.collection('slido');

const createQuestion = async (question) => {
  const newQuestion = {
    ...question,
    createdAt: new Date(),
    updatedAt: null,
  };
  const { insertedId } = await collection.insertOne(newQuestion);
  return {
    _id: insertedId,
    ...newQuestion,
  };
};

const getAllQuestion = async () => {
  const result = await collection.find();
  const allQuestion = await result.toArray();
  if (allQuestion) return allQuestion;
  return null;
};

const updateQuestion = async (id, info) => {
  const question = await collection.updateOne({ _id: new ObjectId(id) }, {
    $set: {
      ...info,
      updatedAt: new Date(),
    },
  });
  if (question) {
    const newQuestion = await collection.findOne({ _id: new ObjectId(id) });
    return newQuestion;
  }
  return null;
};

const deleteQuestion = async (id) => {
  const result = await collection.deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount > 0;
};

module.exports = {
  createQuestion,
  getAllQuestion,
  updateQuestion,
  deleteQuestion,
};
