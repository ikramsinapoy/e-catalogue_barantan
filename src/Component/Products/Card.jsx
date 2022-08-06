import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import coffee from '../Asset/coffee.jpg';
// import coffee from 'https://unsplash.com/photos/XOhI_kW_TaM';
import ListCoffee from '../../products.json';
import axios from "axios";

function Card() {
    const { item } = useParams()
    // const [products, setProducts] = useState([])

    // const fetchProducts = () => {
    //     axios
    //     .get('http://localhost/codeIgniter/api/estate')
    //     .then((res) => {
    //         setProducts(res.data.data)
    //     })
    // }

    // useEffect(() => {
    //     fetchProducts();
    // }, [setProducts])

    console.log("products: ",item)

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center px-5'>
            {
                ListCoffee.map( value => {
                    return(
                        <>
                        { value.commodity === item ?
                            <div key={value.id} className='bg-white rounded-lg border border-[#f1f3f5] drop-shadow-md hover:drop-shadow-lg max-w-sm'>
                                <img src={value.picture} alt="#" className='h-48 w-full rounded-t-lg object-cover'/>
                                
                                <div className='p-5'>
                                    <h3 className='font-semibold text-3xl text-[#333333] mb-2'>{value.nameProducts}</h3>
                                    <p className='mb-5 text-[#555555]'>{value.description.slice(0, 100)}...</p>
                                    <Link to={`/detail-products/${value.id}`}>
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
            
            {/* <div className='bg-white rounded-lg border border-[#f1f3f5] drop-shadow-md hover:drop-shadow-lg max-w-sm'>
                <img src={coffee} className='h-48 w-full rounded-t-lg object-cover'/>
                
                <div className='p-5'>
                    <h3 className='font-semibold text-3xl text-[#333333] mb-2'>Toraja Coffee</h3>
                    <p className='mb-5 text-[#555555]'>The term complex is almost an understatement for this fine single origin coffee. This Toraja coffee offers an array of flavors including that of ripe fruit</p>
                    <div className='flex justify-center'>
                        <button className='text-white bg-primary p-2 rounded-lg w-8/12 hover:drop-shadow-lg'>Detail Products</button>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-lg border border-[#f1f3f5] drop-shadow-md hover:drop-shadow-lg max-w-sm'>
                <img src={coffee} className='h-48 w-full rounded-t-lg object-cover'/>
                
                <div className='p-5'>
                    <h3 className='font-semibold text-3xl text-[#333333] mb-2'>Toraja Coffee</h3>
                    <p className='mb-5 text-[#555555]'>The term complex is almost an understatement for this fine single origin coffee. This Toraja coffee offers an array of flavors including that of ripe fruit</p>
                    <div className='flex justify-center'>
                        <button className='text-white bg-primary p-2 rounded-lg w-8/12 hover:drop-shadow-lg'>Detail Products</button>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-lg border border-[#f1f3f5] drop-shadow-md hover:drop-shadow-lg max-w-sm'>
                <img src={coffee} className='h-48 w-full rounded-t-lg object-cover'/>
                
                <div className='p-5'>
                    <h3 className='font-semibold text-3xl text-[#333333] mb-2'>Toraja Coffee</h3>
                    <p className='mb-5 text-[#555555]'>The term complex is almost an understatement for this fine single origin coffee. This Toraja coffee offers an array of flavors including that of ripe fruit</p>
                    <div className='flex justify-center'>
                        <button className='text-white bg-primary p-2 rounded-lg w-8/12 hover:drop-shadow-lg'>Detail Products</button>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-lg border border-[#f1f3f5] drop-shadow-md hover:drop-shadow-lg max-w-sm'>
                <img src={coffee} className='h-48 w-full rounded-t-lg object-cover'/>
                
                <div className='p-5'>
                    <h3 className='font-semibold text-3xl text-[#333333] mb-2'>Toraja Coffee</h3>
                    <p className='mb-5 text-[#555555]'>The term complex is almost an understatement for this fine single origin coffee. This Toraja coffee offers an array of flavors including that of ripe fruit</p>
                    <div className='flex justify-center'>
                        <button className='text-white bg-primary p-2 rounded-lg w-8/12 hover:drop-shadow-lg'>Detail Products</button>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Card