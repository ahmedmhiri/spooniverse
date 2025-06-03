import Link from 'next/link';

const recipes = [
  {
    title: 'Couscous Tunisien',
    date: 'April 30, 2025',
    desc: 'A national dish made from steamed semolina, spiced vegetables, and tender lamb or fish, served with rich tomato sauce.',
    image: '/recipes/couscous-tunisien.jpg',
    href: '/tunis/couscous-tunisien'
  },
  {
    title: 'Brik à l\'œuf',
    date: 'April 29, 2025',
    desc: 'Crispy fried pastry filled with egg, tuna, capers, and parsley. A traditional appetizer with a perfect golden crunch.',
    image: '/recipes/brik.jpg',
    href: '/tunis/brik-a-loeuf'
  },
  {
    title: 'Ojja Merguez',
    date: 'April 28, 2025',
    desc: 'Spicy tomato and harissa stew with poached eggs and grilled merguez sausage. A warming dish served with bread.',
    image: '/recipes/ojja-merguez.jpg',
    href: '/tunis/ojja-merguez'
  },
  {
    title: 'Lablabi',
    date: 'April 27, 2025',
    desc: 'A hearty chickpea soup flavored with garlic, cumin, harissa, and olive oil, topped with pieces of bread and egg.',
    image: '/recipes/lablabi.jpg',
    href: '/tunis/lablabi'
  },
  {
    title: 'Kaak Warka',
    date: 'April 26, 2025',
    desc: 'A delicate Tunisian pastry ring filled with almond paste and scented with rose water. Light, fragrant, and sweet.',
    image: '/recipes/kaak-warka.jpg',
    href: '/tunis/kaak-warka'
  }
];

export default function TunisPage() {
  return (
    <main>
      {/* Hero Section */}
      <div className="hero tunis-hero">
        <div className="hero-overlay">
          <h1>Taste of Tunisia</h1>
          <p>Spices, traditions, and authentic Mediterranean flavors from North Africa</p>
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
