import React from 'react';
interface AccordionFieldProps {
  src: string;
  size?: string;
}

export const ImageSection: React.FC<AccordionFieldProps> = ({ src, size }) => {
  const [modal, setModal] = React.useState(false);
  return (
    <div className='lg:w-1/3 sm:w-1/2 p-4'>
      <div
        className={
          size
            ? 'rounded-lg h-full overflow-hidden'
            : `rounded-lg h-64 overflow-hidden`
        }
        onClick={() => setModal(true)}
      >
        <img
          alt='content'
          className={
            size
              ? `object-cover object-center h-full w-full hover:scale-125 transition-all duration-500  scale-95`
              : `object-cover object-center h-full w-full hover:scale-125 transition-all duration-500`
          }
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
                    className='object-cover object-center h-[500px] w-[600px]'
                    src={src}
                    // rounded-lg
                    // h-64
                    // overflow-hidden
                  />
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

const Events = () => {
  return (
    <div className='w-full'>
      {/* //TODO:HEADER */}
      <div className=' flex justify-center flex-col items-center mt-4'>
        <div className='text-4xl font-sans font-bold text-red-700'>
          Certificates
        </div>
      </div>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -m-4'>
            <ImageSection
              size='rounded-lg h-full overflow-hidden'
              src='/c_1.jpeg'
            />
            <ImageSection
              size='rounded-lg h-full overflow-hidden'
              src='/c_2.jpeg'
            />
            <ImageSection
              size='rounded-lg h-full overflow-hidden'
              src='/c_3.jpeg'
            />
            <ImageSection
              size='rounded-lg h-full overflow-hidden'
              src='/c_4.jpeg'
            />
            <ImageSection
              size='rounded-lg h-full overflow-hidden'
              src='/c_5.jpeg'
            />
            <ImageSection
              size='rounded-lg h-full overflow-hidden'
              src='/c_6.jpeg'
            />
            <ImageSection
              size='rounded-lg h-full overflow-hidden'
              src='/c_7.jpeg'
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
