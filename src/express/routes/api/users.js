const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    { id: 1, name: "John", email: "john@email.com" },
    { id: 2, name: "Max", email: "max@email.com" },
    { id: 3, name: "Doe", email: "doe@email.com" },
    { id: 4, name: "Erica", email: "ericka@email.com" },
    { id: 5, name: "Nana", email: "nana@email.com" },
  ]);
});

module.exports = router;
