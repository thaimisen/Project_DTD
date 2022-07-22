import React, { useState } from "react";
import validator from 'validator'
function Register() {
    const [emailError, setEmailError] = useState('')
    const validateEmail = (e) => {
      var email = e.target.value
    
      if (validator.isEmail(email)) {
        setEmailError('Valid Email :)')
      } else {
        setEmailError('Enter valid Email!')
      }
    }

    return (

        <div className="body">

            <main>
                <div class="block-form">
                    <form id="formregister" action="">
                        <div class="title">
                            <h2>Đăng Ký</h2>
                        </div>
                        <div class="form-group">
                            <label for="" class="lable">Họ và tên</label>
                            <input type="text" id="name" name="fullname" class="form-input"></input>
                            <span id="error-name" class="form-message"></span>
                        </div>
                        <div class="form-group">
                            <label for="" class="lable">Tên Tài Khoản</label>
                            <input type="text" id="usernameregit" name="username" class="form-input"></input>
                            <span id="error-usernameregit" class="form-message"></span>
                        </div>
                        <div class="form-group">
                            <label for="" class="lable">Email</label>
                            <input type="email" id="email" name="email" class="form-input" onChange={(e) => validateEmail(e)}></input>
                            <span id="error-email" class="form-message"></span>
                        </div>
                        <div class="form-group">
                            <label for="" class="lable">Mật Khẩu</label>
                            <input type="password" id="passwordregit" name="password" class="form-input"></input>
                            <span id="error-passwordregit" class="form-message"></span>
                        </div>

                        {/* <div class="form-group">
                            <label for="" class="lable">Role</label>
                            <div class="form-group-gender">
                                <select name="" id="role" className="select-role">
                                    <option selected className="select-role-option">Select Roles</option>
                                    <option value="admin" className="select-role-option">Admin</option>
                                    <option value="user" className="select-role-option">User</option>
                                </select>
                            </div>
                            <span id="error-role" class="form-message"></span>
                        </div> */}

                        <div class="nav-login">

                            <a href="/login" class="chuacotaikhoan">Bạn đã có tài khoản?</a>
                        </div>
                        <div class="submit">
                            <button class="btn-submit" type="submit" onClick={User}> Tạo tài khoản</button>
                        </div>
                    </form>
                </div>

            </main>
        </div>

    )


}
function User() {
    class User {
        constructor(name, username, email, password, role) {
            this.name = name;
            this.username = username;
            this.email = email;
            this.password = password;
            this.role = "User";
        }
        setName(name) {
            this.name = name;
        }
        setPassword(password) {
            this.password = password;
        }

        getUsername() {
            return this.username;
        }
        getPassword() {
            return this.password;
        }
        getName() {
            return this.name;
        }
        getRole() {
            return this.role;
        }
        xuatThongTin() {
            console.log(`Name: ${this.name}`);
            console.log(`Username: ${this.username}`);
            console.log(`Email: ${this.email}`);
            console.log(`Password: ${this.password}`);
            console.log(`Role: ${this.role}`);
        }

    }

    class StoreUsers {
        constructor() {
            this.users = [];
        }

        addUser(user) {

            for (let i = 0; i < this.users.length; i++) {
                if (this.users[i].getUsername() === user.getUsername()) {
                    return false
                }
            }

            this.users.push(user);

            return true
        }


        save() {
            const user = JSON.stringify(this.users);
            console.log('user', user)
            localStorage.setItem('users', user);
        }
        getdata() {
            const data = localStorage.getItem('users');

            if (data) {
                //convert data
                const userlish = JSON.parse(data);
                const arrUser = []
                //lấy lại user
                for (let i = 0; i < userlish.length; i++) {
                    const user = new User(userlish[i].name, userlish[i].username, userlish[i].email, userlish[i].password);
                    arrUser.push(user);
                }
                this.users = arrUser
            }
        }

        getListUsers() {
            return this.users
        }
    }


    const store = new StoreUsers();
    store.getdata()

    document.getElementById('formregister') && document.getElementById('formregister').addEventListener('submit', function (e) {
        //ngăn chặn from load
        e.preventDefault()
        const name = document.getElementById('name').value;
        const username = document.getElementById('usernameregit').value;
        const email = document.getElementById('email').value
        const password = document.getElementById('passwordregit').value;

        if (name == '' || username == '' || email == '' || password == '') {
            if (name == "") {
                document.getElementById('error-name').innerHTML = 'Họ và tên không được để trống'
                document.getElementById("name").style.borderColor = "#FF0000"
            }
            else {
                document.getElementById("name").style.borderColor = "#E8F0FE"
                document.getElementById('error-name').innerHTML = ''
            }

            if (username == "") {
                document.getElementById('error-usernameregit').innerHTML = 'Tên đăng nhập không được để trống'
                document.getElementById("usernameregit").style.borderColor = "#FF0000"
            }
            else {
                document.getElementById("usernameregit").style.borderColor = "#E8F0FE"
                document.getElementById('error-usernameregit').innerHTML = ''
            }
            if (email == "") {
                document.getElementById('error-email').innerHTML = 'Email không được để trống'
                document.getElementById("email").style.borderColor = "#FF0000"

            }
            else {
                document.getElementById("email").style.borderColor = "#E8F0FE"
                document.getElementById('error-email').innerHTML = ''
            }

            if (password == "") {
                document.getElementById('error-passwordregit').innerHTML = 'Mật khẩu không được để trống'
                document.getElementById("passwordregit").style.borderColor = "#FF0000"
            }
            else {
                document.getElementById("passwordregit").style.borderColor = "#E8F0FE"
                document.getElementById('error-passwordregit').innerHTML = ''
            }
        }


        else {
            const user = new User(name, username, email, password)
            const ischeck = store.addUser(user)
            if (ischeck) {
                alert('Đăng kí thành công')
                store.save()
                
            }
            else {
                alert('Tài khoản đã tồn tại')
            }
            return

        }

    })

    document.getElementById('name').addEventListener('blur', function (e) {
        if (e.target.value == '') {
            document.getElementById('error-name').innerHTML = 'Họ và tên không được để trống'
            document.getElementById("name").style.borderColor = "#FF0000"
        } else {
            document.getElementById("name").style.borderColor = "#E8F0FE"
            document.getElementById('error-name').innerHTML = ''
        }
    })
    document.getElementById('usernameregit').addEventListener('blur', function (e) {
        if (e.target.value == '') {
            document.getElementById('error-usernameregit').innerHTML = 'Tên đăng nhập không được để trống'
            document.getElementById("usernameregit").style.borderColor = "#FF0000"
        } else {
            document.getElementById("usernameregit").style.borderColor = "#E8F0FE"
            document.getElementById('error-usernameregit').innerHTML = ''
        }
    })
    document.getElementById('email').addEventListener('blur', function (e) {
        if (e.target.value == '') {
            document.getElementById('error-email').innerHTML = 'Email không được để trống'
            document.getElementById("email").style.borderColor = "#FF0000"
        }

        else {
            document.getElementById("email").style.borderColor = "#E8F0FE"
            document.getElementById('error-email').innerHTML = ''
        }
    })
    document.getElementById('passwordregit').addEventListener('blur', function (e) {
        if (e.target.value == '') {
            document.getElementById('error-passwordregit').innerHTML = 'Mật khẩu không được để trống'
            document.getElementById("passwordregit").style.borderColor = "#FF0000"
        } else {
            document.getElementById("passwordregit").style.borderColor = "#E8F0FE"
            document.getElementById('error-passwordregit').innerHTML = ''
        }
    })


}



export default Register;