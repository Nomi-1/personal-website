import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "../styles/index.scss"
import Head from "../components/head"
import indexStyle from "../styles/index.module.scss"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <div className={indexStyle.banner}>
        <div className={indexStyle.bannercontent}>
          <div className={indexStyle.inner}>
            <h1>Port fo lio</h1>
            <h2>Design &amp; Development</h2>
          </div>
        </div>
      </div>
      <div className={indexStyle.container}>
        <div className={indexStyle.containerFlex}>
          <h2>Skills</h2>

          <Link to="/contact"> Contact me</Link>
        </div>
        <div className={indexStyle.containerStatic}>
          <p>
            Hello,
            <br />
            my name is Naomi. I am a master student in international media
            informatics. I also work as a web developer at Sitejet.
            <br /> <br />
            My main skills are CSS, SASS and HTML. I am also currently studying
            Java, Java Script and React. This portfolio page was created with
            Gatsby as a static website.
            <br /> <br />
            If you want to learn more, you can visit my GitHub or the Sitejet
            Template page for my View projects.
            <br /> <br />
            <Link to="/about">Learn more</Link>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
