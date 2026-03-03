import { Routes, Route } from 'react-router-dom';
import {HomePage, ProductList, ProductDetails, Login, Register, CartPage} from '../pages';

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductList />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="cart" element={<CartPage />} />
      </Routes>
    </>
  )
}

export default AllRoutes
