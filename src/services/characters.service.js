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

module.exports = {
  createCharacterService,
  readAllCharacterService,
  readCharacterByIdService,
};
