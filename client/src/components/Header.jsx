/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { Gift, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [open, setOpen] = useState(false)
    const [token, setToken] = useState(null);

    useEffect(() => {
        // Check for token in localStorage when the component mounts
        const storedToken = localStorage.getItem('token');
        setToken(storedToken);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleOpen = () => {
        setOpen(!open);
    };


    const HandleSignOut = async (e) => {
        e.preventDefault()
        localStorage.removeItem('token'); setToken(null)
        const res = await axios.post("http://localhost:8000/logout")
        console.log("Signout==> ", res)
    }

    return (
        <>
            <nav className="bg-white relative sticky top-0 left-0 border-b border-gray-400 z-[999]">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <h3 className=" playfair-display-extrabold noto-serif-bold  text-3xl font-bold text-[#0d485d]">FootFly</h3>
                    </Link>

                    <div className="md:order-2">
                        <div className="flex flex-row gap-4">
                            <div>
                                <Link to={"#"} >
                                    <div onClick={handleOpen} className="relative hidden lg:block  ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>
                                        {/* Dropdown menu */}
                                        {
                                            open && (
                                                <div className=" absolute top-45 bg-red divide-y rounded-lg shadow w-44 ">
                                                    <ul className="py-2 text-sm rounded-lg p-2 bg-[#070F2B]/90 text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                                                        {token ? (
                                                            <>
                                                                <li>
                                                                    <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-100 rounded-lg dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="#" onClick={HandleSignOut} className="block px-4 py-2 hover:bg-gray-100 rounded-lg dark:hover:bg-gray-600 dark:hover:text-white">Sign Out</Link>
                                                                </li>
                                                            </>
                                                        ) : (
                                                            <li>
                                                                    <Link to="/login" className="block px-4 py-2  hover:bg-gray-100 rounded-lg dark:hover:bg-gray-600 dark:hover:text-white">Sign in</Link>
                                                            </li>
                                                        )}
                                                    </ul>
                                                </div>
                                            )
                                        }
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <Link to="/cart" className="hidden lg:block">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                                </Link>
                            </div>
                            <div>
                                <Gift className="hidden lg:block text-gray-700" />
                            </div>
                        </div>
                    </div>

                    <div className=" items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                        <div className="relative mt-3 md:hidden">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                        </div>
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border text-black rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
                            <li>
                                <Link to={"/"} className="block py-2 px-3 text-[#D9534F] hover:text-[#D9534F] rounded hover:bg-gray-100 md:hover:bg-transparent tracking-widest  md:p-0 text-xl "> Home </Link>
                            </li>
                            <li>
                                <Link to={"/sign-up-seller"} className="block py-2 px-3 text-gray-900 hover:text-[#D9534F] rounded hover:bg-gray-800 md:hover:bg-transparent tracking-widest  md:p-0 text-xl  "> Become a seller  </Link>
                            </li>
                            <li>
                                <Link to={"/contact"} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent tracking-widest hover:text-[#D9534F] md:p-0 text-xl "> Contact Us </Link>
                            </li>
                            <li>
                                <Link to={"/about-us"} className="block py-2 px-3 text-gray-900 rounded hover:text-[#D9534F] tracking-widest  md:p-0 text-xl "> About Us </Link>
                            </li>
                        </ul>
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
                                className="h-6 w-6 cursor-pointer text-black  mr-1"
                            />
                        )}
                    </div>
                    {
                        isMenuOpen && (
                            <div className=" top-5 absolute mt-6 inset-x-0 m-2  z-[99999] origin-top-right transform p-2 transition lg:hidden " id="navbar-search">
                                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border bg-[#070F2B]/90 border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                                    <li>
                                        <Link to="/" onClick={toggleMenu} className="block py-2 px-3 text-white bg-[#070F2B] rounded md:bg-transparent md:p-0 " aria-current="page">Home</Link>
                                    </li>
                                    {/* <li>
                                        <Link onClick={toggleMenu} to={"/best-collection"} className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0  bg-transparent  !hover:bg-[#070F2B] hover:text-red-400 ">Best Collection</Link>
                                    </li> */}
                                    <li>
                                        <Link onClick={toggleMenu} to={"/contact"} className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 hover:bg-[#070F2B] "> Contact Us </Link>
                                    </li>
                                    <li>
                                        <Link onClick={toggleMenu} to={"/sign-up-seller"} className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 hover:bg-[#070F2B] ">Become a Seller </Link>
                                    </li>
                                    <li className="hover:rounded-full text-orange-700">
                                        <Link to="/cart" onClick={toggleMenu} className="block py-2 px-3 text-white rounded md:bg-transparent hover:bg-[#070F2B] md:p-0 ">
                                            Cart
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"/about-us"} onClick={toggleMenu} className="block py-2 px-3 text-white rounded md:bg-transparent hover:bg-[#070F2B] md:p-0 "> About Us </Link>
                                    </li>
                                    <li className=" text-white hover:rounded-full hover:text-orange-700">
                                        <Link to="/dashboard" className="block px-4 py-2 hover:bg-[#070F2B] ">Dashboard</Link>
                                    </li>
                                    <li className=" text-white hover:rounded-full hover:text-orange-700">
                                        <Link to="#" className="block px-4 py-2  hover:bg-[#070F2B]">Sign Out</Link>
                                    </li>
                                </ul>
                            </div>
                        )
                    }
                </div>
            </nav >
        </>
    )
}

export default Header
