import React from 'react'
import logoGratieks from '../Asset/logoGratieks.png'

function ImageSlider() {
    return (
        <div className="bg-home bg-fixed h-screen bg-cover bg-no-repeat flex bg-right-bottom">
            <div className='my-auto w-11/12 lg:w-fit mx-auto'>
                <img src={logoGratieks} className='backdrop-blur-sm rounded-md w-72 mx-auto'/>
                <h1 className='text-7xl text-center font-bold text-white drop-shadow-2xl mb-10 w-fit mx-auto backdrop-blur-sm'>E-Catalog</h1>
                <p className='text-4xl text-center text-white drop-shadow-2xl backdrop-blur-sm'>
                    Indonesian Agriculture Export Commodities
                </p>
            </div>
        </div>
    )
}

export default ImageSlider