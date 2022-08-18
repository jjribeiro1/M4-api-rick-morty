const Character = require("../models/Character");

const createCharacterService = async (name, imageUrl, status, origem) =>
  await Character.create({
    name: name,
    imageUrl: imageUrl,
    status: status,
    origem: origem,
  });

const readAllCharacterService = async () =>
  await Character.find().sort({ _id: -1 });

const readCharacterByIdService = async (id) => await Character.findById(id);

const readCharacterByNameService = async (name) =>
  await Character.find({ name: { $regex: `${name}`, $options: "i" } }).sort({
    _id: -1,
  });

const updateCharacterService = async (id, updatedCharacter) =>
  await Character.findByIdAndUpdate(id, updatedCharacter).setOptions({
    new: true,
  });

const deleteCharacterService = async (id) =>
  await Character.findByIdAndDelete(id);

module.exports = {
  createCharacterService,
  readAllCharacterService,
  readCharacterByIdService,
  readCharacterByNameService,
  updateCharacterService,
  deleteCharacterService,
};
