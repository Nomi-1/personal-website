import React from "react"
import "../styles/boilerplate.scss"

const Accordion = ({ title, active, setActive, content }) => {
  
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
        <div className="accordionInner"><p>{content}</p></div>
      </div>
    </div>
  )
}

export default Accordion
