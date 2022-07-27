import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import kopi from '../Asset/coffee.jpg'
import perkebunan from '../Asset/perkebunan.jpg'

function Carousel() {
    const slideImages = [
        kopi,
        perkebunan
    ];
    return (
        <div>
            <div className="slide-container h-1/2 border border-[#f1f3f5] rounded-xl">
                <Slide>
                {slideImages.map((slideImage, index)=> (
                    <div className="each-slide" key={index}>
                        <img src={slideImage} className='h-60 sm:h-72 lg:h-96 w-full object-cover rounded-xl'/>
                    </div>
                ))} 
                </Slide>
            </div>
        </div>
    )
}

export default Carousel