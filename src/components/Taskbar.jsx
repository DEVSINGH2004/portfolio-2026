import React from "react"
import "./Taskbar.css"

const Taskbar = () => {
  return (
    <div className="xp-taskbar">
      {/* Start Button */}
      <div className="start-button">
        <img src="/icons/xp-start.png" alt="Start" />
        <span>Start</span>
      </div>

      {/* Task buttons area (empty for now) */}
      <div className="taskbar-center">
        {/* future app buttons */}
      </div>

      {/* System tray */}
      <div className="taskbar-tray">
        <span className="clock">5:30 PM</span>
      </div>
    </div>
  )
}

export default Taskbar
