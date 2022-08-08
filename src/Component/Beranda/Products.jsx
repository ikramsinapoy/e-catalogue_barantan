import React from 'react'
import estate from '../Asset/landingPage/estate.jpg'
import horticulture from '../Asset/landingPage/satu.jpg'
import perkebunan from '../Asset/landingPage/2.jpg'
import animal from '../Asset/landingPage/cow.jpg'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <div className='mb-36'>
        <h2 className='font-bold text-6xl text-center mb-10 text-[#333333]'>Products</h2>

        <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-2 sm:gap-5 2xl:gap-12 my-24'>
            <div className='lg:w-2/5'>
                <h4 className='font-bold text-5xl text-left mb-3 text-[#333333]'>Estate Products</h4>
                <p className='text-xl text-left mb-5 text-[#555555]'>Indonesian coffee has a distinctive taste. Different acidity levels from each producing area.</p>
                <div className='flex justify-start'>
                    <Link to="/estate">
                        <button className='bg-primary hover:bg-[#2f9e44] text-white p-3 rounded-md'>
                            See Products
                        </button>
                    </Link>
                </div>
            </div>
            <img src={estate} className='w-full lg:w-1/2 h-48 md:h-60 2xl:h-96 object-cover rounded-xl'/>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-5 2xl:gap-12 my-24'>
            <img src={perkebunan} className='w-full lg:w-1/2 h-48 md:h-60 2xl:h-96 object-cover rounded-xl'/>
            <div className='lg:w-2/5'>
                <h4 className='font-bold text-5xl text-left mb-3 text-[#333333]'>Horticulture Products</h4>
                <p className='text-xl text-left mb-5 text-[#555555]'>Tropical fruits from Indonesia have a high diversity. The quality can compete in the global market.</p>
                <div className='flex justify-start'>
                    <Link to="/horticulture">
                        <button className='bg-primary hover:bg-[#2f9e44] text-white p-3 rounded-md'>
                            See Products
                        </button>
                    </Link>
                </div>
            </div>
        </div>

        <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-2 sm:gap-5 2xl:gap-12 my-24'>
            <div className='lg:w-2/5'>
                <h4 className='font-bold text-5xl text-left mb-3 text-[#333333]'>Crops Products</h4>
                <p className='text-xl text-left mb-5 text-[#555555]'>Indonesian food plants as a source of carbohyrates and other content are in great demand by other countries.</p>
                <div className='flex justify-start'>
                    <Link to="/crops">
                        <button className='bg-primary hover:bg-[#2f9e44] text-white p-3 rounded-md'>
                            See Products
                        </button>
                    </Link>
                </div>
            </div>
            <img src={horticulture} className='w-full lg:w-1/2 h-48 md:h-60 2xl:h-96 object-cover rounded-xl'/>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-5 2xl:gap-12 my-24'>
            <img src={animal} className='w-full lg:w-1/2 h-48 md:h-60 2xl:h-96 object-cover rounded-xl'/>
            <div className='lg:w-2/5'>
                <h4 className='font-bold text-5xl text-left mb-3 text-[#333333]'>Animal Products</h4>
                <p className='text-xl text-left mb-5 text-[#555555]'>Indonesian swiflet nests contains sialic acid which is beneficial for brain development. it also has low nitrite levels.</p>
                <div className='flex justify-start'>
                    <Link to="/animal">
                        <button className='bg-primary hover:bg-[#2f9e44] text-white p-3 rounded-md'>
                            See Products
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products