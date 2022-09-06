import "./index.scss";
import logo from "../../assets/img/argentBankLogo.png";
import { Link } from "react-router-dom";
import React from "react";

const Header: React.FC = () => (
  <nav className="main-nav">
    <Link to="/" className="main-nav-logo">
      <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
      <h1 className="sr-only">Argent Bank</h1>
    </Link>
    <div>
      <Link to="/signIn" className="main-nav-item">
        <i className="fa fa-user-circle"></i>
        <span className="main-nav-item-text">Sign In</span>
      </Link>
    </div>
  </nav>
);

export default Header;
