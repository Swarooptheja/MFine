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
      slidesToShow: 6,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div id="maincontainer">
        <Slider {...settings} >
          <div  className="slides">
           <img src="https://d2ieh38pwbeyn5.cloudfront.net/wp-content/uploads/2021/12/Period-Issue-01.png" alt="" />
           <h3>Period issue</h3>
          </div>
          <div className="slides">
            <img src="https://d2ieh38pwbeyn5.cloudfront.net/wp-content/uploads/2021/12/Acne-01.png" alt="" />
             <h3>Acne/Pimples</h3>
          </div>
          <div className="slides">
            <img src="https://d2ieh38pwbeyn5.cloudfront.net/wp-content/uploads/2021/12/Fever-01.png" alt="" />
             <h3>Fever</h3>
          </div>
          <div className="slides">
            <img src="https://d2ieh38pwbeyn5.cloudfront.net/wp-content/uploads/2021/12/Weight-Loss-01.png" alt="" />
            <h3>Weight loss</h3>
          </div>
          <div className="slides">
           <img src="https://d2ieh38pwbeyn5.cloudfront.net/wp-content/uploads/2021/12/Hairfall-01.png" alt="" />
             <h3>Hairfall</h3>
          </div>
          <div className="slides">
            <img src="https://d2ieh38pwbeyn5.cloudfront.net/wp-content/uploads/2021/12/Cough-01.png" alt="" />
            <h3>Cough</h3>
          </div>
          <div className="slides">
            <img src="https://d2ieh38pwbeyn5.cloudfront.net/wp-content/uploads/2021/12/Diabetes-01.png" alt="" />
            <h3>Diabetes</h3>
          </div>

          <div className="slides">
           <img src="https://d2ieh38pwbeyn5.cloudfront.net/wp-content/uploads/2021/12/Pregnancy.png" alt="" />
           <h3>pregnancy</h3>
          </div>
          <div className="slides">
            <img src="https://d2ieh38pwbeyn5.cloudfront.net/wp-content/uploads/2021/12/Anxiety.png" alt="" />
              <h3>Anxiety</h3>
          </div>
          <div className="slides">
            <img src="https://d2ieh38pwbeyn5.cloudfront.net/wp-content/uploads/2021/12/Depression-01.png" alt="" />
             <h3>Depression</h3>
          </div>
         
        </Slider>
      </div>
    );
  }
}