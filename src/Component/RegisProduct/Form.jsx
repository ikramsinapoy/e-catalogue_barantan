import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Form() {
    // const [type, setType] = useState("")
    return (
        <div className=''>
            <h3 className='text-3xl xl:text-4xl text-[#333333] font-semibold'>Company</h3>
            <hr className='my-5'/>

            <form>
                <div className='flex flex-col md:flex-row md:items-center justify-between mb-3'>
                    <p className='text-lg'>Company Name</p>
                    <input className='border border-[#ced4da] rounded-md p-2 md:w-2/3' type="text"/>
                </div>
                
                <div className='flex flex-col md:flex-row md:items-center justify-between mb-3'>
                    <p className='text-lg'>Company Address</p>
                    <input className='border border-[#ced4da] rounded-md p-2 md:w-2/3' type="text"/>
                </div>

                <div className='flex flex-col md:flex-row md:items-center justify-between mb-7'>
                    <p className='text-lg'>Contact Person</p>
                    <input className='border border-[#ced4da] rounded-md p-2 md:w-2/3' type="phone"/>
                </div>

                <h3 className='text-3xl xl:text-4xl font-medium'>Products</h3>
                <hr className='my-5'/>
                
                <div className='flex flex-col md:flex-row md:items-center justify-between mb-3'>
                    <p className='text-lg'>Type Products</p>
                    <select className='border border-[#ced4da] rounded-md p-2 md:w-2/3'>
                        <option disabled>Select type</option>
                        <option value="estate">Estate</option>
                        <option value="horticulture">Horticulture</option>
                        <option value="corps">Corps</option>
                        <option value="animal">Animal</option>
                    </select>
                </div>

                <div className='flex flex-col md:flex-row md:items-center justify-between mb-3'>
                    <p className='text-lg'>Name Products</p>
                    <input className='border border-[#ced4da] rounded-md p-2 md:w-2/3' type="text"/>
                </div>

                <div className='flex flex-col md:flex-row md:items-center justify-between mb-3'>
                    <p className='text-lg'>Description Products</p>
                    <textarea className='border border-[#ced4da] rounded-md p-2 md:w-2/3' rows="4"></textarea>
                </div>

                <div className='flex flex-col md:flex-row md:items-center justify-between mb-3'>
                    <p className='text-lg'>Benefit Products</p>
                    <textarea className='border border-[#ced4da] rounded-md p-2 md:w-2/3' rows="3"></textarea>
                </div>

                <div className='flex flex-col md:flex-row md:items-center justify-between mb-3'>
                    <p className='text-lg'>Origin(s)</p>
                    <input className='border border-[#ced4da] rounded-md p-2 md:w-2/3' type="text"/>
                </div>

                <div className='flex flex-col md:flex-row md:items-center justify-between mb-3'>
                    <p className='text-lg'>Species</p>
                    <input className='border border-[#ced4da] rounded-md p-2 md:w-2/3' type="text"/>
                </div>

                <div className='flex flex-col md:flex-row md:items-center justify-between mb-7'>
                    <p className='text-lg'>Best Price</p>
                    <div className='md:w-2/3 flex flex-col md:flex-row md:items-center justify-between gap-2'>
                        <input className='border border-[#ced4da] rounded-md p-2 w-full' type="text"/>
                        <p className='text-lg ml-3 md:ml-0'>/</p>
                        <select className='border border-[#ced4da] rounded-md p-2 '>
                            <option value="gram">gram</option>
                            <option value="ons">hg(ons)</option>
                            <option value="kg">kg</option>
                        </select>
                    </div>
                    
                </div>

                <div className='flex justify-center'>
                    <Link to="/">
                        <button className='bg-primary hover:bg-[#2f9e44] text-white rounded-md p-2 w-52 font-medium text-lg hover:drop-shadow-md'>Submit</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Form