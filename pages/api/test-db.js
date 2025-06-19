// pages/api/test-db.js
import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  try {
    // Create a connection using .env.local variables
    const connection = await mysql.createConnection({
      host: process.env.NEXT_PUBLIC_DB_HOST,
      port: process.env.NEXT_PUBLIC_DB_PORT,
      user: process.env.NEXT_PUBLIC_DB_USER,
      password: process.env.NEXT_PUBLIC_DB_PASSWORD,
      database: process.env.NEXT_PUBLIC_DB_NAME,
    });

    // Sample query to test connection
    const [rows] = await connection.execute('SELECT 1 + 1 AS result');
    await connection.end();

    // Respond with result
    res.status(200).json({ success: true, result: rows[0].result });
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
}
