import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Carousel.css"
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div id="maincontainer">
        <Slider {...settings} >
          <div  className="slides">
           <img src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2023/02/1-300x188.jpg" alt="" />
           
          </div>
          <div className="slides">
            <img src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2023/01/1_1-300x188.webp" alt="" />
              
          </div>
          <div className="slides">
            <img src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2022/12/Untitled-design-_2_-300x188.webp" alt="" />
              
          </div>
          <div className="slides">
            <img src="https://www.mfine.co/_next/image?url=https%3A%2F%2Fdg0qqklufr26k.cloudfront.net%2Fwp-content%2Fuploads%2F2022%2F12%2FUntitled-design-_1__1.webp&w=256&q=75" alt="" />
             
          </div>
          <div className="slides">
            <img src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2022/12/featured-image-300x187.webp" alt="" />
            
          </div>
          <div className="slides">
            <img src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2022/12/Shutterstock_2057542874-300x188.jpg" alt="" />
            
          </div>
         
    
        </Slider>
      </div>
    );
  }
}