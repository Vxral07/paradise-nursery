import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const count     = Object.values(useSelector(s => s.cart.items))
                          .reduce((sum, i) => sum + i.qty, 0);
  const publicUrl = process.env.PUBLIC_URL;

  return (
    <header className="header">
      <nav>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/cart" className="cart-link">
          <img
            src={`${publicUrl}/images/cart-icon.svg`}
            alt="Cart"
            className="cart-icon"
          />
          <span className="cart-count">{count}</span>
        </NavLink>
      </nav>
    </header>
  );
}
