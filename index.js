// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   const read = fs.createReadStream("./static/index.html");
//   read.pipe(res);
// });

// server.listen(3000);
// console.log(`Server on port ${3000}`);

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send('Hello world')
  // res.sendFile("./static/index.html", { root: __dirname });
});

app.get("/products", (req, res) => {
  res.send("Lista de productos")
})

app.post("/products", (req, res) => {
  res.send("Crear producto")
})

app.put("/products", (req, res) => {
  res.send("Actualizando producto")
})

app.delete("/products", (req, res) => {
  res.send("Eliminando producto")
})

app.patch("/products", (req, res) => {
  res.send("Actualizando una parte del producto")
})

app.listen(3000);
console.log(`Server on port ${3000}`);
