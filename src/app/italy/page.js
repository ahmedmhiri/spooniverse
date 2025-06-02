import Link from 'next/link';

const recipes = [
  {
    title: 'Spaghetti Carbonara',
    date: 'April 30, 2025',
    desc: 'A creamy, cheesy Roman pasta dish made with eggs, Pecorino Romano, pancetta, and pepper. Fast, comforting, and so satisfying.',
    image: '/recipes/Spaghetti-Carbonara.jpg',
    href: '/italy/spaghetti-carbonara'
  },
  {
    title: 'Margherita Pizza',
    date: 'April 29, 2025',
    desc: 'A Neapolitan classic topped with fresh tomatoes, mozzarella, and basil. Simple ingredients, bold Italian flavor.',
    image: '/recipes/Margherita_Pizza.jpg',
    href: '/italy/margherita-pizza'
  },
  {
    title: 'Lasagna alla Bolognese',
    date: 'April 28, 2025',
    desc: 'Layered pasta sheets with rich meat ragù, béchamel, and Parmigiano-Reggiano. A comforting baked favorite from Emilia-Romagna.',
    image: '/recipes/lasagne-alla-bolognese.webp',
    href: '/italy/lasagna-alla-bolognese'
  },
  {
    title: 'Risotto alla Milanese',
    date: 'April 27, 2025',
    desc: 'Creamy saffron-infused risotto from Milan, traditionally served with ossobuco or enjoyed on its own.',
    image: '/recipes/risotoo.jpg',
    href: '/italy/risotto-alla-milanese'
  },
  {
    title: 'Tiramisu',
    date: 'April 26, 2025',
    desc: 'A beloved Italian dessert with layers of espresso-soaked ladyfingers and mascarpone cream, dusted with cocoa.',
    image: '/recipes/Tiramisu.jpg',
    href: '/italy/tiramisu'
  }
];

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <div className="hero italian-hero">
        <div className="hero-overlay">
          <h1>Taste of Italy</h1>
          <p>Explore the most iconic and delicious Italian recipes</p>
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
