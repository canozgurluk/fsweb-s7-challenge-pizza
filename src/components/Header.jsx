import { Link } from "react-router-dom/cjs/react-router-dom.min"
import React from "react"
import "./order.css"
import logo from "../assets/logo.svg"
const Header = () => {
    return(
        <header className="header-container">
            
                <img className="logo" src={logo} alt="logo" />
                <nav className=" navigation-bar"> 
                    <Link className=" navigation-bar-link">Anasayfa</Link>
                    <Link className=" navigation-bar-link">Seçenekler</Link>
                    <Link className=" navigation-bar-link">Sipariş Oluştur</Link>
                </nav>
            
        </header>
    )
}

export default Header;