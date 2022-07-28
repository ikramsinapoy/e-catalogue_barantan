import React from 'react'
import { Link } from 'react-router-dom'
import logoPertanian from '../Asset/logo.png'
import logo from '../Asset/Logo_Barantan.png'

function Navbar() {
    return (
        <div className='border-b border-[#e9ecef] drop-shadow bg-white sticky top-0 z-20'>
            <div className='w-3/4 mx-auto flex justify-between items-center py-4'>
                <Link to="/">
                    <img src={logo} className='w-10 cursor-pointer'/>
                </Link>
                <img src={logoPertanian} className='w-10'/>
            </div>
        </div>
    )
}

export default Navbar