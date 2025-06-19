import Head from 'next/head';
import Image from 'next/image';
import ClientLayout from '../../components/ClientLayout';
import IngredientsBox from '../../components/IngredientsBox';
import Stepsbox from '../../components/Stepsbox';
import RecipeStructuredData from '../../components/RecipeStructuredData';


export async function generateMetadata({ params }) {
  const res = await fetch(`http://localhost:3000/api/recipes-details`, { cache: 'no-store' });
  const data = await res.json();
  const recipe = data.find(r => r.name.toLowerCase() === params.recipe.toLowerCase());

  return {
    title: recipe?.title || 'Recipe',
    description: recipe?.desc || ''
  };
}

export default async function RecipePage({ params }) {
  const { countryname, recipe } = params;

  const res = await fetch(`http://localhost:3000/api/recipes-details`, { cache: 'no-store' });
  const data = await res.json();
  const recipeDetails = data.find(r => r.name.toLowerCase() === recipe.toLowerCase());

  if (!recipeDetails) {
    return <ClientLayout><div className="recipe-main text-center mt-5">Recipe not found</div></ClientLayout>;
  }

  return (
    <ClientLayout>
      <RecipeStructuredData recipe={recipeDetails} />

      <main className="recipe-main">
        {/* Hero */}
        <div className="recipe-container">
          <div
            className="recipe-hero-blur"
            style={{ backgroundImage: `url(${recipeDetails.blurImage})` }}
          />
          <div className="recipe-overlay recipe-card container py-4">
            <div className="d-flex flex-column flex-md-row align-items-start gap-4 mt-3">
              {/* Centered Image on Mobile */}
              <div className="recipe-image-wrapper mx-auto mx-md-0 flex-shrink-0" 
                   style={{ width: '100%', maxWidth: '450px' }}>
                <Image
                  src={recipeDetails.image}
                  alt={recipeDetails.title}
                  width={450}
                  height={300}
                  className="img-fluid w-100 h-auto"
                  style={{ 
                    borderRadius: '12px', 
                    objectFit: 'cover',
                    minWidth: '250px'
                  }}
                  priority
                />
              </div>
              <div className="flex-grow-1 text-start">
                <h1 className="recipe-title">{recipeDetails.title}</h1>
                <p className="recipe-desc">{recipeDetails.desc}</p>

                <div className="recipe-meta d-flex flex-column flex-md-row align-items-start gap-3 mt-3">
                  <div className="meta-item d-flex align-items-center gap-2">
                    <img src="/icon/effort.png" alt="effort" className="meta-icon" />
                    <span>{recipeDetails.difficulty}</span>
                  </div>
                  <div className="meta-item d-flex align-items-center gap-2">
                    <img src="/icon/time.png" alt="time" className="meta-icon" />
                    <div className="time-details">
                      <p><strong>Prep:</strong> {recipeDetails.prepTime}</p>
                      <p><strong>Cook:</strong> {recipeDetails.cookTime}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Nutrition */}
            <div className="row mt-4">
              <div className="col-12">
                <h2 className="nutrition-heading text-center">Nutrition per serving</h2>
                <div className="nutrition-grid d-flex flex-wrap justify-content-center gap-2 mt-2">
                  {Object.entries(recipeDetails.nutrition).map(([label, value]) => (
                    <div className="nutrition-box text-center" key={label}>
                      <span className="label">{label}</span>
                      <span className="value">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ingredients & Steps */}
      <div className="equal-boxes-container container mt-4">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="equal-box h-100">
              <IngredientsBox ingredients={recipeDetails.ingredients} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="equal-box h-100">
              <Stepsbox steps={recipeDetails.steps} />
            </div>
          </div>
        </div>
      </div>
      </main>
    </ClientLayout>
  );
}