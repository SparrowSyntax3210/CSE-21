const express = require("express");

const app = express();

app.use(express.json());

let users = [];

app.post("/users", (req, res) => {
  const { name, email } = req.body;

  const user = {
    id: users.length + 1,
    name: name,
    email: email,
  };

  users.push(user);

  res.status(201).json(user);
});

// GET - Get all users
app.get("/users", (req, res) => {
  res.json(users);
});

// DELETE - Delete a user by ID
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const userExists = users.some((user) => user.id === id);

  if (!userExists) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  users = users.filter((user) => user.id !== id);

  res.json({
    message: "User deleted successfully",
    users: users,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
