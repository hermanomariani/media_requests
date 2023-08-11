import React from "react";
import { Link } from "react-router-dom";

function Product({ item }) {
    return (
      <div className="product">
        <h2>{item.title}</h2>
        <img height="200px"  src={item.image}/>
        <p>Category: {item.category}</p>
        <p>Price: ${item.price.toFixed(2)}</p>
        <Link to={`/products/${item.id}`}> Clique para ver o produto </Link>
      </div>
    );
  }
  
  export default Product;
