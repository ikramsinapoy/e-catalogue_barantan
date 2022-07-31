import React from 'react'
import { Link } from 'react-router-dom'
import banana from '../Asset/horticulture/banana.jpg'
import mango from '../Asset/horticulture/mango.jpg'
import mangosteen from '../Asset/horticulture/mangosteen.jpg'
import pineapple from '../Asset/horticulture/pineapple.jpg'

function CardHorticulture() {
  return (
    <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 justify-items-center px-5'>
            <div className='bg-white rounded-lg border border-[#f1f3f5] drop-shadow-md hover:drop-shadow-lg w-full max-w-sm'>
                <img src={mangosteen} className='h-48 w-full rounded-t-lg object-cover'/>
                
                <div className='p-5'>
                    <h3 className='font-bold text-4xl mb-5 text-[#333333] text-center'>Mangosteen</h3>
                    <Link to="/products">
                        <div className='flex justify-center'>
                            <button className='text-white bg-primary hover:bg-[#2f9e44] p-2 rounded-lg w-8/12 hover:drop-shadow-md'>View Products</button>
                        </div>
                    </Link>
                </div>
            </div>

            <div className='bg-white rounded-lg border border-[#f1f3f5] drop-shadow-md hover:drop-shadow-lg w-full max-w-sm'>
                <img src={mango} className='h-48 w-full rounded-t-lg object-cover'/>
                
                <div className='p-5'>
                    <h3 className='font-bold text-4xl mb-5 text-[#333333] text-center'>Mango</h3>
                    <div className='flex justify-center'>
                        <button className='text-white bg-primary hover:bg-[#2f9e44] p-2 rounded-lg w-8/12 hover:drop-shadow-md'>View Products</button>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-lg border border-[#f1f3f5] drop-shadow-md hover:drop-shadow-lg w-full max-w-sm'>
                <img src={banana} className='h-48 w-full rounded-t-lg object-cover'/>
                
                <div className='p-5'>
                    <h3 className='font-bold text-4xl mb-5 text-[#333333] text-center'>Banana</h3>
                    <div className='flex justify-center'>
                        <button className='text-white bg-primary hover:bg-[#2f9e44] p-2 rounded-lg w-8/12 hover:drop-shadow-md'>View Products</button>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-lg border border-[#f1f3f5] drop-shadow-md hover:drop-shadow-lg w-full max-w-sm'>
                <img src={pineapple} className='h-48 w-full rounded-t-lg object-cover'/>
                
                <div className='p-5'>
                    <h3 className='font-bold text-4xl mb-5 text-[#333333] text-center'>Pineapple</h3>
                    <div className='flex justify-center'>
                        <button className='text-white bg-primary hover:bg-[#2f9e44] p-2 rounded-lg w-8/12 hover:drop-shadow-md'>View Products</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardHorticulture