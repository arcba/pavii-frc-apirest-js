const { Router } = require("express");
const { getArticulos } = require("../controllers/index.controller");

const router = Router();
router.get("/articulos", getArticulos);

module.exports = router;
