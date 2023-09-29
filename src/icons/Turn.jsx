import React from 'react'
import './Turn.css'

const Turn = ({turnSide}) => {
  return (
    <div className='' onClick={turnSide}>
      <div className='turn-button-animation fixed bg-white top-2 right-2 p-1 rounded-full shadow-7xl opacity-40'>
        <svg
          className='h-5 w-5 text-red-500'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='black'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          {' '}
          <path stroke='none' d='M0 0h24v24H0z' />{' '}
          <path d='M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5' />{' '}
          <path d='M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5' />
        </svg>
      </div>
    </div>
  )
}

export { Turn }
