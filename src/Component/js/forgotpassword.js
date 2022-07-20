import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import 'D:/reactjs/Project_DTD/src/Component/css/ForgotPassword.css'

// import Forgot from "./forgot.js";

function Forgotpassword() {

    return (
        <Router>
            <Route path="/">
                <Forgot />
            </Route>
            <Route path="/forgot-con">
                <Continue />
            </Route>
        </Router>
    );
}
function Forgot() {
    return (
        <div className="body">
            <div className="main">
            </div>
            <div class="block-form">
                <form id="form" action="" >
                    <div class="title">
                        <h2>Quên mật khẩu</h2>
                        <p class="lable">Nhập Email đã đăng kí tài khoản để lấy lại mật khẩu mới</p>
                    </div>

                    <div class="form-group-email">
                        <label class="lable">Email:</label>
                        <input type="text" id="email" class="form-input" ></input>
                        <span id="messageEmail" class="form-message"></span>
                    </div>
                    <div class="submit-ctn">
                        <button class="btn-submit" type="submit" ><a href="/forgot-con" >Continue</a></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

function Continue() {
    let { path, url } = useRouteMatch();

    return (
        <div>
            <li>
                <Link to={`${url}/rendering`}>Rendering with React</Link>
            </li>
            <Switch>
                <Route path={`${path}/:forgotID`}>
                    <Content />
                </Route>
            </Switch>
        </div>
    );
}

function Content() {
    let { forgotID } = useParams();

    return (
        <div>
            <h3>{forgotID}</h3>
        </div>
    );
}
export default Forgotpassword;


