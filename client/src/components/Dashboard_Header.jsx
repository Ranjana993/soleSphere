import { useState } from "react";
import { Heart, Menu, ShoppingCart, UserRound, X } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard_Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 z-[999] border-b">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
            <h3 className=" playfair-display-extrabold noto-serif-bold  text-3xl font-bold text-[#0d485d]">FootFly</h3>
          </Link>
          <div className="md:order-2">
            <div className="flex flex-row gap-4">
              <div>
                <ShoppingCart className=" text-gray-700" />
              </div>
              <div>
                <Heart className=" text-gray-700" />
              </div>
              <div>
                <Link to={"/dashboard"} >
                  <UserRound className="w-[100%] text-gray-700" />
                </Link>
              </div>
            </div>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border text-black rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
              <li>
                <Link to={"/"} className="block py-2 px-3 text-[#D9534F] hover:text-[#D9534F] rounded hover:bg-gray-100 md:hover:bg-transparent tracking-widest  md:p-0 text-xl "> Home </Link>
              </li>
              <li>
                <Link to={"/"} className="block py-2 px-3 text-[#D9534F] hover:text-[#D9534F] rounded hover:bg-gray-100 md:hover:bg-transparent tracking-widest  md:p-0 text-xl "> Collection </Link>
              </li>
              <li>
                <Link to={"/"} className="block py-2 px-3 text-[#D9534F] hover:text-[#D9534F] rounded hover:bg-gray-100 md:hover:bg-transparent tracking-widest  md:p-0 text-xl "> Contact Us </Link>
              </li>
            </ul>
          </div>
          {/* mobile  */}
          <div className="lg:hidden md:hidden flex gap-2 items-center">
            {isMenuOpen ? (
              <X
                onClick={toggleMenu}
                className="h-6 w-6 cursor-pointer"
              />

            ) : (
              <Menu
                onClick={toggleMenu}
                className="h-6 w-6 cursor-pointer "
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
                </div>
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <Link to={"/"} className="block py-2 px-3 text-[#D9534F] hover:text-[#D9534F] rounded hover:bg-gray-100 md:hover:bg-transparent tracking-widest  md:p-0 text-xl "> Home </Link>
                  </li>
                  <li>
                    <Link to={"/"} className="block py-2 px-3 text-[#D9534F] hover:text-[#D9534F] rounded hover:bg-gray-100 md:hover:bg-transparent tracking-widest  md:p-0 text-xl "> Collection </Link>
                  </li>
                  <li>
                    <Link to={"/"} className="block py-2 px-3 text-[#D9534F] hover:text-[#D9534F] rounded hover:bg-gray-100 md:hover:bg-transparent tracking-widest  md:p-0 text-xl "> Contact Us </Link>
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