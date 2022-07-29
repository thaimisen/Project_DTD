
import SliderShow from './Slider.js'
import SliderShow2 from './Slider2.js';
import '/reactjs/Project_DTD/src/Component/css/Home.css'
import { useState } from 'react';
import { useEffect } from 'react';
import {
    Link
} from "react-router-dom";

function Home() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        setItems(JSON.parse(localStorage.getItem('products')));
    }, []);
    return (
        <main>
            <div class="container">
                <div class="content-slideshow">
                    <SliderShow />
                </div>
                <div class="info-policy">
                    <div class="info-policy-content">
                        <div class="info-policy-item">
                            <img class="info-policy-img" src="/img/gift.png" alt=""></img>
                            <span class="info-policy-item-text">FREESHIP đơn hàng trên 500K</span>
                        </div>
                        <div class="info-policy-item">
                            <img class="info-policy-img" src="/img/check.png" alt=""></img>
                            <span class="info-policy-item-text">Kiểm tra hàng trước khi thanh toán</span>
                        </div>
                        <div class="info-policy-item">
                            <img class="info-policy-img" src="/img/change.png" alt=""></img>
                            <span class="info-policy-item-text">Đổi trả trong vòng 7 ngày</span>
                        </div>
                    </div>

                </div>
                <div class="product">
                    <div class="product-new-title">
                        <h2 class="product-new-title-text">THỜI TRANG HOT NHẤT</h2>
                    </div>
                    <div class="container-product">
                        <div class="grid">
                            <div className='grid-row'>
                                {items.map(item => (
                                    <div key={item.id} >
                                        <div className="grid__column">
                                            <Link to={'/showproduct/' + item.id} className="grid-column-content">
                                                <div class="grid-column-content-img">
                                                    <img src={item.image} alt="" className="grid-column-item-img"></img>
                                                </div>
                                                <div class="grid-column-content-item">
                                                    <p class="grid-column-content-name">{item.name}</p>
                                                    <p class="grid-column-content-price">{item.price}</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                        <div class="see-more">
                            <a class="see-more-text" href="">Xem Thêm</a>
                        </div>
                    </div>
                    <div class="product-item">
                        <div class="product-new-title">
                            <h2 class="product-new-title-text">SẢN PHẨM MỚI NHẤT</h2>
                        </div>
                        <div class="container-product">
                            <div class="grid">
                                <div class="grid__row">
                                    <div class="grid__column">
                                        <a href="" class="grid-column-content">
                                            <div class="grid-column-content-img">
                                                <img src="/img/product0.jpg" alt="" class="grid-column-item-img"></img>

                                            </div>
                                            <div class="grid-column-content-item">
                                                <a class="grid-column-content-name" href="">Áo Thun ICON DENIM Colorful
                                                    Orgnls</a>
                                                <p class="grid-column-content-price">280,000đ</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="grid__column">
                                        <a href="" class="grid-column-content">
                                            <div class="grid-column-content-img">
                                                <img src="/img/product0.jpg" alt="" class="grid-column-item-img"></img>

                                            </div>
                                            <div class="grid-column-content-item">
                                                <a class="grid-column-content-name" href="">Áo Thun ICON DENIM Colorful
                                                    Orgnls</a>
                                                <p class="grid-column-content-price">280,000đ</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="grid__column">
                                        <a href="" class="grid-column-content">
                                            <div class="grid-column-content-img">
                                                <img src="/img/product0.jpg" alt="" class="grid-column-item-img"></img>

                                            </div>
                                            <div class="grid-column-content-item">
                                                <a class="grid-column-content-name" href="">Áo Thun ICON DENIM Colorful
                                                    Orgnls</a>
                                                <p class="grid-column-content-price">280,000đ</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="grid__column">
                                        <a href="" class="grid-column-content">
                                            <div class="grid-column-content-img">
                                                <img src="/img/product0.jpg" alt="" class="grid-column-item-img"></img>

                                            </div>
                                            <div class="grid-column-content-item">
                                                <a class="grid-column-content-name" href="">Áo Thun ICON DENIM Colorful
                                                    Orgnls</a>
                                                <p class="grid-column-content-price">280,000đ</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="grid__column">
                                        <a href="" class="grid-column-content">
                                            <div class="grid-column-content-img">
                                                <img src="/img/product0.jpg" alt="" class="grid-column-item-img"></img>

                                            </div>
                                            <div class="grid-column-content-item">
                                                <a class="grid-column-content-name" href="">Áo Thun ICON DENIM Colorful
                                                    Orgnls</a>
                                                <p class="grid-column-content-price">280,000đ</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div id class="grid__column">
                                        <a href="" class="grid-column-content">
                                            <div class="grid-column-content-img">
                                                <img src="/img/product0.jpg" alt="" class="grid-column-item-img"></img>

                                            </div>
                                            <div class="grid-column-content-item">
                                                <a class="grid-column-content-name" href="">Áo Thun ICON DENIM Colorful
                                                    Orgnls</a>
                                                <p class="grid-column-content-price">280,000đ</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="grid__column">
                                        <a href="" class="grid-column-content">
                                            <div class="grid-column-content-img">
                                                <img src="/img/product0.jpg" alt="" class="grid-column-item-img"></img>

                                            </div>
                                            <div class="grid-column-content-item">
                                                <a class="grid-column-content-name" href="">Áo Thun ICON DENIM Colorful
                                                    Orgnls</a>
                                                <p class="grid-column-content-price">280,000đ</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="grid__column">
                                        <a href="" class="grid-column-content">
                                            <div class="grid-column-content-img">
                                                <img src="/img/product0.jpg" alt="" class="grid-column-item-img"></img>

                                            </div>
                                            <div class="grid-column-content-item">
                                                <a class="grid-column-content-name" href="">Áo Thun ICON DENIM Colorful
                                                    Orgnls</a>
                                                <p class="grid-column-content-price">280,000đ</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="see-more">
                                <a class="see-more-text" href="">Xem Thêm</a>
                            </div>
                        </div>
                    </div>
                    <div class="product-best-sale">
                        <div class="product-best-sale-title product-new-title">
                            <h2 class="product-best-sale-title-item product-new-title-text">
                                THỜI TRANG BÁN CHẠY
                            </h2>
                        </div>

                    </div>
                </div>
                <div class="product-best-sale-slider">
                    <SliderShow2 />
                </div>
            </div>
        </main>

    );
}


export default Home;