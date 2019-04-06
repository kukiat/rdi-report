import React from "react"
import NavBar from "../NavBar"
import Footer from "../Footer"
import "./index.css"

export default props => (
  <div>
    <NavBar />
    <div className="layout-wrapper-container">{props.children}</div>
    <Footer />
  </div>
)
