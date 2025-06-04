import Image from "next/image";
import "@/app/globals.css";
import IngredientsBox from '../../components/IngredientsBox';
import Stepsbox from '../../components/Stepsbox'



export default function RecipePage() {
  const recipe = {
    title: "Lablabi",
    desc: "A hearty Tunisian chickpea soup, perfect for winter mornings.",
    image: "/recipes/Lablabi.jpeg",
    blurImage: "/blured/lablabi.jpg",
    difficulty: "More effort",
    prepTime: "10 mins",
    cookTime: "15 mins",
    nutrition: {
      kcal: "350",
      fat: "10g",
      saturates: "4g",
      carbs: "40g",
      sugars: "3g",
      fibre: "5g",
      protein: "15g",
      salt: "2g",
    },
    ingredients: [
  { name: "spaghetti", unit: "g", amountPerPerson: 75 },
  { name: "guanciale or pancetta", unit: "g", amountPerPerson: 43 },
  { name: "egg yolks", unit: "", amountPerPerson: 1.25 },
  { name: "Parmigiano Reggiano", unit: "g", amountPerPerson: 15 },
  { name: "black pepper", unit: "", amountPerPerson: 0 },
  { name: "salt", unit: "", amountPerPerson: 0 }
  ],
  steps : [
    "Soak the chickpeas overnight.",
    "Cook them with garlic and cumin until tender.",
    "Serve with olive oil, lemon, and stale bread.",
  ]

  };


  return (
  <>
    <div className="recipe-container">
      {/* Blurred background */}
      <div
        className="recipe-hero-blur"
        style={{ backgroundImage: `url(${recipe.blurImage})` }}
      />

      {/* Main content */}
      <div className="recipe-overlay recipe-card">
        <div className="recipe-image-wrapper">
          <Image
            src={recipe.image}
            alt={recipe.title}
            width={300}
            height={200}
            className="recipe-image"
          />
        </div>

        <div className="recipe-info">
          <h1 className="recipe-title">{recipe.title}</h1>
          <p className="recipe-desc">{recipe.desc}</p>

          <div className="recipe-meta">
            <div className="meta-item">
              <img src="/icon/effort.png" alt="effort" className="meta-icon" />
              <span>{recipe.difficulty}</span>
            </div>
            <div className="meta-item">
              <img src="/icon/time.png" alt="time" className="meta-icon" />
              <div className="time-details">
                <p><strong>Prep:</strong> {recipe.prepTime}</p>
                <p><strong>Cook:</strong> {recipe.cookTime}</p>
              </div>
            </div>
          </div>

          <div className="recipe-nutrition">
            <h2 className="nutrition-heading">Nutrition per serving</h2>
            <div className="nutrition-grid">
              {Object.entries(recipe.nutrition).map(([label, value]) => (
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
      <IngredientsBox ingredients={recipe.ingredients} />
      <Stepsbox steps={recipe.steps} />

    </div>


  </>
);
}
