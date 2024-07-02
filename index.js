require("dotenv").config();

const cors = require('cors');
const bodyParser = require('body-parser');
const exp = require("constants");
const express = require("express");
const app = express();

const path = require("path");

// Permitir solicitudes desde tu dominio en Vercel
const corsOptions = {
  origin: 'https://tpo-front-24129.vercel.app/',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: false, // Si necesitas permitir credenciales
  optionsSuccessStatus: 204
};

// Middleware
app.use(bodyParser.json());
app.use(cors(corsOptions)); // Habilita CORS para permitir solicitudes desde el frontend independiente

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

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://cyberex.alwaysdata.net:${PORT}`));
