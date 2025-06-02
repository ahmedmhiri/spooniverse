import Link from 'next/link';

const recipes = [
  {
    title: 'Chicken Teriyaki',
    date: 'April 30, 2025',
    desc: 'Juicy grilled chicken glazed in a sweet-savory teriyaki sauce, served with steamed rice and sesame seeds. A classic crowd-pleaser.',
    image: '/recipes/chicken-teriyaki.jpg',
    href: '/japan/chicken-teriyaki'
  },
  {
    title: 'Sushi Platter',
    date: 'April 29, 2025',
    desc: 'A colorful selection of nigiri and maki rolls with fresh salmon, tuna, shrimp, and vegetables. A beautiful harmony of taste and texture.',
    image: '/recipes/sushi-platter.jpg',
    href: '/japan/sushi-platter'
  },
  {
    title: 'Ramen',
    date: 'April 28, 2025',
    desc: 'A comforting bowl of Japanese noodle soup with rich broth, sliced pork, soft-boiled egg, and nori. Perfectly slurpable.',
    image: '/recipes/ramen.jpg',
    href: '/japan/ramen'
  },
  {
    title: 'Onigiri',
    date: 'April 27, 2025',
    desc: 'Hand-shaped rice balls filled with pickled plum, salmon, or tuna, wrapped in nori. A popular portable snack in Japan.',
    image: '/recipes/onigiri-salmon.jpg',
    href: '/japan/onigiri'
  },
  {
    title: 'Miso Soup',
    date: 'April 26, 2025',
    desc: 'A traditional soup made from fermented soybean paste, dashi broth, tofu, and seaweed. Light, warm, and nourishing.',
    image: '/recipes/vegan-miso-soup.jpg',
    href: '/japan/miso-soup'
  }
];

export default function JapanPage() {
  return (
    <main>
      {/* Hero Section */}
      <div className="hero japan-hero">
        <div className="hero-overlay">
          <h1>Taste of Japan</h1>
          <p>From sushi to ramen, explore the soul of Japanese cuisine</p>
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
