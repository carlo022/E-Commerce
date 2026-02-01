import { Link } from 'react-router-dom';

const ProductCard = () => {
  return (
<section class="bg-gray-50 dark:bg-gray-900 min-h-screen py-16 px-6">
  <div class="text-center mb-12">
    <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Explore Our Premium Gear</h1>
    <p class="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Top-rated tech and lifestyle essentials to power your day. Free shipping on all orders above $50.</p>
  </div>

 <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
    {/* Product Card */}
    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group">
      <Link to="/products" class="relative">
        <img src="https://plus.unsplash.com/premium_photo-1680346529160-549ad950bd1f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" class="w-full h-60 object-cover group-hover:scale-105 transition-transform" />
        <span class="absolute top-3 right-3 bg-blue-400 dark:bg-yellow-500 text-white dark:text-black text-xs px-2 py-1 rounded">NEW</span>
      </Link>
      <div class="p-5">
        <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1">Noise Cancelling Headphones</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">30hr Battery · Bluetooth 5.3</p>
        <div class="flex justify-between items-center mt-4">
          <span class="text-lg font-semibold dark:text-green-400 text-green-600">$129.00</span>
          <Link to="/products">
          <button class="bg-black dark:bg-yellow-500 text-white dark:text-black px-4 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-yellow-400">Buy</button>
          </Link>
        </div>
      </div>
    </div>

        {/* Duplicate Product Cards */}
    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group">
      <Link to="/products" class="relative">
        <img src="https://images.unsplash.com/photo-1709258228137-19a8c193be39?q=80&w=2011&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" class="w-full h-60 object-cover group-hover:scale-105 transition-transform" />
        <span class="absolute top-3 right-3 bg-red-600 text-white text-xs px-2 py-1 rounded">SALE</span>
      </Link>
      <div class="p-5">
        <h3 class="text-lg font-bold dark:text-white text-gray-900 mb-1">Running Shoes Pro</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">Lightweight · Breathable</p>
        <div class="flex justify-between items-center mt-4">
          <span class="text-lg font-semibold dark:text-green-400 text-green-600">$89.99</span>
          <Link to="/products">
          <button class="bg-black dark:bg-yellow-500 text-white dark:text-black px-4 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-yellow-400">Buy</button>
          </Link>
        </div>
      </div>
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group">
      <Link to="/products" class="relative">
        <img src="https://images.unsplash.com/photo-1718309602791-8f3cc83840b7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product Image" class="w-full h-60 object-cover group-hover:scale-105 transition-transform" />
      </Link>
      <div class="p-5">
        <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1">Smart Fitness Watch</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">Heart Rate · Sleep Tracking</p>
        <div class="flex justify-between items-center mt-4">
          <span class="text-lg font-semibold dark:text-green-400 text-green-600">$149.00</span>
          <Link to="/products">
          <button class="bg-black dark:bg-yellow-500 text-white dark:text-black px-4 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-yellow-400">Buy</button>
          </Link>
        </div>
      </div>
    </div>
 </div>
  </section>

  )
}

export default ProductCard
