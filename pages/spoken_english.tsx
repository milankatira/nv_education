import React from 'react';

const spoken_english = () => {
  return (
    <div>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4'>
            <div className='p-4 md:w-1/2 sm:mb-0 mb-6'>
              <div className='rounded-lg h-full overflow-hidden'>
                <img
                  alt='content'
                  className='hover:scale-110 transition-all duration-500 object-cover object-center h-full w-full'
                  src='/sp_1.jpeg'
                />
              </div>
            </div>
            <div className='p-4 md:w-1/2 sm:mb-0 mb-6'>
              <div className='rounded-lg h-full overflow-hidden'>
                <img
                  alt='content'
                  className='hover:scale-110 transition-all duration-500 object-cover object-center h-full w-full'
                  src='/sp_2.jpeg'
                />
              </div>
            </div>
            <div className='p-4 md:w-1/2 sm:mb-0 mb-6'>
              <div className='rounded-lg h-full overflow-hidden'>
                <img
                  alt='content'
                  className='hover:scale-110 transition-all duration-500 object-cover object-center h-full w-full'
                  src='/sp_3.jpeg'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default spoken_english;
