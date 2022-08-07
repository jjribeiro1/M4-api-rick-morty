const router = require("express").Router();
const charactersController = require("../controllers/characters.controller");

router.post("/create", charactersController.createCharacterController);
router.get("/", charactersController.readAllCharacterController);
router.get("/:id", charactersController.readCharacterByIdController);

module.exports = router;
