import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

const navName = ["TRANG CHỦ", "DỊCH VỤ", "THÚ CƯNG", "SẢN PHẨM", "LIÊN HỆ"]

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {navName.map((value) => 
            <Link to="/" className="navbar-name">
              {value}
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
