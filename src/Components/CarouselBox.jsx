import {Carousel} from "react-bootstrap";

import slider1 from "../slider`s/slider-1.jpeg";
import slider2 from "../slider`s/slider-2.jpeg";
import slider3 from "../slider`s/slider-3.jpeg";
import slider4 from "../slider`s/slider-4.jpeg";
import slider5 from "../slider`s/slider-5.jpeg";

function CarouselBox(){
    return(
        <Carousel>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={slider1}
                    alt="slider"
                />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={slider2}
                    alt="slider"
                />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={slider3}
                    alt="slider"
                />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={slider4}
                    alt="slider"
                />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={slider5}
                    alt="slider"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselBox