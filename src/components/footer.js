import React from "react"
import { graphql, useStaticQuery } from "gatsby"
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
            <p>Futher information {data.site.siteMetadata.description}</p>
        </footer>
    )
}

export default Footer