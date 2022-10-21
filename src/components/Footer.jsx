import React from 'react'
import {FiGlobe} from 'react-icons/fi'

const Footer = () => {
  return (
    <div className='sticky left-0 right-0 bottom-0 flex px-20 py-6 justify-between bg-white border-t-2 border-t-slate-200 z-50'>
      <div className='flex space-x-4 items-center text-gray-600 text-lg'>
        <p>&c 2022,Dappbnb,inc.</p>
        <p>.Privacy</p>
        <p>.Terms</p>
        <p>.Sitemap</p>
        <p>.Destination</p>
      </div>
      <div className='flex space-x-4 items-center font-semibold text-lg'>
        <FiGlobe />
        <p>English(US)</p>
        <p>$US</p>
        <p>Support&reasources</p>
      </div>
    </div>
  )
}

export default Footer