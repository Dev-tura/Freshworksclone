import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Waaterstons from "../Waaterstons/Waaterstons";
import Secondwater from "../Secondwater/Secondwater";
import Thirdwater from "../Thirdwater/Thirdwater";

const Slides = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
        {/* <h2> Single Item</h2> */}
        <Slider {...settings}>
          <Waaterstons />
          <Secondwater />
          <Thirdwater />
        </Slider>
      </div>
  )
}

export default Slides