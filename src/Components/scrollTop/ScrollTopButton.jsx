import React from 'react'

const ScrollTopButton = () => {
  return (
    <div className='fixed bottom-10 right-10 bg-gray-600 p-[4px] rounded'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        className='w-[30px] h-[30px]'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M4.5 15.75l7.5-7.5 7.5 7.5'
        />
      </svg>
    </div>
  )
}

export { ScrollTopButton }
