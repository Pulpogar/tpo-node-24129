require("dotenv").config();

const cors = require('cors');
const bodyParser = require('body-parser');
const exp = require("constants");
const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const path = require("path");

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

app.use("/", moviesRouter);

// app.get("/", (req, res) => {
//   res.send("Hola desde Express!!");
// });

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://cyberex.alwaysdata.net:${PORT}`));
