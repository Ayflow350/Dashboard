import React, { useState } from 'react';
import { FaMap, FaSearch, FaClipboard, FaComment, FaSignOutAlt } from 'react-icons/fa';



const Dashboard = () => {

    
  const [sidenav, setSidenav] = useState(true);

  const toggleSidenav = () => {
    setSidenav(!sidenav);
  };

  return (
<body className="font-poppins antialiased min-h-[72rem] ">
    <div
      id="view"
       className="bg-white h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-y-auto  overflow-x-hidden transition-transform duration-300 ease-in-out"
      x-data="{ sidenav: true }"
    >
      <button
        onClick={toggleSidenav}
        className="p-2 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-teal-500 focus:outline-none focus:text-white absolute top-0 left-0 sm:hidden"
      >
        <svg
          className="w-5 h-5 fillCurrent"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        id="sidebar"
        className="bg-white h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
        x-show="sidenav"
       
      >
        <div className="space-y-6 md:space-y-10 mt-10">
          <h1 className="font-bold text-4xl text-center md:hidden">
            D<span className="text-teal-600">.</span>
          </h1>
          <h1 className="hidden md:block font-bold text-sm md:text-xl text-center">
            Beware Offenders<span className="text-teal-600">.</span>
          </h1>
          <div id="profile" className="space-y-3">
            <img
              src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt="Avatar user"
              className="w-10 md:w-16 rounded-full mx-auto"
            />
            <div>
              <h2
                className="font-medium text-xs md:text-sm text-center text-teal-500"
              >
                Eduard Pantazi
              </h2>
              <p className="text-xs text-gray-500 text-center"></p>
            </div>
          </div>
          <div
            className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500"
          >
            <input
              type="text"
              class="w-full rounded-tl-md rounded-bl-md px-2 py-3 text-sm text-gray-600 focus:outline-none"
              placeholder="Search"
            />
            <button
             
           
              id="sidebar"
              class="rounded-tr-md rounded-br-md px-2 py-3 hidden md:block"
            >
         
              <svg
                className="w-5 h-5fillCurrent"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div id="menu" className="flex flex-col space-y-9 mt-19">
            <a
              href=""
              className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out space-x-2 justify-center items-center"
            >
              <FaMap className="w-4 h-4 fillCurrent inline-block" />
              <span className="">Maps</span>
            </a>
            <a
              href=""
              className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out space-x-2 justify-center items-center"
            >
             <FaSearch className="w-5 h-5 fillCurrent inline-block" />

              <span className="">Search</span>
            </a>
            <a
              href=""
              className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out space-x-2 justify-center items-center"
            >
              <svg
                className="w-5 h-5 fillCurrent inline-block"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                <path
                  fill-rule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className=""> Past Reports</span>
            </a>
            <a
              href=""
              className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out space-x-2 justify-center items-center"
            >
              <FaComment className="w-5 h-5 fillCurrent inline-block" />
              <span className="">Review</span>
            </a>
            
            <a
              href=""
              className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out space-x-2 justify-center items-center"
            >
               <FaSignOutAlt className="w-5 h-5 fillCurrent inline-block" />
              <span className="">Log OUT</span>
            </a>
            < div className="h-[-2000px]"></div>
          </div>
        </div>
      </div>
     
    </div>
  </body>
  )
}

export default Dashboard
