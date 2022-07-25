import '../css/ClassProduct.css';
import { Modal } from "react-bootstrap";
import React from 'react';



function ClassProduct(e) {

    return (

        <div className="body">

            <div class="container">
                <div class="row">

                    <div class="col-md-9">

                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" id="btn-create" data-bs-target="#frmProduct">
                            create
                        </button>
                        <button type="button" class="btn btn-primary" id="btn-Up" >
                            Up
                        </button>
                        <button type="button" class="btn btn-primary" id="btn-Down" >
                            Down
                        </button>
                        <button type="button" class="btn btn-primary" id="btn-search" >
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
                                        <form id="frmProductCreate">
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
                                            <button type="submit" class="btn btn-primary btn-submit" value="add">ADD</button>
                                            <div>
                                                <p id="error"></p>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- edit form--> */}
                        <div class="modal fade" id="modalProductEdit" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Product</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form id="frmProductEdit">
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
                                            <button type="submit" class="btn btn-primary btn-submit" value="add">Change</button>
                                            <div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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


function renderTable(products) {

    let content = ''
    for (let i = 0; i < products.length; i++) {
        const item = products[i];
        content += `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td width="231px"><img src="${item.image}"width=230px height=130px /></td>
                <td>
                <button type="button" class="btn btn-edit" onClick={onEdit(${item.id})}>edit</button>
                <br>
                <button type="button" class="btn btn-danger" onClick={onRemove(${item.id})}>remove</button>
                <br>
                </td>
            </tr>
            `
    }
    if (document.getElementById('tableBody')) {
        document.getElementById('tableBody').innerHTML = content

    }
}
// renderTable(store.getProduct())


function renderProductHome(store) {

    let content = ''
    for (let i = 0; i < store.length; i++) {
        const item = store[i];
        content += `
        <div class="grid__column">
            <a href="/showproduct?id=${item.id}" className="grid-column-content">
                 <div class="grid-column-content-img">
                    <img src="${item.image}" alt="" className="grid-column-item-img">
                </div>
                <div class="grid-column-content-item">
                    <p class="grid-column-content-name">${item.name}</p>
                    <p class="grid-column-content-price">${item.price}</p>
                </div>
            </a>
        </div>`
    }
    if (document.getElementById('home')) {
        document.getElementById('home').innerHTML = content

    }
}
// renderProductHome(store.getProduct())


document.getElementById('frmProductCreate') && document.getElementById('frmProductCreate').addEventListener('submit', function (event) {
    // event.preventDefault();

    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const image = document.getElementById('image').value;
    const price = document.getElementById('price').value;

    const error = validate({ id, name, price, image })
    if (error.length > 0) {
        document.getElementById('error').InnerHTML = error.join('<br>')
        return
    }
    if (name == '' || price == '' || image == '' || id == '') {
        alert('điền đầy đủ thông tin')
        return
    }
    const product = new Product(id, name, price, image);
    const isCreate = store.add(product);
    if (isCreate) {
        alert('Thêm thành công')
        store.save();
        renderTable(store.getProduct())

    } else {
        alert('Thêm thất bại')
    }

})



document.getElementById('frmProductEdit') && document.getElementById('frmProductEdit').addEventListener('submit', function (event) {
    event.preventDefault();
    const id = document.getElementById('prodId').value;
    const name = document.getElementById('prodName').value;
    const image = document.getElementById('prodImage').value;
    const price = document.getElementById('prodPrice').value;

    if (name == '' || price == '' || image == '' || id == '') {
        alert('điền đầy đủ thông tin')
        return
    }
    const product = new Product(id, name, price, image);
    const isCreate = store.update(product);
    if (isCreate) {
        alert('Cập nhật thành công')
        store.save();
        renderTable(store.getProduct())

    } else {
        alert('Cập nhật thất bại')
    }


})

function onRemove(id) {
    const confirmAction = window.confirm("bạn có muốn xoá product id: " + id);
    if (confirmAction) {
        const isRemove = store.remove(`${id}`);
        if (isRemove) {
            alert('Xoá thành công')
            store.save();
            renderTable(store.getProduct())
        } else {
            alert('Xoá thất bại')
        }
    }
}


function onEdit(id) {

    var myModal = new Modal(document.getElementById('modalProductEdit'), {
        keyboard: false
    })
    const product = store.getById(`${id}`);
    if (product) {
        document.getElementById('prodId').value = product.id;
        document.getElementById('prodName').value = product.name;
        document.getElementById('prodImage').value = product.image;
        document.getElementById('prodPrice').value = product.price;
    }
    myModal.show();
}


function isValidURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
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
window.addEventListener('load', function (e) {
    renderTable(store.getProduct())
    renderProductHome(store.getProduct())
    e.preventDefault();
})


// document.getElementById('btn-Up').addEventListener('click',function(e){
//     store.sapXepgia(true)
//     store.save()
//     renderTable(store.getProduct())
// })
// document.getElementById('btn-Down').addEventListener('click',function(e){
//     store.sapXepgia(false)
//     store.save()
//     renderTable(store.getProduct())
// })
// document.getElementById('btn-search').addEventListener('click', function(e){
//     let findName = prompt('Nhập tên sản phẩm bạn muốn tìm: ')
//     var item = store.getProduct().filter(item => item.getName().includes(findName))
//     renderTable(item)
// })
// document.removeEventListener('click')

export default ClassProduct;