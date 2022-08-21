/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { course, CourseContain } from '../data';
const About = () => {
  return (
    <div className='w-full'>
      {/* //TODO:HEADER */}
      <div className=' flex justify-center flex-col items-center'>
        <div className='text-4xl font-sans font-bold text-red-700'>
          {course.heading}
        </div>
        <div className='text-base font-sans font-semibold mt-5'>
          {course.text}
        </div>
      </div>

      {/* //TODO:main */}
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div
            className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4'
            data-aos='fade-up'
            data-aos-delay='200'
          >
            {CourseContain.map((d) => {
              return (
                <div key={d.text} className='p-4 md:w-1/3 sm:mb-0 mb-6 c1'>
                  <div className='bg dark:bg_dark w-full h-[450px] transition-all duration-300 rounded-2xl hover:text-black scale-105 bg-gradient-to-b'>
                    <h2 className='text-xl mb-4 font-medium title-font text-red-700 mt-5'>
                      {d.heading}
                    </h2>
                    <div className='rounded-lg h-64 overflow-hidden'>
                      <img
                        alt='content'
                        className='hover:scale-125 transition-all duration-500 object-cover object-center h-full w-full'
                        src={d.image}
                      />
                    </div>

                    <p className='text-base leading-relaxed mt-2'>{d.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
