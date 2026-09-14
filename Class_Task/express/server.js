const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let user = {};

app.post("/register", (req, res) => {
  const { name, roll, course, email } = req.body;

  user = {
    name,
    roll,
    course,
    email,
  };

  res.send("User registered successfully!");
});

app.get("/user", (req, res) => {
  res.json(user);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
