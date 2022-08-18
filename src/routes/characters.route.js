const router = require("express").Router();
const {
  createCharacterController,
  readAllCharacterController,
  readCharacterByIdController,
  readCharacterByNameController,
  updateCharacterController,
  deleteCharacterController,
} = require("../controllers/characters.controller");

const {
  idValidation,
  bodyValidation,
  notFound,
} = require("../middlewares/characters.middleware");

router.post("/create", bodyValidation, createCharacterController);

router.get("/", readAllCharacterController);

router.get("/find/:id", idValidation, notFound, readCharacterByIdController);

router.get("/search", readCharacterByNameController);

router.put(
  "/update/:id",
  idValidation,
  bodyValidation,
  notFound,
  updateCharacterController
);

router.delete("/delete/:id", idValidation, notFound, deleteCharacterController);

module.exports = router;
