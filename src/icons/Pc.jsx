import React from 'react'

const Pc = () => {
  return (
    <svg
      className='h-12 w-12 text-red-500'
      viewBox='0 0 24 24'
      fill='none'
      stroke='#9CA3AF'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      {' '}
      <path d='M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1' />{' '}
      <polygon points='12 15 17 21 7 21 12 15' />
    </svg>
  )
}

export { Pc }