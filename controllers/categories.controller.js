const db = require("../db/db");
const categoriesService = require('../services/categories.service');

const   getAllCategories = async (req, res) => {
  try {
    const movies = await categoriesService.getAllCategories();
    res.json(movies);
  } catch (error) {
    console.error("Error al obtener las categorías:", error);
    res.status(500).json({ error: "Ocurrió un error al intentar obtener las categorías." });
  }
};

const getCategoryById = async (req, res) => {
  const { id } = req.params;

  try {
    // Validar que el ID sea un número entero válido
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: "El ID de la categoría debe ser un número entero válido." });
    }

    const movie = await categoriesService.getCategoryById(id);

    if (!movie) {
      return res.status(404).json({ error: "No se encontró ninguna categoría con ese ID." });
    }

    res.json(movie);
  } catch (error) {
    console.error("Error al obtener la categoría:", error);
    res.status(500).json({ error: "Ocurrió un error al intentar obtener la categoría." });
  }
};

const deleteCategoryById = async (req, res) => {
  const { id } = req.params;

  try {
    // Validar que el ID sea un número entero válido
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: "El ID de la categoría debe ser un número entero válido." });
    }

    const isDeleted = await categoriesService.deleteCategoryById(id);

    if (!isDeleted) {
      return res.status(404).json({ error: "No se encontró ninguna categoría con ese ID." });
    }

    res.json({ mensaje: `categoría con ID ${id} eliminada correctamente.` });
  } catch (error) {
    console.error("Error al eliminar la categoría:", error);
    res.status(500).json({ error: "Ocurrió un error al intentar eliminar la categoría." });
  }
};


const createCategory = (req, res) => {
  const { nombre, stock, precio } = req.body;

  const sql = "INSERT INTO productos (nombre, precio, stock) VALUES (?, ?, ?)";
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
  getAllCategories,
  getCategoryById,
  deleteCategoryById,
  createCategory,
};