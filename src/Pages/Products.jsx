import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../Component/Navigation/Footer'
import Navbar from '../Component/Navigation/Navbar'
import Card from '../Component/Products/Card'

function Products() {
  const navigate = useNavigate()
  const onClick = () => {
      navigate(-1)
  }

  return (
    <div>
        <Navbar/>
        <div className='my-20 w-11/12 lg:w-3/4 mx-auto'>
          <div className='mb-5'>
              <nav class="rounded-md w-full">
                  <ol class="list-reset flex">
                      <li><a href="#" onClick={onClick} class="text-[#1c7ed6] hover:text-blue">Commodity</a></li>
                      <li><span class="text-gray-500 mx-2">/</span></li>
                      <li class="text-gray-500">Products</li>
                  </ol>
              </nav>
          </div>

          <h2 className='font-bold text-4xl lg:text-5xl xl:text-6xl mb-10 text-[#333333] backdrop-blur-sm'>Products</h2>
          <Card/>
        </div>
        <Footer/>
    </div>
  )
}

export default Products