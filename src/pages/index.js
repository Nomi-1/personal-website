import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "../styles/index.scss"
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Test 1</h1>
      <p>
        new Link <Link to="/contact">Contact me</Link>
      </p>
      <h1>Test</h1>
    </Layout>
  )
}

export default IndexPage