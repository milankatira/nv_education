/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import Course from '../components/Course';
import Main from '../components/Main';
import Testimonials from '../components/Testimonial';
export default function Landing() {
  //  window.onscroll = function () {
  //    myFunction();
  //  };

  //  function myFunction() {
  //   if(document){

  //    var winScroll =
  //      document.body.scrollTop || document.documentElement.scrollTop;
  //    var height =
  //      document.documentElement.scrollHeight -
  //      document.documentElement.clientHeight;
  //    var scrolled = (winScroll / height) * 100;
  //   document && document.getElementById('myBar').style.width == scrolled + '%';
  //   }

  //  }
  //  const ScrollIndicator = () => {
  // const [scroll, setScroll] = useState(0);

  // const onScroll = () => {
  //   const Scrolled = document.documentElement.scrollTop;
  //   const MaxHeight =
  //     document.documentElement.scrollHeight -
  //     document.documentElement.clientHeight;
  //   const ScrollPercent = (Scrolled / MaxHeight) * 100;
  //   setScroll(ScrollPercent);
  // };

  // if (typeof window !== 'undefined') {
  //   window.addEventListener('scroll', onScroll);
  // }

  return (
    <>
      <main>
        {/* <div className='progress-container sticky'>
          <div
            className='progress-bar'
            style={{ width: `${scroll}%` }}
            id='myBar'
          ></div>
        </div> */}

        <Main />
        <Course />
        <div className={`relative mt-40 bg-gray-700`}>
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
                className='text-red-300 fill-current'
                points='2560 0 2560 100 0 100'
              ></polygon>
            </svg>
          </div>
        </div>
        <div className='bg-red-300 pb-24 pt-4'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-wrap justify-center lg:mt-24 mt-28'>
              <div className='w-full lg:w-6/12 px-4'>
                <div className='flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200'>
                  <div className='flex-auto p-5 lg:p-10'>
                    <h4 className='text-2xl font-semibold dark:text-gray-600'>
                      Want to work with us?
                    </h4>
                    <p className='leading-relaxed mt-1 mb-4 text-blueGray-500 dark:text-gray-600'>
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className='w-full mb-3 mt-8'>
                      <label
                        className='block uppercase text-blueGray-600 text-xs font-bold mb-2 dark:text-gray-600'
                        htmlFor='full-name'
                      >
                        Full Name
                      </label>
                      <input
                        type='text'
                        className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                        placeholder='Full Name'
                      />
                    </div>

                    <div className='relative w-full mb-3'>
                      <label
                        className='block uppercase text-blueGray-600 text-xs font-bold mb-2 dark:text-gray-600'
                        htmlFor='email'
                      >
                        Email
                      </label>
                      <input
                        type='email'
                        className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                        placeholder='Email'
                      />
                    </div>

                    <div className='relative w-full mb-3'>
                      <label
                        className='block uppercase text-blueGray-600 text-xs font-bold mb-2 dark:text-gray-600'
                        htmlFor='message'
                      >
                        Message
                      </label>
                      <textarea
                        rows={4}
                        cols={80}
                        className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm shadow focus:outline-none focus:ring w-full'
                        placeholder='Type a message...'
                      />
                    </div>
                    <div className='text-center mt-6'>
                      <button
                        className='bg-red-700 text-white active:bg-red-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                        type='button'
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Testimonials />
      {/* <Footer /> */}
    </>
  );
}
