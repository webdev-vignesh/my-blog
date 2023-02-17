import React from "react";
import { Link } from "react-router-dom";
import Logo from '../logo.png';


const NavBar = () => {
    return(
        <div>
            <nav class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div class="container flex flex-wrap items-center justify-between mx-auto">
                <Link to='/' class="flex items-center">
                    <img src={Logo} class=" mr-3 h-16" alt="tech titans logo" />
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul class="flex flex-col p-4 mt-4   md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium text-white">
                    <li>
                    <Link to='/' class="block py-2 pl-3 pr-4 md:hover:text-gray-400 md:p-0 dark:text-white-900 md:dark:hover:text-gray-400 " aria-current="page">Home</Link>
                    </li>
                    <li>
                    <Link to='/articles-list' class="block py-2 pl-3 pr-4 md:hover:text-gray-400 md:p-0 dark:text-white-900 md:dark:hover:text-gray-400 " aria-current="page">All Articles</Link>
                    </li>
                    <li>
                    <Link to='/about' class="block py-2 pl-3 pr-4 md:hover:text-gray-400 md:p-0 dark:text-white-900 md:dark:hover:text-gray-400 " aria-current="page">About</Link>
                    </li>
                    <li>
                    <Link to='/contact' class="block py-2 pl-3 pr-4 md:hover:text-gray-400 md:p-0 dark:text-white-900 md:dark:hover:text-gray-400 " aria-current="page">Contact</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default NavBar;