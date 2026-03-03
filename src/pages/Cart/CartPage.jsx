import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CardList";

export const CartPage = () => {
  const cartlistLength = 0;

  return (
    <main>       
      { cartlistLength ? <CartList /> : <CartEmpty /> }   
    </main>
  )
}