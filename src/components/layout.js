import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import layoutStyle from "../styles/layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyle.globalLayout}>
      <Header></Header>
      <div className={layoutStyle.content}>{props.children}</div>
      <Footer></Footer>
    </div>
  )
}

export default Layout
