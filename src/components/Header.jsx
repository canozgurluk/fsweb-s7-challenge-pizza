import { Link } from "react-router-dom/cjs/react-router-dom.min"
import React from "react"
import "./order.css"
import logo from "../assets/logo.svg"
const Header = () => {
    return(
        <header className="header-container">
            
                <img className="logo" src={logo} alt="logo" />
                <nav className=" navigation-bar"> 
                    <Link to="/" className=" navigation-bar-link">Anasayfa</Link>
                    <Link to="/order-pizza"className=" navigation-bar-link2">Sipariş Oluştur</Link>
                </nav>
            
        </header>
    )
}

export default Header;