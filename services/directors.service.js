const db = require('../db/db');

const getAllDirectors = async () => {
  const sql = "SELECT * FROM directors";
  const [rows] = await db.query(sql);
  return rows;
};

const getDirectorById = async (directorId) => {
  const sql = "SELECT * FROM directors WHERE DirectorID = ?";
  const [rows] = await db.query(sql, [directorId]);
  return rows.length > 0 ? rows[0] : null;
};

const deleteDirectorById = async (directorId) => {
  const sql = "DELETE FROM directors WHERE DirectorId = ?";
  const [result] = await db.query(sql, [directorId]);
  return result.affectedRows > 0;
};

const createDirector = async (directorId) => {
  const sql = "INSERT INTO directors (title, director, release_year, genre) VALUES (?, ?, ?, ?)";
  const { title, director, release_year, genre } = movieData;
  const [result] = await db.query(sql, [title, director, release_year, genre]);
  return result.insertId;
};

module.exports = {
  getAllDirectors,
  getDirectorById,
  deleteDirectorById,
  createDirector,
};