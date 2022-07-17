import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";


// import Forgot from "./forgot.js";

function Forgotpassword() {
    
    return(  
           <Router>
          <Route  path="/">
          <Forgot/>
          </Route> 
          <Route  path="/forgot-con">
          <Continue/>
          </Route> 
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
                        <button class="btn-submit" type="submit" ><a href="/forgot-con">Tiếp tục</a></button>
                    </div>
                </form>
            </div>
        )
    }
    function Continue() {
        return(
           <div>
            <h1>chạy coi dcm</h1>
            </div>
        );
            }
    export default  Forgotpassword;
    

