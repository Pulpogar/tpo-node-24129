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

const createDirector= async (DirectorName) => {
  const sql = "INSERT INTO directors (DirectorName) VALUES (?)";
  const [result] = await db.query(sql, [DirectorName]);
  return result.insertId;
};

const updateDirectorById = async (DirectorID, DirectorName) => {
  const sql = "UPDATE directors SET DirectorName = ?, CreatedAt = NOW() WHERE DirectorID = ?";
  const [result] = await db.query(sql, [DirectorName, DirectorID]);
  return result.affectedRows > 0;
};

module.exports = {
  getAllDirectors,
  getDirectorById,
  deleteDirectorById,
  createDirector,
  updateDirectorById
};