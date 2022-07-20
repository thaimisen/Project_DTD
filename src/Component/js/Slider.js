import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "/reactjs/Project_DTD/src/Component/css/Slider.scss";
import "slick-carousel/slick/slick.css";
import "D:/reactjs/Project_DTD/src/Component/css/slick-theme.scss";


class SliderShow extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="container-slide">
        <Slider {...settings}>
          <div className="img-item">
            <img className="img"src="https://4men.com.vn/images/2020/04/20200417_2810f1f6bde0be73749f0c82910fc06e_1587082948.png" />
          </div>
          <div className="img-item">
            <img className="img"src="https://4menshop.com/images/thumbs/news/-546.png" />
          </div>
          <div className="img-item">
            <img className="img"src="https://scontent.fdad1-3.fna.fbcdn.net/v/t1.15752-9/290144923_1115973045675027_9037842426507780872_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=New329ERaDsAX9p-4lS&_nc_ht=scontent.fdad1-3.fna&oh=03_AVKwzfZ7G7xT51XQhNsG0zML85D0YGzWhrGJZGKiI_BwMQ&oe=62FA709B" />
          </div>
          <div className="img-item">
            <img className="img"src="https://scontent.fdad1-2.fna.fbcdn.net/v/t1.15752-9/292127152_1396863167492100_4456151687531091555_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=3ayKyAEkT4QAX-ythIM&_nc_ht=scontent.fdad1-2.fna&oh=03_AVK76plLi4cdyCxQw3JtrPjZDg4hVtUWrVQrq2VQDKf8aQ&oe=62F81E9C" />
          </div>

        </Slider>
      </div>
    );
  }
}



export default SliderShow;