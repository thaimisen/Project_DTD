import logo from './logo.svg';
import './App.css';
import './Component/css/Home.css'
import './Component/css/Header.css'
import './Component/css/Register.css'
import './Component/css/Login.css'



import React from "react";
import Home from './Component/js/Home.js';
import Foot from './Component/js/Footer.js';
import Head from './Component/js/Header.js';
import Slider from './Component/js/Slider.js';
import Register from './Component/js/Register.js';
import Login from './Component/js/Login.js';
// import ShowProduct from './Component/js/ShowProduct.js';
// import ClassRegister from './Component/js/ClassRegister.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
function App() {
  return (
    <div class="App">
    <Router>
    <div >
    <Route path="/" >
          <Head />
        </Route>
      
        <Route exact path="/" >
          <Home />
        </Route>
        {/* <Route  path="/">
          <Slider />
        </Route> */}
        <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        {/* <Route path="/showproduct">
          <ShowProduct />
        </Route> */}
        </Switch>
      
      <Route path="/" >
          <Foot />
        </Route>

        
    </div>
  </Router>
  
  </div>
);
}




export default App;
