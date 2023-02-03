const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();

const users = [
  { id: 1, name: "John", email: "john@email.com" },
  { id: 2, name: "Max", email: "max@email.com" },
  { id: 3, name: "Doe", email: "doe@email.com" },
  { id: 4, name: "Erica", email: "ericka@email.com" },
  { id: 5, name: "Nana", email: "nana@email.com" },
];

// get all users
router.get("/", (req, res) => {
  res.json(users);
});

// get user by id
router.get("/:id", (req, res) => {
  const found = users.some((user) => user.id === parseInt(req.params.id));

  if (found) {
    res.json(users.filter((user) => user.id === parseFloat(req.params.id)));
  } else {
    res.sendStatus(400);
  }
});

// create new user
router.post("/", (req, res) => {
  const newUser = {
    id: uuidv4(),
    name: req.body.name,
    email: req.body.email,
  };

  if (!newUser.name || !newUser.email) {
    return res.sendStatus(400);
  }

  users.push(newUser);
  res.json(users);
});

// update user
router.put("/:id", (req, res) => {
  const found = users.some((user) => user.id === parseInt(req.params.id));

  if (found) {
    const updateUser = req.body;
    users.forEach((user) => {
      if (user.id === parseInt(req.params.id)) {
        user.name = updateUser.name ? updateUser.name : user.name;
        user.email = updateUser.email ? updateUser.email : user.email;
        res.json({ msg: "User updated", user });
      }
    });
  }
});

router.delete("/:id", (req, res) => {
  const found = users.some((user) => user.id === parseInt(req.params.id));

  if (found) {
    users = users.filter((user) => {
      user.id !== parseInt(req.params.id);
    });
    res.json({
      msg: "User deleted",
      users,
    });
  } else {
    res.sendStatus(400);
  }
});

module.exports = router;
