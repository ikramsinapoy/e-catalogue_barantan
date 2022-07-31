import React from 'react'
import Footer from '../Component/Navigation/Footer'
import Navbar from '../Component/Navigation/Navbar'
import CardEstate from '../Component/Products/CardEstate'

function Estate() {
  return (
    <div>
        <Navbar/>
        <div className='bg-estate h-96 w-full bg-cover bg-center bg-no-repeat bg-fixed flex flex-col justify-center'>
            <h2 className='font-bold text-4xl lg:text-5xl xl:text-6xl mb-10 text-white text-center backdrop-blur-sm w-fit mx-auto'>Estate Products</h2>
            <p className='text-2xl text-white text-center backdrop-blur-sm w-11/12 lg:w-fit mx-auto'>Indonesian coffee has a distinctive taste. Different acidity levels from each producing area.</p>
        </div>

        <div className='my-20 w-11/12 lg:w-3/4 mx-auto'>
          <CardEstate/>
        </div>
        <Footer/>
    </div>
  )
}

export default Estate