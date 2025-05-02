import React from 'react';
import { useNavigate } from 'react-router-dom';
// ← import the image from src/images
import bg from '../images/bg.jpg';

export default function LandingPage() {
  const nav = useNavigate();

  return (
    <div
      className="landing"
      style={{
        // Webpack will replace `bg` with the correct URL at build time
        backgroundImage: `url(${bg})`,
        backgroundSize:    'cover',
        backgroundPosition:'center',
      }}
    >
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p>Your one-stop shop for healthy, happy houseplants.</p>
        <button onClick={() => nav('/products')}>
          Get Started
        </button>
      </div>
    </div>
  );
}
