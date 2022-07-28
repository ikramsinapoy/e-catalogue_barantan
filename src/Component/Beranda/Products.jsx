import React from 'react'
import estate from '../Asset/perkebunan.jpg'
import horticulture from '../Asset/landingPage/satu.jpg'
import perkebunan from '../Asset/landingPage/2.jpg'
import peternakan from '../Asset//landingPage/3.jpg'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <div className='mb-36'>
        <h2 className='font-bold text-6xl text-center mb-10 text-[#333333]'>Products</h2>
            {/* <div className='bg-home bg-scroll bg-center bg-cover bg-no-repeat h-48 md:h-60 flex justify-center items-center'>
                <div className='w-4/12'>
                    <h4 className='font-semibold text-2xl text-center mb-2.5 cursor-pointer text-white'>Horticulture</h4>
                    <p className='text-xl text-center mb-2.5 text-white'>Tropical fruits from Indonesia have a high diversity. The quality can compete in the global market.</p>
                    <div className='flex justify-center'>
                        <button className='bg-primary text-white p-2 rounded-md'>
                            See Products
                        </button>
                    </div>
                </div>
                <img src={horticulture} className='w-full md:w-5/12 h-48 md:h-60 object-cover mb-6 rounded-md'/>
            </div> */}

            <div className='flex flex-col-reverse md:flex-row items-center justify-around my-24'>
                <div className='w-2/5'>
                    <h4 className='font-bold text-5xl text-left mb-3 text-[#333333]'>Estate</h4>
                    <p className='text-xl text-left mb-5 text-[#555555]'>Indonesian coffee has a distinctive taste. Different acidity levels from each producing area.</p>
                    <div className='flex justify-start'>
                        <button className='bg-primary text-white p-3 rounded-md'>
                            See Products
                        </button>
                    </div>
                </div>
                <img src={horticulture} className='w-full md:w-1/2 h-48 md:h-96 object-cover mb-6 rounded'/>
            </div>

            <div className='flex flex-col md:flex-row items-center justify-around my-24'>
                <img src={perkebunan} className='w-full md:w-1/2 h-48 md:h-96 object-cover mb-6 rounded'/>

                <div className='w-2/5'>
                    <h4 className='font-bold text-5xl text-left mb-3 text-[#333333]'>Horticulture</h4>
                    <p className='text-xl text-left mb-5 text-[#555555]'>Tropical fruits from Indonesia have a high diversity. The quality can compete in the global market.</p>
                    <div className='flex justify-start'>
                        <button className='bg-primary text-white p-3 rounded-md'>
                            See Products
                        </button>
                    </div>
                </div>
            </div>

            <div className='flex flex-col-reverse md:flex-row items-center justify-around my-24'>
                <div className='w-2/5'>
                    <h4 className='font-bold text-5xl text-left mb-3 text-[#333333]'>Crops</h4>
                    <p className='text-xl text-left mb-5 text-[#555555]'>Indonesian food plants as a source of carbohyrates and other content are in great demand by other countries.</p>
                    <div className='flex justify-start'>
                        <button className='bg-primary text-white p-3 rounded-md'>
                            See Products
                        </button>
                    </div>
                </div>
                <img src={horticulture} className='w-full md:w-1/2 h-48 md:h-96 object-cover mb-6 rounded'/>
            </div>

            <div className='flex flex-col md:flex-row items-center justify-around my-24'>
                <img src={perkebunan} className='w-full md:w-1/2 h-48 md:h-96 object-cover mb-6 rounded'/>

                <div className='w-2/5'>
                    <h4 className='font-bold text-5xl text-left mb-3 text-[#333333]'>Animal</h4>
                    <p className='text-xl text-left mb-5 text-[#555555]'>Indonesian swiflet nests contains sialic acid which is beneficial for brain development. it also has low nitrite levels.</p>
                    <div className='flex justify-start'>
                        <button className='bg-primary text-white p-3 rounded-md'>
                            See Products
                        </button>
                    </div>
                </div>
            </div>

        {/* <div className='flex flex-col gap-10 md:gap-20 md:flex-row justify-center items-center'>
            <div className='w-48'>
                <Link to="/products">
                    <img src={estate} className='w-48 h-48 rounded-full border border-[#e9ecef] drop-shadow mb-6 hover:drop-shadow-lg cursor-pointer'/>
                    <h4 className='font-semibold text-xl text-center mb-1 cursor-pointer hover:underline'>Estate</h4>
                </Link>
                <p className='text-base text-center'>Indonesian coffee has a distinctive taste. Different acidity levels from each producing area.</p>
            </div>

            <div className='w-48'>
                <img src={horticulture} className='w-48 h-48 object-cover rounded-full border border-[#e9ecef] drop-shadow mb-6 hover:drop-shadow-lg cursor-pointer'/>
                <h4 className='font-semibold text-xl text-center mb-1 cursor-pointer hover:underline'>Horticulture</h4>
                <p className='text-base text-center'>Tropical fruits from Indonesia have a high diversity. The quality can compete in the global market.</p>
            </div>

            <div className='w-48'>
                <img src={perkebunan} className='w-48 h-48 object-cover rounded-full border border-[#e9ecef] drop-shadow mb-6 hover:drop-shadow-lg cursor-pointer'/>
                <h4 className='font-semibold text-xl text-center mb-1 cursor-pointer hover:underline'>Crops</h4>
                <p className='text-base text-center'>Indonesian food plants as a source of carbohyrates and other content are in great demand by other countries.</p>
            </div>

            <div className='w-48'>
                <img src={peternakan} className='w-48 h-48 object-cover rounded-full border border-[#e9ecef] drop-shadow mb-6 hover:drop-shadow-lg cursor-pointer'/>
                <h4 className='font-semibold text-xl text-center mb-1 cursor-pointer hover:underline'>Animal</h4>
                <p className='text-base text-center'>Indonesian swiflet nests contains sialic acid which is beneficial for brain development. it also has low nitrite levels.</p>
            </div>
        </div> */}
    </div>
  )
}

export default Products