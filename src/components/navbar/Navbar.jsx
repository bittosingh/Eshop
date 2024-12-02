import React from 'react';
import { Link } from 'react-router-dom';
import { FaCaretDown, FaCartShopping } from 'react-icons/fa6';
import { IoMdSearch } from 'react-icons/io';
import Darkmode from './Darkmode';

const MenuLinks = [
  { id: 1, name: "Home", links: "/" },
  { id: 2, name: "Shop", links: "/shop" },
  { id: 3, name: "About", links: "/about" },
  { id: 4, name: "blogs", links: "/blogs" },
];

const DropdownLinks = [
  { id: 1, name: "Trending Products", link: "/trending" },
  { id: 2, name: "Best Selling", link: "/best-selling" },
  { id: 3, name: "Top Rated", link: "/top-rated" }
];

const Navbar = ({ handlOrderPopup }) => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      <div className='py-4'>
        <div className="container flex justify-between items-center">
          {/* Logo and Links section */}
          <div className='flex items-center gap-4'>
            <Link to="/" className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>
              Eshop
            </Link>

            {/* menu items */}
            <div>
              <ul className='flex items-center gap-4'>
                {MenuLinks.map((data) => (
                  <li key={data.id}>
                    <Link to={data.links} className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'>
                      {data.name}
                    </Link>
                  </li>
                ))}

                {/* dropdown */}
                <li className='relative cursor-pointer group'>
                  <span className='flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2'>
                    Quick Links
                  </span>
                  {/* dropdown */}
                  <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white'>
                    <ul className='space-y-2'>
                      {DropdownLinks.map((data) => (
                        <li key={data.id}>
                          <Link
                            className='text-gray-500 dark:hover:text-white duration-200 inline w-full p-2 hover:bg-primary/20 rounded-md font-semibold'
                            to={data.link}>
                            {data.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span>
                    <FaCaretDown className='group-hover:rotate-180 duration-300' />
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* navbar right section */}
          <div className='flex justify-between items-center gap-4'>
            {/* Search Bar Section */}
            <div className='relative group hidden sm:block'>
              <input type="text" placeholder='Search' className='search-bar' />
              <IoMdSearch className='text-xl text-gray-600 group-hover:text-pretty dark:text-gray-400 absolute top-1/2 -translate-y-1 right-3 duration-200' />
            </div>

            {/* order-button section */}
            <button className='relative p-3'>
              <FaCartShopping className='text-xl text-gray-600 dark:text-gray-400' />
              <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>4</div>
              
            </button>

            {/* dark mode Section */}
            <div>
              <Darkmode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
