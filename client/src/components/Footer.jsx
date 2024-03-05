import { Link } from "react-router-dom";
import logo from "../assets/logo1.png"

const Footer = () => {
    return (
        // <!-- Component: Five Columns Footer with Logo -->
        <footer className="text-start text-slate-500">
            {/* <!-- Main footer --> */}
            <div className="pt-16 pb-12 text-sm border-t border-slate-200 bg-slate-800 font-poppins ">
                <div className="sm:container px-3 mx-auto">
                    <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                        <div
                            className="col-span-4 md:col-span-8 lg:col-span-4"
                            aria-labelledby="footer-header">
                            <Link 
                                id="WindUI-5-logo"
                                aria-label="WindUI logo"
                                aria-current="page"
                                className="flex items-center gap-2 mb-3 text-base font-medium leading-6 whitespace-nowrap focus:outline-none text-white hover:text-blue-700 cursor-pointer"
                                to="#">
                                <img
                                    src={logo}
                                    className="h-12 sm:h-16 transform hover:hue-rotate-30 transition duration-200 ease-in-out rounded-full"
                                    alt=""
                                />
                                soleSphere
                            </Link>
                            <p className="text-left">
                                Order your comfort at reasonable price
                            </p>
                        </div>
                        <nav
                            className="col-span-2 md:col-span-4 lg:col-span-2 bg-transparent"
                            aria-labelledby="footer-product-5-logo">
                            <h3
                                className="mb-6 text-base font-medium text-white"
                                id="footer-product-5-logo">
                                Product
                            </h3>
                            <ul>
                                <li className="mb-2 leading-6">
                                    <Link
                                        href="#"
                                        className="transition-colors duration-300 hover:text-blue-500 focus:text-blue-600 cursor-pointer">
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-2 leading-6">
                                    <Link
                                        to="#"
                                        className="transition-colors duration-300 hover:text-blue-500 focus:text-blue-600 cursor-pointer">
                                        Customers
                                    </Link>
                                </li>
                                <li className="mb-2 leading-6">
                                    <Link
                                        to="#"
                                        className="transition-colors duration-300 hover:text-blue-500 focus:text-blue-600 cursor-pointer">
                                        Why us?
                                    </Link>
                                </li>
                                <li className="mb-2 leading-6">
                                    <Link
                                        to="#"
                                        className="transition-colors duration-300 hover:text-blue-500 focus:text-blue-600 cursor-pointer">
                                        Pricing
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <nav
                            className="col-span-2 md:col-span-4 lg:col-span-2"
                            aria-labelledby="footer-docs-5-logo">
                            <h3
                                className="mb-6 text-base font-medium text-white"
                                id="footer-docs-5-logo">
                                Docs & Help
                            </h3>
                            <ul>
                                <li className="mb-2 leading-6">
                                    <Link
                                        to="#"
                                        className="transition-colors duration-300 hover:text-blue-500 focus:text-blue-600 cursor-pointer">
                                        Documentation
                                    </Link>
                                </li>
                                <li className="mb-2 leading-6">
                                    <Link
                                        to="#"
                                        className="transition-colors duration-300 hover:text-blue-500 focus:text-blue-600 cursor-pointer">
                                        Customer Care
                                    </Link>
                                </li>
                                <li className="mb-2 leading-6">
                                    <Link
                                        to="#"
                                        className="transition-colors duration-300 hover:text-blue-500 focus:text-blue-600 cursor-pointer">
                                        What&apos;s New
                                    </Link>
                                </li>
                                <li className="mb-2 leading-6">
                                    <Link
                                        to="#"
                                        className="transition-colors duration-300 hover:text-blue-500 focus:text-blue-600 cursor-pointer">
                                        FAQ&apos;s
                                    </Link>
                                </li>
                                <li className="mb-2 leading-6">
                                    <Link
                                        to="#"
                                        className="transition-colors duration-300 hover:text-blue-500 focus:text-blue-600 cursor-pointer">
                                        Help Center
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <nav
                            className="col-span-2 md:col-span-4 lg:col-span-2"
                            aria-labelledby="footer-about-5-logo">
                            <h3
                                className="mb-6 text-base font-medium text-white"
                                id="footer-about-5-logo">
                                About us
                            </h3>
                            <ul>
                                <li className="mb-2 leading-6">
                                    <Link
                                        to="#"
                                        className="transition-colors duration-300 hover:text-blue-500 focus:text-blue-600 cursor-pointer">
                                        About us
                                    </Link>
                                </li>
                                <li className="mb-2 leading-6">
                                    <Link
                                        to="#"
                                        className="transition-colors duration-300 hover:text-blue-500 focus:text-blue-600 cursor-pointer">
                                        Careers
                                    </Link>
                                </li>
                                <li className="mb-2 leading-6">
                                    <Link
                                        to="#"
                                        className="transition-colors duration-300 hover:text-blue-500 focus:text-blue-600 cursor-pointer">
                                        Report a Bug
                                    </Link>
                                </li>
                                <li className="mb-2 leading-6">
                                    <Link
                                        to="#"
                                        className="transition-colors duration-300 hover:text-blue-500 focus:text-blue-600 cursor-pointer">
                                        Women&apos;s Day Special
                                    </Link>
                                </li>
                                <li className="mb-2 leading-6">
                                    <Link
                                        to="#"
                                        className="transition-colors duration-300 hover:text-blue-500 focus:text-blue-600 cursor-pointer">
                                        Feedback
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <nav
                            className="col-span-2 md:col-span-4 lg:col-span-2"
                            aria-labelledby="footer-get-in-touch-5-logo">
                            <h3
                                className="mb-6 text-base font-medium text-white"
                                id="footer-get-in-touch-5-logo">
                                Get in touch
                            </h3>
                            <ul>
                                <li className="mb-2 leading-6">
                                    <Link
                                        to="#"
                                        className="transition-colors duration-300 hover:text-blue-500 focus:text-blue-600 cursor-pointer">
                                        Contact
                                    </Link>
                                </li>
                                <li className="mb-2 leading-6">
                                    <Link
                                        to="#"
                                        className="transition-colors duration-300 hover:text-blue-500 focus:text-blue-600 cursor-pointer">
                                        Support
                                    </Link>
                                </li>
                                <li className="mb-2 leading-6">
                                    <Link
                                        to="#"
                                        className="transition-colors duration-300 hover:text-blue-500 focus:text-blue-600 cursor-pointer">
                                        Partners
                                    </Link>
                                </li>
                                <li className="mb-2 leading-6">
                                    <Link
                                        to="#"
                                        className="transition-colors duration-300 hover:text-blue-500 focus:text-blue-600 cursor-pointer">
                                        Join research
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
