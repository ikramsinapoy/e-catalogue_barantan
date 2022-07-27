import React from 'react'
import Footer from '../Component/Navigation/Footer'
import Navbar from '../Component/Navigation/Navbar'
import Card from '../Component/Products/Card'

function Products() {
  return (
    <div>
        <Navbar/>
        <div className='my-20 w-11/12 lg:w-3/4 mx-auto'>
            <h1 className='text-3xl font-bold mb-14'>Coffee Bean</h1>
            <Card/>
        </div>
        <Footer/>
    </div>
  )
}

export default Products