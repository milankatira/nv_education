import React from 'react'

const ContactUs = () => {
  return (
    <div>
      <div className='bg-gray-700 pb-24 pt-4'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap justify-center lg:mt-24 mt-28'>
            <div className='w-full lg:w-6/12 px-4'>
              <div className='flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200'>
                <div className='flex-auto p-5 lg:p-10'>
                  <h4 className='text-2xl font-semibold'>
                    Want to work with us?
                  </h4>
                  <p className='leading-relaxed mt-1 mb-4 text-blueGray-500'>
                    Complete this form and we will get back to you in 24 hours.
                  </p>
                  <div className='w-full mb-3 mt-8'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      htmlFor='full-name'
                    >
                      Full Name
                    </label>
                    <input
                      type='text'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      placeholder='Full Name'
                    />
                  </div>

                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      htmlFor='email'
                    >
                      Email
                    </label>
                    <input
                      type='email'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      placeholder='Email'
                    />
                  </div>

                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      htmlFor='message'
                    >
                      Message
                    </label>
                    <textarea
                      rows={4}
                      cols={80}
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm shadow focus:outline-none focus:ring w-full'
                      placeholder='Type a message...'
                    />
                  </div>
                  <div className='text-center mt-6'>
                    <button
                      className='bg-gray-700 text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                      type='button'
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
}

export default ContactUs