import React from 'react'
import message from '../../images/message.svg'
import logo from '../../images/logo.png'
import message1 from '../../images/message1.svg'
import share from '../../images/share.svg'

function Header() {
  return (
    <>
      <div>
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded  md:bg-white shadow-md md:shadow-lg">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <a href="/" className="flex items-center">
              <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            </a>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0 md:bg-white dark:bg-gray-800 dark:border-gray-700">
                <li>
                  <a href="/" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:hover:underline" aria-current="page">Home</a>
                </li>
                <li>
                  <a href="/" className="block py-2 pr-4 pl-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent  md:hover:underline">About</a>
                </li>
                <li>
                  <a href="/" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent  md:hover:underline">Services</a>
                </li>
                <li>
                  <a href="/" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent  md:hover:underline">Pricing</a>
                </li>
                <li>
                  <a href="/" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent  md:hover:underline">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header;
