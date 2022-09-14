/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { about } from '../data';

interface AccordionFieldProps {
  src: string;
  height?: number;
}

export const ImageSection: React.FC<AccordionFieldProps> = ({ src }) => {
  const [modal, setModal] = React.useState(false);
  return (
    <div className='lg:w-1/3 sm:w-1/2 p-4'>
      <div
        className={`rounded-lg overflow-hidden`}
        onClick={() => setModal(true)}
      >
        <img
          alt='content'
          className='object-cover object-center h-full w-full hover:scale-110 transition-all duration-500'
          src={src}
        />
      </div>
      {modal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-6 mx-auto max-w-3xl'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full dark:bg-black bg-white outline-none focus:outline-none'>
                {/*header*/}
                <svg
                  className='w-6 h-6 ml-auto mr-10 mt-10 dark:text-white fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                  onClick={() => setModal(false)}
                >
                  {' '}
                  <path d='M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z' />
                </svg>
                {/*body*/}
                <div className='relative p-6 flex-auto'>
                  <img
                    alt='content'
                    className='object-cover object-center h-[500px] w-fit-content'
                    src={src}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </div>
  );
};

const About = () => {
  return (
    <div className='w-full'>
      {/* //TODO:HEADER */}
      <div className=' flex justify-center flex-col items-center'>
        <div className='text-4xl font-sans font-bold text-black mt-5'>
          Meet your Career Counselor
        </div>
      </div>

      {/* //TODO:main */}
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap'>
            <div className='p-4 md:w-1/2 sm:mb-0 mb-6'>
              <div className='rounded-lg h-auto overflow-hidden'>
                <img
                  alt='content'
                  className='object-cover object-center h-full w-full hover:scale-105 transition-all duration-500'
                  src='/Poster_1.jpg'
                />
              </div>
            </div>
            <div className='p-4 md:w-1/2 sm:mb-0 mb-6'>
              <div className='rounded-lg h-auto overflow-hidden'>
                <h1 className='font-semibold text-4xl mb-4 hover:text-black transition-all duration-300 text-red-700 dark:hover:text-white'>
                  {about.heading}
                </h1>
                <p className=' hover:text-black transition-all duration-300 mt-4 text-xl text-gray-900 font-medium dark:text-white'>
                  {about.h1}
                </p>
                <p className=' hover:text-black transition-all duration-300 mt-4 font-light text-xl dark:text-white'>
                  {about.h2}
                </p>{' '}
                <p className=' hover:text-black transition-all duration-300 mt-4 font-light text-xl dark:text-white'>
                  {about.h3}
                </p>{' '}
                <p className=' hover:text-black transition-all duration-300 mt-4 font-light text-xl dark:text-white'>
                  {about.h4}
                </p>{' '}
                <p className=' hover:text-black transition-all duration-300 mt-4 font-light text-xl dark:text-white'>
                  {about.h5}
                </p>
                <p className=' hover:text-black transition-all duration-300 mt-4 font-light text-xl dark:text-white'>
                  {about.h6}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='w-full'>
    
        <section className='text-gray-600 body-font'>
          <div className='container px-5 py-24 mx-auto'>
            <div className='flex flex-wrap'>
              <ImageSection src='/ab1.jpg' />
              <ImageSection src='/ab2.jpg' />
              <ImageSection src='/ab3.jpg' />
              <ImageSection src='/ab4.jpg' />
              <ImageSection src='/ab5.jpg' />
              <ImageSection src='/ab6.jpg' />
              <ImageSection src='/ab7.jpg' />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
