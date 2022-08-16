import React, { useState, useEffect, useRef } from 'react';
import '/reactjs/Project_DTD/src/Component/css/ShoppingCart.css'
import {
    Link,
} from "react-router-dom";
import { ButtonGroup } from 'reactstrap';
import { Modal } from 'bootstrap'



function ShoppingCart() {
    var dssp = JSON.parse(localStorage.getItem('mycart'));
    const [data, setdata] = useState([]);
    useEffect(() => {
        setdata(dssp);
    }, []);
    function deleteitem(id) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == id) {
                data.pop(i);
                dssp.pop(i)
            }
        }
        localStorage.setItem('mycart', JSON.stringify(data));
        window.location.reload(true);
    }

    var defaultNum =dssp[0].quantity

    var [num, setNum] = useState(defaultNum);
    var incNum = () => {
        if (num < 20) {
            setNum(Number(num) + 1);
        }
    };
    var decNum = () => {
        if (num > 1) {
            setNum(num - 1);
        }
    }
    var handleChange = (e) => {
        setNum(e.target.value);
    }
    const [input, setinput] = useState();
    function handleClick(e) {
        setinput(e.target.value)
    }



    function btnSize(e) {
        var x = document.querySelectorAll('.btnSize');
        const $ = document.querySelector.bind(document);
        x.forEach(function (size, index) {
            size.onclick = function () {
                $('.btnSize.btn-active-size').classList.remove('btn-active-size')
                this.classList.add('btn-active-size')
            }
        })
    }

    function plus(a,b){
        return Number(a)+Number(b);
    }


    return (

        <div className="cart">
             {data.map(item => (
            <div  key={item.id}>
            <section class="py-5">
                <div class="container px-4 px-lg-5 my-5">
                    <div class="row">
                       
                            <div id='showcart' value={item.id}>
                                <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">

                                    <div class="table-responsive" >
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col" class="border-0 bg-light">
                                                        <div class="p-2 px-3 text-uppercase">Product</div>
                                                    </th>
                                                    <th scope="col" class="border-0 bg-light">
                                                        <div class="py-2 text-uppercase">Price</div>
                                                    </th>
                                                    <th scope="col" class="border-0 bg-light">
                                                        <div class="py-2 text-uppercase">Size</div>
                                                    </th>
                                                    <th scope="col" class="border-0 bg-light">
                                                        <div class="py-2 text-uppercase">Quantity</div>
                                                    </th>
                                                    <th scope="col" class="border-0 bg-light">
                                                        <div class="py-2 text-uppercase">Remove</div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row" class="border-0" >
                                                        <div class="p-2" >
                                                            <img src={process.env.PUBLIC_URL + item.image} width="70" class="img-fluid rounded shadow-sm" />
                                                            <div class="ms-3 d-inline-block align-middle">
                                                                <h5 class="mb-0"> <Link class="text-dark d-inline-block align-middle" to={'/showproduct/' + item.id}>{item.name}</Link></h5>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td className="border-0 align-middle"><strong>{item.price}</strong></td>
                                                    <td className="border-0 align-middle"><strong>{item.size}</strong></td>
                                                    {/* <td className="border-0 align-middle"><strong>{item.quantity}</strong></td> */}
                                                    <td className="border-0 align-middle">
                                                        <div >
                                                            <div class="buttons_added">
                                                                <input class="minus is-form" type="button" value="-" onClick={decNum}></input>
                                                                <input id='soluong' aria-label="quantity" class="input-qty" type="number" value={num} onChange={handleChange}></input>
                                                                <input class="plus is-form" type="button" value="+" onClick={incNum}></input>
                                                            </div>
                                                        </div></td>
                                                    <button className='btn-delete' onClick={() => deleteitem(item.id)}><strong>-</strong></button>
                                                    {/* <button className="border-0 align-middle btn-delete" ><strong>o</strong></button> */}
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                    <div class="row py-5 p-4 bg-white rounded shadow-sm">
                        <div class="col-lg-6">
                            <div class="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Coupon code</div>
                            <div class="p-4">
                                <p class="mb-4"><em>If you have a coupon code, please enter it in the box below</em></p>
                                <div class="input-group mb-4 border rounded-pill p-2">
                                    <input type="text" placeholder="Apply coupon" aria-describedby="button-addon3" class="form-control border-0" />
                                    <div class="input-group-append border-0">
                                        <button id="button-addon3" type="button" class="btn btn-dark px-4 rounded-pill"><i class="fa fa-gift mr-2"></i>Apply coupon</button>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Instructions for seller</div>
                            <div class="p-4">
                                <p class="mb-4"><em>If you have some information for the seller you can leave them in the box below</em></p>
                                <textarea name="" cols="30" rows="2" class="form-control"></textarea>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Order summary </div>
                            <div class="p-4">
                                <p class="mb-4"><em>Shipping and additional costs are calculated based on values you have entered.</em></p>
                                <ul class="list-unstyled mb-4">
                                    <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Order Subtotal </strong><strong>{item.price} VNĐ</strong></li>
                                    <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Shipping and handling</strong><strong>30000 VNĐ</strong></li>
                                    <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Tax</strong><strong>0VNĐ</strong></li>
                                    <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Total</strong>
                                        <h5 class="fw-bold" >{plus(item.price,30000)}VNĐ</h5>
                                    </li>
                                </ul><a href="#" class="btn btn-dark rounded-pill py-2 d-md-block">Procceed to checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <hr></hr>
            </div>
            ))}
        </div >
    )
}

export default ShoppingCart;