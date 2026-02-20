import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

export const Search = ({setSearchSection}) => {
    const Navigate = useNavigate();
    const searchRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const keyword = searchRef.current.value.trim();
    if (keyword) {
      Navigate(`/products?q=${keyword}`);
    }
  };


  return (
    <div className="mx-auto max-w-2xl p-2 my-auto dark:bg-gray-900">
        <form onSubmit={handleSubmit} className="flex items-center dark:bg-gray-900 mx-auto">   
            <div className="relative w-full dark:bg-gray-900">
                <span className="bi bi-search flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></span>
                <input ref={searchRef} name="search" type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" autoComplete="off" required="" />
            </div>
            <button type="submit" className="bi bi-search py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            </button>
        </form>
    </div>
  )
}
