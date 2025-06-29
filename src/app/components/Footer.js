import React, { useState } from 'react';

const Footer = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !email) {
      setMessage('Please fill in all fields');
      return;
    }

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, email })
      });

      const result = await res.json();

      if (result.success) {
        setMessage('Thank you for subscribing!');
        setFirstName('');
        setEmail('');
      } else {
        setMessage(result.error || 'Something went wrong');
      }
    } catch (err) {
      console.error(err);
      setMessage('Server error, please try again later');
    }
  };

  return (
    <footer className="footer py-4">
      <div className="container">
        <div className="row align-items-center">

          {/* Left: Social Icons */}
          <div className="col-md-6 mb-3 mb-md-0">
            <div className="d-flex align-items-center gap-3 social-icons">
              <span className="follow-text">FOLLOW US</span>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-pinterest-p fa-lg"></i>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-tiktok fa-lg"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f fa-lg"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube fa-lg"></i>
              </a>
            </div>
          </div>

          {/* Right: Email Signup Form */}
          <div className="col-md-6">
            <form
              onSubmit={handleSubmit}
              className="d-flex flex-wrap justify-content-md-end align-items-center gap-2 signup-form"
            >
              <span className="signup-text">Signup for Email Updates:</span>
              <input
                type="text"
                className="form-control signup-input"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="email"
                className="form-control signup-input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn signup-btn">GO</button>
            </form>
            {message && <div className="mt-2">{message}</div>}
          </div>

        </div>
      </div>

      {/* Font Awesome CDN for Icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
    </footer>
  );
};

export default Footer;
