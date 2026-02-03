import { Link } from 'react-router-dom';

export const ProductCard = ({product}) => {
 const {id,name, image, price, new: isNew, description, sale: isSale} = product;

  return (
    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group">
      <Link to={`/product/${id}`} class="relative">
        <img src={image} alt="Product Image" class="w-full h-60 object-cover group-hover:scale-105 transition-transform" />
        {isNew && (
          <span class="absolute top-3 right-3 bg-blue-500 text-white text-xs px-2 py-1 rounded">NEW</span>
        )}
        {isSale && (
          <span class="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded">SALE</span>
        )}
      </Link>
      <div class="p-5">
        <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1">{name}</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">{description}</p>
        <div class="flex justify-between items-center mt-4">
          <span class="text-lg font-semibold dark:text-green-400 text-green-600">${price}</span>
          <Link to={`/product/${id}`}>
          <button class="bg-black dark:bg-yellow-500 text-white dark:text-black px-4 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-yellow-400">Buy</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
