// src/components/ProductsPage.js

import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  
  return(
      <div>
        <SearchBar />
        <h1>IronStore</h1>
        <ProductTable />
      </div>    
  )
}