import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';

function ProductDetail() {
  
  const { id } = useParams();
  const product = products.find((p) => p.id === +id);

  if (!product) return <h2>Produit introuvable</h2>;

  return (
    <div className="text-center">
      <h2>{product.title}</h2>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "300px", margin: "20px 0" }}
      />
      <h4>{product.price}</h4>
    </div>
  );
}


export default  ProductDetail;  