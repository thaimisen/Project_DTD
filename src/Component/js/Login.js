import User from './Register';

export default Login;



function Login() {

  return (
    <div className="body">

      <main>
        <div class="block-form-login">
          <form id="formlogin" action="">
            <div class="title">
              <h2>Đăng Nhập</h2>
            </div>
            <div class="form-group-login">
              <label for="" class="lable">Username</label>
              <input type="text" id="username" name="username" class="form-input"></input>
              <span id="error-username"></span>
            </div>

            <div class="form-group-login">
              <label for="" class="lable">Password</label>
              <input type="password" id="password" name="password" class="form-input"></input>
              <span id="error-pass"></span>
            </div>
            <div class="nav-register">
              <p><a href="/forgotpassword" class="quenmk">Quên mật khẩu?</a></p>
              <p><a href="/register" class="chuacotk">Bạn chưa có tài khoản?</a></p>
            </div>
            <div class="submit">
              <button class="btn-submit" type="submit" onClick={signin}>Đăng nhập </button>
             
            </div>
            <div> <span id='thongbao'></span></div>
          </form>
        </div>
      </main>
    </div>
  )
}

function signin() {
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
  }
  class StoreUsers {
    constructor() {
      this.users = [];
    }

    login(username, password) {
      let user = null;
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].getUsername() == username &&
          this.users[i].getPassword() == password
        ) {
          user = this.users[i];
        }
      }
      return user;
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
          const user = new User(userlish[i].name, userlish[i].username, userlish[i].email, userlish[i].password, userlish[i].role);
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


  document.getElementById('formlogin') &&
  document.getElementById('formlogin').addEventListener('submit', function (event) {
    //ngăn chặn from load
    event.preventDefault()

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if(username==''||password==''){
      if (username == '') {
        document.getElementById('error-username').innerHTML = 'Tên đăng nhập không được để trống'
        document.getElementById("username").style.borderColor = "#FF0000"
      }
      else{
        document.getElementById('error-username').innerHTML = ''
        document.getElementById("username").style.borderColor = "#A9A9A9"
      }
      if (password == '') {
        document.getElementById('error-pass').innerHTML = 'Password không được không được để trống'
        document.getElementById("password").style.borderColor = "#FF0000"
      }
      else{
        document.getElementById('error-pass').innerHTML = ''
        document.getElementById("password").style.borderColor = "#A9A9A9"
      }
    }
    
    else {

      const ischeck = store.login(username, password)

      if (ischeck) {
        // document.getElementById('thongbao').innerHTML='Đăng nhập thành công'
        alert('đăng nhập thành công')
        window.location.href = "/";
        // if (role = 'admin') {
        //   window.location.href = "http://127.0.0.1:5500/asmgd2/admin_khongkt/form_adminkhongkt_html.html";
        // }
        //   else {
        //   window.location.href = "http://127.0.0.1:5500/asmgd2/admin/form_admin_html.html";
        // }

      }
      else {
        document.getElementById('thongbao').innerHTML='Đăng nhập thất bại'
      }
    }

  })
}