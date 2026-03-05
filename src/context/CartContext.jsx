import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "../reducers";

const cartInitialState = {
    cartList: [],
    total: 0
}

const CartContext = createContext(cartInitialState);

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(CartReducer, cartInitialState);

    function addToCart(product, quantity = 1){
        const existingProduct = state.cartList.find(item => item.id === product.id);
        let updatedList;
        let updatedTotal = state.total + (product.price * quantity);

        if(existingProduct){
            // If product already exists, increase quantity
            updatedList = state.cartList.map(item =>
                item.id === product.id
                    ? {...item, quantity: item.quantity + quantity}
                    : item
            );
        } else {
            // If product doesn't exist, add it with quantity
            updatedList = state.cartList.concat({...product, quantity});
        }

        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        })
    }

    function removeFromCart(product){
        const updatedList = state.cartList.filter(item => item.id !== product.id);
        const updatedTotal = state.total - (product.price * product.quantity);

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        })
    }

    function clearCart(){
        dispatch({
            type: "CLEAR_CART",
            payload: {
                products: [],
                total: 0
            }
        })
    }

    function updateQuantity(productId, quantity){
        const product = state.cartList.find(item => item.id === productId);
        if(!product) return;

        if(quantity <= 0){
            removeFromCart(product);
            return;
        }

        const quantityDifference = quantity - product.quantity;
        const updatedList = state.cartList.map(item =>
            item.id === productId
                ? {...item, quantity}
                : item
        );
        const updatedTotal = state.total + (product.price * quantityDifference);

        dispatch({
            type: "UPDATE_QUANTITY",
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        })
    }

    function isProductInCart(productId){
        return state.cartList.some(item => item.id === productId);
    }

    const value = {
        cartList: state.cartList,
        total: state.total,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        isProductInCart
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);
    return context;
}