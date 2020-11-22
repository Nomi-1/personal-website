import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import Head from '../components/head'


const BlogPage = () => {
  const data = useStaticQuery (graphql`
  query{
    allMarkdownRemark{
      edges{
        node{
          frontmatter{
            title
            date
          }
          fields{
            slug
          }
        }
      }
    }
  }
`)
  return (
    <Layout>
      <Head title="Blog"/>
      <h1>A Blog about Frontend Developement</h1>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      <ol>
        {data.allMarkdownRemark.edges.map((edge) =>{
            return(
              <li>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
                <Link to={edge.node.fields.slug}> Read Article</Link>
              </li>
            )
        })} 
      </ol>
    </Layout>
  )
}
export default BlogPage