import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

export const ProductDetails = () => {
 const [productinfo, setProductinfo] = useState({});
 const {id} = useParams();

   useEffect(() => {
     async function fetchProduct(){
       const response = await fetch(`http://localhost:8000/products`);
       const data = await response.json()
       setProductinfo(data.find(p => p.id === parseInt(id)));
     }
     fetchProduct();
   }, [id]);

  return (
      <main>
        <section className="bg-gray-50 dark:bg-gray-900 min-h-screen py-16 px-6">
          <div className="my-5 flex justify-between">
            <span>
              <Link to="/products" id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700" type="button"> 
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M9.707 4.293a1 1 0 010 1.414L6.414 9H16a1 1 0 110 2H6.414l3.293 3.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z"clipRule="evenodd">
                  </path></svg>
              </Link>
            </span>
          </div>
          <h2 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">
            {productinfo.name}
          </h2>
          <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">{productinfo.description}</p>
          <div className="flex flex-wrap justify-around">
            <div className="max-w-xl my-3">
              <img className="rounded" src={productinfo.image} alt={productinfo.name}/>
            </div>
            <div className="max-w-xl my-3">
              <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
                <span className="mr-1">$</span>
                <span className="">{productinfo.price}</span>
              </p>
              <p className="my-4 select-none">
                 {productinfo.on_sale && <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">SALE</span> }
                 {productinfo.In_stock ?
                  <span className="font-semibold text-green-600 border bg-green-50 rounded-lg px-3 py-1">In Stock</span> :
                  <span className="font-semibold text-red-600 border bg-red-50 rounded-lg px-3 py-1">Out of Stock</span>
                 }
              </p>
              <p className="my-3">
                <button className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800`}>Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button>
                {/* <button className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800`}  disabled={ product.in_stock ? "" : "disabled" }>Remove Item <i className="ml-1 bi bi-trash3"></i></button> */}
              </p>
              <p className="text-lg text-gray-900 dark:text-slate-200">
                {productinfo.long_description}
              </p>
            </div>
          </div>
        </section>
      </main> 
  )
}
