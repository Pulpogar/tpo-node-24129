const db = require("../db/db");
const moviesService = require('../services/movies.service');

const getAllMovies = async (req, res) => {
  try {
    const movies = await moviesService.getAllMovies();
    res.json(movies);
  } catch (error) {
    console.error("Error al obtener las películas:", error);
    res.status(500).json({ error: "Ocurrió un error al intentar obtener las películas." });
  }
};

const getMovieById = async (req, res) => {
  const { id } = req.params;

  try {
    // Validar que el ID sea un número entero válido
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: "El ID de la película debe ser un número entero válido." });
    }

    const movie = await moviesService.getMovieById(id);

    if (!movie) {
      return res.status(404).json({ error: "No se encontró ninguna película con ese ID." });
    }

    res.json(movie);
  } catch (error) {
    console.error("Error al obtener la película:", error);
    res.status(500).json({ error: "Ocurrió un error al intentar obtener la película." });
  }
};

const deleteMovieById = async (req, res) => {
  const { id } = req.params;

  try {
    // Validar que el ID sea un número entero válido
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: "El ID de la película debe ser un número entero válido." });
    }

    const isDeleted = await moviesService.deleteMovieById(id);

    if (!isDeleted) {
      return res.status(404).json({ error: "No se encontró ninguna película con ese ID." });
    }

    res.json({ mensaje: `Película con ID ${id} eliminada correctamente.` });
  } catch (error) {
    console.error("Error al eliminar la película:", error);
    res.status(500).json({ error: "Ocurrió un error al intentar eliminar la película." });
  }
};


const createMovie = async (req, res) => {
  const { Title, MovieImage, Synopsis, ReleaseYear, CategoryID, DirectorID } = req.body;
  try {
    const isCreated = await categoriesService.createMovie(Title, MovieImage, Synopsis, ReleaseYear, CategoryID, DirectorID);
    if (isCreated) {
      res.json({ mensaje: `Película creada exitosamente` });
    }
  } catch (error) {
    console.error("Error al crear la película:", error);
    res.status(500).json({ error: "Ocurrió un error al intentar crear la categoría." });
  }
};

const updateMovie = (req, res) => {
  const { id } = req.params;
  const { nombre, stock, precio } = req.body;

  const sql =
    "UPDATE productos SET nombre = ?, stock = ?, precio = ? WHERE id = ?";
  db.query(sql, [nombre, stock, precio, id], (error, result) => {
    if (error) {
      return res.status(500).json({ error: "Intente mas tarde" });
    }

    if (result.affectedRows == 0) {
      return res.status(404).json({ error: "No existe el producto" });
    }

    const producto = { ...req.body, ...req.params };

    res.json(producto);
  });
};

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovieById,
};
