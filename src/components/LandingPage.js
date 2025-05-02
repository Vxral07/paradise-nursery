// src/components/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const nav       = useNavigate();
  const publicUrl = process.env.PUBLIC_URL;

  return (
    <div
      className="landing"
      style={{
        backgroundImage:  `url(${publicUrl}/images/bg.jpg)`,
        backgroundSize:    'cover',
        backgroundPosition:'center',
        backgroundRepeat:  'no-repeat',
        width:             '100%',
        height:            '100%'
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
