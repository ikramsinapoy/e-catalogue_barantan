import React from 'react'
import { Link } from 'react-router-dom'
import coffee from '../Asset/coffee.jpg'
import pepper from '../Asset/pepper.jpg'
import nutmeg from '../Asset/nutmeg.jpg'
import vanili from '../Asset/vanili.jpg'
import { RiArrowRightSLine } from 'react-icons/ri';

function CardCommodity() {
  return (
    <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 justify-items-center px-5'>
            <div className='bg-white rounded-lg border border-[#f1f3f5] drop-shadow-md hover:drop-shadow-lg w-full max-w-sm'>
                <img src={coffee} className='h-48 w-full rounded-t-lg object-cover'/>
                
                <div className='p-5'>
                    <h3 className='font-bold text-4xl mb-5 text-[#333333] text-center'>Coffee Bean</h3>
                    <Link to="/products">
                        <div className='flex justify-center'>
                            <button className='text-white bg-primary hover:bg-[#2f9e44] p-2 rounded-lg w-8/12 hover:drop-shadow-md'>View Products</button>
                        </div>
                    </Link>
                </div>
            </div>

            <div className='bg-white rounded-lg border border-[#f1f3f5] drop-shadow-md hover:drop-shadow-lg w-full max-w-sm'>
                <img src={nutmeg} className='h-48 w-full rounded-t-lg object-cover'/>
                
                <div className='p-5'>
                    <h3 className='font-bold text-4xl mb-5 text-[#333333] text-center'>Nutmeg</h3>
                    <div className='flex justify-center'>
                        <button className='text-white bg-primary hover:bg-[#2f9e44] p-2 rounded-lg w-8/12 hover:drop-shadow-md'>View Products</button>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-lg border border-[#f1f3f5] drop-shadow-md hover:drop-shadow-lg w-full max-w-sm'>
                <img src={vanili} className='h-48 w-full rounded-t-lg object-cover'/>
                
                <div className='p-5'>
                    <h3 className='font-bold text-4xl mb-5 text-[#333333] text-center'>Vanili</h3>
                    <div className='flex justify-center'>
                        <button className='text-white bg-primary hover:bg-[#2f9e44] p-2 rounded-lg w-8/12 hover:drop-shadow-md'>View Products</button>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-lg border border-[#f1f3f5] drop-shadow-md hover:drop-shadow-lg w-full max-w-sm'>
                <img src={pepper} className='h-48 w-full rounded-t-lg object-cover'/>
                
                <div className='p-5'>
                    <h3 className='font-bold text-4xl mb-5 text-[#333333] text-center'>Pepper</h3>
                    <div className='flex justify-center'>
                        <button className='text-white bg-primary hover:bg-[#2f9e44] p-2 rounded-lg w-8/12 hover:drop-shadow-md'>View Products</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardCommodity