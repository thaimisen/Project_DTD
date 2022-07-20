import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "/reactjs/Project_DTD/src/Component/css/Slider2.scss";
import "slick-carousel/slick/slick.css";
import "D:/reactjs/Project_DTD/src/Component/css/slick-2.scss";
class SliderShow2 extends React.Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
      return (
        <div className="container-slide-2">
          <Slider {...settings}>
            <div class="product-best-sale-slider-item">
              <div class="product-best-sale-slider-img">
                <a href=""><img src="/img/product0.jpg" alt=""
                  class="product-best-sale-slider-img-item"></img></a>
              </div>
              <div class="product-best-sale-info">
                <a href=""><img class="product-best-sale-info-img"
                  src="/img/ca-vat-han-quoc-cv209-14759 (1).png" alt=""></img></a>
                <a href="">Cà Vạt Hàn Quốc CV210</a>
                <a href="">145.000</a>
              </div>
            </div>
            <div class="product-best-sale-slider-item">
              <div class="product-best-sale-slider-img">
                <a href=""><img src="/img/product0.jpg" alt=""
                  class="product-best-sale-slider-img-item"></img></a>
              </div>
              <div class="product-best-sale-info">
                <a href=""><img class="product-best-sale-info-img"
                  src="/img/ca-vat-han-quoc-cv209-14759 (1).png" alt=""></img></a>
                <a href="">Cà Vạt Hàn Quốc CV210</a>
                <a href="">145.000</a>
              </div>
            </div>
            <div class="product-best-sale-slider-item">
              <div class="product-best-sale-slider-img">
                <a href=""><img src="/img/product0.jpg" alt=""
                  class="product-best-sale-slider-img-item"></img></a>
              </div>
              <div class="product-best-sale-info">
                <a href=""><img class="product-best-sale-info-img"
                  src="/img/ca-vat-han-quoc-cv209-14759 (1).png" alt=""></img></a>
                <a href="">Cà Vạt Hàn Quốc CV210</a>
                <a href="">145.000</a>
              </div>
            </div>
            <div class="product-best-sale-slider-item">
              <div class="product-best-sale-slider-img">
                <a href=""><img src="/img/product0.jpg" alt=""
                  class="product-best-sale-slider-img-item"></img></a>
              </div>
              <div class="product-best-sale-info">
                <a href=""><img class="product-best-sale-info-img"
                  src="/img/ca-vat-han-quoc-cv209-14759 (1).png" alt=""></img></a>
                <a href="">Cà Vạt Hàn Quốc CV210</a>
                <a href="">145.000</a>
              </div>
            </div>
            <div class="product-best-sale-slider-item">
              <div class="product-best-sale-slider-img">
                <a href=""><img src="/img/product0.jpg" alt=""
                  class="product-best-sale-slider-img-item"></img></a>
              </div>
              <div class="product-best-sale-info">
                <a href=""><img class="product-best-sale-info-img"
                  src="/img/ca-vat-han-quoc-cv209-14759 (1).png" alt=""></img></a>
                <a href="">Cà Vạt Hàn Quốc CV210</a>
                <a href="">145.000</a>
              </div>
            </div>
            <div class="product-best-sale-slider-item">
              <div class="product-best-sale-slider-img">
                <a href=""><img src="/img/product0.jpg" alt=""
                  class="product-best-sale-slider-img-item"></img></a>
              </div>
              <div class="product-best-sale-info">
                <a href=""><img class="product-best-sale-info-img"
                  src="/img/ca-vat-han-quoc-cv209-14759 (1).png" alt=""></img></a>
                <a href="">Cà Vạt Hàn Quốc CV210</a>
                <a href="">145.000</a>
              </div>
            </div>
  
          </Slider>
        </div>
      );
    }
  }
  export default SliderShow2;