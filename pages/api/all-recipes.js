import { query } from '../../lib/db';

function slugify(name) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/œ/g, 'oe')
    .replace(/\s+/g, '-')
    .replace(/[^\w\-àâçéèêëîïôûùüÿñæœ]/gi, '');
}

export default async function handler(req, res) {
  try {
    const result = await query(`
      SELECT 
        c.country_name AS country,
        r.title,
        r.description AS \`desc\`,
        r.image_path AS image,
        r.name
      FROM recipes r
      JOIN countries c ON r.country_id = c.country_id
      ORDER BY c.country_name, r.recipe_id DESC
    `);

    const grouped = {};

    for (const row of result) {
      const countryKey = row.country.toLowerCase();
      if (!grouped[countryKey]) grouped[countryKey] = [];

      grouped[countryKey].push({
        name: row.name, // 🔥 Important for dynamic routing and internal use
        title: row.title,
        desc: row.desc,
        image: row.image,
        href: `/${countryKey}/${slugify(row.name)}`
      });
    }

    res.status(200).json(grouped);
  } catch (err) {
    console.error('[API] all-recipes error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
