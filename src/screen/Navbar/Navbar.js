import React from "react";
import './Navbar.css';
import { Link, NavLink, Switch, Route } from "react-router-dom";
import data from "./data";
import Home from "../Home/Home";
import Service from "../Service/Service";

// const navName = ["TRANG CHỦ", "DỊCH VỤ", "THÚ CƯNG", "SẢN PHẨM", "BỘ SƯU TẬP", "GIỎ HÀNG", "LIÊN HỆ"]

const Navbar = () => {
  return (
      <>
        <div className="navlink-container">
            <NavLink to='/' className="navlink">TÀI KHOẢN</NavLink>
            <NavLink to='/' className="navlink">ĐĂNG NHẬP</NavLink>
            <NavLink to='/' className="navlink">ĐĂNG KÍ</NavLink>
        </div>
        <nav className="navbar">
            <div className="navbar-container">
                {data.map((value) => 
                    <Link to={value.link} exact={value.exact} className="navbar-name">
                    {value.name}
                    </Link>
                )}
            </div>
        </nav> 
        {/* <Switch>
            {data.map((value) => 
                <Route path= {value.link} exact={value.exact} component={value.component}></Route>
            )}
            
        </Switch> */}
        <Switch className="navbar-content">
            <Route path="/Home/Home.js" exact><Home/></Route>
            <Route path="/Service/Service.js"><Service/></Route>
        </Switch>

      </>
  );
}
export default Navbar;