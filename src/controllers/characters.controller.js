const charactersService = require("../services/characters.service");
const createCharacterController = async (req, res) => {
  try {
    const { name, imageUrl, status, origem } = req.body;
    const character = await charactersService.createCharacterService(
      name,
      imageUrl,
      status,
      origem
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

const updateCharacterController = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedCharacter = req.body;
    const response = await charactersService.updateCharacterService(
      id,
      updatedCharacter
    );
    res.status(200).send({ response, message: "Updated" });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const deleteCharacterController = async (req, res) => {
  try {
    const id = req.params.id;
    await charactersService.deleteCharacterService(id);
    res.status(200).send({ message: "Deleted" });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

module.exports = {
  createCharacterController,
  readAllCharacterController,
  readCharacterByIdController,
  updateCharacterController,
  deleteCharacterController,
};
