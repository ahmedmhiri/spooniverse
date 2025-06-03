import Image from "next/image";
import "@/app/globals.css";

export default function RecipePage() {
  const recipe = {
    title: "Lablabi",
    desc: "A hearty Tunisian chickpea soup, perfect for winter mornings.",
    image: "/recipes/Lablabi.jpeg",
    blurImage: "/recipes/Lablabi.jpeg",
    time: "45 mins",
    difficulty: "Medium",
    nutrition: {
      calories: "350 kcal",
      protein: "15g",
      fat: "10g",
      carbs: "40g",
    },
  };

  return (
    <div className="recipe-container">
      {/* Blurred top image */}
      <div
        className="recipe-hero-blur"
        style={{ backgroundImage: `url(${recipe.blurImage})` }}
      ></div>

      {/* Overlay content */}
      <div className="recipe-overlay">
        <div className="recipe-card">
          {/* Left image */}
          <div className="recipe-image-wrapper">
            <Image
              src={recipe.image}
              alt={recipe.title}
              width={300}
              height={200}
              className="recipe-image"
            />
          </div>

          {/* Right info */}
          <div className="recipe-info">
            <h1 className="recipe-title">{recipe.title}</h1>
            <p className="recipe-desc">{recipe.desc}</p>
            <p><strong>Time:</strong> {recipe.time}</p>
            <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
            <div className="recipe-nutrition">
              <h2>Nutrition per serving:</h2>
              <ul>
                <li>Calories: {recipe.nutrition.calories}</li>
                <li>Protein: {recipe.nutrition.protein}</li>
                <li>Fat: {recipe.nutrition.fat}</li>
                <li>Carbs: {recipe.nutrition.carbs}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
