import React from 'react'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import './Home.css'
import logo from "../assets/logo.svg"

const Home = () => {
    const history = useHistory()
  
    const handleClick = () => {
      history.push('./order-pizza')
    }
  
    return (
      <>
        <div className="home-container">
          <img className="logo" src={logo} alt="logo" />
          <h2>KOD ACIKTIRIR</h2>
          <h2>PİZZA, DOYURUR</h2>
          <button  onClick={handleClick} data-cy='click'>
            ACIKTIM
          </button>
        </div>
        
        
      </>
    )
  }
  export default Home