/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import ContactUs from '../components/ContanctUs';
import Course from '../components/Course';
import Main from '../components/Main';
import Testimonials from '../components/Testimonial';
export default function Landing() {
  
  return (
    <>
      <main>

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
                className='text-red-50 dark:text-red-200 fill-current'
                points='2560 0 2560 100 0 100'
              ></polygon>
            </svg>
          </div>
        </div>
     <ContactUs/>
      </main>
      <Testimonials />
      {/* <Footer /> */}
    </>
  );
}
