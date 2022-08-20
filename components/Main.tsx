import React from 'react';

const Main = () => {
  return (
    <div className='h-[100vh] w-full flex'>
      <section className='text-gray-600 body-font w-full flex justify-center items-center main-bg'>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center '>
          <div className='lg:flex-grow  flex flex-col mb-16 items-center justify-center text-center'>
            <p className='font-sans font-light'>WELCOME TO MY WORLD</p>
            <span className='title-font sm:text-8xl text-4xl mb-4 font-medium text-gray-900'>
              Weolcome to
            <span className='title-font sm:text-8xl text-4xl mb-4 text-red-700'>
              nv education`s
            </span>
            </span>
            
            <div className='flex justify-center'>
              <button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
