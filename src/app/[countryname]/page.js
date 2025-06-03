import allRecipes from '../data/allRecipes.json';
import RecipeCard from '../components/RecipeCard';

export default async function CountryPage({ params }) {
  const country = params.countryname;
  const recipes = allRecipes[country] || [];

  if (!country || !recipes.length) {
    return <h1 style={{ textAlign: 'center' }}>Country not found</h1>;
  }

  return (
    <main>
      <div className={`hero ${country}-hero`}>
        <div className="hero-overlay">
          <h1>{`Taste of ${country.charAt(0).toUpperCase() + country.slice(1)}`}</h1>
          <p>Explore authentic recipes from {country.charAt(0).toUpperCase() + country.slice(1)}</p>
        </div>
      </div>

      <section>
        <h2 className="section-title">Popular Recipes</h2>
        <div className="blog-recipe-list">
          {recipes.map((r, i) => (
            <RecipeCard key={i} recipe={r} />
          ))}
        </div>
      </section>
    </main>
  );
}
