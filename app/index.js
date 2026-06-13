const express = require('express');
const { Pool } = require('pg');

const app = express();

const pool = new Pool({
  host: process.env.DB_HOST || 'db',
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'postgres',
  database: process.env.DB_NAME || 'meubanco',
});

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW() AS time');
    res.json({ status: 'ok', time: result.rows[0].time });
  } catch (err) {
    res.status(500).json({ status: 'erro', message: err.message });
  }
});

app.get('/health', (req, res) => res.send('healthy'));

app.listen(3000, () => console.log('App rodando na porta 3000'));
