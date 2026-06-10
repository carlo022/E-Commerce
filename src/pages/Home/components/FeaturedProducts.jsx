import React, { useEffect } from 'react'
import { useState } from 'react';
import { ProductCard } from "../../../components";
import { getFeaturedlist } from '../../../services';
import { toast } from 'react-toastify';

const FeaturedProducts = () => {

  const [isLoading, setIsLoading] = useState(true);
 const [FeaturedProducts, SetFeaturedProducts] = useState([]);

  useEffect(() => {
    async function fetchFeaturedProducts() {
      try {
        setIsLoading(true);
      const data = await getFeaturedlist();
      SetFeaturedProducts(data);
      } catch (error) {
        toast.error("Failed to load featured products. Please try again later.", {
          position: "top-right",
          autoClose: 3000,
        });
      } finally {
        setIsLoading(false);
      }
    }
    fetchFeaturedProducts();
  }, [])


  return (
<section className="bg-gray-50 dark:bg-gray-900 min-h-screen py-16 px-6">
  <div className="text-center mb-12">
    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Explore Our Premium Gear</h1>
    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Top-rated tech and lifestyle essentials to power your day. Free shipping on all orders above $50.</p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
    {/* Product Card */}
    {isLoading ? (
      <div className="flex justify-center items-center py-20 col-span-3">
        <h2 className="text-2xl text-gray-500 dark:text-gray-400 font-semibold mb-4 ">Loading featured products...</h2>
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 dark:border-blue-400"></div>
      </div>
    ) : FeaturedProducts.length === 0 ? (
      <div className="text-center py-20" colSpan="3">
        <p className="text-2xl text-gray-500 dark:text-gray-400 font-semibold">No featured products found 😢</p>
      </div>
    ) : (
      FeaturedProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))
    )}

  </div>
  </section>
  )
}

export default FeaturedProducts
