import React from 'react'
import { Link } from 'react-router-dom'

function Form() {
  return (
    <div className=''>
        <h3 className='text-2xl font-medium'>Company</h3>
        <hr className='my-5'/>

        <form>
            <div className='flex flex-col md:flex-row md:items-center justify-between mb-3'>
                <p className='text-lg'>Nama Perusahaan</p>
                <input className='border border-[#ced4da] rounded-lg p-2 md:w-2/3' type="text"/>
            </div>
            
            <div className='flex flex-col md:flex-row md:items-center justify-between mb-3'>
                <p className='text-lg'>Alamat Perusahaan</p>
                <input className='border border-[#ced4da] rounded-lg p-2 md:w-2/3' type="text"/>
            </div>

            <div className='flex flex-col md:flex-row md:items-center justify-between mb-7'>
                <p className='text-lg'>Kontak Perusahaan</p>
                <input className='border border-[#ced4da] rounded-lg p-2 md:w-2/3' type="phone"/>
            </div>

            <h3 className='text-2xl font-medium'>Products</h3>
            <hr className='my-5'/>
            
            <div className='flex items-center justify-between mb-3'>
                <p className='text-lg'>Type Products</p>
                <select className='border border-[#ced4da] rounded-lg p-2 w-2/3'>
                    <option disabled>Select type</option>
                    <option value="estate">Estate</option>
                    <option value="horticulture">Horticulture</option>
                    <option value="corps">Corps</option>
                    <option value="animal">Animal</option>
                </select>
            </div>

            <div className='flex items-center justify-between mb-3'>
                <p className='text-lg'>Name Products</p>
                <input className='border border-[#ced4da] rounded-lg p-2 w-2/3' type="text"/>
            </div>

            <div className='flex items-center justify-between mb-3'>
                <p className='text-lg'>Name Products</p>
                <textarea className='border border-[#ced4da] rounded-lg p-2 w-2/3' rows="4"></textarea>
            </div>

            <div className='flex items-center justify-between mb-3'>
                <p className='text-lg'>Origin(s)</p>
                <input className='border border-[#ced4da] rounded-lg p-2 w-2/3' type="text"/>
            </div>

            <div className='flex items-center justify-between mb-3'>
                <p className='text-lg'>Species</p>
                <input className='border border-[#ced4da] rounded-lg p-2 w-2/3' type="text"/>
            </div>

            <div className='flex items-center justify-between mb-7'>
                <p className='text-lg'>Best Price</p>
                <input className='border border-[#ced4da] rounded-lg p-2 w-2/3' type="text"/>
            </div>

            <div className='flex justify-center'>
                <Link to="/">
                    <button className='bg-primary text-white rounded-xl p-2 w-52 font-medium text-lg hover:drop-shadow-xl'>Submit</button>
                </Link>
            </div>
        </form>
    </div>
  )
}

export default Form