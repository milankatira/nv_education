/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { about } from '../data';
const About = () => {
  return (
    <div className='w-full'>
      {/* //TODO:HEADER */}
      <div className=' flex justify-center flex-col items-center'>
        <div className='text-4xl font-sans font-bold'>Popular course</div>
        <div className='text-base font-sans font-semibold'>Popular course</div>
      </div>

      {/* //TODO:main */}
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap'>
            <div className='p-4 md:w-1/2 sm:mb-0 mb-6'>
              <div className='rounded-lg h-auto overflow-hidden'>
                <img
                  alt='content'
                  className='object-cover object-center h-full w-full hover:scale-110 transition-all duration-500'
                  src='/Poster_1.jpg'
                />
              </div>
            </div>
            <div className='p-4 md:w-1/2 sm:mb-0 mb-6'>
              <div className='rounded-lg h-auto overflow-hidden'>
                <h1 className='font-bold text-4xl mb-4 hover:text-black transition-all duration-300'>
                  {about.heading}
                </h1>
                <p className=' hover:text-black transition-all duration-300 mt-4 font-light text-xl'>
                  {about.h1}
                </p>
                <p className=' hover:text-black transition-all duration-300 mt-4 font-light text-xl'>
                  {about.h2}
                </p>{' '}
                <p className=' hover:text-black transition-all duration-300 mt-4 font-light text-xl'>
                  {about.h3}
                </p>{' '}
                <p className=' hover:text-black transition-all duration-300 mt-4 font-semibold text-xl'>
                  {about.h4}
                </p>{' '}
                <p className=' hover:text-black transition-all duration-300 mt-4 font-light text-xl'>
                  {about.h5}
                </p>
                <p className=' hover:text-black transition-all duration-300 mt-4 font-light text-xl'>
                  {about.h6}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
