const router = require("express").Router();
const {
  createCharacterController,
  readAllCharacterController,
  readCharacterByIdController,
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
router.get("/:id", idValidation, notFound, readCharacterByIdController);
router.put(
  "/update/:id",
  idValidation,
  bodyValidation,
  notFound,
  updateCharacterController
);
router.delete("/delete/:id", idValidation, notFound, deleteCharacterController);

module.exports = router;
