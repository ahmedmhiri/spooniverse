import Link from 'next/link';

const recipes = [
  {
    title: 'Tacos al Pastor',
    date: 'April 30, 2025',
    desc: 'Marinated pork cooked on a vertical spit with pineapple, served on corn tortillas with onion, cilantro, and salsa.',
    image: '/recipes/tacos.jpg',
    href: '/mexico/tacos-al-pastor'
  },
  {
    title: 'Chiles en Nogada',
    date: 'April 29, 2025',
    desc: 'Stuffed poblano peppers topped with walnut sauce, pomegranate seeds, and parsley. A patriotic and flavorful dish.',
    image: '/recipes/Chiles-en-Nogada.jpeg',
    href: '/mexico/chiles-en-nogada'
  },
  {
    title: 'Tamales',
    date: 'April 28, 2025',
    desc: 'Corn dough filled with meat, vegetables, or sweet flavors, wrapped in corn husks and steamed to perfection.',
    image: '/recipes/Tamales.jpeg',
    href: '/mexico/tamales'
  },
  {
    title: 'Pozole',
    date: 'April 27, 2025',
    desc: 'A hearty traditional soup made with hominy and pork, topped with shredded lettuce, radish, oregano, and lime.',
    image: '/recipes/Pozole.jpg',
    href: '/mexico/pozole'
  },
  {
    title: 'Mole Poblano',
    date: 'April 26, 2025',
    desc: 'A rich, dark sauce made with chiles, chocolate, spices, and nuts, traditionally served over turkey or chicken.',
    image: '/recipes/Mole-Poblano.jpg',
    href: '/mexico/mole-poblano'
  }
];

export default function MexicoPage() {
  return (
    <main>
      {/* Hero Section */}
      <div className="hero mexican-hero">
        <div className="hero-overlay">
          <h1>Taste of Mexico</h1>
          <p>Spice, flavor, and centuries of culinary tradition in every dish</p>
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
