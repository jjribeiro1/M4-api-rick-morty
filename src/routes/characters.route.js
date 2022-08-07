const router = require("express").Router();
const charactersController = require("../controllers/characters.controller");
const {
  idValidation,
  bodyValidation,
  notFound,
} = require("../middlewares/characters.middleware");

router.post(
  "/create",
  bodyValidation,
  charactersController.createCharacterController
);
router.get("/", charactersController.readAllCharacterController);
router.get(
  "/:id",
  idValidation,
  notFound,
  charactersController.readCharacterByIdController
);

module.exports = router;
