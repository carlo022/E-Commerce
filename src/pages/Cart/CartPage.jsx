import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CardList";
import { useCart } from "../../context";

export const CartPage = () => {
  const { cartList } = useCart();

  return (
    <div className="min-h-screen py-10">       
      { cartList.length ? <CartList /> : <CartEmpty /> }   
    </div>
  )
}