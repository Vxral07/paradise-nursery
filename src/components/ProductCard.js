import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice';

export default function ProductCard({ plant }) {
  const dispatch  = useDispatch();
  const inCart    = useSelector(s => !!s.cart.items[plant.id]);
  const publicUrl = process.env.PUBLIC_URL;

  return (
    <div className="card">
      <img
        src={`${publicUrl}${plant.img}`}
        alt={plant.name}
      />
      <div className="card-content">
        <h3>{plant.name}</h3>
        <p>₹{plant.price}</p>
        <button
          disabled={inCart}
          onClick={() => dispatch(addToCart(plant))}
        >
          {inCart ? 'Added' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}
