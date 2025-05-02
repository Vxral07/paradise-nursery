import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

export default function ProductList() {
  const products  = useSelector(s => s.products);
  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div className="product-list">
      {categories.map(cat => (
        <section key={cat}>
          <h2>{cat}</h2>
          <div className="cards">
            {products
              .filter(p => p.category === cat)
              .map(p => <ProductCard key={p.id} plant={p} />)}
          </div>
        </section>
      ))}
    </div>
  );
}
