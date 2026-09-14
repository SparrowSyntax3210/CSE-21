const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

app.get("/products", (req, res) => {
  fs.readFile("./product.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading product.json:", err);

      return res.status(500).json({
        message: "Error reading products",
      });
    }

    try {
      const products = JSON.parse(data.name);

      res.json(products);
    } catch (err) {
      console.error("Error parsing product.json:", err);

      res.status(500).json({
        message: "Invalid JSON data",
      });
    }
  });
});

module.exports = app;
