import Link from 'next/link';
import './globals.css';
const countries = [
  { name: 'Italy', flag: '/flags/italy.png', href: '/italy' },
  { name: 'Japan', flag: '/flags/japan.png', href: '/japan' },
  { name: 'Mexico', flag: '/flags/mexico.png', href: '/mexico' },
  { name: 'France', flag: '/flags/france.png', href: '/france' },
  { name: 'Tunisia', flag: '/flags/tunisia.png', href: '/tunisia' },
];

const recipes = [
  {
    title: 'Spaghetti Carbonara',
    date: 'April 30, 2025',
    desc: 'A creamy, cheesy Roman pasta dish made with eggs, Pecorino Romano, pancetta, and pepper. Fast, comforting, and so satisfying.',
    image: '/recipes/Spaghetti-Carbonara.jpg',
    href: '/italy/spaghetti-carbonara'
  },
  {
    title: 'Chicken Teriyaki',
    date: 'April 28, 2025',
    desc: 'Juicy grilled chicken glazed with a rich, sweet-savory Japanese teriyaki sauce. Perfect with rice and veggies!',
    image: '/recipes/Chicken-teriyaki.jpg',
    href: '/japan/chicken-teriyaki'
  },
  {
    title: 'Tacos al Pastor',
    date: 'April 25, 2025',
    desc: 'Marinated pork cooked with pineapple and spices, served on soft corn tortillas. A true Mexican street food classic!',
    image: '/recipes/tacos.jpg',
    href: '/mexico/tacos-al-pastor'
  }
];

export default function HomePage() {
  return (
    <div>
      <div className="headline-bar">
        <strong>Simple recipes made for</strong>
        <span className="script"> real, actual, everyday life.</span>
      </div>

      <div className="flag-grid">
        {countries.map((c, i) => (
          <Link key={i} href={c.href} className="flag-card-tile">
            <img src={c.flag} alt={c.name} className="flag-full-img" />
            <div className="flag-tile-label">{c.name}</div>
          </Link>
        ))}
      </div>

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
    </div>
  );
}
