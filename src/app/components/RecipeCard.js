import Link from 'next/link';

export default function RecipeCard({ recipe }) {
  return (
    <div className="blog-recipe-card">
      <Link href={recipe.href}>
        <img src={recipe.image} alt={recipe.title} className="blog-recipe-img" />
      </Link>
      <div className="blog-recipe-content">
        <div className="blog-recipe-date">{recipe.date}</div>
        <Link href={recipe.href} className="blog-recipe-title">{recipe.title}</Link>
        <p>{recipe.desc}</p>
        <Link href={recipe.href} className="blog-recipe-link">
          <span>Continue Reading</span>
          <div className="recipe-underline" />
        </Link>
      </div>
    </div>
  );
}
