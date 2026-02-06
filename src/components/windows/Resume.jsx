import React from "react"
import { Rnd } from "react-rnd"
import "./Resume.css"

const Resume = ({ onClose }) => {
  return (
    <Rnd
      default={{
        x: 260,
        y: 140,
        width: 520,
        height: 600,
      }}
      minWidth={400}
      minHeight={500}
      bounds="window"
      dragHandleClassName="resume-header"
    >
      <div className="resume-window">
        {/* Header */}
        <div className="resume-header">
          <span>Resume.pdf</span>
          <button onClick={onClose}>✖</button>
        </div>

        {/* PDF iframe */}
        <div className="resume-content">
          <iframe
            src="/resume3.pdf#toolbar=0"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Resume PDF"
          />
        </div>
      </div>
    </Rnd>
  )
}

export default Resume
