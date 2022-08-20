import React from 'react';

export const ImageSection = () => {
  const [modal, setModal] = React.useState(false);
  return (
    <div className='lg:w-1/3 sm:w-1/2 p-4'>
      <div
        className='rounded-lg h-64 overflow-hidden'
        onClick={() => setModal(true)}
      >
        <img
          alt='content'
          className='object-cover object-center h-full w-full hover:scale-125 transition-all duration-500'
          src='https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
        />
      </div>
      {modal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-6 mx-auto max-w-3xl'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/*header*/}
                {/*body*/}
                <div className='relative p-6 flex-auto'>
                  <img
                    alt='content'
                    className='object-cover object-center h-[500px] w-[600px]'
                    src='https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                  />
                </div>
                {/*footer*/}
                <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                  <button
                    className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => setModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}

      {/* <div className='flex relative'>
        <img
          alt='gallery'
          className='absolute inset-0 w-full h-full object-cover object-center'
          src='https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
        />
        <div className='px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100'>
          <h2 className='tracking-widest text-sm title-font font-medium text-green-500 mb-1'>
            THE SUBTITLE
          </h2>
          <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
            The Catalyzer
          </h1>
          <p className='leading-relaxed'>
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </p>
        </div>
      </div> */}
    </div>
  );
};

const Gallery = () => {
  return (
    <div className='w-full'>
      {/* //TODO:HEADER */}
      <div className=' flex justify-center flex-col items-center mt-4'>
        <div className='text-4xl font-sans font-bold'>Gallery</div>
      </div>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -m-4'>
            <ImageSection />
            <ImageSection />
            <ImageSection />
            <ImageSection />
            <ImageSection />
            <ImageSection />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
