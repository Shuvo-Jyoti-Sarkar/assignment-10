import React, { useState } from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';


import banner1 from '../../../images/banners/banner1.jpg';
import banner2 from '../../../images/banners/banner2.jpg';
import banner3 from '../../../images/banners/banner3.jpg';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block mx-auto w-50"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Travel far enough, you will meet yourself.</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block mx-auto w-50"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>You don't need magic to disappear,<br /> all you need is a destination.</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block mx-auto w-50"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Don't be a tourist,be a traveler.</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;