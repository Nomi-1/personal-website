import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Head from "../components/head"
import blogpostStyle from "../styles/blogpost.module.scss"

// No Solution yet to remove the slug if it is in the const,
// because of that, we'll export it manually in a new const
// it takes the response and provide it as a props to cont Blog

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`
/*
Conceptually, components are like JavaScript functions. 
They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

“Props” is a special keyword in React, 
which stands for properties and is being used for passing data from one component to another. 
But the important part here is that data with props are being passed in a uni-directional flow. 
( one way from parent to child)

Div: reder a html in a div
*/

const Blog = props => {
  return (
    <Layout>
      <Head title={props.data.markdownRemark.frontmatter.title} />
      <div className={blogpostStyle.page}>
        <div className={blogpostStyle.title}>
          <h1>{props.data.markdownRemark.frontmatter.title}</h1>
          <p>{props.data.markdownRemark.frontmatter.date}</p>
        </div>
        <div className={blogpostStyle.button}>
          <button>
            <Link to="/blog">back to Blog</Link>
          </button>
        </div>
        <div
          className={blogpostStyle.content}
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        ></div>
        <div className={blogpostStyle.button}>
          <button>
            <Link to="/blog">back to Blog</Link>
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default Blog