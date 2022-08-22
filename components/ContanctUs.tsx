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
      <div className='bg-white dark:bg-red-200 pb-24 pt-4'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap justify-center lg:mt-24 mt-28'>
            <div
              className='w-full lg:w-6/12 px-4'
              data-aos='slide-up'
              data-aos-delay='100'
            >
              <div className='flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white '>
                <div className='flex-auto p-5 lg:p-10'>
                  <h4 className='text-2xl font-semibold dark:text-red-700'>
                    Want to work with us?
                  </h4>
                  <p className='leading-relaxed mt-1 mb-4 text-blueGray-500 dark:bg-white0'>
                    Complete this form and we will get back to you in 24 hours.
                  </p>
                  <div className='w-full mb-3 mt-8'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2 dark:text-black'
                      htmlFor='full-name'
                    >
                      Full Name
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                      type='text'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      placeholder='Full Name'
                    />
                  </div>

                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2 text-black'
                      htmlFor='email'
                    >
                      Email
                    </label>
                    <input
                      type='email'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      placeholder='Email'
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2 text-black'
                      htmlFor='email'
                    >
                      Subject
                    </label>
                    <input
                      type='text'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      placeholder='subject'
                      value={subject}
                      onChange={(e) => setsubject(e.target.value)}
                    />
                  </div>

                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2 text-black'
                      htmlFor='message'
                    >
                      Message
                    </label>
                    <textarea
                      rows={4}
                      cols={80}
                      value={message}
                      onChange={(e) => setmessage(e.target.value)}
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm shadow focus:outline-none focus:ring w-full'
                      placeholder='Type a message...'
                    />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContanctUs;
