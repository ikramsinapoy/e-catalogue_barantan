import React from 'react'
import { Slide } from 'react-slideshow-image';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import peternakan from '../Asset/peternakan.jpg'
import perkebunan from '../Asset/tanaman pangan.jpg'

function ImageSlider() {
    const slideImages = [
        peternakan,
        perkebunan
    ];
    return (
        <div className="slide-container w-1/2 mx-auto mb-10 drop-shadow-2xl">
            <Zoom scale={0.4}>
            {
                slideImages?.map((each, index) => <img key={index} src={each} className="h-full w-full rounded-lg z-[-1]" />)
            }
            </Zoom>
        </div>
    )
}

export default ImageSlider