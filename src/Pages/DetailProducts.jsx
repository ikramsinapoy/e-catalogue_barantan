import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Footer from '../Component/Navigation/Footer'
import Navbar from '../Component/Navigation/Navbar'
import Carousel from '../Component/Products/Carousel'
import ProductsEstate from '../products.json'
import DetailEstate from '../Component/Products/DetailEstate'

function DetailProducts() {
    const navigate = useNavigate()
    const onClick = () => {
        navigate(-1)
    }
  return (
    <div>
        <Navbar/>
        <div className='my-10 w-11/12 lg:w-3/4 mx-auto'>
            <div className='mb-5'>
                <nav class="rounded-md w-full">
                    <ol class="list-reset flex">
                        <li><a href="#" onClick={onClick} class="text-[#1c7ed6] hover:text-blue">Products</a></li>
                        <li><span class="text-gray-500 mx-2">/</span></li>
                        <li class="text-gray-500">Detail Products</li>
                    </ol>
                </nav>
            </div>
            <DetailEstate/>
        </div>
        <Footer/>
    </div>
  )
}

export default DetailProducts

