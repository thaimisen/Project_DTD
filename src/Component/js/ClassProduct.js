import '../css/ClassProduct.css';

import React, { useState, useEffect, useRef } from 'react';
import { Modal } from 'bootstrap'



import {
    Link, useParams
} from "react-router-dom";


function ClassProduct(props) {
    var dssp = JSON.parse(localStorage.getItem('products'))
    const [items, setItems] = useState([]);
    useEffect(() => {
        setItems(dssp);
    }, []);


    let { id } = useParams();
    const item = JSON.parse(localStorage.getItem('products'));
    const itemsp = item.find(obj => {
        return obj.id == id;
    });

    const [modal, setModal] = useState();
    const parseExceptionModal = useRef();
    useEffect(() => {
        const modal = new Modal(parseExceptionModal.current, { keyboard: false })
        setModal(modal)
    }, [])

    function onRemove(id) {
        const confirmAction = window.confirm("bạn có muốn xoá product id: " + id);
        if (confirmAction) {
            for (let i = 0; i < dssp.length; i++) {
                if (dssp[i].id == id) {
                    dssp.splice(i, 1);
                }
            }
            localStorage.setItem('products', JSON.stringify(dssp));
            window.location.reload(true);
        }
    }


    function onEdit(id) {
        for (let i = 0; i < dssp.length; i++) {
            if (dssp[i].id == id) {
                var product = dssp[i]
            }
        }
        if (product) {
            document.getElementById('prodId').value = product.id;
            document.getElementById('prodName').value = product.name;
            document.getElementById('prodImage').value = product.image;
            document.getElementById('prodPrice').value = product.price;
        }
        modal.show()
    }

    const sortPriceUp = () => {
        const sorted = [...items].sort((a, b) => {
            return -b.price + a.price;
        });
        setItems(sorted);

    };
    const sortPriceDown = () => {
        const sorted = [...items].sort((a, b) => {
            return b.price - a.price;
        });
        setItems(sorted);
    };
    const findItem = () => {
        let searchValue = prompt('Nhập tên sản phẩm bạn muốn tìm: ')
        if (searchValue != '') {
            const filteredData = [...items].filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchValue.toLowerCase())

            })
            setItems(filteredData)
        }
        else {
            setItems(JSON.parse(localStorage.getItem('products')));
        }
    }
    const submitEdit = () => {
        const id = document.getElementById('prodId').value;
        const name = document.getElementById('prodName').value;
        const image = document.getElementById('prodImage').value;
        const price = document.getElementById('prodPrice').value;
        const product = { id, name, price, image }
        const error = validate({ id, name, price, image })
        if (error.length > 0) {
            document.getElementById('error').innerHTML = error.join('<br>')
            return
        }
        for (let i = 0; i < dssp.length; i++) {
            if (dssp[i].id == id) {
                dssp[i] = product
                alert('Successfully')
                var check = true;
            }
        }
        if (!check) {
            alert('Unsuccessfully')
        }
        localStorage.setItem('products', JSON.stringify(dssp));
        window.location.reload(true);

    }


    function isValidURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return (!!pattern.test(str))
    }

    function validate({ id, name, price, image }) {
        let error = [];
        if (id == '' || isNaN(id)) {
            error.push('id is invalid')
        }
        if (name == '') {
            error.push('name is not empty')
        }
        if (price == '' || isNaN(price)) {
            error.push('price is invalid')
        }
        if (image == '' || !isValidURL(image)) {
            const extent = image.split('.').pop()
            const allowImage = ['.jpj', '.jpeg', '.png', '.gif', '.bmp']
            if (!allowImage.includes(extent)) {
                error.push('image is not image link')
            }
        }
        return error
    }


    return (

        <div className="body">
            <div class="container">
                <div class="row">
                    <div class="col-md-9">
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" id="btn-create" data-bs-target="#frmProduct">
                            create
                        </button>
                        <button type="button" class="btn btn-primary" id="btn-Up" onClick={(e) => sortPriceUp(e.target.value)}>
                            Up
                        </button>
                        <button type="button" class="btn btn-primary" id="btn-Down" onClick={(e) => sortPriceDown(e.target.value)}>
                            Down
                        </button>
                        <button type="button" class="btn btn-primary" id="btn-search" onClick={(e) => findItem(e.target.value)}>
                            Search
                        </button>
                        <a href="/" class="btn btn-primary" id="btn-Down">Home</a>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>name</th>
                                    {/* <th>description</th> */}
                                    <th>price</th>
                                    <th>image</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody id="tableBody">
                                {items.map((item, index) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td width="200px"><img src={item.image} width="200px" /></td>
                                        <td>
                                            <button type="button" class="btn btn-edit" id="btn-edit" onClick={() => onEdit(item.id)}>Edit</button>
                                            <br></br>
                                            <button type="button" class="btn btn-danger" id="btn-remove" onClick={() => onRemove(item.id)}>remove</button>
                                            <br></br>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div class="modal fade" id="frmProduct" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Product</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form id="frmProductCreate " onSubmit={createProduct} >
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" class="form-label">id</label>
                                                <input type="text" class="form-control" id="id" aria-describedby="emailHelp"></input>
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleInputPassword1" class="form-label">name</label>
                                                <input type="text" class="form-control" id="name"></input>
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleInputPassword1" class="form-label">price</label>
                                                <input type="number" class="form-control" id="price"></input>
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleInputPassword1" class="form-label">image</label>
                                                <input type="text" class="form-control" id="image"></input>
                                            </div>
                                            {/* <div class="mb-3">
                                                <label for="exampleInputPassword1" class="form-label">description</label>
                                                <textarea class="form-control" type="text" className="form-control" id="description"></textarea>
                                            </div> */}
                                            <button type="submit" class="btn btn-primary btn-submit" value="add" >ADD</button>
                                            <div>
                                                <p id="error"></p>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- edit form--> */}
                        <div class="modal fade" id="modalProductEdit" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true" ref={parseExceptionModal}>
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Product</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form id="frmProductEdit" >
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" class="form-label">id</label>
                                                <input type="text" class="form-control" id="prodId" aria-describedby="emailHelp"></input>
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleInputPassword1" class="form-label">name</label>
                                                <input type="text" class="form-control" id="prodName"></input>
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleInputPassword1" class="form-label">price</label>
                                                <input type="number" class="form-control" id="prodPrice"></input>
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleInputPassword1" class="form-label">image</label>
                                                <input type="text" class="form-control" id="prodImage"></input>
                                            </div>
                                            {/* <div class="mb-3">
                                                <label for="exampleInputPassword1" class="form-label">description</label>
                                                <textarea class="form-control" type="text" className="form-control" id="prodDescription"></textarea>
                                            </div> */}
                                            <button type="submit" class="btn btn-primary btn-submit" value="add" onClick={submitEdit}>Change</button>
                                            <div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => modal.hide()}>Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );

}


class Product {
    constructor(id, name, price, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
}
class StoreProduct {
    constructor() {
        this.products = [];
    }
    add(product) {
        for (let i = 0; i < this.products.length; i++) {
            const currentProduct = this.products[i];
            if (currentProduct.id === product.id) {
                return false
            }
        }
        this.products.push(product)
        return true
    }
    update(product) {
        for (let i = 0; i < this.products.length; i++) {
            const currentProduct = this.products[i];
            if (currentProduct.id === product.id) {
                this.products[i] = product
                return true
            }
        }
        //c1 
        return false
    }
    getById(id) {
        for (let i = 0; i < this.products.length; i++) {
            const currentProduct = this.products[i];
            if (currentProduct.id == id) {
                return currentProduct
            }
        }
        //c1 
        return null
    }
    remove(id) {
        console.log(this.products)
        for (let i = 0; i < this.products.length; i++) {
            const currentProduct = this.products[i];
            if (currentProduct.id == id) {
                this.products.splice(i, 1)
                return true
            }
        }
        return false
    }
    save() {

        const data = JSON.stringify(this.getProduct())
        localStorage.setItem('products', data)

    }
    getData() {
        const data = JSON.parse(localStorage.getItem('products'))
        if (data) {
            const listProduct = []
            for (let i = 0; i < data.length; i++) {
                const user = new Product(data[i].id, data[i].name, data[i].price, data[i].image)
                listProduct.push(user)
            }
            this.products = listProduct
        }
    }

    getProduct() {
        return this.products
    }
    sapXepgia(type = true) {
        if (type) {
            this.products.sort((a, b) => { return a.price - b.price })
        } else {
            this.products.sort((a, b) => { return b.price - a.price })
        }
    }
}

const store = new StoreProduct();
store.getData()



const createProduct = (event) => {
    event.preventDefault();
    console.log("oke")
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const image = document.getElementById('image').value;
    const price = document.getElementById('price').value;
    console.log(id)
    // const error = validate({ id, name, price, image })
    // if (error.length > 0) {
    //     document.getElementById('error').InnerHTML = error.join('<br>')
    //     return
    // }
    if (name == '' || price == '' || image == '' || id == '') {
        alert('điền đầy đủ thông tin')
        return
    }

    const product = new Product(id, name, price, image);
    const isCreate = store.add(product);
    if (isCreate) {
        alert('Thêm thành công')
        store.save();
        // renderProductHome(store.getProduct())
    } else {
        alert('Thêm thất bại')
    }
}








function isValidURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return (!!pattern.test(str))
}

function validate({ id, name, price, image }) {
    let error = [];
    if (id == '' || isNaN(id)) {
        error.push('id is invalid')
    }
    if (name == '') {
        error.push('name is not empty')
    }
    if (price == '' || isNaN(price)) {
        error.push('price is invalid')
    }
    if (image == '' || !isValidURL(image)) {
        const extent = image.split('.').pop()
        const allowImage = ['.jpj', '.jpeg', '.png', '.gif', '.bmp']
        if (!allowImage.includes(extent)) {
            error.push('image is not image link')
        }
    }
    return error
}





export default ClassProduct;