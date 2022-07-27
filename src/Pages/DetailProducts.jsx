import React from 'react'
import Footer from '../Component/Navigation/Footer'
import Navbar from '../Component/Navigation/Navbar'
import Carousel from '../Component/Products/Carousel'

function DetailProducts() {
  return (
    <div>
        <Navbar/>
        <div className='my-20 w-11/12 lg:w-3/4 mx-auto'>
            <Carousel/>
            <div className='mt-10'>
                <div className='mb-10'>
                    <h1 className='text-3xl font-semibold mb-5'>Toraja Coffee</h1>
                    <h3 className='text-2xl font-medium mb-2'>$5.55 - $11.79 / 500 gr</h3>
                    <p className='mb-10'>
                        Commonly called Madagascar Bourbon Vanilla, this plant actually originates from Mexico, but entered Indonesia in 1819 and it turns out to be more fertile in Indonesia because it has a more tropical climate, so that it has higher levels of vanilin, Indonesia has the best quality in the world for this type, its gourmet or prime of vanilla beans. higher moisture and best for extraction process.
                    </p>
                </div>

                <h3 className='text-2xl font-medium mb-5 border-b border-[#dee2e6] pb-5'>Spesification</h3>
                <ul>
                    <li className='flex'>
                        <p className='w-28 sm:w-32'>Origin(s)</p>
                        <p className=''>: Indonesia, Sumatra, Gayo </p>
                    </li>
                    <li className='flex'>
                        <p className='w-28 sm:w-32'>Species</p>
                        <p className=''>: Arabica </p>
                    </li>
                    <li className='flex'>
                        <p className='w-28 sm:w-32'>Roast</p>
                        <p className=''>: Medium</p>
                    </li>
                    <li className='flex'>
                        <p className='w-28 sm:w-32'>Body</p>
                        <p className=''>: Heavy, syrupy </p>
                    </li>
                    <li className='flex'>
                        <p className='w-28 sm:w-32'>Taste</p>
                        <p className=''>: Rich, earthy & spicy notes</p>
                    </li>
                    <li className='flex'>
                        <p className='w-28 sm:w-32'>Fragnance</p>
                        <p className=''>: Exotic, earthy </p>
                    </li>
                    <li className='flex'>
                        <p className='w-28 sm:w-32'>Aroma</p>
                        <p className=''>: Earthy, spicy </p>
                    </li>
                    <li className='flex'>
                        <p className='w-28 sm:w-32'>Sweetness</p>
                        <p className=''>: Moderate </p>
                    </li>
                    <li className='flex'>
                        <p className='w-28 sm:w-32'>Acidity</p>
                        <p className=''>: Low </p>
                    </li>
                </ul>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default DetailProducts