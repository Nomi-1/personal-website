import React, { useState } from "react"
import aboutStyle from "../styles/about.module.scss"
import Layout from "../components/layout"
import Head from "../components/head"
import bewerbung from "../images/bewerbung_1.jpg"
import { FaSass } from "@react-icons/all-files/fa/FaSass"
import { FaCss3 } from "@react-icons/all-files/fa/FaCss3"
import { FaJs } from "@react-icons/all-files/fa/FaJs"
import { FaHtml5 } from "@react-icons/all-files/fa/FaHtml5"
import { FaReact } from "@react-icons/all-files/fa/FaReact"
import Accordion from "../components/accordion"

const About = () => {
  const [active, setActive] = useState("Project: Static Website")

  return (
    <Layout>
      <Head title="About" />
      <div className={aboutStyle.darkstyle}>
        <div className={aboutStyle.inner}>
          <p>
            <strong>What happened so far</strong> I graduated from high school
            in 2013 with focus on design. After finishing school I started my
            bachelor studies in &raquo;
            <a
              href="https://www.oth-aw.de/studiengaenge-und-bildungsangebote/studienangebote/master-studiengaenge/medientechnik-und-medienproduktion/studium-medientechnik-und-medienproduktion/"
              target="_blank"
              rel="noreferrer"
              aria-label="OTH Amberg"
            >
              Media Technology &amp; Media Production
            </a>
            &laquo;, which I successfully completed in 2017.
            <br />
            <br /> I gained first work experience in a Tec-Company in Berlin as
            project manager. In 2018 I started working at Websitebutler and
            Sitejet and gained a lot of experience in webdesign. Later, I
            continued my education in the field of web development. Meanwhile I
            started my master in &raquo;
            <a
              href="https://imi-master.htw-berlin.de/"
              target="_blank"
              rel="noreferrer"
              aria-label="HTW"
            >
              Media Informatics
            </a>
            &laquo; at the HTW in Berlin. I expect to complete that in 2022.
          </p>
        </div>
        <div
          className={aboutStyle.inner}
          style={{ backgroundImage: `url(${bewerbung})` }}
        ></div>
      </div>
      <div className={aboutStyle.section}>
        <h1>Projects</h1>
        <h2>&amp; Learinings</h2>
        <p>
          My main skills are CSS, HTML5 and SASS. Through my studies and in my
          own projects I also learn JavaScript, React and Java. My previous
          experiences, targets and projects are summarized further down.
        </p>

        <div className={aboutStyle.skillicon}>
          <FaSass />
          <FaCss3 />
          <FaJs />
          <FaHtml5 />
          <FaReact />
        </div>
        <div className={aboutStyle.accordionOne}>
          <Accordion
            title="Project: Static Website"
            active={active}
            setActive={setActive}
            content="
            The project was created for the course &raquo;Media Programming&laquo;. The task was to generate a static website with a static website builder. I decided to use Gatsbyjs. I would like to improve my knowledge of React. Gatsbyjs works on the basis of React, so I decided to use this tool. Programming languages: React &amp; SASS"
          />
          <Accordion
            title="Project: SASS"
            active={active}
            setActive={setActive}
            content="
             2. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          />
          <Accordion
            title="Project: UX"
            active={active}
            setActive={setActive}
            content="
        4. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          />
          <Accordion
            title="Prospects and targets"
            active={active}
            setActive={setActive}
            content="
        5. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          />
        </div>
      </div>
    </Layout>
  )
}

export default About
