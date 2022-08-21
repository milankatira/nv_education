import React from 'react';
import * as Data from '../data';
const Main = () => {
  return (
    <div className='w-full flex flex-col overflow-hidden mb-4'>
      <section className='text-gray-600 body-font bg-main-bg'>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <div
            className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'
            data-aos='fade-up'
            data-aos-delay='1100'
          >
            <img
              className='object-cover rounded-full w-96 h-96'
              alt='hero'
              src='/profile_dark.jpeg'
            />
          </div>
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-center mb-16 md:mb-0 items-center text-center'>
            <h1
              className='title-font sm:text-7xl font-bold text-4xl mb-4 text-gray-900'
              data-aos='fade-up'
              data-aos-delay='700'
            >
              {Data.main.M1}
              <span
                className='text-red-700 ml-2'
                data-aos='fade-up'
                data-aos-delay='700'
              >
                {Data.main.M2}
              </span>
            </h1>
            <p
              className='mb-8 text-black text-4xl font-semibold -tracking-tighter'
              data-aos='fade-up'
              data-aos-delay='900'
            >
              {Data.main.M3}
            </p>
            <div className='flex justify-center'>
              <button
                data-aos='fade-up'
                data-aos-delay='1100'
                className='inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg transition-all duration-300'
              >
                Make An Appointment
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
