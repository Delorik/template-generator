import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 3,
        swipeToSlide: true,
        slidesToScroll: 1,
        autoplay: false,

        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    }

    const service = [
        {
            title: "Effective websites",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum vitae modi veritatis veniam, exercitationem molestiae tempora, tempore ullam obcaecati nemo reiciendis provident error ex animi dolores! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        }
    ];
    const renderedServices = [];

    for (let i = 0; i < 12; i++) {
        renderedServices.push(
            <div className="services__slide" key={i}>
                <span className="title">{service[0].title}</span>
                <p>{service[0].content}</p>
            </div>
        )
    }

    return (
        <div className="services">
            <div className="layout">
                <h2>Our services</h2>
                <Slider {...settings}>{renderedServices}</Slider>
            </div>
        </div>
    )
}

export default Services;