require("dotenv").config();

const exp = require("constants");
const express = require("express");
const app = express();

const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

// app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const moviesRouter = require("./routes/movies.router");
app.use("/movies", moviesRouter);

const categoriesRouter = require("./routes/categories.router");
app.use("/categories", categoriesRouter);

const directorRouter = require("./routes/directors.router");
app.use("/directors", directorRouter);

app.get("/", (req, res) => {
  res.send("Hola desde Express!!");
});

app.get("/factura", (req, res) => {
  // Login
  res.sendFile(path.join(__dirname, "private", "factura.html"));
});

app.get("/frutas", (req, res) => {
  console.log(req.query);
  res.sendFile(path.join(__dirname, "frutas.json"));
});

app.get("/movies/:id", (req, res) => {
  console.log(req.params.id);
  res.send("Película: " + req.params.id);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
