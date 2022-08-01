

import '../css/ShowProduct.css'
import $ from 'jquery'
import React, { useState, useEffect, setItems } from 'react';
import {
    Link, useParams
} from "react-router-dom";
import { ButtonGroup } from 'reactstrap';

function ShowProduct(e) {

    let { id } = useParams();
    const item = JSON.parse(localStorage.getItem('products'));
    const itemsp = item.find(obj => {
        return obj.id == id;
    });
    var ds = [];
    const addtocart = () => {
        //localStorage.setItem('mycart', JSON.stringify(itemsp));
        // lay danhsach sp trong localstorage
        //  ds =  JSON.parse(localStorage.getItem('products'));
        // su ly javascript thêm sản phẩm
        // them sp vào 1 array
        itemsp.quantity = parseInt(document.getElementById('soluong').value);
        itemsp.size = input;
        ds.push(itemsp);
        localStorage.setItem('mycart', JSON.stringify(ds));
        /*
          1. đã có trong cart: + số luong
          2. chưa có trong cart
        */
    }

    var btnSize = (e) => {

        var x = document.querySelectorAll('.btnSize');
        const $ = document.querySelector.bind(document);
        x.forEach(function (size, index) {
            size.onclick = function () {
                $('.btnSize.btn-active-size').classList.remove('btn-active-size')
                this.classList.add('btn-active-size')
            }
        })
    }
    let [num, setNum] = useState(1);
    let incNum = () => {
        if (num < 20) {
            setNum(Number(num) + 1);
        }
    };
    let decNum = () => {
        if (num > 1) {
            setNum(num - 1);
        }
    }
    let handleChange = (e) => {
        setNum(e.target.value);
    }
    const [input,setinput] = useState();
    function handleClick (e) {
        setinput(e.target.value) 
    }

    return (
        <main id="main">
            <div id="container" class="container">
                <div class="container-content">
                    <div class="container-path">
                        <div class="container-path-iteam">
                            <a>4MEN</a>
                            <a>Áo Thun Nam</a>
                            <a id="ten2">{itemsp.name}</a>
                        </div>
                    </div>
                </div>
                <div class="container-product-show">
                    <div class="container-product-show-left-img">
                        <img src={process.env.PUBLIC_URL + itemsp.image} alt="" class="img"></img>
                    </div>

                    <div class="container-product-show-right">
                        <div class="product-right-title">
                            <h1 >{itemsp.name}</h1>
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
                            <span>Giá bán : <span >{itemsp.price}</span></span>
                        </div>

                        <div class="product-right-color">
                            <p>MÀU KHÁC*</p>
                            <img src="/img/a6.jpg" alt=""></img>
                        </div>
                        <div class="product-right-size">
                            <p>Chọn size:</p>
                            <ButtonGroup onClick={btnSize} >
                                <button value='S' class="btnSize btn-active-size" onClick={handleClick}>S</button>
                                <button value='M' class="btnSize " onClick={handleClick}>M</button>
                                <button value='L' class="btnSize " onClick={handleClick}>L</button>
                                <button value='XL' class="btnSize " onClick={handleClick}>XL</button>
                            </ButtonGroup>
                        </div>
                        <div class="product-right-quantity">
                            <div class="buttons_added">
                                <input class="minus is-form" type="button" value="-" onClick={decNum}></input>
                                <input id='soluong' aria-label="quantity" class="input-qty" type="number" value={num} onChange={handleChange}></input>
                                <input class="plus is-form" type="button" value="+" onClick={incNum}></input>
                            </div>
                        </div>
                        <div className='product-right-buy'>
                            <button className='btn-addtocart'onClick={addtocart}>Thêm vào giỏ hàng</button>
                            <a className='btn-addtocart' href='/'>Quay lại</a>
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
//                             <button onClick="deleteProductCart('${item.ten}')">Xoá</button>
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

