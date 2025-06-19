import { query } from '../../lib/db';

export default async function handler(req, res) {
  try {
    // 1. Get all base recipe data
    const recipes = await query(`
      SELECT 
        r.recipe_id,
        r.name,
        r.title,
        r.description AS \`desc\`,
        r.image_path AS image,
        r.blur_image_path AS blurImage,
        r.difficulty,
        r.prep_time AS prepTime,
        r.cook_time AS cookTime
      FROM recipes r
    `);

    // 2. Get all ingredients with quantities and units
    const ingredientsRows = await query(`
      SELECT recipe_id, name, unit, amount_per_person
      FROM ingredients
    `);

    // 3. Get preparation steps
    const stepsRows = await query(`
      SELECT recipe_id, instruction
      FROM steps
      ORDER BY step_number ASC
    `);

    // 4. Get nutrition values
    const nutritionRows = await query(`
      SELECT *
      FROM nutrition
    `);

    // 5. Map ingredients per recipe
    const ingredientsMap = {};
    for (const row of ingredientsRows) {
      if (!ingredientsMap[row.recipe_id]) ingredientsMap[row.recipe_id] = [];
      ingredientsMap[row.recipe_id].push({
        name: row.name,
        unit: row.unit,
        amountPerPerson: Number(row.amount_per_person)
      });
    }

    // 6. Map steps per recipe
    const stepsMap = {};
    for (const row of stepsRows) {
      if (!stepsMap[row.recipe_id]) stepsMap[row.recipe_id] = [];
      stepsMap[row.recipe_id].push(row.instruction);
    }

    // 7. Map nutrition per recipe
    const nutritionMap = {};
    for (const row of nutritionRows) {
      nutritionMap[row.recipe_id] = {
        kcal: row.kcal,
        fat: row.fat,
        carbs: row.carbs,
        fibre: row.fibre,
        protein: row.protein,
        sugars: row.sugars,
        salt: row.salt
      };
    }

    // 8. Build the final result
    const final = [];

    for (const recipe of recipes) {
      final.push({
        name: recipe.name,
        title: recipe.title,
        desc: recipe.desc,
        image: recipe.image,
        blurImage: recipe.blurImage,
        difficulty: recipe.difficulty,
        prepTime: recipe.prepTime,
        cookTime: recipe.cookTime,
        ingredients: ingredientsMap[recipe.recipe_id] || [],
        steps: stepsMap[recipe.recipe_id] || [],
        nutrition: nutritionMap[recipe.recipe_id] || {}
      });
    }

    res.status(200).json(final);
  } catch (error) {
    console.error('[API] recipes-details error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
