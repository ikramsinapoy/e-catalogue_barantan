import React from 'react'
import Footer from '../Component/Navigation/Footer'
import Navbar from '../Component/Navigation/Navbar'
import Form from '../Component/RegisProduct/Form'

function RegisProducts() {
  return (
    <div>
        <Navbar/>

        <div className='my-20 w-11/12 md:w-8/12 mx-auto'>
            <h1 className='text-3xl font-bold mb-14'>Regsiter Products</h1>
            <Form/>
        </div>
        <Footer/>
    </div>
  )
}

export default RegisProducts