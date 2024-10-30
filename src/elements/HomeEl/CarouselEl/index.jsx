import React from 'react';
import { Carousel } from 'antd';
import b1 from '@/Assets/one.png';
import b2 from '@/Assets/two.png';
import b3 from '@/Assets/three.png';

const images = [b1, b2, b3];

export const CarouselEl = () => (
    <Carousel arrows infinite autoplay effect="scrollx">
        {images.map((image, index) => (
            <div key={index} className="relative w-full max-h-[70vh] ">
                <img
                    className="h-full w-full object-cover"
                    src={image.src}
                    alt={`Carousel Image ${index + 1}`}
                />
            </div>
        ))}
    </Carousel>
);

export default CarouselEl;
