import React from "react"
import Layout from "../components/layout"
import Head from '../components/head'
import contactStyle from "../styles/contact.module.scss"


const Contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <div className={contactStyle.contact}>
      <h1>This is my contact page</h1>
      <h2>On this website I present my private &amp; study projects.<br />It is not for commercial purposes.</h2>
      <a href="mailto:schoppanaomi94@gmail.com">get in touch</a>
      </div>
    </Layout>
  )
}

export default Contact