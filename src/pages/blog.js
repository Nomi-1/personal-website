import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import Head from "../components/head"
import blogStyle from "../styles/blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Blog" />
      <div className={blogStyle.inner}>
        <h1>A Blog about Frontend Developement</h1>
        <p>
          Als Programmierbeginner ist es möglich, in kurzer Zeit viel zu lernen.
          Dementsprechend auch viel wieder zu vergessen. Aus diesem Grund werde
          ich hier meine Learining, Projekte und Programmiersprachen, Hacks zur
          Verfügung stellen. Natürlich einmal, dass ich das Wissen mit euch
          Teilen kann, aber zum anderen auch, weil ich auf diese Weise mein
          Wissen nochmal Festigen und wiederholen kann. Bei Fragen oder
          Anmerkungen könnt ihr mich gerne jeder Zeit kontaktieren.{" "}
          <Link to="/contact">Contact me</Link>
        </p>
      </div>
      <div className={blogStyle.blog}>
        <ol>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <li>
                <div>
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p>{edge.node.frontmatter.date}</p>
                </div>
                <div>
                  <Link to={edge.node.fields.slug}> Read Article</Link>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}
export default BlogPage
