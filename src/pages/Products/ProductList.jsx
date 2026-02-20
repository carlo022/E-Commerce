import { use, useState } from 'react'
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from "../../components";
import FilterBar from "./components/FilterBar.jsx";



export const ProductList = () => {
 const [show, setShow] = useState(false);
 const [searchParams] = useSearchParams();

const [products, setProducts] = useState([]);
const [filteredProducts, setFilteredProducts] = useState([]);

useEffect(() => {
  async function fetchProducts() {
try {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  fetchProducts();
}, []);

// Filter products based on search query
useEffect(() => {
  const query = searchParams.get('q');

  if (!query) {
    setFilteredProducts(products);
    return;
  }

  const lowercaseQuery = query.toLowerCase();
  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  );

  setFilteredProducts(filtered);
}, [products, searchParams]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-16 px-6">
        <section className="my-5">
          <div className="my-5 flex justify-between">
            <span className="text-2xl font-semibold dark:text-slate-100 mb-5">All Products ({filteredProducts.length})</span>
            <span>
              <button onClick={() => setShow(!show)} id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700" type="button"> 
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-.293.707L12 11.414V16a1 1 0 01-1.447.894l-2-1A1 1 0 018 15v-3.586L3.293 6.707A1 1 0 013 6V4z"></path></svg>
              </button>
            </span>            
          </div>    

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {filteredProducts.map((productlist) => (
              <ProductCard key={productlist.id} product={productlist} />
            ))}
          </div>
          { show && <FilterBar setShow={setShow} /> }
        </section>
    </div>
  )
}
