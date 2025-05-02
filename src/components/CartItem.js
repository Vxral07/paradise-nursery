import React from 'react';

export default function CartItem({ item, onInc, onDec, onDel }) {
  const { product, qty } = item;

  return (
    <div className="cart-item">
      <img src={product.img} alt={product.name}/>
      <div>
        <h4>{product.name}</h4>
        <p>Unit price: ₹{product.price}</p>
        <div className="qty-controls">
          <button onClick={onDec}>–</button>
          <span>{qty}</span>
          <button onClick={onInc}>+</button>
        </div>
        <button className="delete" onClick={onDel}>Delete</button>
      </div>
    </div>
  );
}
