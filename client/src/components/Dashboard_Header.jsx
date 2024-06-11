/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('seller-token');
    setToken(storedToken);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleSignOut = async (e) => {
    e.preventDefault();
    localStorage.removeItem('seller-token');
    setToken(null);
    toast.success("successfully logged out")
    try {
      const res = await axios.post("https://solesphere.onrender.com/logout");
      console.log("Signout==> ", res);
      toast.success("successfully logged out")
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  return (
    <>
      <nav className="bg-white sticky top-0 left-0 border-b border-gray-400 z-[999]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
            <h3 className="playfair-display-extrabold noto-serif-bold text-3xl font-bold text-[#0d485d]">FootFly</h3>
          </Link>

          <div className="md:order-2">
            <div className="flex flex-row gap-4">
              <div>
                <Link to={"#"} >
                  <div onClick={handleOpen} className="relative hidden lg:block">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-check"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx={9} cy={7} r={4} /><polyline points="16 11 18 13 22 9" /></svg>

                    {/* Dropdown menu */}
                    {
                      open && (
                        <div className="absolute top-45 bg-red divide-y rounded-lg shadow w-44">
                          <ul className="py-2 text-sm rounded-lg p-2 bg-[#070F2B]/90 text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                            {token ? (
                              <>
                                <li>
                                  <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100 rounded-lg dark:hover:bg-gray-600 dark:hover:text-white">Profile</Link>
                                </li>
                                <li>
                                  <Link to="#" onClick={handleSignOut} className="block px-4 py-2 hover:bg-gray-100 rounded-lg dark:hover:bg-gray-600 dark:hover:text-white">Sign Out</Link>
                                </li>
                              </>
                            ) : (
                              <li>
                                <Link to="/login" className="block px-4 py-2 hover:bg-gray-100 rounded-lg dark:hover:bg-gray-600 dark:hover:text-white">Sign in</Link>
                              </li>
                            )}
                          </ul>
                        </div>
                      )
                    }
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
            </div>
          </div>
          {/* mobile  */}
          <div className="lg:hidden md:hidden flex gap-2 items-center">
            {isMenuOpen ? (
              <X
                onClick={toggleMenu}
                className="h-6 w-6 cursor-pointer text-black mr-1"
              />
            ) : (
              <Menu
                onClick={toggleMenu}
                className="h-6 w-6 cursor-pointer text-black mr-1"
              />
            )}
          </div>
          {
            isMenuOpen && (
              <div className="top-5 absolute mt-6 inset-x-0 m-2 z-[99999] origin-top-right transform p-2 transition lg:hidden" id="navbar-search">
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border bg-[#070F2B]/90 border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                  <li>
                    <Link to="/" onClick={toggleMenu} className="block py-2 px-3 text-white bg-[#070F2B] rounded md:bg-transparent md:p-0" aria-current="page">Home</Link>
                  </li>
                  {
                    token ? (
                      <>
                        <li className="text-white hover:rounded-full hover:text-orange-700">
                          <Link to="#" onClick={handleSignOut} className="block px-4 py-2 hover:bg-[#070F2B]">Sign Out</Link>
                        </li>
                      </>
                    ) : (
                      <li className="text-white hover:rounded-full hover:text-orange-700">
                        <Link to="/login" onClick={toggleMenu} className="block px-4 py-2 hover:bg-[#070F2B]">Sign In</Link>
                      </li>
                    )
                  }
                </ul>
              </div>
            )
          }
        </div>
      </nav>
    </>
  );
};

export default Header;
