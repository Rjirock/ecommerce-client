import React, { useState, useEffect } from 'react';
import { Carousel } from 'antd';
import b1 from '@/Assets/one.png';
import b2 from '@/Assets/two.png';
import b3 from '@/Assets/three.png';

const images = [b1, b2, b3];

export const CarouselEl = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100); // slight delay to ensure proper loading
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className={`overflow-hidden w-full h-fit ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <Carousel arrows infinite autoplay effect="scrollx">
                    {images.map((image, index) => (
                        <div key={index} className="relative w-full max-h-[70vh]">
                            <img
                                className="h-full w-full object-cover"
                                src={image.src}
                                alt={`Carousel Image ${index + 1}`}
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
        </>
    );
};

export default CarouselEl;
