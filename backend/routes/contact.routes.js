const express = require("express");
const { handleContactForm } = require("../controllers/contact.controller");

const router = express.Router();

router.post("/", handleContactForm);

module.exports = router;
