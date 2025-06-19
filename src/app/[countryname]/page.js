'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import RecipeCard from '../components/RecipeCard';
import ClientLayout from '../components/ClientLayout';

export default function CountryPage() {
  const params = useParams();
  const countryname = params?.countryname?.toLowerCase();
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!countryname) return;

    const fetchData = async () => {
      try {
        const res = await fetch('/api/all-recipes', { cache: 'no-store' });
        const data = await res.json();

        const countryRecipes = data[countryname];

        if (!countryRecipes || countryRecipes.length === 0) {
          setError('Country not found');
        } else {
          setRecipes(countryRecipes);
        }
      } catch (err) {
        setError('Failed to load recipes');
      }
    };

    fetchData();
  }, [countryname]);

  if (error) {
    return (
      <ClientLayout>
        <h1 className="text-center mt-5">{error}</h1>
      </ClientLayout>
    );
  }

  return (
    <ClientLayout>
      <main>
        {/* Hero Section */}
        <div className={`hero ${countryname}-hero`}>
          <div className="hero-overlay text-white text-center py-5">
            <h1>{`Taste of ${countryname.charAt(0).toUpperCase() + countryname.slice(1)}`}</h1>
            <p>
              Explore authentic recipes from{' '}
              {countryname.charAt(0).toUpperCase() + countryname.slice(1)}
            </p>
          </div>
        </div>

        {/* Recipes Section */}
        <section className="container my-5">
          <h2 className="section-title text-center mb-4">Popular Recipes</h2>
          <div className="row g-4">
            {recipes.map((r, i) => (
              <div className="col-12 col-sm-6 col-lg-12" key={i}>
                <RecipeCard recipe={r} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </ClientLayout>
  );
}
