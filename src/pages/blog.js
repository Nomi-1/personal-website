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
          My projects give me different insights into languages, extensions and
          systems. Therefore, I would like to summarise my results, pros &amp; cons in this
          blog. I also use this page to present my projects. I can
          consolidate and repeat my knowledge in this way. If you have any
          questions or comments, please feel free to contact me.{" "}
          <Link to="/contact">Contact</Link>
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
