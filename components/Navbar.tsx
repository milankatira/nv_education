import React from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { phone_number, email } from '../data';
const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <header className='dark:bg-red-200 text-gray-600 dark:text-gray-200 body-font sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-20'>
        <div>
          <nav className='relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg border-b border-gray-300 dark:border-red-400 mx-8'>
            <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
              <div className='w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start'>
                <a className='text-sm mr-4 py-2 whitespace-no-wrap text-black flex flex-row'>
                  <svg
                    className='h-3 w-3 mt-1 mr-3 fill-current text-black'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path d='M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z' />
                  </svg>
                  {phone_number} <span className='ml-3'>|</span>
                  <svg
                    className='h-3 w-3 mt-1 mx-3 fill-current text-black'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path d='M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z' />
                  </svg>
                  {email}
                </a>
                <button
                  className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
                  type='button'
                >
                  <span className='block relative w-6 h-px rounded-sm bg-black'></span>
                  <span className='block relative w-6 h-px rounded-sm bg-black mt-1'></span>
                  <span className='block relative w-6 h-px rounded-sm bg-black mt-1'></span>
                </button>
              </div>
              <div className='lg:flex flex-grow items-center'>
                <ul className='flex flex-col lg:flex-row list-none ml-auto'>
                  <li className='nav-item'>
                    <a
                      className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75'
                      href='#pablo'
                    >
                      <i className='fab fa-facebook-square text-lg leading-lg text-black opacity-75'></i>
                      <span className='ml-2'>Share</span>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a
                      className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75'
                      href='#pablo'
                    >
                      <i className='fab fa-twitter text-lg leading-lg text-black opacity-75'></i>
                      <span className='ml-2'>Tweet</span>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a
                      className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75'
                      href='#pablo'
                    >
                      <i className='fab fa-pinterest text-lg leading-lg text-black opacity-75'></i>
                      <span className='ml-2'>Pin</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className='container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center'>
          <Link href='/'>
            <a className='flex title-font font-medium items-center text-gray-900 dark:text-white mb-4 md:mb-0'>
              <img
                className='w-full h-full text-white p-2'
                src='/NVlogo.png'
                alt=''
              />
              <span className='ml-3 text-xl dark:text-black'>Nv Education</span>
            </a>
          </Link>

          <nav className='md:ml-auto md:mr-auto font-bold flex flex-wrap items-center text-base justify-center transition-all duration-300'>
            <Link href='/'>
              <a className='transition-all duration-300 text-red-700 dark:text-black mr-5 hover:text-gray-900'>
                HOME
              </a>
            </Link>
            <Link href='/about'>
              <a className='transition-all duration-300 text-red-700 dark:text-black mr-5 hover:text-gray-900'>
                ABOUT
              </a>
            </Link>

            <a
              href='https://nveducation.edumilestones.com/'
              className='transition-all duration-300 text-red-700 dark:text-black mr-5 hover:text-gray-900'
            >
              CAREER
            </a>

            <Link href='/course'>
              <a className='transition-all duration-300 text-red-700 dark:text-black mr-5 hover:text-gray-900 '>
                COURSE
              </a>
            </Link>
            <Link href='/dmitreport'>
              <a className=' transition-all duration-300 text-red-700 dark:text-black mr-5 hover:text-gray-900 '>
                DMIT REPORT
              </a>
            </Link>
            <Link href='/events'>
              <a className='transition-all duration-300 text-red-700 dark:text-black mr-5 hover:text-gray-900 '>
                EVENTS
              </a>
            </Link>
            <Link href='/gallery'>
              <a className='transition-all duration-300 text-red-700 dark:text-black mr-5 hover:text-gray-900 '>
                GALLERY
              </a>
            </Link>
            <Link href='/business'>
              <a className='transition-all duration-300 text-red-700 dark:text-black mr-5 hover:text-gray-900 '>
                BADA BUSINESS
              </a>
            </Link>
            <Link href='/contact'>
              <a className='transition-all duration-300 text-red-700 dark:text-black mr-5 hover:text-gray-900 '>
                CONTACT
              </a>
            </Link>
          </nav>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className='border-none decoration-none'
          >
            {theme === 'dark' ? (
              <svg
                className='h-6 w-6 mr-4 dark:text-black'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path d='M256 159.1c-53.02 0-95.1 42.98-95.1 95.1S202.1 351.1 256 351.1s95.1-42.98 95.1-95.1S309 159.1 256 159.1zM509.3 347L446.1 255.1l63.15-91.01c6.332-9.125 1.104-21.74-9.826-23.72l-109-19.7l-19.7-109c-1.975-10.93-14.59-16.16-23.72-9.824L256 65.89L164.1 2.736c-9.125-6.332-21.74-1.107-23.72 9.824L121.6 121.6L12.56 141.3C1.633 143.2-3.596 155.9 2.736 164.1L65.89 256l-63.15 91.01c-6.332 9.125-1.105 21.74 9.824 23.72l109 19.7l19.7 109c1.975 10.93 14.59 16.16 23.72 9.824L256 446.1l91.01 63.15c9.127 6.334 21.75 1.107 23.72-9.822l19.7-109l109-19.7C510.4 368.8 515.6 356.1 509.3 347zM256 383.1c-70.69 0-127.1-57.31-127.1-127.1c0-70.69 57.31-127.1 127.1-127.1s127.1 57.3 127.1 127.1C383.1 326.7 326.7 383.1 256 383.1z' />
              </svg>
            ) : (
              <svg
                id='theme-toggle-dark-icon'
                className='h-6 w-6 mr-4 text-gray-900'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z'></path>
              </svg>
            )}
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
