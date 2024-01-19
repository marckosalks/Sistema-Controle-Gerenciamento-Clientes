const express =  require('express')
const { Pool } = require('pg')

const app = new Pool({
  user: 'root',
  host: 'postgres',
  database: 'clearsystem',
  password: 'root',
  port: 5432,
})

app.get('/', async (req, res) => {
  const result = await pool.query('SELECT $1::text as message', ['Hello, PostgreSQL!']);
  res.send(result.rows[0].message);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});