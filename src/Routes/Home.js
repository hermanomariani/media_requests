import React, { useEffect } from 'react';
import Product from '../Components/Product';
import { useLoaderData } from 'react-router';

function Home() {
    const mockData = useLoaderData()
  return (

    <div>
      <h1>Home Page</h1>
      <div className="product-list">
        {mockData.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;

