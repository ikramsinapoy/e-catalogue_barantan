import React from 'react'
import Footer from '../Component/Navigation/Footer'
import Navbar from '../Component/Navigation/Navbar'
import ListCrops from '../crops.json'
import ListEstate from '../products.json'
import ListHorticulture from '../horticulture.json'
import ListAnimal from '../animal.json'

function RegisteredProducts() {
  return (
    <div>
        <Navbar/>
        <div className='my-20 w-11/12 lg:w-3/4 mx-auto'>
            <h2 className='font-bold text-4xl lg:text-5xl xl:text-6xl mb-10 text-[#333333] backdrop-blur-sm'>Registered Products</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-10 justify-items-center px-5'>
                {
                    ListEstate.map( value => {
                        return(
                            <div key={value.id} className='bg-white rounded-lg border border-[#f1f3f5] drop-shadow-md hover:drop-shadow-lg w-80 2xl:w-96 max-w-sm'>
                                
                                <img src={value.picture[0]} alt="#" className='h-48 w-full rounded-t-lg object-cover'/>
                                
                                <div className='p-5'>
                                    <h3 className='font-semibold text-2xl text-[#333333] mb-2'>{value.nameCompany}</h3>
                                    <p className='mb-2.5 text-[#555555] font-semibold text-xl'>{value.nameProducts}</p>
                                    <p className='text-[#555555] font-semibold text-lg'>{value.commodity}</p>
                                </div>
                            </div>
                        )
                        
                    })
                }
                {
                    ListHorticulture.map( value => {
                        return(
                            <div key={value.id} className='bg-white rounded-lg border border-[#f1f3f5] drop-shadow-md hover:drop-shadow-lg w-80 2xl:w-96 max-w-sm'>
                                
                                <img src={value.picture[0]} alt="#" className='h-48 w-full rounded-t-lg object-cover'/>
                                
                                <div className='p-5'>
                                    <h3 className='font-semibold text-3xl text-[#333333] mb-2'>{value.nameCompany}</h3>
                                    <p className='mb-2.5 text-[#555555] font-semibold text-xl'>{value.nameProducts}</p>
                                    <p className='text-[#555555] font-semibold text-lg'>{value.commodity}</p>
                                </div>
                            </div>
                        )
                        
                    })
                }
                {
                    ListCrops.map( value => {
                        return(
                            <div key={value.id} className='bg-white rounded-lg border border-[#f1f3f5] drop-shadow-md hover:drop-shadow-lg w-80 2xl:w-96 max-w-sm'>
                                
                                <img src={value.picture[0]} alt="#" className='h-48 w-full rounded-t-lg object-cover'/>
                                
                                <div className='p-5'>
                                    <h3 className='font-semibold text-3xl text-[#333333] mb-2'>{value.nameCompany}</h3>
                                    <p className='mb-2.5 text-[#555555] font-semibold text-xl'>{value.nameProducts}</p>
                                    <p className='text-[#555555] font-semibold text-lg'>{value.commodity}</p>
                                </div>
                            </div>
                        )
                        
                    })
                }
                {
                    ListAnimal.map( value => {
                        return(
                            <div key={value.id} className='bg-white rounded-lg border border-[#f1f3f5] drop-shadow-md hover:drop-shadow-lg w-80 2xl:w-96 max-w-sm'>
                                
                                <img src={value.picture[0]} alt="#" className='h-48 w-full rounded-t-lg object-cover'/>
                                
                                <div className='p-5'>
                                    <h3 className='font-semibold text-3xl text-[#333333] mb-2'>{value.nameCompany}</h3>
                                    <p className='mb-2.5 text-[#555555] font-semibold text-xl'>{value.nameProducts}</p>
                                    <p className='text-[#555555] font-semibold text-lg'>{value.commodity}</p>
                                </div>
                            </div>
                        )
                        
                    })
                }
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default RegisteredProducts