const express = require("express");
const createPath = require('../helpers/create_path');
const Contacts = require("../models/contacts");
const {getContacts} = require("../controllers/contscts_controllers");

const router = express.Router();

router.get("/contact", getContacts);

module.exports = router;
