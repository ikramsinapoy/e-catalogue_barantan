import React from 'react'
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { ImWhatsapp } from 'react-icons/im';

function Footer() {
  return (
    <div className='border-t border-[#e9ecef] bg-white'>
      <div className='flex gap-3 justify-center pt-3'>
        <a className='cursor-pointer'><BsInstagram/></a>
        <a className='cursor-pointer'><BsTwitter/></a>
        <a className='cursor-pointer'><ImWhatsapp/></a>
      </div>
      <div className='flex justify-center p-3'>
        <a className='hover:underline hover:cursor-pointer'>karantina.deptan.go.id</a>
      </div>
      
      <div className='bg-primary text-white p-2'>
        <p className='text-center'>Copyright &copy; 2022 e-catalogue</p>
        <p className='text-center'>Indonesian Quarantine Agency, Ministry of Agriculture</p>
      </div>
      
    </div>
  )
}

export default Footer