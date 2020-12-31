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
          As a beginner programmer, it is possible to learn a lot in a short
          time. Accordingly, it is also possible to forget a lot again. For this
          reason, I will make my learning, projects, programming languages and
          hacks available here. Of course, once that I can share the knowledge
          with you, but also because I can consolidate and repeat my knowledge
          in this way. If you have any questions or comments, please feel free
          to contact me at any time. <Link to="/contact">Contact</Link>
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
