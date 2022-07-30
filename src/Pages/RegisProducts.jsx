import React from 'react'
import Footer from '../Component/Navigation/Footer'
import Navbar from '../Component/Navigation/Navbar'
import Form from '../Component/RegisProduct/Form'

function RegisProducts() {
  return (
    <div>
        <Navbar/>

        <div className='my-20 w-11/12 md:w-8/12 mx-auto'>
            <h2 className='font-bold text-6xl mb-10 text-[#333333]'>Register Products</h2>
            <Form/>
        </div>
        <Footer/>
    </div>
  )
}

export default RegisProducts