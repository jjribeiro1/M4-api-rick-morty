const mongoose = require("mongoose");
const Character = require("../models/Character");

const idValidation = (req, res, next) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Invalid id" });
  }
  next();
};

const notFound = async (req, res, next) => {
  const id = req.params.id;
  const character = await Character.findById(id);
  if (!character) {
    return res.status(400).send({ message: "Character not found" });
  }
  next();
};

const bodyValidation = (req, res, next) => {
  const { name, imageUrl, status, origem } = req.body;
  if (!name || !imageUrl || !status || !origem) {
    return res
      .status(400)
      .send({ message: "name, imageUrl, status and origem are required" });
  }
  next();
};

module.exports = {
  idValidation,
  notFound,
  bodyValidation,
};
