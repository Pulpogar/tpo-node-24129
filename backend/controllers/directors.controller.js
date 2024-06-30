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

const createDirector = async (req, res) => {
  const { DirectorName } = req.body;
  try {
    const isCreated = await directorsService.createDirector(DirectorName);
    if (isCreated) {
      res.json({ mensaje: `Director creado exitosamente` });
    }
  } catch (error) {
    console.error("Error al crear el director:", error);
    res.status(500).json({ error: "Ocurrió un error al intentar crear el director." });
  }
};

const updateDirectorById = async (req, res) => {
  const { id } = req.params;
  const { DirectorName } = req.body;
  try {
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: "El ID del director debe ser un número entero válido." });
    }
    const isUpdated = await directorsService.updateDirectorById(id, DirectorName);
    if (isUpdated) {
      res.json({ mensaje: `Director actualizado exitosamente` });
    }
  } catch (error) {
    console.error("Error al actualizar el director:", error);
    res.status(500).json({ error: "Ocurrió un error al intentar actualizar el director." });
  }
};


module.exports = {
  getAllDirectors,
  getDirectorById,
  deleteDirectorById,
  createDirector,
  updateDirectorById
};