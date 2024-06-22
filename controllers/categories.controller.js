const db = require("../db/db");

async function getAll(req, res) {
  try {
    const sql = "SELECT * FROM categories";
    const [rows, fields] = await db.promise().query(sql);

    res.json(rows);
  } catch (error) {
    console.error("Error al obtener las categorías:", error);
    res.status(500).json({ error: "Intente más tarde" });
  }
};


async function getOne(req, res) {
  const { id } = req.params;

  try {
    const sql = "SELECT * FROM categories WHERE CategoryID = ?";
    const [rows, fields] = await db.promise().query(sql, [id]);

    if (rows.length === 0) {
      return res.status(404).json({ error: "No existe la categoría" });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error("Error al obtener la película:", error);
    res.status(500).json({ error: "Intente más tarde" });
  }
}

module.exports = {
  getAll,
  getOne,
  // store,
  // update,
  // destroy,
};
