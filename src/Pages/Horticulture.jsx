import React from 'react'
import Footer from '../Component/Navigation/Footer'
import Navbar from '../Component/Navigation/Navbar'
import CardHorticulture from '../Component/Products/CardHorticulture'

function Horticulture() {
  return (
    <div>
      <Navbar/>
      <div className='bg-horticulture bg-left-bottom h-96 w-full bg-cover bg-no-repeat bg-fixed flex flex-col justify-center'>
          <h2 className='font-bold text-4xl lg:text-5xl xl:text-6xl mb-10 text-white text-center backdrop-blur-sm w-fit mx-auto'>Horticulture Products</h2>
          <p className='text-2xl text-white text-center backdrop-blur-sm w-11/12 lg:w-fit mx-auto'>Tropical fruits from Indonesia have a high diversity. The quality can compete in the global market.</p>
      </div>

      <div className='my-10 w-11/12 lg:w-3/4 mx-auto'>
        <CardHorticulture/>
      </div>
      <Footer/>
    </div>
  )
}

export default Horticulture