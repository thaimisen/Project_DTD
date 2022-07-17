export default Register;



function Register() {
    
    return (
        
        <div className="body">
            <div className="main">
            </div>
            <main>
                <div class="block-form">
                    <form id="form" action="">
                        <div class="title">
                            <h2>Đăng Ký</h2>
                        </div>
                        <div class="form-group">
                            <label for="" class="lable">Họ và tên</label>
                            <input type="text" id="name" name="fullname" class="form-input"></input>
                            <span id="messageName" class="form-message"></span>
                        </div>
                        <div class="form-group">
                            <label for="" class="lable">Tên Tài Khoản</label>
                            <input type="text" id="username" name="username" class="form-input"></input>
                            <span id="messageUsername" class="form-message"></span>
                        </div>
                        <div class="form-group">
                            <label for="" class="lable">Email</label>
                            <input type="text" id="email" name="email" class="form-input"></input>
                            <span id="messageEmail" class="form-message"></span>
                        </div>
                        <div class="form-group">
                            <label for="" class="lable">Mật Khẩu</label>
                            <input type="password" id="password" name="password" class="form-input"></input>
                            <span id="messagePassword" class="form-message"></span>
                        </div>

                        <div class="form-group">
                            <label for="" class="lable">Role</label>
                            <div class="form-group-gender">
                                <select name="" id="role" className="select-role">
                                    <option selected className="select-role-option">Select Roles</option>
                                    <option value="admin" className="select-role-option">Admin</option>
                                    <option value="user" className="select-role-option">User</option>
                                </select>
                            </div>
                            <span id="messageRole" class="form-message"></span>
                        </div>

                        <div class="nav-login">

                            <a href="/login">Bạn đã có tài khoản?</a>
                        </div>
                        <div class="submit">
                            <button class="btn-submit" type="submit"> SUBMIT</button>
                        </div>
                    </form>
                </div>
                
            </main>
        </div>
        
    )
}

