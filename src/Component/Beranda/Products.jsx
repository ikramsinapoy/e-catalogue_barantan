import React from 'react'
import estate from '../Asset/perkebunan.jpg'
import horticulture from '../Asset/hortikultura.jpg'
import perkebunan from '../Asset/tanaman pangan.jpg'
import peternakan from '../Asset/peternakan.jpg'

function Products() {
  return (
    <div className='mb-36'>
        <h2 className='font-bold text-3xl text-center mb-10'>Products</h2>
        
        <div className='flex flex-col gap-10 md:gap-20 md:flex-row justify-center items-center'>
            <div className='w-48'>
                <img src={estate} className='w-48 h-48 rounded-full border border-[#e9ecef] drop-shadow mb-6 hover:drop-shadow-lg cursor-pointer'/>
                <h4 className='font-semibold text-xl text-center mb-1 cursor-pointer hover:underline'>Estate</h4>
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
        </div>
    </div>
  )
}

export default Products