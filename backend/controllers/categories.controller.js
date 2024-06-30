const db = require("../db/db");
const categoriesService = require('../services/categories.service');

const getAllCategories = async (req, res) => {
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


const createCategory = async (req, res) => {
  const { CategoryName, is_active } = req.body;
  try {
    const isCreated = await categoriesService.createCategory(CategoryName, is_active);
    if (isCreated) {
      res.json({ mensaje: `Categoría creada exitosamente` });
    }
  } catch (error) {
    console.error("Error al crear la categoría:", error);
    res.status(500).json({ error: "Ocurrió un error al intentar eliminar la categoría." });
  }
};

const updateCategoryById = async (req, res) => {
  const { id } = req.params;
  const { CategoryName, is_active, CreatedAt  } = req.body;
  try {
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: "El ID de la categoría debe ser un número entero válido." });
    }
    const isUpdated = await categoriesService.updateCategoryById(id, CategoryName, is_active, CreatedAt);
    if (isUpdated) {
      res.json({ mensaje: `Categoría actualizada exitosamente` });
    }
  } catch (error) {
    console.error("Error al actualizar la categoría:", error);
    res.status(500).json({ error: "Ocurrió un error al intentar actualizar la categoría." });
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  deleteCategoryById,
  createCategory,
  updateCategoryById
};