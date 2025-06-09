import Image from "next/image";
import "@/app/globals.css";
import IngredientsBox from "../../components/IngredientsBox";
import Stepsbox from "../../components/Stepsbox";

export default async function RecipePage(props) {
  const params = await props.params;
  const { countryname, recipe } = params;
  const RecipesDetails = (await import("../../data/recipes_details.json")).default;
  const countryRecipes = RecipesDetails[countryname?.toLowerCase()];
  const recipeDetails = countryRecipes?.find(
    (r) => r.name === recipe?.toLowerCase()
  );
  if (!recipeDetails) {
    return <div>Recipe not found</div>;
  }

  return (
    <>
      <div className="recipe-container">
        <div
          className="recipe-hero-blur"
          style={{ backgroundImage: `url(${recipeDetails.blurImage})` }}
        />
        <div className="recipe-overlay recipe-card">
          <div className="recipe-image-wrapper">
            <Image
              src={recipeDetails.image}
              alt={recipeDetails.title}
              width={300}
              height={200}
              className="recipe-image"
            />
          </div>
          <div className="recipe-info">
            <h1 className="recipe-title">{recipeDetails.title}</h1>
            <p className="recipe-desc">{recipeDetails.desc}</p>
            <div className="recipe-meta">
              <div className="meta-item">
                <img src="/icon/effort.png" alt="effort" className="meta-icon" />
                <span>{recipeDetails.difficulty}</span>
              </div>
              <div className="meta-item">
                <img src="/icon/time.png" alt="time" className="meta-icon" />
                <div className="time-details">
                  <p><strong>Prep:</strong> {recipeDetails.prepTime}</p>
                  <p><strong>Cook:</strong> {recipeDetails.cookTime}</p>
                </div>
              </div>
            </div>
            <div className="recipe-nutrition">
              <h2 className="nutrition-heading">Nutrition per serving</h2>
              <div className="nutrition-grid">
                {Object.entries(recipeDetails.nutrition).map(([label, value]) => (
                  <div className="nutrition-box" key={label}>
                    <span className="label">{label}</span>
                    <span className="value">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="boxes-wrapper">
        <IngredientsBox ingredients={recipeDetails.ingredients} />
        <Stepsbox steps={recipeDetails.steps} />
      </div>
    </>
  );
}
