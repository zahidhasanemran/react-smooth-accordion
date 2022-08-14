import { useRef, useState } from "react"

const Accordion = ({ title, children }) => {
  const [activeClass, setActiveClass] = useState("")
  const [scrollHeight, setScrollHeight] = useState("0px")

  const conten = useRef("")

  const toggleAccordion = () => {
    setActiveClass(activeClass === "" ? "active" : "")
    setScrollHeight(
      activeClass === "" ? `${conten.current.scrollHeight}px` : "0px"
    )
  }

  return (
    <div className="accordion__section">
      <button className={`accordion ${activeClass}`} onClick={toggleAccordion}>
        <p className="accordion__title"> {title} </p>
        <p>
          {" "}
          {activeClass ? (
            <span className="icon">-</span>
          ) : (
            <span className="icon">+</span>
          )}{" "}
        </p>
      </button>
      <div
        ref={conten}
        style={{
          maxHeight: `${scrollHeight}`,
          overflowY: "auto",
        }}
        className="accordion__content"
      >
        <div className="accordion__text">{children}</div>
      </div>
    </div>
  )
}

export default Accordion
