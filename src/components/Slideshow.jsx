import { useState } from "react";

function Slideshow({picture}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    function handleNext() {
        setCurrentIndex(currentIndex < picture.length - 1 ? currentIndex + 1 : 0);
    }
    function handlePrev() {
        setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : picture.length - 1);
    }

    return (
        <div className="slideshow"  style={{ backgroundImage: `url(${picture[currentIndex]})`}}>
            <svg 
                xmlns="http://www.w3.org/2000/svg"
                className="slideshow__arrow"
                onClick={handlePrev}>
                <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
            </svg>
            <svg 
                xmlns="http://www.w3.org/2000/svg"
                className="slideshow__arrow"
                onClick={handleNext}>
                <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
            </svg>

        </div>
    )
}

export default Slideshow;