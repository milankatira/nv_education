/* eslint-disable @next/next/no-img-element */
import React from 'react';

const About = () => {
  return (
    <div className='h-[100vh] w-full'>
      {/* //TODO:HEADER */}
      <div className=' flex justify-center flex-col items-center'>
        <div className='text-4xl font-sans font-semibold text-red-700'>
          Popular courses
        </div>
        <div className='text-base font-sans font-semibold mt-4'>
          Popular courses
        </div>
      </div>

      {/* //TODO:main */}
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4'>
            <div className='p-4 md:w-1/3 sm:mb-0 mb-6'>
              <div className='rounded-lg h-64 overflow-hidden'>
                <img
                  alt='content'
                  className='object-cover object-center h-full w-full hover:scale-125 transition-all duration-500'
                  src='https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                />
              </div>
              <h2 className='text-xl font-medium title-font text-red-700 mt-5'>
                Shooting Stars
              </h2>
              <p className='text-base leading-relaxed mt-2 dark:text-white'>
                Swag shoivdigoitch literally meditation subway tile tumblr
                cold-pressed. Gastropub street art beard dreamcatcher neutra,
                ethical XOXO lumbersexual.
              </p>
              <a className='text-red-700 inline-flex items-center mt-3 font-medium'>
                Learn More
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-4 h-4 ml-2'
                  viewBox='0 0 24 24'
                >
                  <path d='M5 12h14M12 5l7 7-7 7'></path>
                </svg>
              </a>
            </div>
            <div className='p-4 md:w-1/3 sm:mb-0 mb-6'>
              <div className='rounded-lg h-64 overflow-hidden'>
                <img
                  alt='content'
                  className='object-cover object-center h-full w-full'
                  src='https://dummyimage.com/1204x504'
                />
              </div>
              <h2 className='text-xl font-medium title-font text-red-700 mt-5'>
                The Catalyzer
              </h2>
              <p className='text-base leading-relaxed mt-2 dark:text-white'>
                Swag shoivdigoitch literally meditation subway tile tumblr
                cold-pressed. Gastropub street art beard dreamcatcher neutra,
                ethical XOXO lumbersexual.
              </p>
              <a className='text-red-700 inline-flex items-center mt-3 font-medium'>
                Learn More
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-4 h-4 ml-2'
                  viewBox='0 0 24 24'
                >
                  <path d='M5 12h14M12 5l7 7-7 7'></path>
                </svg>
              </a>
            </div>
            <div className='p-4 md:w-1/3 sm:mb-0 mb-6'>
              <div className='rounded-lg h-64 overflow-hidden'>
                <img
                  alt='content'
                  className='object-cover object-center h-full w-full'
                  src='https://dummyimage.com/1205x505'
                />
              </div>
              <h2 className='text-xl font-medium title-font text-red-700 mt-5'>
                The 400 Blows
              </h2>
              <p className='text-base leading-relaxed mt-2 dark:text-white'>
                Swag shoivdigoitch literally meditation subway tile tumblr
                cold-pressed. Gastropub street art beard dreamcatcher neutra,
                ethical XOXO lumbersexual.
              </p>
              <a className='text-red-700 inline-flex items-center mt-3 font-medium'>
                Learn More
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-4 h-4 ml-2'
                  viewBox='0 0 24 24'
                >
                  <path d='M5 12h14M12 5l7 7-7 7'></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
