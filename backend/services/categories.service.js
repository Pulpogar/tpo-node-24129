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

const createCategory = async (CategoryName, is_active) => {
  const sql = "INSERT INTO categories (CategoryName, is_active) VALUES (?, ?)";
  const [result] = await db.query(sql, [CategoryName, is_active]);
  return result.insertId;
};

const updateCategoryById = async (CategoryID, CategoryName, is_active) => {
  const sql = "UPDATE categories SET CategoryName = ?, is_active = ?, CreatedAt = NOW() WHERE CategoryID = ?";
  const [result] = await db.query(sql, [CategoryName, is_active, CategoryID]);
  return result.affectedRows > 0;
};

// Función para actualizar una categoría por ID.
// const updateCategoryById = async (CategoryID, CategoryName, is_active) => {
//   const sql = 'UPDATE categories SET CategoryName = ?, is_active = ?, CreatedAt = NOW() WHERE CategoryID = ?';
//   return new Promise((resolve, reject) => {
//     db.query(sql, [CategoryName, is_active, CategoryID], (error, result) => {
//       if (error) {
//         return reject(error);
//       }
//       resolve(result);
//     });
//   });
// };

module.exports = {
  getAllCategories,
  getCategoryById,
  deleteCategoryById,
  createCategory,
  updateCategoryById
};