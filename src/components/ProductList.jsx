import React from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

export default function ProductList() {
  return (
    <div>
      <h2 className="mb-4">Ordinateurs portables</h2>
      <div className="row">
        {products.map((p) => (
          <div key={p.id} className="col-md-4 mb-4">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
