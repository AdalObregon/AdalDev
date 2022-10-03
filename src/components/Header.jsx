import React from 'react';
import { BsMoonStarsFill } from 'react-icons/bs';
const Header = (props) => {
  const { darkMode, setDarkMode } = props;
  return (
    <header className='bg-white px-10 dark:bg-slate-800'>
        <nav className='py-12 mb-12 flex justify-between'>
          <h1 className='xl:text-3xl text-xl dark:text-white'>
            Adal <span className='font-extrabold'>Obregon</span>
          </h1>
          <ul className='flex items-center'>
            <li>
              <BsMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className='cursor-pointer text-2xl dark:text-white'
              />
            </li>
            <li>
              <a
                className='bg-gradient-to-r from-violet-500 to-purple-500 text-white px-3 py-3 border-none rounded-lg ml-8 font-bold xl:text-2xl text-xl'
                href='#'
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
    </header>
  );
};

export default Header;
