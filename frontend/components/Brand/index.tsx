import React from 'react'
import Logo from '../Icons/Logo'

const Brand = () => {
  return (
    <div className='flex items-center gap-1'>
      <Logo />
      <h1 className="text-gray-500 text-xl font-bold"><span className='font-bold text-green-500'>Rookie</span>IT</h1>
    </div>
  )
}

export default Brand
