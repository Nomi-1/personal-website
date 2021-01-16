import React from "react"
import "../styles/boilerplate.scss"

const Accordion = ({ title, active, setActive, content, link }) => {
  return (
    <div className="accordion">
      <div className={(active === title ? "active" : "") + " accordionTrigger"}>
        <button onClick={() => setActive(title)}>
          <div className="accordionInner">
            <p>{title}</p>
            <span>|||</span>
          </div>
        </button>
      </div>

      <div className={(active === title ? "active" : "") + " accordionContent"}>
       <div className="accordionInner">
          {content.split("\n").map((item, i) => {
            return (
              <p key={i}>{item}</p>
            )
          })}
          {link}
       </div>
      </div>
    </div>
  )
}

export default Accordion
