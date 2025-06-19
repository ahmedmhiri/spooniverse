'use client';

import Link from 'next/link';
import ClientLayout from './components/ClientLayout';
import FlagsSection from './components/FlagsSection';
import './globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const countries = [
  { name: 'Italy', flag: '/flags/italy.png', href: '/italy' },
  { name: 'Japan', flag: '/flags/japan.png', href: '/japan' },
  { name: 'Mexico', flag: '/flags/mexico.png', href: '/mexico' },
  { name: 'France', flag: '/flags/france.png', href: '/france' },
  { name: 'Tunisia', flag: '/flags/tunisia.png', href: '/tunisia' },
];

const recipes = [
  {
    title: 'Lablabi',
    date: 'April 27, 2025',
    desc: 'A hearty Tunisian chickpea soup with a rich, spiced broth, served with crusty bread and a drizzle of harissa. Perfect for cold days!',
    image: '/recipes/Lablabi.jpeg',
    href: '/tunisia/lablabi',
  },
  {
    title: 'Chicken Teriyaki',
    date: 'April 28, 2025',
    desc: 'Juicy grilled chicken glazed with a rich, sweet-savory Japanese teriyaki sauce. Perfect with rice and veggies!',
    image: '/recipes/Chicken-teriyaki.jpg',
    href: '/japan/chicken-teriyaki',
  },
  {
    title: 'Tacos al Pastor',
    date: 'April 25, 2025',
    desc: 'Marinated pork cooked with pineapple and spices, served on soft corn tortillas. A true Mexican street food classic!',
    image: '/recipes/tacos.jpg',
    href: '/mexico/tacos-al-pastor',
  },
];

export default function HomePage() {
  return (
    <ClientLayout>
      <div className="homepage">
        {/* Headline Section */}
        <div className="headline-bar">
          <strong>Simple recipes made for</strong>
          <span className="script"> real, actual, everyday life.</span>
        </div>

        {/* Country Flags Section */}
        <FlagsSection countries={countries} />

        {/* Popular Recipes Section */}
        <h2 className="section-title">Popular Recipes</h2>
        <div className="container">
          {recipes.map((recipe, i) => (
            <div className="blog-recipe-card" key={i}>
              <Link href={recipe.href} className="blog-recipe-img-container">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="blog-recipe-img"
                />
              </Link>
              <div className="blog-recipe-content">
                <div className="blog-recipe-date">{recipe.date}</div>
                <Link href={recipe.href} className="blog-recipe-title">
                  {recipe.title}
                </Link>
                <p className="blog-recipe-desc">{recipe.desc}</p>
                <Link href={recipe.href} className="blog-recipe-link">
                  <span>Continue Reading</span>
                  <div className="recipe-underline" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ClientLayout>
  );
}