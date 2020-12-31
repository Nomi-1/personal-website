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
  const [active, setActive] = useState("Static Website")

  return (
    <Layout>
      <Head title="About" />
      <div className={aboutStyle.darkstyle}>
        <div className={aboutStyle.inner}>
          <p>
            <strong>What happened so far</strong> I graduated from high school
            in 2013 with focus on design. After finishing school I started my
            bachelor studies &raquo;Media Technology &amp; Media
            Production&laquo;, which I successfully completed in 2017.
            <br />
            <br /> I gained first work experience in a Tec-Company in Berlin as
            project manager. In 2018 I started working at Websitebutler and
            Sitejet and gained a lot of experience in webdesign. Later I
            developed in the direction of webdevelopment. Meanwhile I'm doing my
            master in international media informatics at the HTW Berlin. I
            expect to complete that in 2022.
          </p>
        </div>
        <div
          className={aboutStyle.inner}
          style={{ backgroundImage: `url(${bewerbung})` }}
        ></div>
      </div>
      <div className={aboutStyle.section}>
        <h1>Skills</h1>
        <h2>&amp; Learinings</h2>
        <p>
          My main skills are CSS, HTML5 and SASS. Through my studies and in my
          own projects I also learn JavaScript, React and Java. My previous
          experiences, goals and projects are summarized under the respective
          languages.
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
            title="Static Website"
            active={active}
            setActive={setActive}
            content="
        1. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          />
          <Accordion
            title="Preset Development"
            active={active}
            setActive={setActive}
            content="
          2. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          />
          <Accordion
            title="Template Development"
            active={active}
            setActive={setActive}
            content="
          3. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          />
          <Accordion
            title="UX"
            active={active}
            setActive={setActive}
            content="
        4. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          />
        </div>
      </div>
    </Layout>
  )
}

export default About
