import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function ProductCard({ product }) {
  const navigate = useNavigate();

  // hade function hia deyale retoure la page l9edima oula kdire redirection l lapage dyale details

  function handleClick() {
    navigate(`/product/${product.id}`);
  }
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

            {/* <Link to={`/product/${product.id}`} className="btn btn-danger w-100">
                Voir détails
            </Link> */}
            <button onClick={handleClick} className="btn btn-danger w-100">
                Voir détails
            </button>
      </div>    

      <div>
        <Link to={"/Profilname"}>
          <button className="btn btn-primary w-100">Voir profille name </button>
        </Link>
      </div>
    </div>
  );
}

export default  ProductCard;  
