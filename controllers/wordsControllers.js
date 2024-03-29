const Words = require("../models/words");

const getAllWords = async (req, res) => {
  try {
    const words = await Words.find();
    res.status(200).json({ words });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const addWord = async (req, res) => {
  try {
    const {
      german_word,
      english_translation,
      bosnian_translation,
      polish_translation,
      hindi_translation,
    } = req.body;
    const word = await Words.create({
      german_word,
      english_translation,
      bosnian_translation,
      polish_translation,
      hindi_translation,
    });
    res.status(201).json(word);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getOneWord = async (req, res) => {
  const {param} = req.params;
  try {
    const word = await Words.find({$or: [{german_word: param}, {english_translation: param}, {bosnian_translation: param}, {polish_translation: param}, {hindi_translation: param}],}) 
    res.status(200).json(word)
  }
  catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  getAllWords,
  addWord,
  getOneWord,
};
