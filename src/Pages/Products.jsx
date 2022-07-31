import React from 'react'
import Footer from '../Component/Navigation/Footer'
import Navbar from '../Component/Navigation/Navbar'
import Card from '../Component/Products/Card'

function Products() {
  return (
    <div>
        <Navbar/>
        <div className='my-20 w-11/12 lg:w-3/4 mx-auto'>
          <h2 className='font-bold text-4xl lg:text-5xl xl:text-6xl mb-10 text-[#333333] backdrop-blur-sm'>Products</h2>
          <Card/>
        </div>
        <Footer/>
    </div>
  )
}

export default Products