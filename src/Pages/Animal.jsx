import React from 'react'
import Footer from '../Component/Navigation/Footer'
import Navbar from '../Component/Navigation/Navbar'
import CardAnimal from '../Component/Products/CardAnimal'

function Animal() {
  return (
    <div>
        <Navbar/>
        <div className='bg-animal h-96 w-full bg-cover bg-center bg-no-repeat bg-fixed flex flex-col justify-center'>
            <h2 className='font-bold text-4xl lg:text-5xl xl:text-6xl mb-10 text-white text-center backdrop-blur-sm w-fit mx-auto'>Animal Products</h2>
            <p className='text-2xl text-white text-center backdrop-blur-sm w-11/12 lg:w-fit mx-auto'>Indonesian swiflet nests contains sialic acid which is beneficial for brain development. it also has low nitrite levels.</p>
        </div>

        <div className='my-10 w-11/12 lg:w-3/4 mx-auto'>
          <CardAnimal/>
        </div>
        <Footer/>
    </div>
  )
}

export default Animal