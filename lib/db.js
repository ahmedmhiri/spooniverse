import mysql from 'mysql2/promise';

export async function query(sql, params = []) {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    host: process.env.NEXT_PUBLIC_DB_HOST,
    port: process.env.NEXT_PUBLIC_DB_PORT,
    user: process.env.NEXT_PUBLIC_DB_USER,
    password: process.env.NEXT_PUBLIC_DB_PASSWORD,
    database: process.env.NEXT_PUBLIC_DB_NAME,
  });

  const [results] = await connection.execute(sql, params);
  await connection.end();
  return results;
}
