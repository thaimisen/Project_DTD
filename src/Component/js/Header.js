import { Link } from "react-router-dom";
import Slider from "./Slider";
export default Head;

function Head() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
  
    
    return (
        <header>
         
        <div class="header-top">
            <p class="header-top-left">FREESHIP TOÀN QUỐC ĐƠN HÀNG TỪ 500K</p>
            <div class="header-top-phone">
                <img class="header-top-phone-img" src="/img/phone.png" alt=""></img>
                <p>Holine: 0793 705 739</p>
            </div>
        </div>
        
        <div class="header-nav">
            <div class="header-nav-logo">
                <Link to=""><img src="/img/logo2.png" alt="" class="logo"></img></Link>
            </div>
            <div class="header-nav-menu">
                <ul class="header-nav-menu-list">
                    <li class="header-nav-menu-item"><a href="">HÀNG MỚI</a></li>
                    <li class="header-nav-menu-item">
                        <a href="">ÁO NAM</a>
                        <div class="header-nav-submenu">
                            <ul class="header-nav-submenu-list">
                                <li class="header-nav-submenu-item"><a href="">Áo sơ mi</a></li>
                                <li class="header-nav-submenu-item"><a href="">Áo thun</a></li>
                                <li class="header-nav-submenu-item"><a href="">Áo polo</a></li>
                                <li class="header-nav-submenu-item"><a href="">Áo khoác</a></li>
                                <li class="header-nav-submenu-item"><a href="">Áo vét</a></li>
                                <li class="header-nav-submenu-item"><a href="">Áo ghi lê</a></li>
                                <li class="header-nav-submenu-item"><a href="">Áo len</a></li>

                            </ul>
                        </div>
                    </li>
                    <li class="header-nav-menu-item">
                        <a href="">QUẦN NAM</a>
                        <div class="header-nav-submenu">
                            <ul class="header-nav-submenu-list">
                                <li class="header-nav-submenu-item"><a href="">Quần jeans</a></li>
                                <li class="header-nav-submenu-item"><a href="">Quần tây</a></li>
                                <li class="header-nav-submenu-item"><a href="">Quần kaki</a></li>
                                <li class="header-nav-submenu-item"><a href="">QUần jogger</a></li>
                                <li class="header-nav-submenu-item"><a href="">Quần short</a></li>
                                <li class="header-nav-submenu-item"><a href="">Quần lót</a></li>

                            </ul>
                        </div>
                    </li>
                    <li class="header-nav-menu-item">
                        <a href="">PHỤ KIỆN</a>
                        <div class="header-nav-submenu">
                            <ul class="header-nav-submenu-list">
                                <li class="header-nav-submenu-item"><a href="">Thắt lưng</a></li>
                                <li class="header-nav-submenu-item"><a href="">Ví da</a></li>
                                <li class="header-nav-submenu-item"><a href="">Cà vạt</a></li>
                                <li class="header-nav-submenu-item"><a href="">Nơ</a></li>
                                <li class="header-nav-submenu-item"><a href="">Mũ nón</a></li>
                                <li class="header-nav-submenu-item"><a href="">Túi sách</a></li>
                                <li class="header-nav-submenu-item"><a href="">Mắt kính</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="header-nav-menu-item">
                        <a href="">GIÀY DÉP</a>
                        <div class="header-nav-submenu">
                            <ul class="header-nav-submenu-list">
                                <li class="header-nav-submenu-item"><a href="">Giày</a></li>
                                <li class="header-nav-submenu-item"><a href="">Sandal</a></li>
                                <li class="header-nav-submenu-item"><a href="">Dép Nam</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="header-nav-menu-item"><a href="">KHUYỄN MÃI</a></li>

                </ul>
            </div>
            <div class="header-nav-right">
                <div class="header-account">
                    <i class="fa-solid fa-user header-nav-right-icon login-hover"></i>
                    <div class="login">
                    <Link to="/login"class="login-item"> Đăng nhập</Link>
                    <Link to="/register"class="login-item"> Đăng Ký</Link>
                        
                    </div>
                </div>
                <div class="header-seacrh ">
                    <i class="fa-solid fa-magnifying-glass header-nav-right-icon click"></i>
                    <div class="header-search-input">
                        <input id="inputSearch" type="text" class="search-input" placeholder="Tìm kiếm sản phẩm"></input>
                        <button onclick="btnSearch()" id="btnSearch">Tim kiem</button>
                    </div>
                </div>
                <div class="header-cart  ">
                    <i class="fa-solid fa-cart-shopping header-nav-right-icon"></i>
                </div>
            </div>
        </div>
      
    </header>
    
    );
    }