import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CardList";
import { useCart } from "../../context";
import { Usetitle } from "../../hooks/Usetitle.jsx";

export const CartPage = () => {
  const { cartList } = useCart();

   Usetitle(`Cart (${cartList.length})`);

  return (
    <div className="min-h-screen py-10">       
      { cartList.length ? <CartList /> : <CartEmpty /> }   
    </div>
  )
}