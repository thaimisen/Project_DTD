
// class Product {
//     constructor(ten, gia, hinhAnh, id) {
//         this.ten = ten
//         this.gia = gia
//         this.hinhAnh = hinhAnh
//         this.id = id
//     }
//     getId() {
//         return this.id
//     }
//     getName() {
//         return this.ten
//     }
//     getGia() {
//         return this.gia
//     }
//     getImg() {
//         return this.hinhAnh
//     }
// }

// class listProduct {
//     constructor() {
//         this.list = []
//     }
//     getList() {
//         return this.list
//     }
//     addProduct(product) {
//         let list = this.list
//         let isCheck = true
//         for (let i = 0; i < list.length; i++) {
//             if (list[i].id == product.id) {
//                 isCheck = false
//             }
//         }
//         if (!isCheck) {
//             return isCheck
//         } else {
//             this.list.push(product)
//             isCheck = true
//         }
//         return isCheck
//     }

//     findProductByName(name) {
//         let list = this.list
//         let kt
//         for (let i = 0; i < list.length; i++) {
//             if (list[i].ten == name) {
//                 kt = true
//             }
//         }
//         if (kt) {
//             console.log(kt)
//         } else {
//             console.log('khong tim thay!')
//         }
//     }
//     updateProduct(product) {
//         let list = this.list
//         console.log(product.id)
//         // console.log('b')
//         console.log(list.length)
//         for (let i = 0; i < list.length; i++) {
//             console.log('1')
//             if (list[i].id == product.id) {
//                 list[i] = product
//             }
//         }
//     }
//     findProduct(id) {
//         let list = this.list
//         let kt
//         for (let i = 0; i < list.length; i++) {
//             if (list[i].id == id) {
//                 return list[i]
//             }
//         }
//     }
//     removeProduct(id) {
//         let list = this.list
//         let kt = false
//         for (let i = 0; i < list.length; i++) {
//             if (list[i].id == id) {
//                 this.list.splice(i, 1)
//                 kt = true
//             }
//         }
//         return kt
//     }
//     saveData() {
//         const data = JSON.stringify(this.list)
//         localStorage.setItem('data', data)
//     }
//     getData() {
//         const data = localStorage.getItem('data')
//         if (data) {
//             const listData = JSON.parse(data)
//             const listGetData = []
//             listData.forEach(value => {
//                 listGetData.push(value)
//             })
//             this.list = listGetData
//         }
//     }
//     delete() {
//         const data = localStorage.getItem('data')
//         localStorage.removeItem('data', data)
//         // this.list.saveData()
//     }
// }

// const list = new listProduct()
// list.getData()


// function renderTable(products) {
//     let content = ''
//     for (let i = 0; i < products.length; i++) {
//         const item = products[i];
//         content += `
//         <tr>
//             <td>${item.id}</td>
//             <td>${item.name}</td>
//             <td>${item.price}</td>
//             <td><img src="${item.image}"width=230px height=130px /></td>
//             <td>
//             <button type="button" class="btn btn-primary" onClick="onEdit(${item.id})">edit</button>
//             <br>
//             <button type="button" class="btn btn-danger" onClick="onRemove(${item.id})">remove</button>
//             <br>
//             <a href="./product-detail.html?id=${item.id}"/>View detail</a>
//             </td>
//         </tr>
//         `
//     }
//     if (document.getElementById('tableBody')) {
//         document.getElementById('tableBody').innerHTML = content
//     }
// }
// renderTable(list.getProduct())

// document.getElementById('frmProductCreate') && document.getElementById('frmProductCreate').addEventListener('submit', function (event) {
//     event.preventDefault();
//     const id = document.getElementById('id').value;
//     const name = document.getElementById('name').value;
//     const image = document.getElementById('image').value;
//     const price = document.getElementById('price').value;

//     const error = validate({ id, name, price, image })
//     if (error.length > 0) {
//         document.getElementById('error').innerHTML = error.join('<br>')
//         return
//     }

//     if (name == '' || price == '' || image == '' || id == '') {
//         alert('điền đầy đủ thông tin')
//         return
//     }
//     const product = new Product(id, name, price, image);
//     const isCreate = list.add(product);
//     if (isCreate) {
//         alert('Thêm thành công')
//         list.save();
//         renderTable(list.getProduct());
//     } else {
//         alert('Thêm thất bại')
//     }

// })

// document.getElementById('frmProductEdit') && document.getElementById('frmProductEdit').addEventListener('submit', function (event) {
//     event.preventDefault();
//     const id = document.getElementById('prodId').value;
//     const name = document.getElementById('prodName').value;
//     const image = document.getElementById('prodImage').value;
//     const price = document.getElementById('prodPrice').value;

//     if (name == '' || price == '' || image == '' || id == '') {
//         alert('điền đầy đủ thông tin')
//         return
//     }
//     const product = new Product(id, name, price, image);
//     const isCreate = list.update(product);
//     if (isCreate) {
//         alert('Cập nhật thành công')
//         list.save();
//         renderTable(list.getProduct())
//     } else {
//         alert('Cập nhật thất bại')
//     }

// })


// function onRemove(id) {
//     const confirmAction = window.confirm("bạn có muốn xoá product id: " + id);
//     if (confirmAction) {
//         const isRemove = list.remove(`${id}`);
//         if (isRemove) {
//             alert('Xoá thành công')
//             list.save();
//             renderTable(list.getProduct())
//         } else {
//             alert('Xoá thất bại')
//         }
//     }
// }

// function onEdit(id) {

//     var myModal = new Modal(document.getElementById('modalProductEdit'), {
//         keyboard: false
//     })
//     const product = list.getById(`${id}`);
//     if (product) {
//         document.getElementById('prodId').value = product.id;
//         document.getElementById('prodName').value = product.name;
//         document.getElementById('prodImage').value = product.image;
//         document.getElementById('prodPrice').value = product.price;
//     }
//     myModal.show();
// }

// function isValidURL(str) {
//     var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
//         '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
//         '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
//         '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
//         '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
//         '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
//     return !!pattern.test(str);
// }

// function validate({ id, name, price, image }) {
//     let error = [];
//     if (id == '' || isNaN(id)) {
//         error.push('id is invalid')
//     }
//     if (name == '') {
//         error.push('name is not empty')
//     }
//     if (price == '' || isNaN(price)) {
//         error.push('price is invalid')
//     }
//     if (image == '' || !isValidURL(image)) {
//         const extent = image.split('.').pop()
//         const allowImage = ['.jpj', '.jpeg', '.png', '.gif', '.bmp']
//         if (!allowImage.includes(extent)) {
//             error.push('image is not image link')
//         }
//     }
//     return error
// }
// document.getElementById('btn-Up').addEventListener('click', function (e) {
//     list.sapXepgia(true)
//     list.save()
//     renderTable(list.getProduct())
// })
// document.getElementById('btn-Down').addEventListener('click', function (e) {
//     list.sapXepgia(false)
//     list.save()
//     renderTable(list.getProduct())
// })
// document.getElementById('btn-search').addEventListener('click', function (e) {
//     let findName = prompt('Nhập tên sản phẩm bạn muốn tìm: ')
//     var item = list.getProduct().filter(item => item.getName().includes(findName))
//     renderTable(item)
// })
// document.removeEventListener('click')
// document.removeEventListener('submit')