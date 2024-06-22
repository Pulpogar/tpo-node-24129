const db = require("../db/db");

async function getAll(req, res) {
  try {
    const sql = "SELECT * FROM movies";
    const [rows, fields] = await db.promise().query(sql);

    res.json(rows);
  } catch (error) {
    console.error("Error al obtener las películas:", error);
    res.status(500).json({ error: "Intente más tarde" });
  }
};


async function getOne(req, res) {
  const { id } = req.params;

  try {
    const sql = "SELECT * FROM movies WHERE MovieID = ?";
    const [rows, fields] = await db.promise().query(sql, [id]);

    if (rows.length === 0) {
      return res.status(404).json({ error: "No existe la película" });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error("Error al obtener la película:", error);
    res.status(500).json({ error: "Intente más tarde" });
  }
}

const store = (req, res) => {
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

const destroy = (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM productos WHERE id = ?";
  db.query(sql, [id], (error, result) => {
    if (error) {
      return res.status(500).json({ error: "Intente mas tarde" });
    }

    if (result.affectedRows == 0) {
      return res.status(404).json({ error: "No existe el producto" });
    }

    res.json({ mensaje: `Producto ${id} borrado` });
  });
};

module.exports = {
  getAll,
  getOne,
  store,
  update,
  destroy,
};
