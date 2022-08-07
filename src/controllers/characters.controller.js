const charactersService = require("../services/characters.service");
const createCharacterController = async (req, res) => {
  try {
    const { name, imageUrl } = req.body;
    const character = await charactersService.createCharacterService(
      name,
      imageUrl
    );
    res.status(201).send({ character, message: "Created" });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const readAllCharacterController = async (req, res) => {
  try {
    const characters = await charactersService.readAllCharacterService();
    res.status(200).send({ characters, message: "OK" });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const readCharacterByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const character = await charactersService.readCharacterByIdService(id);
    res.status(200).send({ character, message: "OK" });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

module.exports = {
  createCharacterController,
  readAllCharacterController,
  readCharacterByIdController,
};
