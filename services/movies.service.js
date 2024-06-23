const db = require('../db/db');

const getAllMovies = async () => {
  const sql = "SELECT * FROM movies";
  const [rows] = await db.query(sql);
  return rows;
};

const getMovieById = async (movieId) => {
  const sql = "SELECT * FROM movies WHERE MovieID = ?";
  const [rows] = await db.query(sql, [movieId]);
  return rows.length > 0 ? rows[0] : null;
};

const deleteMovieById = async (movieId) => {
  const sql = "DELETE FROM movies WHERE MovieID = ?";
  const [result] = await db.query(sql, [movieId]);
  return result.affectedRows > 0;
};

module.exports = {
  getAllMovies,
  getMovieById,
  deleteMovieById,
};