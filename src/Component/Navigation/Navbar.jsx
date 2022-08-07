import React from 'react'
import { Link } from 'react-router-dom'
import logoPertanian from '../Asset/logo.png'
import logo from '../Asset/Logo_Barantan.png'
import { RiArrowDownSFill } from 'react-icons/ri';

function Navbar() {
    return (
        <div>
        <nav className="relative w-full flex flex-wrap items-center justify-between py-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light">
            <div className="container-fluid w-11/12 md:w-9/12 mx-auto flex flex-wrap items-center justify-between px-6">
                <button className="navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
                        className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor"
                        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                        </path>
                    </svg>
                </button>

                <div className="collapse navbar-collapse flex-grow items-center pb-2 lg:pb-0" id="navbarSupportedContent">
                    <a className="flex items-center mt-2 lg:mt-0 mr-1" href="/">
                        <img src={logo} className="w-10" alt=""
                        loading="lazy" />
                    </a>

                    <div className='w-fit lg:mx-auto mt-3'>
                        <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                            <li className="nav-item p-2">
                                <Link to='/'>
                                    <a className="nav-link text-[#333333] hover:text-[#555555] font-semibold focus:text-[#555555] p-0" href="#">Beranda</a>
                                </Link>
                            </li>
                            <li className="nav-item p-2">
                                <div className="dropdown relative">
                                    <div className='flex items-center hidden-arrow gap-2 dropdown-toggle' id="dropdownMenuButton2" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                        <p className='text-[#333333] hover:text-[#555555] focus:text-[#555555] font-semibold flex items-center'>Products <RiArrowDownSFill/></p>
                                    </div>
                                    <ul className="
                                    dropdown-menu
                                    min-w-max
                                    absolute
                                    hidden
                                    bg-white
                                    text-base
                                    z-50
                                    float-left
                                    py-2
                                    list-none
                                    text-left
                                    rounded-lg
                                    shadow-lg
                                    mt-1
                                    m-0
                                    bg-clip-padding
                                    border-none
                                    left-auto
                                    right-0
                                " aria-labelledby="dropdownMenuButton2">
                                    <li>
                                        <a className="dropdown-item py-2 px-4 block w-full whitespace-nowrap bg-transparent font-Inter font-semibold text-black text-sm hover:bg-[#f8f9fa]" href="/estate">
                                            <div className='flex gap-2 items-center'>Estate</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item py-2 px-4 block w-full whitespace-nowrap bg-transparent font-Inter font-semibold text-black text-sm hover:bg-[#f8f9fa]" href="/horticulture">
                                            <div className='flex gap-2 items-center'>Horticulture</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item py-2 px-4 block w-full whitespace-nowrap bg-transparent font-Inter font-semibold text-black text-sm hover:bg-[#f8f9fa]" href="/crops">
                                            <div className='flex gap-2 items-center'>Crops</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item py-2 px-4 block w-full whitespace-nowrap bg-transparent font-Inter font-semibold text-black text-sm hover:bg-[#f8f9fa]" href="/animal">
                                            <div className='flex gap-2 items-center'>Animal</div>
                                        </a>
                                    </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item p-2">
                                <Link to="/registered-products">
                                    <a className="nav-link text-[#333333] hover:text-[#555555] font-semibold focus:focus:text-[#555555] p-0" href="#">Registered Products</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex items-center relative">
                    <img src={logoPertanian} className='w-10'/>
                </div>
            </div>
        </nav>
    </div>
    )
}

export default Navbar