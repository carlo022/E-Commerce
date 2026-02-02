import React, { useEffect } from 'react'
import { useState } from 'react';
import ProductCard from '../../../components/Elements/ProductCard.jsx';

const FeaturedProducts = () => {
 const [FeaturedProducts, SetFeaturedProducts] = useState([]);

  useEffect(() => {
    async function fetchFeaturedProducts(){
      const response = await fetch("http://localhost:3000/featured_products");
      const data = await response.json()
      SetFeaturedProducts(data);
    }
    fetchFeaturedProducts();
  }, [])


  return (
<section class="bg-gray-50 dark:bg-gray-900 min-h-screen py-16 px-6">
  <div class="text-center mb-12">
    <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Explore Our Premium Gear</h1>
    <p class="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Top-rated tech and lifestyle essentials to power your day. Free shipping on all orders above $50.</p>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
    {/* Product Card */}
    {FeaturedProducts.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}

  </div>
  </section>
  )
}

export default FeaturedProducts
