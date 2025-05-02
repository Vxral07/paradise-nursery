import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const nav = useNavigate();

  return (
    <div
      className="landing"
      style={{
        backgroundImage: `url(/images/bg.jpg)`,
        backgroundSize:    'cover',
        backgroundPosition:'center'
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
