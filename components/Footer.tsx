/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';
export default function Footer() {
  return (
    <>
      <footer className='relative bg-red-50 dark:bg-red-200 pt-8 pb-6'>
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
              className='text-red-50 dark:text-red-200 fill-current'
              points='2560 0 2560 100 0 100'
            ></polygon>
          </svg>
        </div>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap text-center lg:text-left'>
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
                    <i className='fab fa-instagram'></i>
                  </button>
                </a>
              </div>
            </div>
            <div className='w-full lg:w-6/12 px-4'>
              <div className='flex flex-wrap items-top mb-6'>
                <div className='w-full lg:w-4/12 px-4 ml-auto'>
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
