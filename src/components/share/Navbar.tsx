import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='container mx-auto' >
            <nav>
                <div className=" px-4 sm:px-6 lg:px-8">
                    <div className="navbar min-h-20 px-0">

                        {/* Logo */}
                        <div className="navbar-start">
                            <div className="text-2xl font-bold text-black">
                                Book Vibe
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        <div className="navbar-center hidden md:flex">
                            <ul className="flex items-center gap-8">
                                <li>
                                    <Link
                                        href="/home"
                                        className="text-gray-600 hover:text-black font-medium"
                                    >
                                       Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/allBooks"
                                        className="text-gray-600 hover:text-black font-medium"
                                    >
                                       Books
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/listedBook"
                                        className="text-gray-600 hover:text-black font-medium"
                                    >
                                      Listed Books
                                    </Link>
                                </li>

                                <li>
                                    <a
                                        href="#pages-to-read"
                                        className="text-gray-600 hover:text-black font-medium"
                                    >
                                        Pages to Read
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Desktop Buttons */}
                        <div className="navbar-end hidden md:flex gap-3">
                            <button className="px-5 py-2.5 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition">
                                Sign In
                            </button>

                            <button className="px-5 py-2.5 bg-cyan-400 text-white font-semibold rounded-xl hover:bg-cyan-500 transition">
                                Sign Up
                            </button>
                        </div>

                        {/* Mobile Hamburger */}
                        <div className="navbar-end md:hidden">
                            <div className="dropdown dropdown-end">
                                <button
                                    tabIndex={0}
                                    className="btn btn-ghost text-2xl"
                                >
                                    ☰
                                </button>

                                <ul
                                    tabIndex={0}
                                    className="dropdown-content menu mt-3 z-[1] p-3 shadow-lg bg-white rounded-box w-56 border"
                                >
                                    <li>
                                        <a href="#home">Home</a>
                                    </li>

                                    <li>
                                        <a href="#listed-books">
                                            Listed Books
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#pages-to-read">
                                            Pages to Read
                                        </a>
                                    </li>

                                    <li className="mt-2">
                                        <button className="bg-green-600 text-white hover:bg-green-700">
                                            Sign In
                                        </button>
                                    </li>

                                    <li>
                                        <button className="bg-cyan-400 text-white hover:bg-cyan-500">
                                            Sign Up
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;