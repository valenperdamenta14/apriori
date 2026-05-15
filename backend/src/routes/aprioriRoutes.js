const express = require("express");

const router = express.Router();

const {prosesApriori,} = require("../controllers/aprioriController");

router.get("/", prosesApriori);

module.exports = router;