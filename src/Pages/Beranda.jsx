import React from 'react'
import ImageSlider from '../Component/Beranda/ImageSlider'
import Products from '../Component/Beranda/Products'
import Promote from '../Component/Beranda/Promote'
import Footer from '../Component/Navigation/Footer'
import Navbar from '../Component/Navigation/Navbar'

function Beranda() {
  return (
    <div>
        <Navbar/>
          <ImageSlider/>
          {/* <div className='bg-page bg-cover bg-no-repeat'> */}
            <div className='py-20 w-11/12 xl:w-3/4 mx-auto bg-white'>
              {/* <div className=''> */}
                <Products/>
                <Promote/>
              {/* </div> */}
              
            </div>
          {/* </div> */}
        
        
        <Footer/>
    </div>
  )
}

export default Beranda