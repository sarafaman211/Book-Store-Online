import React from 'react'
import { Link } from "react-router-dom"

const ThankYou = () => {
  return (
    <div style={{ paddingTop: 100, textAlign: "center" }}>
      <h1 style={{ textAlign:"center" , fontSize: "2rem" }}>ThankYou</h1>
      <Link style={{ textDecoration: "none", color: "black", fontSize: "4rem" }} to="/">Go Back to Home <i className=" fas fa-solid fa-arrow-left"></i></Link>
      </div>
  )
}

export default ThankYou