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
         
        <div className="header-top">
            <p className="header-top-left">FREESHIP TOÀN QUỐC ĐƠN HÀNG TỪ 500K</p>
            <div className="header-top-phone">
                <img className="header-top-phone-img" src="/img/phone.png" alt=""></img>
                <p>Holine: 0793 705 739</p>
            </div>
        </div>
        
        <div className="header-nav">
            <div className="header-nav-logo">
                <Link to=""><img src="/img/logo2.png" alt="" className="logo"></img></Link>
            </div>
            <div className="header-nav-menu">
                <ul className="header-nav-menu-list">
                    <li className="header-nav-menu-item"><a href="">HÀNG MỚI</a></li>
                    <li className="header-nav-menu-item">
                        <a href="">ÁO NAM</a>
                        <div className="header-nav-submenu">
                            <ul className="header-nav-submenu-list">
                                <li className="header-nav-submenu-item"><a href="">Áo sơ mi</a></li>
                                <li className="header-nav-submenu-item"><a href="">Áo thun</a></li>
                                <li className="header-nav-submenu-item"><a href="">Áo polo</a></li>
                                <li className="header-nav-submenu-item"><a href="">Áo khoác</a></li>
                                <li className="header-nav-submenu-item"><a href="">Áo vét</a></li>
                                <li className="header-nav-submenu-item"><a href="">Áo ghi lê</a></li>
                                <li className="header-nav-submenu-item"><a href="">Áo len</a></li>

                            </ul>
                        </div>
                    </li>
                    <li className="header-nav-menu-item">
                        <a href="">QUẦN NAM</a>
                        <div className="header-nav-submenu">
                            <ul className="header-nav-submenu-list">
                                <li className="header-nav-submenu-item"><a href="">Quần jeans</a></li>
                                <li className="header-nav-submenu-item"><a href="">Quần tây</a></li>
                                <li className="header-nav-submenu-item"><a href="">Quần kaki</a></li>
                                <li className="header-nav-submenu-item"><a href="">QUần jogger</a></li>
                                <li className="header-nav-submenu-item"><a href="">Quần short</a></li>
                                <li className="header-nav-submenu-item"><a href="">Quần lót</a></li>

                            </ul>
                        </div>
                    </li>
                    <li className="header-nav-menu-item">
                        <a href="">PHỤ KIỆN</a>
                        <div className="header-nav-submenu">
                            <ul className="header-nav-submenu-list">
                                <li className="header-nav-submenu-item"><a href="">Thắt lưng</a></li>
                                <li className="header-nav-submenu-item"><a href="">Ví da</a></li>
                                <li className="header-nav-submenu-item"><a href="">Cà vạt</a></li>
                                <li className="header-nav-submenu-item"><a href="">Nơ</a></li>
                                <li className="header-nav-submenu-item"><a href="">Mũ nón</a></li>
                                <li className="header-nav-submenu-item"><a href="">Túi sách</a></li>
                                <li className="header-nav-submenu-item"><a href="">Mắt kính</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="header-nav-menu-item">
                        <a href="">GIÀY DÉP</a>
                        <div className="header-nav-submenu">
                            <ul className="header-nav-submenu-list">
                                <li className="header-nav-submenu-item"><a href="">Giày</a></li>
                                <li className="header-nav-submenu-item"><a href="">Sandal</a></li>
                                <li className="header-nav-submenu-item"><a href="">Dép Nam</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="header-nav-menu-item"><a href="">KHUYỄN MÃI</a></li>

                </ul>
            </div>
            <div className="header-nav-right">
                <div className="header-account">
                    <i className="fa-solid fa-user header-nav-right-icon login-hover"></i>
                    <div className="login">
                    <Link to="/login"className="login-item"> Đăng nhập</Link>
                    <Link to="/register"className="login-item"> Đăng Ký</Link>
                        
                    </div>
                </div>
                <div className="header-seacrh ">
                    <i className="fa-solid fa-magnifying-glass header-nav-right-icon click"></i>
                    <div className="header-search-input">
                        <input id="inputSearch" type="text" className="search-input" placeholder="Tìm kiếm sản phẩm"></input>
                        <button onclick="btnSearch()" id="btnSearch">Tim kiem</button>
                    </div>
                </div>
                <div className="header-cart  ">
                    <i className="fa-solid fa-cart-shopping header-nav-right-icon"></i>
                </div>
            </div>
        </div>
      
    </header>
    
    );
    }