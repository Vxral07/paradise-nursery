import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQty, decrementQty, removeItem } from '../store/cartSlice';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
  const items    = useSelector(s => s.cart.items);
  const dispatch = useDispatch();
  const nav      = useNavigate();

  const arr      = Object.values(items);
  const totalQty = arr.reduce((sum,i) => sum + i.qty, 0);
  const totalCost= arr.reduce((sum,i) => sum + i.qty * i.product.price, 0);

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      <p>Total items: {totalQty}</p>
      <p>Total cost: ₹{totalCost}</p>

      <div className="cart-items">
        {arr.map(i => (
          <CartItem
            key={i.product.id}
            item={i}
            onInc={() => dispatch(incrementQty(i.product.id))}
            onDec={() => dispatch(decrementQty(i.product.id))}
            onDel={() => dispatch(removeItem(i.product.id))}
          />
        ))}
      </div>

      <button onClick={() => alert('Coming Soon!')}>Checkout</button>
      <button onClick={() => nav('/products')}>
        Continue Shopping
      </button>
    </div>
  );
}
