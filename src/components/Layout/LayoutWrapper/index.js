import React, { useEffect } from "react"
import NavBar from "../NavBar"
import Footer from "../Footer"
import "./index.css"

export default (props) => {
  useEffect(() => {
  }, [])

  return (
    <div>
      <NavBar />
      <div css={{ marginTop: "70px", minHeight: "400px" }}>{props.children}</div>
      <Footer />
    </div>
  )
}
