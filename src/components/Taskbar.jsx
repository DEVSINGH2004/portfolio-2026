import React, { useEffect, useState } from "react"
import "./Taskbar.css"

const Taskbar = () => {
  const [time, setTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const formattedTime = now.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
      setTime(formattedTime)
    }

    updateTime() // initial call
    const interval = setInterval(updateTime, 30000) // update every 30s

    return () => clearInterval(interval) // cleanup
  }, [])

  return (
    <div className="xp-taskbar">
      {/* Start Button */}
      <div className="start-button">
        <img src="/icons/xp-start.png" alt="Start" />
        <span>Start</span>
      </div>

      {/* Center (future task buttons) */}
      <div className="taskbar-center" />

      {/* System Tray */}
      <div className="taskbar-tray">
        <span className="clock">{time}</span>
      </div>
    </div>
  )
}

export default Taskbar
