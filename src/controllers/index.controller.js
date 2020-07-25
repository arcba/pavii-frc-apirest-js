const { Pool } = require("pg");

const pool = new Pool({
  host: "bitgocba.duckdns.org",
  user: "pavii",
  password: "pav2utn",
  database: "firstapi",
  port: 5432
});

const getArticulos = async (req, res) => {
  //res.send('entro a getArticulos');
  const response = await pool.query("select * from articulos");
  console.log(response.rows);
  res.send(response.rows);
};

module.exports = { getArticulos };
