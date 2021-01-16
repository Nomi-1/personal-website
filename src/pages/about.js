import React, { useState } from "react"
import { Link } from "gatsby"
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
            content={ "The portfolio page was created with »gatsbyjs«. Besides Next.js, Hugo, Jekyll etc., Gatsby is a static site generator. Some generators are based on Go, however my goal is to learn React, so for this project I decided to use Gatsby. This page was created with the »Hello Starter« provided by Gatsby. In the beginning there were problems with the »npm-sass install«, but this could be solved well by installing SASS in general.\n \nThe handling and workaround was exciting. I learned to work with components and tried to replace JQuery applications like toggle behaviour with react commands.\n \nThrough graphql you have the possibility to output different content dynamically, which is super handy. For the blogposts I implemented Markdown, because further editing is easier with Markdown than with HTML. The slugs are created automatically based on the file title. When you create a new blog post (.md), everything is automatically added to the blog page and a new page is created.\nSASS was used for the style. It is generally easier to use than normal CSS.\n  \nProgramming languages: React & Sass" }
            link={ <p><br />You can learn more about this topic in my <Link to="/blog">Blog</Link>.</p> }
          />
          <Accordion
            title="Project: SASS"
            active={active}
            setActive={setActive}
            content={ "I have been working on various SASS projects for several years. The complexity is as different as the projects themselves. Even if the setup seems quite complex, it also makes sense to use SASS in all projects, also smaller projects. Because in summer, the time savings, achieved through nesting and mixin is immensely high. SASS for presets can become very complex. Since they build presets purely on variables. The parameters are assigned via the CMS." }
            link={ <p><br />You can learn more about this topic in my <Link to="/blog">Blog</Link>.</p> }
          />
          <Accordion
            title="Project: UX"
            active={active}
            setActive={setActive}
            content={ "In a team of four people we develop an app interface with the UX concept from »Contextual Design« by Karen Holtzblatt.\nThe concept idea arises from intensive follow up with the consumers »method of work« in this topic. We critically question which function the user needs.\nOnce the concept has been established, the team starts work on it. The interface concept goes through various steps and optimisation loops.\nBy critically questioning the usefulness of the app and the planned functions and features from step one, the final product will be user-friendly and not overloaded with functions, which makes it easy to use.\nThe interface is tested and optimised again and again during the development process, e.g. through paper prototyping.\n \nA detailed blog post on for this project is in planning."}
          />
          <Accordion
            title="Prospects and targets"
            active={active}
            setActive={setActive}
            content={ "My traget is to increase my React & JacaScript knowledge to a high level. In the long run, I would like to work in the frontend.\nThe next projects are in the app development area. In addition, a few Java-based projects will follow.\nThis website should also develop continuously: multi language is planned & a darkmode will be implimented.\nAlso, more blog articles on my various projects will follow."}
          />
        </div>
      </div>
    </Layout>
  )
}

export default About
