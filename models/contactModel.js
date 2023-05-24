const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add contact name"],
    },
    email: {
      type: String,
      required: [true, "Please add contact email"],
    },
    phone: {
      type: String,
      required: [true, "Please add contact number"],
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("contact", contactSchema);
