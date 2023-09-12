import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/img/template2/template2-intro1.jpg';
import img2 from '../assets/img/template2/template2-intro2.jpg';
import img3 from '../assets/img/template2/template2-intro3.jpg';


const IntroSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 3000,
    }

    return (
        <div className="intro">
            <Slider {...settings}>
                <div className="intro__slide">
                    <img src={img1} alt="slide image" />
                    <div className="layout">
                        <h1>Lorem ipsum dolor sit.</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic architecto laudantium esse nesciunt, sint quae.</p>
                    </div>
                </div>
                <div className="intro__slide">
                    <img src={img2} alt="slide image" />
                    <div className="layout">
                        <h1>Lorem ipsum dolor sit.</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic architecto laudantium esse nesciunt, sint quae.</p>
                    </div>
                </div>
                <div className="intro__slide">
                    <img src={img3} alt="slide image" />
                    <div className="layout">
                        <h1>Lorem ipsum dolor sit.</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic architecto laudantium esse nesciunt, sint quae.</p>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default IntroSlider;