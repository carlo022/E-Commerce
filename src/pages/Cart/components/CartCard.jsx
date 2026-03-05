import { Link } from "react-router-dom"
import { useCart } from "../../../context"

export const CartCard = ({product}) => {
  const {removeFromCart, updateQuantity} = useCart();

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    updateQuantity(product.id, newQuantity);
  }

  return (
    <div className="flex flex-wrap justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5 ">
      <div className="flex">
          <a href="">
            <img className="w-32 rounded" src={product.image} alt={product.name} />
          </a>
          <div className="ml-4">
            <Link to={`/product/${product.id}`}>
              <p className="text-lg ml-2 dark:text-slate-200">{product.name}</p>
            </Link>
            <div className="text-sm ml-2 text-gray-500 dark:text-slate-400">{product.description}</div>

            <div className="flex items-center gap-4 ml-2 mt-2">
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-600 dark:text-gray-400">Qty:</label>
                <input
                  type="number"
                  min="1"
                  max="999"
                  value={product.quantity}
                  onChange={handleQuantityChange}
                  className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm w-16 text-center"
                />
              </div>
              <button
                onClick={() => removeFromCart(product)}
                className="text-base text-red-400 px-3 py-1 rounded hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900 cursor-pointer transition-colors"
              >
                Remove
              </button>
            </div>
          </div>
      </div>
      <div className="text-lg m-2 dark:text-slate-200">
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
          ${product.price} x {product.quantity}
        </div>
        <span className="font-semibold">${(product.price * product.quantity).toFixed(2)}</span>
      </div>
    </div>
  )
}