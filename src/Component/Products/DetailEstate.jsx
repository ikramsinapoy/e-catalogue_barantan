import React from 'react'
import { useParams } from 'react-router-dom';
import ListCoffee from '../../products.json';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

function DetailEstate() {
    const { idProducts }  = useParams()

  return (
    <div>
        <div>
            {ListCoffee.map( value => {
                return(
                    <>
                    {value.id == idProducts ?
                        <div>
                            <div className="slide-container h-1/2 border border-[#f1f3f5] rounded-xl">
                                <Slide>
                                {value.picture.map((slideImage, index)=> (
                                    <div className="each-slide" key={index}>
                                        <img src={slideImage} className='h-60 sm:h-72 lg:h-96 w-full object-cover rounded-xl'/>
                                    </div>
                                ))} 
                                </Slide>
                            </div>
                            <div className='mt-10'>
                                <div className='mb-10'>
                                    <h1 className='text-5xl font-bold mb-5 text-[#333333]'>{value.nameProducts}</h1>
                                    <h3 className='text-2xl font-medium mb-2 text-[#333333]'>$ {value.price} / {value.unit}</h3>
                                    <p className='mb-10 text-[#555555] text-xl'>
                                        {value.description}
                                    </p>
                                </div>
                                
                                <div className='mb-10'>
                                    <h3 className='text-3xl font-bold mb-5 border-b border-[#dee2e6] pb-5'>Spesification</h3>
                                    <ul className='text-[#555555] text-xl'>
                                        <li className='flex'>
                                            <p className='w-28 sm:w-40'>Origin(s)</p>
                                            <p className=''>: {value.origin}</p>
                                        </li>
                                        <li className='flex'>
                                            <p className='w-28 sm:w-40'>Species</p>
                                            <p className=''>: {value.species} </p>
                                        </li>
                                        <li className='flex'>
                                            <p className='w-28 sm:w-40'>Benefit</p>
                                            <p className=''>: {value.benefit}</p>
                                        </li>
                                    </ul>
                                </div>
                                

                                <h3 className='text-3xl font-bold mb-5 border-b border-[#dee2e6] pb-5'>Company</h3>
                                <ul className='text-[#555555] text-xl'>
                                    <li className='flex'>
                                        <p className='w-28 sm:w-40'>Company Name</p>
                                        <p className=''>: {value.nameCompany}</p>
                                    </li>
                                    <li className='flex'>
                                        <p className='w-28 sm:w-40'>Address</p>
                                        <p className=''>: {value.addressCompany} </p>
                                    </li>
                                    <li className='flex'>
                                        <p className='w-28 sm:w-40'>Contact Person</p>
                                        <p className=''>: {value.contactCompany} ({value.person})</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        :
                        null
                    }
                    </>
                )
            })}
            
        </div>
    </div>
  )
}

export default DetailEstate