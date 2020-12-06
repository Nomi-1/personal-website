import React from "react"
import { Link } from "gatsby"

import headerStyle from "../styles/header.module.scss"

const Header = () => {
  return (
    <header className={headerStyle.menuLevelNull}>
      <nav>
        <h1>
          {" "}
          <Link to="/">
            N.<strong>Schoppa</strong>
          </Link>
        </h1>
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
  )
}

export default Header
