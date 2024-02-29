import { useState } from "react";
import Logo from "../assets/logo1.png"
import {  Heart, Menu, ShoppingCart, UserRound, X } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard_Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 z-[999] dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-8" alt="Flowbite Logo" />
            <span className="hidden md:hidden lg:block dark:text-white uppercase">soleSphere</span>
          </Link>
          <div className="md:order-2">
            <div className="flex flex-row gap-4">

              <div>
                <ShoppingCart className=" text-white hover:rounded-full hover:text-orange-700" />
              </div>
              <div>
                <Heart className=" text-white hover:rounded-full hover:text-orange-700" />
              </div>
              <div>
                <Link to={"/dashboard"} >
                  <UserRound className="w-[100%] text-white hover:rounded-full hover:text-orange-700" />
                </Link>
              </div>
            </div>
          </div>

          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0  tracking-widestmd:dark:text-blue-500" aria-current="page">Home</Link>
              </li>
              <li>
                <Link to={"/best-collection"} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent tracking-widest md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Collection</Link>
              </li>
              <li>
                <Link to={"/contact"} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent tracking-widest md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"> Contact Us </Link>
              </li>
            </ul>
          </div>
          {/* mobile  */}
          <div className="lg:hidden md:hidden flex gap-2 items-center">
            {isMenuOpen ? (
              <X
                onClick={toggleMenu}
                className="h-6 w-6 cursor-pointer text-white "
              />

            ) : (
              <Menu
                onClick={toggleMenu}
                className="h-6 w-6 cursor-pointer text-white "
              />
            )}
          </div>
          {
            isMenuOpen && (
              <div className="bg-gray-400  absolute mt-6 inset-x-0 m-2 top-44 z-[99999] origin-top-right transform p-2 transition lg:hidden " id="navbar-search">
                <div className="relative mt-3 md:hidden">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                  <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                </div>
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <Link to="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
                  </li>
                  <li>
                    <Link to={"/best-collection"} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Best Collection</Link>
                  </li>
                  <li>
                    <Link to={"/contact"} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact Us</Link>
                  </li>
                </ul>
              </div>
            )
          }
        </div>
      </nav>
    </>
  )
}

export default Dashboard_Header