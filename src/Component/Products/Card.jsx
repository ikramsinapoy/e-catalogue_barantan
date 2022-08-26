import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import coffee from '../Asset/coffee.jpg';
import ListCoffee from '../../products.json';
import { Axios } from '../../Helper/axios';

function Card() {
    const { item } = useParams()
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        await Axios
        .get('/mahasiswa')
        .then((res) => {
            setProducts(res.data.data)
        })
    }         

    useEffect(() => {
        fetchProducts();
    }, [])

    console.log("products: ",products)

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center px-5'>
            {
                ListCoffee.map( value => {
                    return(
                        <>
                        { value.commodity === item ?
                            <div key={value.id} className='bg-white rounded-lg border border-[#f1f3f5] drop-shadow-md hover:drop-shadow-lg max-w-sm'>
                                <img src={value.picture[0]} alt="#" className='h-48 w-full rounded-t-lg object-cover'/>
                                
                                <div className='p-5'>
                                    <h3 className='font-semibold text-3xl text-[#333333] mb-2'>{value.nameProducts}</h3>
                                    <p className='mb-5 text-[#555555]'>{value.description.slice(0, 100)}...</p>
                                    <Link to={`/detail-estate/${value.id}`}>
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
    )
}

export default Card