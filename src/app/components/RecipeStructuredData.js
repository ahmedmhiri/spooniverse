import Head from 'next/head';

export default function RecipeStructuredData({ recipe }) {
  // Cleaned-up duration parser
  const toISO8601 = (timeStr) => {
    if (!timeStr) return null;
    const hours = /(\d+)\s*hr/.exec(timeStr)?.[1] || 0;
    const minutes = /(\d+)\s*min/.exec(timeStr)?.[1] || 0;
    return `PT${hours ? `${hours}H` : ''}${minutes ? `${minutes}M` : ''}` || null;
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": recipe.title,
    "description": recipe.desc,
    "image": [recipe.image],
    "author": {
      "@type": "Person",
      "name": "Spooniverse"
    },
    "prepTime": toISO8601(recipe.prepTime),
    "cookTime": toISO8601(recipe.cookTime),
    "totalTime": toISO8601(
      `${recipe.prepTime || ''} ${recipe.cookTime || ''}`
    ),
    "recipeYield": "4 servings",
    "recipeIngredient": recipe.ingredients.map(i =>
      `${i.amountPerPerson} ${i.unit || ''} ${i.name}`.trim()
    ),
    "recipeInstructions": recipe.steps.map(step => ({
      "@type": "HowToStep",
      "text": step
    })),
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": `${recipe.nutrition.kcal}`,
      "fatContent": `${recipe.nutrition.fat}`,
      "carbohydrateContent": `${recipe.nutrition.carbs}`,
      "fiberContent": `${recipe.nutrition.fibre}`,
      "proteinContent": `${recipe.nutrition.protein}`,
      "sugarContent": `${recipe.nutrition.sugars}`,
      "sodiumContent": `${recipe.nutrition.salt}`
    }
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}
