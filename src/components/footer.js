import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyle from "../styles/footer.module.scss"

const Footer = () =>{
    const data = useStaticQuery (graphql`
    query {
      site {
        siteMetadata {
            description
        }
      }
    }
  `)
    return(
        <footer>
          <div className={footerStyle.footer}>
            <p>Futher information {data.site.siteMetadata.description}</p>
            </div>
        </footer>
    )
}

export default Footer