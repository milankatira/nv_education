import React from 'react';

const Dmitreport = () => {
  return (
    <div>
      <div className='rounded-lg overflow-hidden'>
        <img
          alt='content'
          className='object-cover object-center h-full w-full'
          src='/dmit_main.jpeg'
        />
      </div>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -mx-4 mb-10 text-center'>
            <div className='sm:w-1/2 mb-10 px-4'>
              <div className='rounded-lg overflow-hidden'>
                <img
                  alt='content'
                  className='object-cover object-center h-full w-full hover:scale-125 transition-all duration-500'
                  src='/d1.jpg'
                />
              </div>
            </div>
            <div className='sm:w-1/2 mb-10 px-4'>
              <div className='rounded-lg overflow-hidden'>
                <img
                  alt='content'
                  className='object-cover object-center h-full w-full hover:scale-125 transition-all duration-500'
                  src='/d3.jpg'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-wrap -mx-4 -mb-10 text-center'>
            <div className='sm:w-1/2 mb-10 px-4'>
              <div className='rounded-lg overflow-hidden'>
                <img
                  alt='content'
                  className='object-cover object-center h-full w-full hover:scale-125 transition-all duration-500'
                  src='/d8.jpg'
                />
              </div>
            </div>
            <div className='sm:w-1/2 mb-10 px-4'>
              <div className='rounded-lg overflow-hidden'>
                <img
                  alt='content'
                  className='object-cover object-center h-full w-full hover:scale-125 transition-all duration-500'
                  src='/d9.jpg'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dmitreport;
