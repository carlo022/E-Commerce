import { Link } from 'react-router-dom';
import { useCart } from '../../context';

export const ProductCard = ({product}) => {

  const { addToCart, isProductInCart } = useCart();

 const {id, name, image, price, new: isNew, description, sale: isSale, In_stock: inStock} = product;

 function handleAddToCart(product){
  addToCart(product);
 }

 const productInCart = isProductInCart(id);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group">
      <Link to={`/product/${id}`} className="relative">
        <img src={image} alt="Product Image" className="w-full h-60 object-cover group-hover:scale-105 transition-transform" />
        {isNew && (
          <span className="absolute top-3 right-3 bg-blue-500 text-white text-xs px-2 py-1 rounded">NEW</span>
        )}
        {isSale && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded">SALE</span>
        )}
        {!inStock && (
          <span className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-sm font-semibold">Out of Stock</span>
        )}
      </Link>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-semibold dark:text-green-400 text-green-600">${price}</span>
          {productInCart ? (
            <Link to="/cart" className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600">
              View Cart
            </Link>
          ) : (
            <button
              onClick={() => handleAddToCart(product)}
              disabled={!inStock}
              className={`text-white px-4 py-2 rounded-lg transition ${inStock ? 'bg-black dark:bg-yellow-500 dark:text-black hover:bg-gray-800 dark:hover:bg-yellow-400 cursor-pointer' : 'bg-gray-400 cursor-not-allowed'}`}
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
