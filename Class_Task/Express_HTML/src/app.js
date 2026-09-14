const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.use(express.json());
app.use(express.static(path.join(__dirname, "./frontend")));

app.get("/about", (req, res) => {
  fs.readFile("./frontend/index.html", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading about.json:", err);
      return res.status(500).json({
        message: "Error reading about",
      });
    }
    res.send(data);
  });
});

app.get("/contact", (req, res) => {
  fs.readFile("./frontend/index.html", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading contact.json:", err);
      return res.status(500).json({
        message: "Error reading contact",
      });
    }
    res.send(data);
  });
});

module.exports = app;
