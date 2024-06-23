const db = require('../db/db');

const getAllCategories = async () => {
  const sql = "SELECT * FROM categories";
  const [rows] = await db.query(sql);
  return rows;
};

const getCategoryById = async (categoryId) => {
  const sql = "SELECT * FROM categories WHERE CategoryID = ?";
  const [rows] = await db.query(sql, [categoryId]);
  return rows.length > 0 ? rows[0] : null;
};

const deleteCategoryById = async (categoryId) => {
  const sql = "DELETE FROM categories WHERE CategoryID = ?";
  const [result] = await db.query(sql, [categoryId]);
  return result.affectedRows > 0;
};

const createCategory = async (categoryId) => {
  const sql = "INSERT INTO categories (title, director, release_year, genre) VALUES (?, ?, ?, ?)";
  const { title, director, release_year, genre } = movieData;
  const [result] = await db.query(sql, [title, director, release_year, genre]);
  return result.insertId;
};

module.exports = {
  getAllCategories,
  getCategoryById,
  deleteCategoryById,
  createCategory,
};