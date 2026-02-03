import { Routes, Route } from 'react-router-dom';
import {HomePage, ProductList, ProductDetails} from '../pages';

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  )
}

export default AllRoutes
