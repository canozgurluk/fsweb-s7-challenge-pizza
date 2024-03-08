import { Link } from "react-router-dom/cjs/react-router-dom.min"
import React from "react"
import "./order.css"
const Header = () => {
    return(
        <div className="header-container">
            <header>
                <h1>Teknolojik Yemekler</h1>
                <nav className=" navigation-bar"> 
                    <Link className=" navigation-bar-link">Anasayfa</Link>
                    <Link className=" navigation-bar-link">Seçenekler</Link>
                    <Link className=" navigation-bar-link">Sipariş Oluştur</Link>
                </nav>
            </header>
        </div>
    )
}

export default Header;