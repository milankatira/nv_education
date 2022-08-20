import React from 'react';
import * as Data from '../data';
const Main = () => {
  return (
    <div className='w-full flex flex-col overflow-hidden'>
      <section className='h-[100vh] text-gray-600 object-cover object-center body-font w-full flex justify-center items-center bg-main-bg  hover:scale-110 transition-all duration-500'>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center '>
          <div className='lg:flex-grow  flex flex-col mb-16 items-center justify-center text-center'>
            <span className='mr-4 title-font sm:text-8xl text-4xl mb-4 font-medium text-gray-900'>
              {Data.main.M1}
              <span className='title-font sm:text-8xl text-4xl mb-4 text-red-700'>
                {Data.main.M2}
              </span>
            </span>
          </div>
        </div>
      </section>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
        </div>
      </section>
    </div>
  );
};

export default Main;
