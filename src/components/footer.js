import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyle from "../styles/footer.module.scss"
//import { FaBeer } from 'react-icons/fa';
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)
  return (
    <footer>
      <div className={footerStyle.footer}>
        <p>Futher information {data.site.siteMetadata.description}</p>
        <div className={footerStyle.social}>
          <a href="https://github.com/Nomi-1" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/naomi-schoppa-a355381ba/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer