'use client';

import Image from 'next/image';
import Link from 'next/link';
import '../globals.css';
import ClientLayout from '../components/ClientLayout'; // adjust path if needed

export default function AboutPage() {
  return (
    <ClientLayout>
      <section className="about-container">
        <div className="about-hero">
          <div className="about-hero-text">
            <h1>Welcome to Spoonivers</h1>
            <p>
              At Spoonivers, we believe cooking should be simple, delicious, and rooted in real life. Whether you're
              craving Italian classics, Japanese comfort, Mexican street food, or Tunisian traditions, Spoonivers brings
              global flavors straight to your home kitchen.
            </p>
            <Link href="/contact" className="about-cta-button">
              Contact Us
            </Link>
          </div>
          <div className="about-hero-image">
            <Image
              src="/icon/chef.jpg"
              alt="Chef preparing food"
              width={500}
              height={333}
              layout="responsive"
            />
          </div>
        </div>

        <div className="about-values">
          <h2>Our Mission & Values</h2>
          <ul>
            <li><strong>Authenticity</strong> — Genuine recipes, authentic flavors.</li>
            <li><strong>Simplicity</strong> — Easy-to-follow instructions for real life.</li>
            <li><strong>Inclusivity</strong> — A world of cuisines, all in one place.</li>
            <li><strong>Quality</strong> — Trusted ingredients and tested techniques.</li>
          </ul>
        </div>

        <div className="about-team">
          <h2>Meet the Team</h2>
          <div className="about-profiles">
            {[ 
              { name: 'Mohamed Kallel', role: 'Developer', img: '/icon/ahmed.jpg' },
              { name: 'Ahmed Mhiri', role: 'Developer', img: '/icon/ahmed.jpg' },
            ].map((member) => (
              <div key={member.name} className="about-profile">
                <Image src={member.img} alt={member.name} width={200} height={200} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-history">
          <h2>A Bit of History</h2>
          <p>
            Spoonivers started as a small blog in 2025, when founder Mohamed Kallel began sharing recipes inspired by travels
            and family traditions. Today, we’ve grown into a community of home cooks, sharing flavors from Tunisia to Tokyo.
          </p>
        </div>

        <footer className="about-footer">
          <p>&copy; {new Date().getFullYear()} Spoonivers — stirring up global flavors, one recipe at a time.</p>
        </footer>
      </section>
    </ClientLayout>
  );
}
