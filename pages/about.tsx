/* eslint-disable @next/next/no-img-element */
import React from 'react';

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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id,
                consequatur voluptas. Quisquam nostrum consequatur delectus,
                assumenda nemo fuga voluptatem placeat temporibus voluptatum
                dolorem, tempora consequuntur soluta voluptates consectetur quae
                nulla iure officiis dolores ratione quod quaerat iusto ab
                necessitatibus! Magni, ratione commodi! Vel eum repudiandae
                amet. Reiciendis iste obcaecati temporibus.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
