import { useState } from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { Search } from "../Sections/Search";
import { useEffect } from "react";

export const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
// Initialize state from localStorage or system preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);


  return (
    <header className="bg-white dark:bg-gray-900">      
      <nav className="bg-white dark:bg-gray-900">
          <div className="border-b border-slate-200 dark:border-b-0 dark:bg-gray-900 flex flex-wrap justify-between items-center mx-auto max-w-7xl px-4 md:px-6 py-3">
              <Link to="/" className="flex items-center dark:bg-gray-900">
                  <img src={Logo} className="mr-3 h-10 dark:invert" alt="My Shop Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">My Shop</span>
              </Link>
              <div className="flex items-center relative">
                  <span onClick={() => setIsDarkMode(!isDarkMode)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5">
                    {isDarkMode ? "🌙" : "☀"}
                  </span>
                  <span onClick={() => setShowSearch(!showSearch)}  className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
                  <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
                    <span className="text-2xl bi bi-cart-fill relative">
                      <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">0</span>
                    </span>                    
                  </Link>
                  <span className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
              </div>
          </div>
      </nav>
      {showSearch && <Search />}
    </header>
  )
}

export default Header
