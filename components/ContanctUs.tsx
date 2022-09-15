import React, { useState } from 'react';
import { email } from '../data';

const ContanctUs = () => {
  const [name, setname] = useState('');
  const [subject, setsubject] = useState('');
  const [Email, setEmail] = useState('');
  const [message, setmessage] = useState('');
  const submitForm = () => {
    window.open(
      `mailto:${email}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(name)} : ${encodeURIComponent(message)}`,
    );
  };
  return (
    <div>
      <section className='text-gray-600 body-font relative my-10'>
        <div className='absolute inset-0 bg-gray-300'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.1607228746366!2d72.66279481496831!3d23.054568484936937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87f27f25e2bd%3A0x583ab7b1b41f6ddb!2sNV%20EDUCATION&#39;S!5e0!3m2!1sen!2sin!4v1663258045989!5m2!1sen!2sin'
            width='100%'
            height='100%'
            loading='lazy'
          ></iframe>
        </div>
        <div className='container px-5 py-24 mx-auto flex'>
          <div className='lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-1 shadow-md'>
            <h2 className='text-gray-900 text-lg mb-1 font-medium title-font'>
              Want to work with us?
            </h2>
            <p className='leading-relaxed mb-5 text-gray-600'>
              Complete this form and we will get back to you in 24 hours.
            </p>
            <div className='relative mb-4'>
              <label
                htmlFor='email'
                className='leading-7 text-sm text-gray-600'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            </div>
            <div className='relative mb-4'>
              <label htmlFor='name' className='leading-7 text-sm text-gray-600'>
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setname(e.target.value)}
                type='text'
                id='name'
                name='name'
                className='w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            </div>
            <div className='relative mb-4'>
              <label
                htmlFor='subject'
                className='leading-7 text-sm text-gray-600'
              >
                Subject
              </label>
              <input
                value={subject}
                onChange={(e) => setsubject(e.target.value)}
                type='text'
                id='subject'
                name='subject'
                className='w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              />
            </div>
            <div className='relative mb-4'>
              <label
                htmlFor='message'
                className='leading-7 text-sm text-gray-600'
              >
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setmessage(e.target.value)}
                id='message'
                name='message'
                className='w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
              ></textarea>
            </div>

            <div className='text-center mt-6'>
              <button
                className='bg-gray-100 text-red-500 active:bg-red-700 active:text-white text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                type='button'
                onClick={() => submitForm()}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContanctUs;
