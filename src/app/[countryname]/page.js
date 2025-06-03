import Link from 'next/link';
import allRecipes from '../data/allRecipes.json';
export default async function CountryPage({ params }) {
  const country = params.countryname;
  const recipes = allRecipes[country] || [];
    if (!country || !allRecipes[country]) {
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
            <div className="blog-recipe-card" key={i}>
              <Link href={r.href}>
                <img src={r.image} alt={r.title} className="blog-recipe-img" />
              </Link>
              <div className="blog-recipe-content">
                <div className="blog-recipe-date">{r.date}</div>
                <Link href={r.href} className="blog-recipe-title">{r.title}</Link>
                <p>{r.desc}</p>
                <Link href={r.href} className="blog-recipe-link">
                  <span>Continue Reading</span>
                  <div className="recipe-underline" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}