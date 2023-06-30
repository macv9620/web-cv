import React from 'react'

const Turn = () => {
  return (
    <div className=''>
      <div className='fixed bg-[#2a9d8f] top-2 right-2 p-2 rounded-full shadow-7xl'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='white'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3'
          />
        </svg>
      </div>
    </div>
  )
}

export { Turn }
