import React from 'react'
import Footer from '../Component/Navigation/Footer'
import Navbar from '../Component/Navigation/Navbar'
import Form from '../Component/RegisProduct/Form'

function RegisProducts() {
  return (
    <div>
      <Navbar/>
      <div className='bg-home bg-cover bg-no-repeat bg-fixed'>
        <div className='py-10 w-11/12 lg:w-4/5 xl:w-8/12 mx-auto'>
          <div className='p-5 bg-white rounded-lg drop-shadow-lg border border-[#e9ecef]'>
            <h2 className='font-bold text-4xl lg:text-5xl xl:text-6xl mb-10 text-[#333333]'>Register Products</h2>
            <Form/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default RegisProducts