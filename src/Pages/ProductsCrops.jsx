import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Footer from '../Component/Navigation/Footer'
import Navbar from '../Component/Navigation/Navbar'
import ListProducts from '../crops.json'

function ProductsCrops() {
    const navigate = useNavigate()
    const { item } = useParams()
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
                            <li><a href="#" onClick={onClick} class="text-[#1c7ed6] hover:text-blue">Commodity</a></li>
                            <li><span class="text-gray-500 mx-2">/</span></li>
                            <li class="text-gray-500">Products</li>
                        </ol>
                    </nav>
                </div>

                <h2 className='font-bold text-4xl lg:text-5xl xl:text-6xl mb-10 text-[#333333] backdrop-blur-sm'>Products</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center px-5'>
                    {
                        ListProducts.map( value => {
                            return(
                                <>
                                { value.commodity === item ?
                                    <div key={value.id} className='bg-white rounded-lg border border-[#f1f3f5] drop-shadow-md hover:drop-shadow-lg max-w-sm'>
                                        
                                        <img src={value.picture[0]} alt="#" className='h-48 w-full rounded-t-lg object-cover'/>
                                        
                                        <div className='p-5'>
                                            <h3 className='font-semibold text-3xl text-[#333333] mb-2'>{value.nameProducts}</h3>
                                            <p className='mb-5 text-[#555555]'>{value.description.slice(0, 100)}...</p>
                                            <Link to={`/detail-crops/${value.id}`}>
                                                <div className='flex justify-center'>
                                                    <button className='text-white bg-primary p-2 rounded-md w-8/12 hover:drop-shadow-lg'>Detail Products</button>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    :
                                    null
                                }
                                </>
                            )
                            
                        })
                    }
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ProductsCrops