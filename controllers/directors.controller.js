const db = require("../db/db");
const directorsService = require('../services/directors.service');

const getAllDirectors = async (req, res) => {
  try {
    const movies = await directorsService.getAllDirectors();
    res.json(movies);
  } catch (error) {
    console.error("Error al obtener las categorías:", error);
    res.status(500).json({ error: "Ocurrió un error al intentar obtener las categorías." });
  }
};

const getDirectorById = async (req, res) => {
  const { id } = req.params;

  try {
    // Validar que el ID sea un número entero válido
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: "El ID del director debe ser un número entero válido." });
    }

    const movie = await directorsService.getDirectorById(id);

    if (!movie) {
      return res.status(404).json({ error: "No se encontró ningún director con ese ID." });
    }

    res.json(movie);
  } catch (error) {
    console.error("Error al obtener la categoría:", error);
    res.status(500).json({ error: "Ocurrió un error al intentar obtener la categoría." });
  }
};

const deleteDirectorById = async (req, res) => {
  const { id } = req.params;

  try {
    // Validar que el ID sea un número entero válido
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: "El ID del director debe ser un número entero válido." });
    }

    const isDeleted = await directorsService.deleteDirectorById(id);

    if (!isDeleted) {
      return res.status(404).json({ error: "No se encontró ningún director con ese ID." });
    }

    res.json({ mensaje: `Director con ID ${id} eliminada correctamente.` });
  } catch (error) {
    console.error("Error al eliminar el director:", error);
    res.status(500).json({ error: "Ocurrió un error al intentar eliminar la categoría." });
  }
};


const createDirector = (req, res) => {
  const { nombre, stock, precio } = req.body;

  const sql = "INSERT INTO directors (nombre, precio, stock) VALUES (?, ?, ?)";
  db.query(sql, [nombre, precio, stock], (error, result) => {
    if (error) {
      return res.status(500).json({ error: "Intente mas tarde" });
    }

    const producto = { ...req.body, id: result.insertId };

    res.json(producto);
  });
};

const update = (req, res) => {
  const { id } = req.params;
  const { nombre, stock, precio } = req.body;

  const sql =
    "UPDATE directors SET nombre = ?, stock = ?, precio = ? WHERE id = ?";
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
  getAllDirectors,
  getDirectorById,
  deleteDirectorById,
  createDirector,
};