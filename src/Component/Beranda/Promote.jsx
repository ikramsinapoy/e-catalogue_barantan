import React from 'react'
import visit from '../Asset/visit.png'
import dataPerusahaan from '../Asset/data perusahaan.png'
import dataKomoditas from '../Asset/data komoditas.png'
import post from '../Asset/post.png'
import { Link } from 'react-router-dom'

function Promote() {
  return (
    <div>
        <h2 className='font-bold text-3xl text-center mb-10'>How To Promotes</h2>

        <div className='flex flex-col gap-10 md:gap-20 md:flex-row justify-center items-center mb-10'>
            <div className='w-48'>
                <img src={visit} className='w-48 h-48 drop-shadow mb-6'/>
                <h4 className='font-medium text-3xl text-center mb-1'>01</h4>
                <p className='text-base text-center'>Kunjungi website e-catalog <span className='font-bold'>www.e-catalogue.com</span></p>
            </div>

            <div className='w-48'>
                <img src={dataPerusahaan} className='w-48 h-48 drop-shadow mb-6'/>
                <h4 className='font-medium text-3xl text-center mb-1'>02</h4>
                <p className='text-base text-center'>Mengisi data perusahaan</p>
            </div>

            <div className='w-48'>
                <img src={dataKomoditas} className='w-48 h-48 drop-shadow mb-6'/>
                <h4 className='font-medium text-3xl text-center mb-1'>03</h4>
                <p className='text-base text-center'>Mengisi data komoditas</p>
            </div>

            <div className='w-48'>
                <img src={post} className='w-48 h-48 drop-shadow mb-6'/>
                <h4 className='font-medium text-3xl text-center mb-1'>04</h4>
                <p className='text-base text-center'>Post</p>
            </div>
        </div>

        <div className='flex justify-center'>
            <Link to="/registrasi-products">
                <button className='bg-primary text-white rounded-xl p-2 w-52 font-medium text-lg hover:drop-shadow-xl'>promote me!</button>
            </Link>
        </div>
    </div>
  )
}

export default Promote