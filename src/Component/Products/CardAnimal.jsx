import React from 'react'
import { Link } from 'react-router-dom'
import birdNest from '../Asset/animal/birdNest.jpg'
import honey from '../Asset/animal/honey.jpg'
import maggot from '../Asset/animal/maggot.jpg'

function CardAnimal() {
  return (
    <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center px-5'>
            <div className='bg-white rounded-lg border border-[#f1f3f5] drop-shadow-md hover:drop-shadow-lg w-full max-w-sm'>
                <img src={birdNest} className='h-48 w-full rounded-t-lg object-cover'/>
                
                <div className='p-5'>
                    <h3 className='font-bold text-4xl mb-5 text-[#333333] text-center'>Bird's Nest</h3>
                    <Link to="/products">
                        <div className='flex justify-center'>
                            <button className='text-white bg-primary hover:bg-[#2f9e44] p-2 rounded-md w-8/12 hover:drop-shadow-md'>View Products</button>
                        </div>
                    </Link>
                </div>
            </div>

            <div className='bg-white rounded-lg border border-[#f1f3f5] drop-shadow-md hover:drop-shadow-lg w-full max-w-sm'>
                <img src={honey} className='h-48 w-full rounded-t-lg object-cover'/>
                
                <div className='p-5'>
                    <h3 className='font-bold text-4xl mb-5 text-[#333333] text-center'>Honey</h3>
                    <div className='flex justify-center'>
                        <button className='text-white bg-primary hover:bg-[#2f9e44] p-2 rounded-md w-8/12 hover:drop-shadow-md'>View Products</button>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-lg border border-[#f1f3f5] drop-shadow-md hover:drop-shadow-lg w-full max-w-sm'>
                <img src={maggot} className='h-48 w-full rounded-t-lg object-cover'/>
                
                <div className='p-5'>
                    <h3 className='font-bold text-4xl mb-5 text-[#333333] text-center'>Black Soldier Fly</h3>
                    <div className='flex justify-center'>
                        <button className='text-white bg-primary hover:bg-[#2f9e44] p-2 rounded-md w-8/12 hover:drop-shadow-md'>View Products</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardAnimal