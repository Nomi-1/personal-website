import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "../styles/boilerplate.scss"
import Head from "../components/head"
import indexStyle from "../styles/index.module.scss"
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight"
import background from "../images/background_home.jpg"

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
        <h2>Welcome</h2>
        <h3>to my website</h3>
        <p>
          Hello, I'm Naomi and I'm a Master's student in &raquo;<a href="https://imi-master.htw-berlin.de/" target="_blank" rel="noreferrer" aria-label="HTW">Media
          Informatics</a>&laquo; at the HTW in Berlin. Besides my studies I work as a webdesigner &amp; webdeveloper for <a href="https://www.sitejet.io/en" target="_blank" rel="noreferrer" aria-label="Sitejet">Sitejet</a>.
          <br /> <br />
          My main skills are CSS, SASS and HTML. I am also currently studying
          Java, Java Script and React. This portfolio page is created with
          Gatsby which is based on react.
          <br /> <br />
          If you want more information about me, you can visit my GitHub with my
          projects or LinkedIn for my CV. Or just stay here and{" "}
          <Link to="/about">
            discover more <FaChevronRight />
          </Link>
        </p>
      </div>
      <div
        className={indexStyle.darkstyle}
      >
        <div className={indexStyle.inner}>
          <h2>Design</h2>
          <h3>&amp; Development</h3>
          <div className={indexStyle.columnsthreeouter}>
            <div className={indexStyle.threecolumns}>
              <p>
                <strong>Studies: </strong>
                My Master's includes many exciting projects. I was able to gain
                an insight into visual programming and game programming.
                However, my specialisation is in web programming. Which is why
                my focus is on mastering secure HTML5, CSS, SASS, JS &amp;
                React. I have also taken a few courses in UX/UI optimisation so
                far.
              </p>
            </div>
            <div className={indexStyle.threecolumns}>
              <p>
                <strong>Work:</strong> My topics of responsibility is the
                creation, debugging and testing of the presets that are common
                for a website creation. Since presets are designed for every
                possible usecase, the creation goes into more complex SASS
                topics. The presets can be easily adapted via parameters using
                Sitejet's CMS.
                <br />
                <br />
                In addition to this task, I work on the UX/UI optimisation of
                the CMS. User-friendliness is always in the
                foreground.
              </p>
            </div>
            <div className={indexStyle.threecolumns}>
              <p>
                <strong>Privat Projects:</strong> My private projects are mostly concerned with the creation of websites. I like to test new CMS systems and website builders. This gives me a good overview of the market and always provides me with inspiration for UX/UI solutions.

                <br />
                <br />
                Outside of programming, I take photographs and work on smaller design projects: These include logo creation and drawings.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage