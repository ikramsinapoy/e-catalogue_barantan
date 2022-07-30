import React from 'react'
import visit from '../Asset/visit.png'
import dataPerusahaan from '../Asset/data perusahaan.png'
import dataKomoditas from '../Asset/data komoditas.png'
import post from '../Asset/post.png'
import { Link } from 'react-router-dom'

function Promote() {
  return (
    <div>
        <h2 className='font-bold text-6xl text-center mb-10 text-[#333333]'>How To Promotes</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-12 2xl:gap-20 justify-items-center content-center mb-16'>
            <div className='w-48'>
                <img src={visit} className='w-48 h-48 drop-shadow mb-6'/>
                <h4 className='font-bold text-5xl text-center mb-2 text-[#333333]'>01</h4>
                <p className='text-xl text-center text-[#555555]'>Visit <span className='font-bold'>e-catalog</span> website</p>
            </div>

            <div className='w-48'>
                <img src={dataPerusahaan} className='w-48 h-48 drop-shadow mb-6'/>
                <h4 className='font-bold text-5xl text-center mb-2 text-[#333333]'>02</h4>
                <p className='text-xl text-center text-[#555555]'>Fill In Company Profile</p>
            </div>

            <div className='w-48'>
                <img src={dataKomoditas} className='w-48 h-48 drop-shadow mb-6'/>
                <h4 className='font-bold text-5xl text-center mb-2 text-[#333333]'>03</h4>
                <p className='text-xl text-center text-[#555555]'>Fill In Commodity Data</p>
            </div>

            <div className='w-48'>
                <img src={post} className='w-48 h-48 drop-shadow mb-6'/>
                <h4 className='font-bold text-5xl text-center mb-2 text-[#333333]'>04</h4>
                <p className='text-xl text-center text-[#555555]'>Post</p>
            </div>
        </div>

        <div className='flex justify-center'>
            <Link to="/registrasi-products">
                <button className='bg-primary text-white p-3 rounded-md w-52 font-medium text-lg hover:drop-shadow-xl'>promote me!</button>
            </Link>
        </div>
    </div>
  )
}

export default Promote