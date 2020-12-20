import React from "react"
import { Link } from "gatsby"
import headerStyle from "../styles/header.module.scss"

const Header = () => {
  return (
    <div className={headerStyle.position}>
    <header className={headerStyle.menuLevelNull}>
      <nav>
       {/* <h2>
          {" "}
          <Link to="/">
            Schoppa          </Link>
        </h2>*/}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  )
}

export default Header
