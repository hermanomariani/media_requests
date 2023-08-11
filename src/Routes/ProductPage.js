import React from 'react';
import Product from '../Components/Product';
import { useLoaderData, useParams } from 'react-router';


function ProductPage() {
  let params = useParams();
  let item = useLoaderData(params.id)


  return (
    <div>
      <h1>Product</h1>
      <div className="product">
        <Product item={item}/>
      </div>
    </div>
  );
}

export default ProductPage;



