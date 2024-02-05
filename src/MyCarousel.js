import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Carousel } from 'react-bootstrap'; // Import Bootstrap Carousel component
import farmer1 from '../' // Import images using relative path
// import pxfuel from '../home/rguktongole/Desktop/pxfuel.jpg'; Import images using relative path

function MyCarousel() {
    const [index, setIndex] = useState(0); // Manage active slide
    const [isSliding, setIsSliding] = useState(true); // Control automatic sliding

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    // Function to toggle automatic sliding
    const toggleAutoSlide = () => {
        setIsSliding(!isSliding);
    };

    // Function to manually go to the previous slide
    const goToPrevSlide = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
    };

    // Function to manually go to the next slide
    const goToNextSlide = () => {
        setIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    };

    // Set up automatic sliding using useEffect
    useEffect(() => {
        let intervalId;

        if (isSliding) {
            intervalId = setInterval(() => {
                setIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
            }, 5000); // Change slide every 5 seconds (5000 milliseconds)
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isSliding]);

    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={farmer1} // Use the imported image
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={pxfuel} // Use the imported image
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* Add additional Carousel.Items as needed */}
            </Carousel>

            {/* Manual control buttons */}
            <div className="d-flex justify-content-center mt-3">
                <button className="btn btn-primary mx-2" onClick={goToPrevSlide}>
                    Previous
                </button>
                <button className="btn btn-primary mx-2" onClick={toggleAutoSlide}>
                    {isSliding ? 'Pause' : 'Play'}
                </button>
                <button className="btn btn-primary mx-2" onClick={goToNextSlide}>
                    Next
                </button>
            </div>

            {/* Indicators */}
            <ol className="carousel-indicators">
                <li
                    className={index === 0 ? 'active' : ''}
                    onClick={() => setIndex(0)}
                ></li>
                <li
                    className={index === 1 ? 'active' : ''}
                    onClick={() => setIndex(1)}
                ></li>
                {/* Add additional indicators as needed */}
            </ol>
        </div>
    );
}

export default MyCarousel;
