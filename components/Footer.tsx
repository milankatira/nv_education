/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';
import { email, phone_number } from '../data';
export default function Footer() {
  return (
    <>
      <footer className='relative bg-white dark:bg-red-200 pt-8 pb-6'>
        <div
          className='bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20'
          style={{ transform: 'translateZ(0)' }}
        >
          <svg
            className='absolute bottom-0 overflow-hidden'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='none'
            version='1.1'
            viewBox='0 0 2560 100'
            x='0'
            y='0'
          >
            <polygon
              className='text-white dark:text-red-200 fill-current'
              points='2560 0 2560 100 0 100'
            ></polygon>
          </svg>
        </div>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap text-left'>
            <div className='w-full lg:w-6/12 px-4'>
              <h4 className='text-3xl font-semibold dark:text-black'>
                Let's keep in touch!
              </h4>
              <h5 className='text-lg mt-0 mb-2 text-blueGray-600 dark:text-black'>
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className='mt-6 lg:mb-0 mb-6'>
                <a href='https://www.facebook.com/nveducations/'>
                  <button
                    className='hover:scale-125 hover:transition-all duration-500 bg-white text-red-700 text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'
                    type='button'
                  >
                    <i className='fab fa-facebook-square'></i>
                  </button>
                </a>
                <a href='https://www.youtube.com/c/NVEducations/videos'>
                  <button
                    className='hover:scale-125 hover:transition-all duration-500 bg-white text-red-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'
                    type='button'
                  >
                    <i className='fab fa-youtube'></i>
                  </button>
                </a>

                <a href='https://www.instagram.com/nveducation/'>
                  <button
                    className='hover:scale-125 hover:transition-all duration-500 bg-white text-red-700 text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'
                    type='button'
                  >
                    <i className='fab fa-instagram-square'></i>
                  </button>
                </a>
              </div>
            </div>
            <div className='w-full lg:w-6/12 px-4'>
              <div className='flex flex-wrap items-top mb-6'>
                <div className='w-full lg:w-4/12'>
                  <ul className='list-unstyled dark:text-black text-red-500'>
                    <div className='flex flex-col'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-5 h-5 text-black fill-current'
                        viewBox='0 0 576 512'
                      >
                        <path d='M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z' />
                      </svg>
                      <span>
                        304, Pushkar Icon Nr. Shukan Cross Road, Nikol-Naroda,
                        Ahmedabad.
                      </span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-5 h-5 text-black fill-current mt-4'
                        viewBox='0 0 512 512'
                      >
                        <path d='M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z' />
                      </svg>
                      <span>{email}</span>
                      <svg
                        className='mt-4 w-5 h-5 text-black fill-current'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                      >
                        <path d='M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z' />
                      </svg>
                      <span>{phone_number}</span>
                    </div>
                  </ul>
                </div>
                <div className='w-full lg:w-4/12 ml-auto'>
                  <span className='block uppercase text-blueGray-500 text-sm font-semibold mb-2 dark:text-black'>
                    Useful Links
                  </span>
                  <ul className='list-unstyled'>
                    <div className='flex flex-col'>
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
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className='my-6 border-gray-400 dark:border-red-400' />
          <div className='flex flex-wrap items-center md:justify-between justify-center'>
            <div className='w-full md:w-4/12 px-4 mx-auto text-center'>
              <div className='text-sm dark:text-black text-blueGray-500 font-semibold py-1'>
                Copyright © {new Date().getFullYear()} made by{' '}
                <a
                  href='https://www.creative-tim.com?ref=nnjs-footer'
                  className='text-blueGray-500 hover:text-blueGray-800'
                >
                  Advaita Solutions
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
