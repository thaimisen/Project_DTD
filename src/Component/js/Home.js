
import SliderShow from './Slider.js'
import SliderShow2 from './Slider2.js';
import '/reactjs/Project_DTD/src/Component/css/Home.css'
import { useState } from 'react';
import { useEffect } from 'react';
function Home() {
    const [data, setdata] = useState([]);
    useEffect(() => {
        setdata([
            { id: 1, name: "lol", gia: 1000, hinh: "https://scontent.fdad2-1.fna.fbcdn.net/v/t1.15752-9/277958793_735318341149503_5439175402540309513_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nowed0aGsTYAX8qG1Xl&_nc_ht=scontent.fdad2-1.fna&oh=03_AVLtGUg8pTm-WbVJKNAvE83QYoJFG-Quh0sGeIb27noRdg&oe=62FCDCA3" },
            { id: 2, name: "valorant", gia: 1000, hinh: "https://scontent.fdad1-1.fna.fbcdn.net/v/t1.15752-9/277422264_358848042845567_3399455747643769860_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=sSghd0p0g60AX9GuPJd&_nc_ht=scontent.fdad1-1.fna&oh=03_AVLnq4hV9gYUqJLSS5CEIGHIbplycs5aos0oO80fGS6RRA&oe=62FD0486" },
            { id: 3, name: "tft", gia: 1000, hinh: "https://scontent.fdad1-3.fna.fbcdn.net/v/t1.15752-9/277902812_311879917729539_6394522788350800690_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=7nPR2kmhPWgAX_xzBeO&_nc_ht=scontent.fdad1-3.fna&oh=03_AVLhqcZI7ktlSFrd8d-HkOLU5qM1yMcRxdibyNFcgN8XEg&oe=62FE1693" }
        ])
    }, [])
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
                            <div class="grid__row" id="home">
                                
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