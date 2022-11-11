const express = require("express");
const morgan = require("morgan");

const app = express();
let products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
  },
];

app.use(morgan("dev"));
app.use(express.json());

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/products", (req, res) => {
  const newProduct = { ...req.body, id: products.length + 1 };
  products.push(newProduct);
  res.json(newProduct);
});

app.put("/products/:id", (req, res) => {
  res.send("Actualizando prodecutos");
});

app.delete("/products/:id", (req, res) => {
  const productFound = products.find(
    (product) => product.id === parseInt(req.params.id)
  );

  if (!productFound) {
    res.status(404).json({ message: "Product not found" });
  }

  products = products.filter(
    (product) => product.id !== parseInt(req.params.id)
  );

  res.sendStatus(204);
});

app.get("/products/:id", (req, res) => {
  const productFound = products.find(
    (product) => product.id === parseInt(req.params.id)
  );

  if (!productFound) {
    res.status(404).json({ message: "Product not found" });
  }

  res.json(productFound);
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
