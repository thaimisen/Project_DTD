
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function Forgotpassword() {

    return (
        <Router>
            <Switch>
            <Route path="/">
                <Forgot />
            </Route>
            <Route path="forgotcon">
                <Continue />
            </Route>
            </Switch>
        </Router>
    );
}
function Forgot() {
    return (
        <div class="block-form">
            <form id="form" action="" >
                <div class="title">
                    <h2>Quên mật khẩu</h2>
                    <p class="pmota">Nhập Email đã đăng kí tài khoản để lấy lại mật khẩu mới</p>
                </div>

                <div class="form-group">
                    <label class="lable">Email:</label>
                    <input type="text" id="email" class="form-input" ></input>
                    <span id="messageEmail" class="form-message"></span>
                </div>
                <div class="form-group">
                    <button class="btn-submit" type="submit" ><a href="forgotcon" class="aforgot">Tiếp tục</a></button>
                </div>
            </form>
        </div>
    )
}
function Continue() {
    return (

        <div class="block-form">
            <form id="form" action="" >
                <div class="title">
                    <h2>Chúng tôi đã gửi mã của bạn đến :</h2>
                    <p class="pmota">Vui lòng kiểm tra mã trong Email của bạn </p>
                </div>

                <div class="form-group">
                    <label class="lable">Mã xác nhận:</label>
                    <input type="text" id="maxacnhan" class="form-input" ></input>
                    <span id="messageEmail" class="form-message"></span>
                </div>
                <div class="form-group">
                    <button class="btn-submit" type="submit" ><a href="" class="tieptuc">Tiếp tục</a></button>
                </div>
            </form>
        </div>

    );
    
}
export default Forgotpassword;



