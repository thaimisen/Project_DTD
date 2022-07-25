

import '/reactjs/Project_DTD/src/Component/css/ShowProduct.css'
import productcode from './ProductCode';
import React, {Component} from 'react';


 function ShowProduct () {
   
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
                        {/* <button onClick={addProductCart()}>Thêm vào giỏ hàng</button> */}
                        <button>Mua Ngay</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
    )
   
}
export default ShowProduct;

// class Product {
//     constructor(id, name, price, image) {
//         this.id=  id;
//         this.name = name;
//         this.price = price;
//         this.image = image;
//     }
//     getName(){
//         return this.name;
//     }
//     getId(){
//         return this.id;
//     }
//     }
//     class StoreProduct {
//         constructor() {
//         this.products = [];
//         }
//         getProduct() {
//         return this.products
//         }
//         getById(id) {
//             for(let i = 0; i < this.products.length; i++) {
//                 const currentProduct = this.products[i];
//                 if(currentProduct.id == id) {
//                 return currentProduct
//                 }
//             }
//         }
//     }
    
//     const store = new StoreProduct();
//     store.getData()
// window.addEventListener('load',function(e){
//     const params = new URLSearchParams(window.location.search)
//     const id = params.get('id')
//     const product = store.getById(id)
//     if(product) {
//         this.document.getElementById('ten').innerText = product.name
//         this.document.getElementById('hinhanh').src = product.image
//         this.document.getElementById('giaban').innerText = product.price
//         this.document.getElementById('ten2').innerText = product.name
//     }
// })

function btnSize() {
    var x = document.querySelectorAll('.btnSize');
    const $ = document.querySelector.bind(document);
    x.forEach(function (size, index) {
        size.onclick = function () {
            $('.btnSize.btn-active-size').classList.remove('btn-active-size')
            this.classList.add('btn-active-size')
        }
    })
}
btnSize();

// class SanPham {
//     constructor(ten, hinhanh, gia, soluong) {
//         this.ten = ten
//         this.hinhanh = hinhanh
//         this.gia = gia
//         this.soluong = soluong
//     }
// }
// class GioHang {
//     constructor() {
//         this.gioHang = []
//     }
//     getGioHang() {
//         return this.gioHang
//     }
//     themSanPham(sanpham) {
//         this.gioHang.push(sanpham)
//     }
//     findProductByName(name) {
//         let list = this.gioHang
//         let x = list.find(value => value.ten == name)
//         return x
//     }
//     deleteProductByName(name) {
//         console.log(name)
//         let list = this.gioHang
//         for (let i = 0; i < list.length; i++) {
//             console.log(list[i].ten)
//             if(list[i].ten == name){
//                 console.log('s')
//                 this.gioHang.splice(i,1)
//             }
//         }
//     }
// }




// const gioHang = new GioHang()
// function addProductCart() {
//     const ten1 = document.getElementById('ten').innerText
//     const gia = document.getElementById('giaban').innerText
//     const img = document.getElementById('hinhanh').src
//     const soluong = parseInt(document.getElementById('soluong').value)
//     const sanPham = new SanPham(ten1, img, gia, soluong)
//     let sp = gioHang.findProductByName(ten1)
//     if (sp) {
//         let sl = parseInt(document.getElementById('soLuong').innerText)
//         sp.soluong =  sl + soluong
//     } else {
//         gioHang.themSanPham(sanPham)
//     }
//     render()
// }
// function render() {
//     let x
//     for (let i = 0; i < gioHang.getGioHang().length; i++) {
//         let item = gioHang.getGioHang()[i]
//         console.log(item)
//         x = `
//             <li>
//                 <div class="cart-info-item">
//                     <img id="cart-img" src="${item.hinhanh}" alt="" width="100px">
//                         <div class="cart-info-item-content">
//                             <a id="cart-ten" href="">${item.ten}</a>
//                             <br></br>
//                             <span id="soLuong">${item.soluong}</span>
//                             <span>X</span>
//                             <span id="cart-gia">${item.gia}</span>
//                             <br></br>
//                             <button onclick="deleteProductCart('${item.ten}')">Xoá</button>
//                         </div>
//                 </div>
//             </li> `
//     }
//     document.getElementById('ul').innerHTML = x
// }
// function render2() {
//     let x = `<li> Bạn chưa có sản phẩm nào </li>`
//     document.getElementById('ul').innerHTML = x
// }
// function deleteProductCart(name) {
//     gioHang.deleteProductByName(name)
//     if(gioHang.getGioHang().length > 0) {
//         render()
//     }else {
//         render2()
//     }
// }

