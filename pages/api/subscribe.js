import { query } from '../../lib/db'; 

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { firstName, email } = req.body;

  // Basic validation
  if (!email || !firstName) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  try {
    // Store subscriber
    await query(
      `INSERT INTO subscribers (first_name, email) VALUES (?, ?)`,
      [firstName, email]
    );

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Subscription error:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
