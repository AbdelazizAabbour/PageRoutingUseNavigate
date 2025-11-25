import React from 'react';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';



export default function ProductCard({ product }) {
  // const navigate = useNavigate();
  return (
    <div className="card">

       <Link to={`/product/${product.id}`} className="btn btn-danger w-100">
          <img
             src={product.image}
             className="card-img-top"
             alt={product.title}
             style={{ height: "300px",marginTop:"10px", objectFit: "cover", width: "100%" }}
          />
       </Link>
        

      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p>{product.price}</p>

            <Link to={`/product/${product.id}`} className="btn btn-danger w-100">
                Voir détails
            </Link>
      </div>    

      <div>
        <Link to={"/Profilname"}>
          <button >Voir profille name </button>
        </Link>
      </div>
    </div>
  );
}
