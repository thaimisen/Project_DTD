import logo from './logo.svg';
import './App.css';
import './Component/css/Home.css'
import './Component/css/Header.css'
import './Component/css/Register.css'
import './Component/css/Login.css'
import './Component/css/ForgotAccount.css';



import React from 'react'
import Home from './Component/js/Home.js';
import Foot from './Component/js/Footer.js';
import Head from './Component/js/Header.js';
import Register from './Component/js/Register.js';
import Login from './Component/js/Login.js';
import Forgotpassword from './Component/js/forgotpassword';
import ShowProduct from './Component/js/ShowProduct';
import ShoppingCart from './Component/js/ShoppingCart.js';
import ClassProduct from './Component/js/ClassProduct';
// import ClassRegister from './Component/js/ClassRegister.js';


// đạt commit
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
          <Switch>
          <Route exact path='/' ><Home /></Route>
          <Route exact path='/forgotpassword' ><Forgotpassword /></Route>
          <Route exact path='/register' ><Register/></Route>
          <Route exact path='/login'><Login/></Route> 
          <Route exact path='/showproduct/:id'><ShowProduct/></Route> 
          <Route exact path='/classproduct' ><ClassProduct /></Route>
            <Route exact path='/shoppingcart'><ShoppingCart/></Route> 
          </Switch>
          <Route path="/" >
            <Foot />
          </Route>
        </div>
      </Router>
    </div>
  );
}

function Detail() {
  let { id } = useParams();
  return (
    <h2>Detail{id}</h2>
  )
}



export default App;
