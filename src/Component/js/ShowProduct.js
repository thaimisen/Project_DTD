
import { Component } from 'react';
import '/reactjs/Project_DTD/src/Component/css/ShowProduct.css'
// import './ClassProduct';
// window.addEventListener('load',function(e){
//     const params = new URLSearchParams(window.location.search)
//     const id = params.get('id')
//     const product = list.findProduct(id)
//     if(product) {
//         this.document.getElementById('ten').innerText = product.ten
//         this.document.getElementById('hinhanh').src = product.hinhAnh
//         this.document.getElementById('giaban').innerText = product.gia
//         this.document.getElementById('ten2').innerText = product.ten
//     }
// })


function ShowProduct (){
    return(
        <main id="main">
        <div id="container" class="container">
            <div class="container-content">
                <div class="container-path">
                    <div class="container-path-iteam">
                        <a>4MEN</a>
                        <a>Áo Thun Nam</a>
                        <a id="ten2">Áo Thun Regular 4Men Stripes AT064 Màu Đen</a>
                    </div>
                </div>
            </div>
            <div class="container-product-show">
                <div class="container-product-show-left">
                    <div class="container-product-show-left-active">
                        <img src="/img/a1.jpg" alt=""></img>
                        <img src="/img/a2.jpg" alt=""></img>
                        <img src="/img/a3.jpg" alt=""></img>
                        <img src="/img/a4.jpg" alt=""></img>
                    </div>
                    <div class="container-product-show-left-img">
                        <img id="hinhanh" src="/img/-16641-slide-products-623aa84fc4566.jpg" alt="" class="img"></img>
                    </div>
                </div>
                <div class="container-product-show-right">
                    <div class="product-right-title">
                        <h1 id="ten"></h1>
                    </div>
                    <div class="product-right-start">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <div class="product-right-reviews">
                            <span><span>(19</span> lượt đánh giá / <span>49</span> lượt thích)</span>
                        </div>
                    </div>
                    <div class="product-right-price">
                        <span>Giá bán : <span id="giaban"></span></span>
                    </div>
                    <div class="product-right-color">
                        <p>MÀU KHÁC*</p>
                        <img src="/img/a6.jpg" alt=""></img>
                    </div>
                    <div class="product-right-size">
                        <p>Chọn size:</p>
                        <button class="btnSize btn-active-size">S</button>
                        <button class="btnSize ">M</button>
                        <button class="btnSize ">L</button>
                        <button class="btnSize ">XL</button>
                    </div>
                    <div class="product-right-quantity">
                        <span>Số lượng</span>
                        <input id="soluong" type="number" value="1" class="product-right-quantity-input" min="1"></input>
                    </div>
                    <div class="product-right-buy">
                        <button onclick="addProductCart()">Thêm vào giỏ hàng</button>
                        <button>Mua Ngay</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
    )
}


export default ShowProduct;