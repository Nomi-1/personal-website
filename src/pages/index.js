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
        <h2>Welcome</h2>
        <h3>to Naomis website</h3>
        <p>
          Hello, I am Naomi and a master student in international media
          informatics. I also work as webdesigner &amp; webdeveloper at Sitejet.
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
       /* style={{ backgroundImage: `url(${backgroundtwo})` }}*/>
        <div className={indexStyle.inner}>
          <h2>Design</h2>
          <h3>&amp; Development</h3>
          <div className={indexStyle.columnsthreeouter}>

          <div className={indexStyle.threecolumns}>
            <p>
              <strong>Studies:</strong> Mein Master umfasst viele spannende
              Projekte. Hierbei konnte ich einen Einblick in Visual Programming
              und Game-Programming erhalten. Allerdings liegt meine
              Spezialisierung in der Webprogammierung. Weshalb mein Fokus darauf
              liegt, sicheres HTML5, CSS, SASS, JS &amp; React zu beherrschen.
              Außerdem habe ich bisher einige Kurse in UX-/UI-Optimierung
              belegt.</p>
              <Link to="/about">Discover more</Link>.
          </div>
          <div className={indexStyle.threecolumns}>
            <p>
              <strong>Work:</strong> Meine Aufgabenbereich ist die Erstellung,
              Debuggen und die Testung von den Presets, die für eine
              Websiteerstellung gängig sind. Da Presets für jeden Moglichen
              usecase ausgelegt sind, geht die Erstellung in den komplexeren
              SASS Bereich. Die Presets können via Parameter einfach über das
              CMS von Sitejet angepasst werden.
              <br />
              <br />
              Neben dieser Aufgabe befasse ich mich mit UX-/UI-Optmierung des
              CMS und der Presets. Hierbei steht die Userfreundlichkeit stets im
              Vordergrund. 
            </p>
            <Link to="/about">Discover more</Link>.
          </div>
          <div className={indexStyle.threecolumns}>
            <p>
              <strong>Privat Projects:</strong> Meine Privatprojekte
              beschäftigen sich größenteils mit der Erstellung von Websites.
              Hierbei probieren ich gerne neue CMS-Systeme und Websitebuilder.
              Dadruch hat man einen guten Marktüberblick und bekommt stets
              inspirationen für UX-/UI-Lösungen.
              <br />
              <br />
              Außerhalb der Progammierung fotografiere ich und widme mich noch
              kleineren Design Projekten: Darunter fallen Logoerstellungen,
              Zeichnungen und Fotografien. </p>
              <Link to="/about">Discover more</Link>.
          </div>
        </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
/* <div
          className={indexStyle.inner}
          style={{ backgroundImage: `url(${backgroundtwo})` }}
        ></div>
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
  </div> */