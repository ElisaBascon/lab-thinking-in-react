// src/components/ProductsPage.js

import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [filteredProduts, setFilteredProducts] = useState(jsonData);
  
  const handleSearch = (searchValue) => {
    if (searchValue === '') {
      setProducts(jsonData)
      } else {
        const filtered = products.filter(elem => elem.name.toLowerCase().includes(searchValue));
        setProducts(filtered)
      }
  }


  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar onSearch={handleSearch} />
        <div>
            <ProductTable products={filteredProduts}/>
        </div>
      </div>    
  )
}