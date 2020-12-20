import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "../styles/boilerplate.scss"
import Head from "../components/head"
import indexStyle from "../styles/index.module.scss"
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight"
import background from "../images/background_home.jpg"
import backgroundtwo from "../images/bali.jpg"

const IndexPage = props => {
  return (
    <Layout>
      <Head title="Home" />
      <div
        className={indexStyle.banner}
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className={indexStyle.bannercontent}>
          <div className={indexStyle.inner}>
            <h1>Port fo lio</h1>
            <h2>Design &amp; Development</h2>
          </div>
        </div>
      </div>

      <div className={indexStyle.white}>
        <h2>Hello</h2>
        <p>
          my name is Naomi. I am a master student in international media
          informatics. I also work as a web developer at Sitejet.
          <br /> <br />
          My main skills are CSS, SASS and HTML. I am also currently studying
          Java, Java Script and React. This portfolio page is created with
          Gatsby on the basis of react.
          <br /> <br />
          If you want more information about me, you can visit my GitHub with my
          projects or LinkedIn for my CV. Or just stay here and{" "}
          <Link to="/about">
            discover more <FaChevronRight />
          </Link>
        </p>
      </div>
      <div className={indexStyle.darkstyle}>
        <div className={indexStyle.inner}>
          <h2>Design &amp; Development</h2>

          <p>
            Studies: Lorem ipsum dolor sit amet, consetetur sadipscing elitr <Link to="/about">discover more</Link>.
            <br /> <br />
            Work: Sed diam nonumy eirmod labore et magna aliquyam erat <Link to="/about">discover more</Link>.
          </p>
        </div>
        <div
          className={indexStyle.inner}
          style={{ backgroundImage: `url(${backgroundtwo})` }}
        ></div>
      </div>
      {/*  <div className={indexStyle.container}>
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
  </div> */}
    </Layout>
  )
}

export default IndexPage
