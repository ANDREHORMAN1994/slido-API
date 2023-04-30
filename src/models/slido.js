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

module.exports = {
  createQuestion,
  getAllQuestion,
};
