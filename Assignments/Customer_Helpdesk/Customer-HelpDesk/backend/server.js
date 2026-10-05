const express = require("Express");
const app = express();
const fs = require("fs");

const product = fs.readFile("product.json");

app.get("/products", (req, res) => {
  res.send(product);
});

app.post("/products", (req, res) => {
  const { id, name, price } = req.body;
});

app.listen(4000, () => {
  console.log("Server is running on 4000");
});
