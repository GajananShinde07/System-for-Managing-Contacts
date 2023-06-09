const express = require("express");
const {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

const router = express.Router();

router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

// Separate route
// router.route("/").get(getContacts);

// router.route("/:id").get(getContact);

// router.route("/").post(createContact);

// router.route("/:id").put(updateContact);

// router.route("/:id").delete(deleteContact);

module.exports = router;
