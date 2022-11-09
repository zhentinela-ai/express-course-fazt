const express = require("express");

const app = express();

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   const read = fs.createReadStream("./static/index.html");
//   read.pipe(res);
// });

// server.listen(3000);
// console.log(`Server on port ${3000}`);

// app.get("/", (req, res) => {
//   res.send("Hello world");
//   // res.sendFile("./static/index.html", { root: __dirname });
// });

// app.get("/products", (req, res) => {
//   res.send("Lista de productos");
// });

// app.post("/products", (req, res) => {
//   res.send("Crear producto");
// });

// app.put("/products", (req, res) => {
//   res.send("Actualizando producto");
// });

// app.delete("/products", (req, res) => {
//   res.send("Eliminando producto");
// });

// app.patch("/products", (req, res) => {
//   res.send("Actualizando una parte del producto");
// });

// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

// app.get("/miarchivo", (req, res) => {
//   res.sendFile("./elegante.png", {
//     root:  __dirname,
//   });
// });

// app.get("/user", (req, res) => {
//   res.json({
//     name: "zhent",
//     lastname: "ray",
//     age: 25,
//     points: [1, 2, 3, 4, 5],
//     address: {
//       street: "Calle falsa",
//       number: 123,
//     },
//     hello: function () {
//       return "Hello world";
//     },
//   });
// });

// app.get("/isAlive", (req, res) => {
//   res.sendStatus(204)
// });

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.post("/user", (req, res) => {
//   console.log("Body", req.body);
//   res.send("Creando usuario");
// });

app.all("/info", (req, res) => {
  res.send(req.headers);
})

app.get("/search", (req, res) => {
  console.log("Query", req.query);
  if (req.query.q === "javascript books") {
    res.send("lista de libros javascript");
  } else {
    res.send("pagina normal");
  }
});

app.get("/hello/:username", (req, res) => {
  res.send("Hello " + req.params.username.toUpperCase());
});

app.get("/add/:x/:y", (req, res) => {
  const { x, y } = req.params;
  res.send("La suma es " + (parseInt(x) + parseInt(y)));
});

app.get("/users/:username/photo", (req, res) => {
  if (req.params.username === "zhent") {
    return res.sendFile("./elegante.png", {
      root: __dirname,
    });
  }

  res.send("No existe el usuario");
});

app.listen(3000);
console.log(`Server on port ${3000}`);
