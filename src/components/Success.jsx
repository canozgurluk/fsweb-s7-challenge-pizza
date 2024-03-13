import React from 'react'
import './Success.css'
import logo from "../assets/logo.svg"

const Success = () => {
  return (
    <>
      <div className="success">
        <div className="success-container">
        <img className="logo" src={logo} alt="logo" />
          <h2>
            TEBRİKLER!<br></br>SİPARİŞİNİZ ALINDI!
          </h2>
        </div>
      </div>
    </>
  )
}
export default Success