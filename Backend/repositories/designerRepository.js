const pool = require("../config/db");

async function findAll(city) {
  if (city) {
    const result = await pool.query(
      "SELECT * FROM designers WHERE LOWER(city) = LOWER($1)",
      [city]
    );

    return result.rows;
  }

  const result = await pool.query("SELECT * FROM designers");
  return result.rows;
}

async function findById(id) {
  const result = await pool.query(
    "SELECT * FROM designers WHERE id = $1",
    [id]
  );

  return result.rows[0] || null;
}

module.exports = {
  findAll,
  findById
};
