import Link from 'next/link';

const recipes = [
  {
    title: 'Boeuf Bourguignon',
    date: 'April 30, 2025',
    desc: 'A slow-cooked beef stew braised in red wine, with mushrooms, onions, carrots, and herbs. A rich and comforting French classic.',
    image: '/recipes/Boeuf-Bourguignon.jpg',
    href: '/france/boeuf-bourguignon'
  },
  {
    title: 'Coq au Vin',
    date: 'April 29, 2025',
    desc: 'Chicken braised in red wine, with mushrooms, onions, garlic, and herbs. A rustic French dish full of flavor.',
    image: '/recipes/Coq-au-Vin.jpg',
    href: '/france/coq-au-vin'
  },
  {
    title: 'Ratatouille',
    date: 'April 28, 2025',
    desc: 'A medley of seasonal vegetables like eggplant, zucchini, and peppers, stewed with garlic and olive oil. A light yet flavorful dish from Provence.',
    image: '/recipes/Ratatouille.jpg',
    href: '/france/ratatouille'
  },
  {
    title: 'Quiche Lorraine',
    date: 'April 27, 2025',
    desc: 'A savory pie made with eggs, cream, bacon, and cheese. This iconic French dish is perfect for brunch or a light meal.',
    image: '/recipes/Quiche-Lorraine.jpg',
    href: '/france/quiche-lorraine'
  },
  {
    title: 'Soupe à l\'Oignon',
    date: 'April 26, 2025',
    desc: 'A deeply flavorful French onion soup made from caramelized onions, beef stock, and topped with melted cheese and toasted bread.',
    image: '/recipes/Soupe-a-l-Oignon.jpg',
    href: '/france/soupe-a-l-oignon'
  }
];

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <div className="hero french-hero">
        <div className="hero-overlay">
          <h1>Taste of France</h1>
          <p>Explore the most iconic and delicious French recipes</p>
        </div>
      </div>

      {/* Recipes Section */}
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
